import './ProductList.scss'


const ProductList = ({ product, onClick, isIndex, isProduct, indexClick, index }) => {
 
  // When clicking button isIndex becomes position number because of indexClick function from Home.js
  // index comes from its api position as well
  // After clicking button isProduct value becomes True. if isProduct true and isIndex is equal to index, then className is productBtn2 else productBtn
  return (
    <div>
      <br />
      <div className='content'>
        <img src={product.image} alt='product_img' className='img_product'/>
        <h4 className='title'>{product.title}</h4>
        <button className={isIndex === index && isProduct ? 'productBtn2': 'productBtn'} onClick={() => {
          onClick(product)
          indexClick(index)
        }}>
          {isIndex === index && isProduct ? (
          <span>&#x27A1;</span>
          ): (
          <span>&#x2B05;</span>
          )}
        </button>
      </div>
    </div>
    
  )
}

export default ProductList