import React, { useEffect, useState } from "react";
import SideBarLeft from "../SideBarLeft/SideBarLeft";
import Sort from "../Sort/Sort";
import "antd/dist/antd.css";
import { Card, Rate } from "antd";
import data from "../../data";

import "./style.scss";

const Catalog: React.FC = (props: any) => {
  const [rate, setRate] = useState();
  const { state, getData, sortPrice } = props;
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  useEffect(() => {
    getData(data);
  }, []);

  return (
    <section className="catalog__wraper">
      <Sort sortPrice={sortPrice} />
      <div className='catalog__side-bar'>
        <SideBarLeft />
        <div className="catalog">
          {state.map((item: any) => (
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt={item.material} src={item.img} />}
            >
              <div className="card__price">
                <h3>{item.price}</h3>
                <p>{item.material.toUpperCase()}</p>
              </div>
              <p>{item.description}</p>
              <Rate tooltips={desc} value={item.rate} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
