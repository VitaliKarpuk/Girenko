import React, { useState } from "react";
import { connect } from 'react-redux';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Catalog from "./components/Catalog/Catalog";
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
import Slider from './components/Slider/Slider';
import { getData } from "./action/getData";
import { sortPrice } from './action/sortPrice';

// interface Item {
//   id: number;
//   name: string;
//   species: string;
//   description: string;
//   image: string;
//   audio: string;
// }

const App = (props: any) => {
  const [showForm, setShowForm] = useState(false)
  const { state, getData, sortPrice } = props;
  const handleIconTmpl = () => {
    setShowForm(!showForm)
  }
  return (
    <>
      <div className="wrapper">
        <Header />
        <Menu />
        <Slider />
        <Catalog state={state} getData={getData} sortPrice={sortPrice}/>
        <Footer />
        {
          showForm && <ContactForm />
        }
        <div className='icon_tmpl' onClick={handleIconTmpl}></div>
      </div>
    </>
  );
};

const mapStateToProps = (state:any) =>({
  state
})
export default connect(mapStateToProps, { getData, sortPrice })(App);
