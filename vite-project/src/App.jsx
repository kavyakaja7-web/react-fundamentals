import Profile  from "./Profile.jsx"
import Product from "./Product.jsx"
function App() {
  const name="xxxxxx"
  const price=100
  const isavailable=true
   
  return (
    <div>
      <Product name={name} price={price} isavailable={isavailable}/>
    </div>
  )
}

export default App
