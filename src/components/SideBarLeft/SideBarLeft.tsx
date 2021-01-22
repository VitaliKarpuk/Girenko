import React from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";

const SideBarLeft = () => {
  const { SubMenu } = Menu;
  const arrSideBar = [
    {
      type: "Постельное белье",
      inType: [
        "Подростковое",
        "Детское в кроватку",
        "Полуторное",
        "Двучспальное",
        "Евро",
        "Семейное",
      ],
      key: 1,
    },
    {
      type: "Одеяло",
      inType: ["Зимнее", "Демисезонное"],
      key: 2,
    },
    {
      type: "Подушки",
      inType: ["50х70", "70х70", "Полуторное", "Ортопедические"],
      key: 3,
    },
    {
      type: "Наматрасники",
      key: 4,
    },
    {
      type: "Плед",
      key: 5,
    },
    {
      type: "Полотенца",
      key: 6,
    },
    {
      type: "Постельные пренодлежности",
      key: 7,
    },
  ];
  const handleClick = (e: any) => {
    console.log("click", e);
  };
  return (
    <Menu mode="inline" style={{ width: 256 }}>
      {arrSideBar.map((item) =>
        item.inType ? (
          <SubMenu
            key={`${item.key}`}
            title={
              <span>
                <span>{item.type}</span>
              </span>
            }
          >
            {item.inType.map((elem: any) => (
              <Menu.Item key={Math.random()}>{elem}</Menu.Item>
            ))}
          </SubMenu>
        ) : (
          <Menu.Item key={Math.random()}>
            {item.type}
          </Menu.Item>
        )
      )}
    </Menu>
  );
};

export default SideBarLeft;
