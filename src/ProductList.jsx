import React, { useState,useEffect } from 'react';
import './ProductList.css'
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CreateSlice';
function ProductList(props) {
    const [showCart, setShowCart] = useState(false); 
    const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page
    const [cart, setCart] = useState([]); // State to store the items added to the cart
    const dispatch = useDispatch();
    const cartItems=useSelector(state => state.cart.items);
    console.log(cartItems);
    // setCart(cartItems);
    useEffect(() => {
        
    }, []);
    const alreadyInCart = (itemName) => {
        return cartItems.some((item) => item.name === itemName);
    }
    const handleAddToCart = (item) => {
        console.log("clicked");
        dispatch(addItem(item));
    }
    const totalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }
    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Purifies the air and has healing properties for skin.",
                    cost: "$14"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                },
                {
                    name: "Hyacinth",
                    image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
                    description: "Hyacinth is a beautiful flowering plant known for its fragrant.",
                    cost: "$22"
                }
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                {
                    name: "oregano",
                    image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
                    description: "The oregano plants contains compounds that can deter certain insects.",
                    cost: "$10"
                },
                {
                    name: "Catnip",
                    image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
                    description: "Repels mosquitoes and attracts cats.",
                    cost: "$13"
                }
            ]
        }
    ];
   const styleObj={
    backgroundColor: '#fa7c2e',
    color: '#fff!important',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignIems: 'center',
    fontSize: '20px',
   }
   const styleObjUl={
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
   }
   const styleA={
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
   }
   const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true); // Set showCart to true when cart icon is clicked
};
const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
    setShowCart(false); // Hide the cart when navigating to About Us
};

   const handleContinueShopping = (e) => {
    console.log("clicked");
    e.preventDefault();
    setShowCart(false);
  };
    return (
        <div>
             <div className="navbar" style={styleObj}>
            <div className="tag">
               <div style={{cursor:"pointer"}} onClick={props.toLanding} className="luxury">
               <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
               <a   style={{textDecoration:'none'}}>
                        <div>
                    <h3 style={{color:'white'}}>  Evergreen Nursery</h3>
                    <i style={{color:'white'}}>  Where Your Gardening Dreams Take Root</i>
                    </div>
                    </a>
                </div>
              
            </div>
            <div style={styleObjUl}>
                
                <div> <a href="#" onClick={(e)=>handlePlantsClick(e)} style={styleA}>   Plants</a></div>
                <div> <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}><h1 className='cart'><label style={{zIndex:1,position:"fixed",fontSize:"1.5rem",cursor:"pointer"}}>{totalItems()}</label><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">0<rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path></svg></h1></a></div>
            </div>
        </div>
        {!showCart? (
        <div className="product-grid">
            <br></br>
            {plantsArray.map((item)=><div className='mainCategoryDiv'> <h1>{item.category}</h1> 
            <div className="product-list">
            {item.plants.map((plant)=>
                <div className='product-card'>
                    <img className='product-image' src={plant.image} alt={plant.name} />
                    <h2>{plant.name}</h2>
                    <p>{plant.description}</p>
                    <p>{plant.cost}</p>
                    <button style={{backgroundColor:alreadyInCart(plant.name)?"gray":"#hsl(23, 95%, 58%)"}} disabled={alreadyInCart(plant.name)? true:false} onClick={()=>handleAddToCart({name:plant.name,cost:plant.cost,image:plant.image})} className='product-button'>Add to Cart</button>
                </div>)}
                 </div>
            </div>)}


        </div>
 ) :  (
    <CartItem onContinueShopping={handleContinueShopping}/>
)}
    </div>
    );
}

export default ProductList;
