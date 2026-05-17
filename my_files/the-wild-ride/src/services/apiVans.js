import { CgEditBlackPoint } from 'react-icons/cg';
import supabase, { supabaseUrl } from './supabase';

export async function getVans() {
  const { data, error } = await supabase.from('vans').select('*');
  if (error) {
    console.error(error);
    throw new Error('vans could not be loaded :( ');
  }
  return data;
}

export async function createEditVan(newVan, id) {
  console.log('DEBUG - Co přichází do API:', { newVan, id });
  const hasImagePath = newVan.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newVan.image.name}`.replace('/', '');
  const imagePath = hasImagePath ? newVan.image : `${supabaseUrl}/storage/v1/object/public/vans-images/${imageName}`;

  //1. Create/Edit van
  let query = supabase.from('vans');

  //A - create
  if (!id) {
    query = query.insert([{ ...newVan, image: imagePath }]);
    console.log('Provádím CREATE s těmito daty:', { id, typeofId: typeof id, newVan });
  }

  //B - edit
  if (id) {
    query = query.update({ ...newVan, image: imagePath }).eq('id', id);
    console.log('Provádím EDIT s těmito daty:', { id, typeofId: typeof id, newVan });
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('van could not be created :(');
  }

  // 2. upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage.from('vans-images').upload(imageName, newVan.image);

  // 3. delete the cabin IF there was an error uploading image
  if (storageError) {
    await supabase.from('vans').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error('van image could not be uploaded and the van was not created :(');
  }

  return data;
}

export async function deleteVan(id) {
  try {
    const { data, error } = await supabase.from('vans').delete().eq('id', id);

    //1. error from supabase, i.e. RLS policy
    if (error) {
      console.error('supabase error:', error);
      throw new Error('vans could not be deleted');
    }

    return data;
  } catch (err) {
    //2. netowork error or wrong URL (fetch failure)
    console.error('network/system error:', err);
    // throw error again that useMutation can catch it too
    throw new Error(err.message || 'connection to supabase failed');
  }
}
