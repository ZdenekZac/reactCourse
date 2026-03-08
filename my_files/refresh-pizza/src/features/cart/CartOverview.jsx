import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CartOverview() {
  return (
    <div className='flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base bg-stone-800'>
      <p className='space-x-4 font-semibold text-stone-300 sm:space-x-6'>
        <span></span>
        <span></span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
