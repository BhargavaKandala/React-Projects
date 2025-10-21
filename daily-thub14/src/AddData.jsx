import React,{useContext, useState} from 'react';
// import { useState, useEffect } from "react"
// import Store from './Store';
// import { Link } from "react-router-dom"
// import { useContext } from 'react';
import StoreData from './StoreData';
import App from "./App"
function AddData() {
    const [name,setname] = useState("");
    const [brand,setBrand] = useState("");
    const [price,setPrice] = useState("");
    const [Image1Path, setImage1Path] = useState(null);
    const [arr,setArr] = useState([]);
    var {Last,setLast} = useContext(StoreData);
    const GetData = (event) => {
        // const file = event.target.files[0];
        // const path = URL.createObjectURL(file);
        // setImagePath(path);
        const file1 = event.target.files[0];
        const reader = new FileReader()
        reader.readAsDataURL(file1);
        reader.onload = () =>{
            setImage1Path(reader.result)
            // console.log(reader.result)
        }
    }
    const [x,setX] = useState([]);
    const final=(event)=>{
        event.preventDefault();
        // const x = [];
        setX( {
                'name':name,
                'brand':brand,
                'price':price,
                'image':Image1Path
            })
        setArr([...arr, x]);
        // console.log(x)
        console.log(arr);
        // setLast(arr)
    }
    return (
        <>
            <App />
            <form onSubmit={final}>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <label>Name:</label>
                        </td>
                        <td>
                            <input type='text' required onChange={(event)=>{setname(event.target.value),console.log(event.target.value)}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Brand:</label>
                        </td>
                        <td>
                            <input type='text' required onChange={(event)=>setBrand(event.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Price:</label>
                        </td>
                        <td>
                            <input type='text' required onChange={(event)=>setPrice(event.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Image:</label>
                        </td>
                        <td>
                            {/* <input type='file' required onChange={(event)=>setImage(event.target.files[0])}/> */}
                            <input type="file" onChange={(event) => GetData(event)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" />
                        </td>
                        <td>
                            <input type='reset' />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>

        </>
    );
}

export default AddData;