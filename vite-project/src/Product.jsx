
function Product({name,price,isavailable}){
    
    return(
        <div>
            
            <p>product name{name}
            </p>
            <p>product price{price}</p>
            <p>{isavailable==true?"it is available":"not available"}</p>
        </div>
    )
}
export default Product