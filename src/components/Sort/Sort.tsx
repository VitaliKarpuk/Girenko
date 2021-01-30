import React from "react";
import { useDispatch } from "react-redux";
import { sortPrice } from "../../action/sortPrice";

import "./style.scss";

const Sort: React.FC = () => {
  const dispath = useDispatch();

  return (
    <div className='catalog__sort'>
      <span>Сортировка по:</span>
      <ul>
        <li onClick={() => dispath(sortPrice())}>Цене ↑</li>
        <li>Обновлению ↑</li>
        <li >Скидке ↑</li>
      </ul>
    </div>
  );
};

export default Sort;
