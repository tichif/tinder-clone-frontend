import { IconButton } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon className='header__icon' fontSize='large' />
      </IconButton>

      <img
        src='https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png'
        alt='tinder'
        className='header__logo'
      />

      <IconButton>
        <ForumIcon fontSize='large' className='header__icon' />
      </IconButton>
    </div>
  );
};

export default Header;
