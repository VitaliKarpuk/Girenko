import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { chooseMaterial } from '../../action/chooseMaterial';

import "./style.scss";

const Menu: React.FC = () => {
  const arrMenu = ["Главная", "Акции", "Доставка", "Новости", "Советы", "О продукции"];

  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName='categories_active-item'>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/promotions" activeClassName='categories_active-item'>
            Акции
          </NavLink>
        </li>
        <li>
          <NavLink to="/delivery" activeClassName='categories_active-item'>
            Доставка
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" activeClassName='categories_active-item'>
            Новости
          </NavLink>
        </li>
        <li>
          <NavLink to="/advice" activeClassName='categories_active-item'>
            Советы
          </NavLink>
        </li>
        <li>
          <NavLink to="/about_products" activeClassName='categories_active-item'>
            О продукции
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state: any) => ({
  state
})
export default connect(mapStateToProps, { chooseMaterial })(Menu);
