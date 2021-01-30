import React, { useState } from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Catalog from "./components/Catalog/Catalog";
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import Slider from './components/Slider/Slider';
import {
  Switch,
  Route,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { Pagination } from 'antd';

// interface Item {
//   id: number;
//   name: string;
//   species: string;
//   description: string;
//   image: string;
//   audio: string;
// }

const App = () => {
  const [showForm, setShowForm] = useState(false)
  const data = useSelector(state => state)

  const handleIconTmpl = () => {
    setShowForm(!showForm)
  }

  return (
    <>
      <div className="wrapper">
        <Header />
        <Menu />
        <Slider />
        <Switch>
          <Route exact path="/"><Catalog /></Route>
          <Route exact path="/promotions"> <h1>promotions</h1></Route>
          <Route exact path="/delivery"> <h1>delivery</h1></Route>
          <Route exact path="/news"> <h1>news</h1></Route>
          <Route exact path="/advice"> <h1>advice</h1></Route>
          <Route exact path="/about_products"> <h1>about_products</h1></Route>
        </Switch>
        <Pagination defaultCurrent={6} total={500} />
        <Footer />
        {
          showForm && <ContactForm />
        }
        <div className='icon_tmpl' onClick={handleIconTmpl}></div>
      </div>
    </>
  );
};

export default App;
