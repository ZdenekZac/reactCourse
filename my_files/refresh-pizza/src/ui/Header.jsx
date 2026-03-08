import Username from '../user/Username';
import { Link } from 'react-router-dom';
import SearchOrder from '../order/SearchOrder';

function Header() {
  return (
    <header className=' flex items-center justify-between bg-green-500 text-2xl '>
      <Link to='/' className='tracking-widest'>
        Refresh Pizza
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
