const products = [
    {title: "Apple", isFruit: true, id: '1'},
    {title: "Banana", isFruit: true, id: '2'},
    {title: "Cabbage", isFruit: false, id: '3'}
];

export default function ListRendering(){
    const listItems = products.map(product =>
        <li 
            key={product.id}
            style={{color: product.isFruit ? 'green' : 'magenta'}}
        >
            Item: {product.title},
            ID: {product.id}.
        </li>
    )

    return (
        <>
            <ul>{listItems}</ul>
        </>
    )
}   