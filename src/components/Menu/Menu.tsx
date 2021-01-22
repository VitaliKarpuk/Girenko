import React from "react";
import { connect } from 'react-redux';
import { chooseMaterial } from '../../action/chooseMaterial';

import "./style.scss";

const Menu: React.FC = (props:any) => {
  const { chooseMaterial } = props;
  const arrMenu = ["Главная", "Акции", "Доставка", "Новости", "Советы", "О продукции"];

  const styleLi = {
    width: `${100 / arrMenu.length}%`,
  };

  return (
    <nav>
      <ul>
        {arrMenu.map((item) => (
          <li style={styleLi} onClick={(e) => chooseMaterial(e.currentTarget.innerText)}>{item.toUpperCase()}</li>
        ))}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state:any) => ({
  state
})
export default connect(mapStateToProps, { chooseMaterial })(Menu);
