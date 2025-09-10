import React from "react";
const Myfunction = (Props) => {
    
    return (
        <>
            <div className="card">
                <div className="info">
                    <div className="price">Price: {Props.Data.Price}/-</div>
                    <div className="brand">Brand: {Props.Data.Brand}</div>
                </div>
            </div>
        </>
    );
};
export default Myfunction;