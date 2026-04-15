import supabase, { supabaseUrl } from './supabase';

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

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replace('/', '');
  const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create/Edit cabin
  let query = supabase.from('cabins');

  // A) CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) EDIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('cabin could not be created :(');
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage.from('cabin-images').upload(imageName, newCabin.image);

  // 3. Delete the cabin IF there was an error uploading image
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error('cabin image could not be uploaded and the cabin was not created :(');
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
