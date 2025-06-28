import "../App.css"

const ProductCard = ({title,description,price,thumbnail})=>{
  return <div className="product-card">
      <h1>{title}</h1>
      <img src={thumbnail} alt="Product Image" className="product-img"/>
      <h3>{description}</h3>
      <h1>${price}</h1>
  </div>
}

export default ProductCard