import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar(){
  return(
    <div className='navbar'>
      <div className='d-flex container navcontent'>
        <h2 className='logo'>TooFy</h2>
        <ul className='nav'>
          <li className='nav-item'><Link className='Link p-0' to='/'>Home</Link></li>
          <li className='nav-item'><Link className='Link p-0' to='/About'>About</Link></li>
          <li className='nav-item'><Link className='Link p-0' to='/profile'>Profile</Link></li>
          <li className='nav-item'><Link className='Link p-0' to='/lesson'>Lesson</Link></li>
        </ul>
      </div>
    </div>
    )
}

export default Navbar;