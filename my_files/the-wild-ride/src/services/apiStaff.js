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

  // A) - creating
  if (!id) {
    query = query.insert([{ ...newStaff }]);
    console.log('CREATING: ', { id, typeofId: typeof id, newStaff });
  }

  // B) - editing
  if (id) {
    query = query.update({ ...newStaff }).eq('id', id);
    console.log('edit s temito daty:', { id, typeofId: typeof id, newStaff });
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('cabin could not be created :(');
  }

  console.log(data);
  return data;
}

export async function deleteStaff(id) {
  try {
    const { data, error } = await supabase.from('staff').delete().eq('id', id);

    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Staff could not be loaded');
    }
    return data;
  } catch (err) {
    console.error('Network/system error!', err);
    throw new Error(err.message || 'Connection to Supabase failed');
  }
}
