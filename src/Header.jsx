import React from 'react';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Avatar from '@mui/material/Avatar';

function Header() {
return <div className='header'>
<h1><LightbulbIcon/>Todo </h1> 
<div className='Avatar'><Avatar alt="Remy Sharp" src="./Avatar image .jpg" /></div>
</div>
}

export default Header;