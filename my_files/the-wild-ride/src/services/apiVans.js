import supabase, { supabaseUrl } from './supabase';

export async function getVans() {
  const { data, error } = await supabase.from('vans').select('*');
  console.log(data);
  return data;
}

export function getVans2() {
  const test = {
    number: 99,
    name: 'zac',
  };
  console.log(test);
  return test;
}
