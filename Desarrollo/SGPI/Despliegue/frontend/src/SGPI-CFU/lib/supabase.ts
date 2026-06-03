import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-url.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: {
    headers: {
      get Authorization() {
        if (typeof window !== 'undefined') {
          const token = localStorage.getItem('sgpi_access_token');
          if (token) {
            return `Bearer ${token}`;
          }
        }
        return `Bearer ${supabaseAnonKey}`;
      }
    }
  }
});
