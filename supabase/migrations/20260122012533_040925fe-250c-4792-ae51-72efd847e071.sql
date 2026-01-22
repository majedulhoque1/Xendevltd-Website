-- Drop the existing restrictive INSERT policy
DROP POLICY IF EXISTS "Anyone can insert leads" ON public.leads;

-- Create a new PERMISSIVE INSERT policy for public access
CREATE POLICY "Anyone can insert leads" 
ON public.leads 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);