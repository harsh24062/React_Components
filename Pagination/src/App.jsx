import { useEffect, useState } from "react"
import "./App.css"
import ProductCard from "./Components/ProductCard"

function App() {

  const [products,setProducts] = useState([])

  useEffect(()=>{
   fetch("https://dummyjson.com/products?limit=500").then(async(res)=>{
    const json = await res.json()
    setProducts(json.products)
   })
  },[])

  return products.length==0?<div className="App"><h1>NO PRODUCT FOUND</h1></div>:(
    <div className="App">
      <h1>Paginatiom</h1>
      {products.map((product,index)=>(<ProductCard key={index} title={product.title} description={product.description} price={product.price} thumbnail={product.thumbnail}/>))}
    </div>
  )
}

export default App
