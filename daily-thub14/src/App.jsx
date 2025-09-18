import { useState } from 'react'
import viteLogo from '/vite.svg'
import MyImage from './assets/react.svg';
import CardComponent from './Myfunction.jsx';
import './App.css'
import Component from './Component.jsx';

function App() {
  var MyList = [
        { "Image":MyImage, "Price":"2999", "Brand":"Ajio" },
        { "Image":MyImage, "Price":"2795", "Brand":"Rare Rabbit" },
        { "Image":MyImage, "Price":"5390", "Brand":"Puma" },
        { "Image":MyImage, "Price":"7800", "Brand":"Adidas" }
    ]

    return(
      // <div className="parent">
      //   {
      //     MyList.map(ele=>{
      //       return <CardComponent Data = {ele}/>
      //     })
      //   }
      // </div>
      <Component/>
    );
}

export default App;