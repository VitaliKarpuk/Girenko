import React from "react";

import "./style.scss";

const Sort: React.FC = (props:any) => {
  const { sortPrice } = props;
  const arrSort = ["", "Обновлению ↑", "Скидке ↑"];

  return (
    <div className='catalog__sort'>
      <span>Сортировка по:</span>
      <ul>
        <li onClick={sortPrice}>Цене ↑</li>
        <li>Обновлению ↑</li>
        <li >Скидке ↑</li>
      </ul>
    </div>
  );
};

export default Sort;
