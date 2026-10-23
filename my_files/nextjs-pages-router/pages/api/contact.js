import { supabase } from '@/lib/supabase';

export default async function handler(req, res) {
  if (req.method !== 'POST')
    return res.status(405).json({
      success: false,
      message: 'please make a POST request',
    });

  const contactData = JSON.parse(req.body);

  const { error } = await supabase.from('contact').insert([contactData]);
  if (error)
    res.status(500).json({
      success: false,
      message: 'something went wrong...',
    });

  // Success message
  res.status(200).json({
    success: true,
    message: 'thanks for the message...we will be in touch soon :) ',
  });
}
