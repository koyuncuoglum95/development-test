import './Card.scss'
import './Tablet.scss'
import './Iphone.scss'
import './Android.scss'
import StarRatings from 'react-star-ratings'


const Card = ({ cards, isProduct }) => {

  return  (
  <div className='card'>
    { isProduct ? (
      <div>
        <h2 className='price'>${cards.price}</h2>
        <p className='description'>{cards.description}</p>
        <div className='rating'>
        <StarRatings rating={cards.rating?.rate} starRatedColor="yellow"numberOfStars={5} starDimension="20px" starSpacing="5px"/>
        </div>
        <div className='count'>
        ({cards.rating?.count})
        </div>
        <button className='addBtn'>Add to Cart</button>
      </div>
    
    ): (
      <div></div>
    )}

  </div>
  )
}

export default Card