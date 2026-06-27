import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseUrl = 'https://pecjukxstcvxsfrqznbn.supabase.co/rest/v1/'
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_PUBLIC_KEY

if (!supabaseKey) {
  throw new Error('Missing Supabase public key in environment')
}

export const supabase = createClient(supabaseUrl, supabaseKey)