import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';

import './style.scss'

const Header: React.FC = () => {
  const { Search } = Input;
  return(
    <header>
      <h1>GOOD<span>NIGHT</span></h1>
      <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
      <a href="tel:+375297777777">+37529-77-77-7777</a>
      <div className='header__basket'></div>
    </header>
  )
}

export default Header;