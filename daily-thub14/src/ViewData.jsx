import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import App from './App'
import './Cards2.css'

function ViewData() {
    return (
        <>
            <App />
            <div className="card">
                <div className="image">
                    <img src='' height="60px"/>
                </div>
                <div className="price">Price : </div>
                <div className="brand">Brand : </div>
            </div>
        </>
    );
}

export default ViewData;