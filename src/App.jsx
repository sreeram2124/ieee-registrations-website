import React from 'react';
import './App.css'

import './firebase/firebaseInit';
import PdfGeneratorButton from './utils/PdfGeneratorButton';

import MyNavbar from "./components/MyNavbar";
import MyHero from "./components/MyHero";
import MyStatistics from "./components/MyStatistics";
import MyBanner from "./components/MyBanner";
import SimpleForm from "./components/SimpleForm";
import MyFooter from "./components/MyFooter";

function App() {

  return (
    <>

      <MyNavbar />
      <MyHero />
      <MyStatistics />
      <MyBanner />
      <SimpleForm />
      <MyFooter />

    </>
  )
}

export default App
