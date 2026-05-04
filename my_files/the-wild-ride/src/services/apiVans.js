import { CgEditBlackPoint } from 'react-icons/cg';
import supabase, { supabaseUrl } from './supabase';

export async function getVans() {
  const { data, error } = await supabase.from('vans').select('*');
  if (error) {
    console.error(error);
    throw new Error('cabins could not be loaded :( ');
  }
  return data;
}

export async function createEditVan(newVan, id) {
  const hasImagePath = newVan.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newVan.image.name}`.replace('/', '');
  const imagePath = hasImagePath
    ? newVan.image
    : `${supabaseUrl}/storage/v1/object/public/van-images/${imageName}`;

  //1. Create/Edit van
  let query = supabase.from('vans');

  //A - create
  if (!id) query = query.insert([{ ...newVan, image: imagePath }]);

  //B - edit
  if (id) query = query.update({ ...newVan, image: imagePath }).eq('id', id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('cabin could not be created :(');
  }

  // 2. upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from('vans-images')
    .upload(imageName, newVan.image);

  // 3. delete the cabin IF there was an error uploading image
  if (storageError) {
    await supabase.from('vans').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error(
      'cabin image could not be uploaded and the cabin was not created :('
    );
  }

  return data;
}

export async function deleteCabin(id) {
  try {
    const { data, error } = await supabase.from('cabins').delete().eq('id', id);

    //1. error from supabase, i.e. RLS policy
    if (error) {
      console.error('supabase error:', error);
      throw new Error('Cabins could not be deleted');
    }

    return data;
  } catch (err) {
    //2. netowork error or wrong URL (fetch failure)
    console.error('network/system error:', err);
    // throw error again that useMutation can catch it too
    throw new Error(err.message || 'connection to supabase failed');
  }
}
