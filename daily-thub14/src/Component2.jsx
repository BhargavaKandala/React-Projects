import { useEffect, useState } from "react";
import Image from './assets/react.svg';
import './Component2.css'

function App() {
  const allData = [
  "Apple iPhone 15 Pro Max",
  "Samsung Galaxy S24 Ultra",
  "OnePlus 12 5G",
  "Xiaomi Redmi Note 13 Pro",
  "Realme Narzo 60x",
  "Google Pixel 8 Pro",
  "Vivo X100 Pro",
  "Oppo Reno 11 Pro",
  "iQOO 12 5G",
]
  const [data, setData] = useState (allData);
  const [userData, setUserData] = useState("");

  const userQuery = (event) => {
    setUserData(event.target.value);
    console.log(event.target.value);
  }
  useEffect(()=>{
    if(userData!=""){
       let arr = allData.filter((ele) =>
        ele.toLowerCase().includes(userData.toLowerCase())
      );
      setData(arr)
    }
    else{
      setData(allData)
    }
  }, [userData])
  return (
    <>
    <div className="parent">
    <div className="searching">
        <input type="text" placeholder="Search..." onChange={userQuery}/>
    </div>
      <div className="childs">
      {
        data.map((ele,idx)=>{
          return <div className="child">{ele}</div>
        })
      }
      </div>
    </div>
    </>
  );
}
export default App;