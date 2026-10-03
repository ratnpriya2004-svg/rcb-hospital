const SUPABASE_URL = "https://pzmohyhcatrcjrjtlbyv.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6bW9oeWhjYXRyY2pyanRsYnl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEwMjA2ODAsImV4cCI6MjEwNjU5NjY4MH0.BYJ_CeZqU9F2nwrr1Z1i-cD3pCI69Lz-V1JkM3T6fI8";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);