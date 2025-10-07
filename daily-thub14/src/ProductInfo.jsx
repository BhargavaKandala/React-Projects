import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import IMG from "./assets/react.svg";

export default function ProductInfo() {

    const Data = [
        {
            "Brand": "US- Polo",
            "Price": 24000,
            "ID" : 1
        },
        {
            "Brand": "US- Polo",
            "Price": 24000,
            "ID" : 1
        },
    ]
    const ReceivedData = useParams();
    console.log(ReceivedData);
    const [mycard, setmycard] = useState(null);
    useEffect(() => {
        Data.filter(ele => {
            if(ele.ID == parseInt(ReceivedData.ID)){
                setmycard(ele);
            }
        })
    }, []);

  return (
    <div>ProductInfo</div>
  )
}
