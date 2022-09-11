import ProductList from '../ProductList/ProductList';


// Used map function to show API values in the website

const Product = ({ products, onClick, isIndex, indexClick, isProduct }) => {
  return (
    <div>
      {products.map((product, index) => (
      <div key={index}>
        <ProductList product={product} onClick={onClick} isIndex={isIndex} indexClick={indexClick} isProduct={isProduct} index={index}/>
        </div>
      ))}
    </div>
  )
}

export default Product