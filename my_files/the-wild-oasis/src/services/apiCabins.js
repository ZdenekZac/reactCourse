import supabase from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('cabins could not be loaded :(');
  }

  return data;
}
// ORIGINAL OD JONASE
// export async function deleteCabin(id) {
//   const { data, error } = await supabase.from('cabins').delete().eq('id', id);

//   if (error) {
//     console.error(error);
//     throw new Error('cabins could not be deleted :(');
//   }
// }

export async function createCabin(newCabin) {
  const { data, error } = await supabase.from('cabins').insert([newCabin]);
  //.select();

  if (error) {
    console.error(error);
    throw new Error('cabins could not be created :(');
  }

  return data;
}

export async function deleteCabin(id) {
  try {
    const { data, error } = await supabase.from('cabins').delete().eq('id', id);

    // 1. Chyba, kterou vrátí Supabase (např. porušení pravidel RLS)
    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Cabins could not be deleted');
    }

    return data;
  } catch (err) {
    // 2. Chyba sítě nebo špatná URL (Fetch failure)
    console.error('Network/System error:', err);
    // Vyhodíme chybu znovu, aby ji zachytil useMutation
    throw new Error(err.message || 'Connection to Supabase failed');
  }
}
