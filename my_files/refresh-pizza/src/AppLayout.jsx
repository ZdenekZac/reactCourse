import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import CreateOrder from './CreateOrder';
import { useSelector } from 'react-redux';

function AppLayout() {
  const username = useSelector((state) => state.user.username);
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === 'loading';

  return (
    <div>
      <header className=' flex items-center justify-between bg-stone-500 text-2xl '>
        <div className='invisible'>Logo/Empty</div>
        <p className='tracking-widest'>HEADER</p>
        <p className='text-sm font-semibold mr-8'>{username}</p>
      </header>
      <Outlet />
    </div>
  );
}

export default AppLayout;
