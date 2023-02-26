import './Header.css';
import logo from '../../../../static/paw-logo.png'

function Header() {

  return (
    <div className='header-container'>
        <div className='title-container'>
          <div>
            CatGPT
            <img src={logo} alt="paw" className='header-logo'></img>
          </div>
        </div>
    </div>
  );
}

export default Header;
