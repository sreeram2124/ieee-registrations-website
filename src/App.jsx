import React from 'react';
import './App.css'

import MyNavbar from "./components/MyNavbar";
import MyHero from "./components/MyHero";
import MyStatistics from "./components/MyStatistics";
import MyBanner from "./components/MyBanner";
import MyForm from "./components/MyForm";
import MyFooter from "./components/MyFooter";

function App() {

  return (
    <>

      <MyNavbar />
      <MyHero />
      <MyStatistics />
      <MyBanner />
      <MyForm />
      <MyFooter />

    </>
  )
}

export default App
