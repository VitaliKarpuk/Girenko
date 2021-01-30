import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBarLeft from "../SideBarLeft/SideBarLeft";
import Sort from "../Sort/Sort";
import "antd/dist/antd.css";
import { Card, Rate, Spin } from "antd";
import requesData from "../../action/requestData";

import "./style.scss";

const Catalog: React.FC = () => {
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const dispatch = useDispatch()
  const data = useSelector(state => state)

  useEffect(() => {
    dispatch(requesData())
  }, [])
  console.log(data);


  return (
    <section className="catalog__wraper">
      <Sort />
      <div className='catalog__side-bar'>
        <SideBarLeft />
        <div className="catalog">
          {data[0] ? data[0].map((item: any) => (
            <Card
              key={item.sys.id}
              hoverable
              style={{ width: 240 }}
              cover={<img alt={item.fields.material.content[0].content[0].value} src={item.fields.img[0].fields.file.url} />}
            >
              <div className="card__price">
                <h3>{item.fields.price.content[0].content[0].value}</h3>
                <p>{item.fields.material.content[0].content[0].value}</p>
              </div>
              <p>{item.description}</p>
              <Rate tooltips={desc} value={item.fields.rate} />
            </Card>
          )) : <Spin />}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
