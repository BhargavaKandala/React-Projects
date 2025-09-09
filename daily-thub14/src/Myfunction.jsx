import React from 'react';

export default function Myfunction() {
    const listItems = [
        {
            "id": 1,
            "brand": "USPA",
            "Price": 2500
        }, {
            "id": 2,
            "brand": "Ajio",
            "Price": 3200
        }, {
            "id": 3,
            "brand": "Rare Rabbit",
            "Price": 5400
        }
    ];

    return (
        <>
            <ol>
                {
                    listItems.map((ele) => (
                        <li key={ele.id}>
                            <h1>Price: {ele.Price}</h1>
                            Brand: {ele.brand}
                        </li>
                    ))
                }
            </ol>
        </>
    );
}