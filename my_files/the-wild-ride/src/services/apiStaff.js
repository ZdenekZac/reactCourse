import supabase from './supabase';

export async function getStaff() {
  const { data, error } = await supabase.from('staff').select('*');
  console.log(data);

  if (error) {
    console.error(error);
    throw new Error('staff could not be loaded :(');
  }

  return data;
}
