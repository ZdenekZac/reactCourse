export default async function handler(req, res) {
  if (req.method !== 'POST')
    return res.status(405).json({
      success: false,
      message: 'please make a POST request',
    });

  const contactData = {
    fullName: 'jonas',
    email: 'test',
    subjecct: 'booking',
    message: 'hey',
  };

  const { error } = await supabase.from('contact').insert([contactData]);
  if (error)
    res.status(500).json({
      succes: false,
      message: 'something went wrong...',
    });

  // Success message
  res.status(200).json({
    succes: true,
    message: 'thanks for the message...',
  });
}
