import supabase from './supabase';

export async function getStaff() {
  const { data, error } = await supabase.from('staff').select('*');

  if (error) {
    console.error(error);
    throw new Error('staff could not be loaded :(');
  }

  return data;
}

export async function createEditStaff(newStaff, id) {
  console.log('newStaff, id --> ', newStaff, id);
  let query = supabase.from('staff');

  console.log(query);
}
