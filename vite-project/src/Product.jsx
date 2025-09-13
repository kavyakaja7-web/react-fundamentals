import "./Product.css"

function Product(product){

    const titlestyle={
        fontsize: "30px",
        fontweight: "bold",
        color:"blue"
    }
    
    return(
        <div className="container">
            
            <p className="name">product name:{product.name}
            </p>
            <p className="price">product price:{product.price}</p>
            <p>{product.isavailable==true?<p className="stock">"in stock"</p>:<p className="stock2">"out of stock"</p>}</p>
        
        </div>
    )
}
export default Product