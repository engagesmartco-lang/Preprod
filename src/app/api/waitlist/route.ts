import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { sendWaitlistConfirmation } from '@/lib/resend'

export async function POST(request: NextRequest) {
  try {
    const { email, source = 'website' } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const { data: existingEntry, error: checkError } = await supabaseAdmin
      .from('waitlist')
      .select('email')
      .eq('email', email.toLowerCase())
      .single()

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Database check error:', checkError)
      return NextResponse.json(
        { error: 'Database error occurred' },
        { status: 500 }
      )
    }

    if (existingEntry) {
      return NextResponse.json(
        { error: 'Email already registered for waitlist' },
        { status: 409 }
      )
    }

    // Insert new waitlist entry
    const { data: newEntry, error: insertError } = await supabaseAdmin
      .from('waitlist')
      .insert([
        {
          email: email.toLowerCase(),
          source,
          status: 'pending'
        }
      ])
      .select()
      .single()

    if (insertError) {
      console.error('Database insert error:', insertError)
      return NextResponse.json(
        { error: 'Failed to register for waitlist' },
        { status: 500 }
      )
    }

    // Send confirmation email
    try {
      await sendWaitlistConfirmation(email)
      
      // Update status to confirmed
      await supabaseAdmin
        .from('waitlist')
        .update({ status: 'confirmed' })
        .eq('id', newEntry.id)
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // Don't fail the request if email fails, just log it
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully joined waitlist!',
        data: { id: newEntry.id, email: newEntry.email }
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Waitlist signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('waitlist')
      .select('id, email, created_at, source, status')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Database fetch error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch waitlist' },
        { status: 500 }
      )
    }

    return NextResponse.json({ data })
  } catch (error) {
    console.error('Waitlist fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
