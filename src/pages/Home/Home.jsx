import { useEffect, useState } from 'react'
import Product from '../../components/Product/Product'
import Card from '../../components/Card/Card'
import './Home.scss'

const Home = () => {
    const [ products, setProducts ] = useState([]);
    const [ cards, setCards ] = useState([]);
    const [ isProduct, setIsProduct ] = useState(false);
    const [ isIndex, setIsIndex ] = useState(null);



    // showDetails function finds the product based on id 
    // show the detail of the product like its price, description and ratings.

    const showDetails = (product) => {
        const item = products.find((p) => p.id === product.id);
        setCards(item); 
        setIsProduct(!isProduct)
    }

    // finds index the position of each product index and store into isIndex state
    // help us to change the color of arrow button the user clicked one by one 
    // prevents all arrow button from changing their colors at the same time in map function
    const indexClick = (i) => {
        setIsIndex(i)
    }


    // Fetched the product api from following uri by using both useEffect and fetch method. 
    // useEffect method runs the function automatically as soon as the app is rendered.

    useEffect(() => {
        const url = "https://fakestoreapi.com/products?limit=5";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setProducts(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
  },[])

  return (
    <div className='home'>
        <h1>NUVOLUM</h1>
        <p>Created with only the highest quality service in mind, this brand is driven by its values of excellence, ingenuity and teamwork.</p>
        <p>Created as an extension to the world's leading ecommerce platform, this brand has been built for global success,</p>
        <p>simplifying the process for both consumers and retailers alike.</p>

        <Product products={products} onClick={showDetails} indexClick={indexClick} isIndex={isIndex} isProduct={isProduct}/>
        <Card cards={cards} isProduct={isProduct}/>

        
    </div>
  )
}

export default Home