import React, { useState } from "react";
import './Component.css';

export default function Component() {
    const [items, setItems] = useState([]);

    const addItem = () => {
        const newId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1; 
        setItems([
            ...items,
            { id: newId, name: `${newId}. Item` }
        ]);
    };
    const subItem = () => {
        setItems(items.slice(0, -1));
    }

    return (
        <div className="container">
            <div className="button">
                <button onClick={addItem}>Add Item</button>
                <button onClick={subItem}>Delete Items</button>
                <button onClick={() => setItems([])}>Clear Items</button>
            </div>
            <div className="item-list">
                {items.map(item => (
                    <div key={item.id} className="item">
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
}