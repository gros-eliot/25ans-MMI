import { createClient } from "@supabase/supabase-js";
import { ref } from "@vue/reactivity";

const supabaseUrl = 'https://bmbbntzjmklxagqeogkv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtYmJudHpqbWtseGFncWVvZ2t2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU2MTMzMjIsImV4cCI6MTk4MTE4OTMyMn0.qTXOj1jDqK3_glsmY5HfOI86LSvfErjohHJjO974Ej8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


globalThis.supabase = supabase;


