const SUPABASE_URL = 'https://yislfvrkwpjiczzecuqj.supabase.co';
const SUPABASE_KEY = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlpc2xmdnJrd3BqaWN6emVjdXFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY1Mzk3OTksImV4cCI6MTk3MjExNTc5OX0.Fh29wTkKWCYkJ-QvPPF5y_4W06s1yyLOqQlz9umNIfs';

export const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
