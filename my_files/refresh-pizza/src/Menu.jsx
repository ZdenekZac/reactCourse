import { useLoaderData } from 'react-router-dom';
import React from 'react';

function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul className='divide-y divide-stone-200 px-2'>
      {menu.map((pizza) => (
        <li key={pizza.id} alt={pizza.name} className='h-24 flex gap-4 py-2'>
          <img
            src={pizza.imageUrl}
            alt={pizza.name}
            className={`h-24 ${pizza.soldOut ? 'opacity-70 grayscale' : ''} flex`}
          />
          <div className='mt-auto flex items-center justify-between'>
            {!pizza.soldOut ? (
              <p className='text-sm mr-8'>{pizza.unitPrice} €</p>
            ) : (
              <p className='text-sm font-medium uppercase text-stone-500 mr-8'>Sold out</p>
            )}

            {!pizza.soldOut && <button className='button text-xs py-1.5 px-3 md:px-4 md:py-2'>Add to cart</button>}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
