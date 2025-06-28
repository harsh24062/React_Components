import { useEffect, useState } from "react"
import "./App.css"
import ProductCard from "./Components/ProductCard"

function App() {

  const [products,setProducts] = useState([])
  const [currentPage,setCurrentPage] = useState(0)

  const PAGE_SIZE = 10
  const totalProduct = products.length
  const noOfPages = Math.ceil(totalProduct/PAGE_SIZE)
  const start = currentPage * PAGE_SIZE
  const end = Math.min(start + PAGE_SIZE,totalProduct)

  useEffect(()=>{
   fetch("https://dummyjson.com/products?limit=500").then(async(res)=>{
    const json = await res.json()
    setProducts(json.products)
   })
  },[])

  const handlePageChange = (i) =>{
    setCurrentPage(i)
  }

  return products.length==0?<div className="App"><h1>NO PRODUCT FOUND</h1></div>:(
    <div className="App">
      <h1>Paginatiom</h1>
      <div className="pagination-container">
        {[...Array(noOfPages).keys()].map(i=>(<span 
         className={"page-number " + (i===currentPage?"active":"")}
         key={i}
         onClick={()=>handlePageChange(i)}>
          {i}
          </span>))}
      </div>
      <div className="products-container">
       {products.slice(start,end).map((product,index)=>(<ProductCard key={index} title={product.title} description={product.description} price={product.price} thumbnail={product.thumbnail}/>))}
     </div>
    </div>
  )
}

export default App
