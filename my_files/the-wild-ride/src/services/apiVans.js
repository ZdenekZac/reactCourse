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
  const imagePath = hasImagePath ? newVan.image : `${supabaseUrl}/storage/v1/object/public/van-images/${imageName}`;

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
}
