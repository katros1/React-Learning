import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchProducts } from "../reducers/addToStore"
import { addProduct, removeProduct } from "../reducers/addToCart"

const Products = () => {
    const product = useSelector((state) => state.stock.value);
    const addToCart = useSelector((state) => state.cart.product.length)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
  
console.log(product);

function cart (button) {
  if(button === "Add To Cart"){
    button = "Remove from cart";
  } else {
     button = "Add To Cart";
  }
    
}
    return (
        product.map((product) => {
            return (

                <div key={product.id} className="space-y-5 ... m-[30px] border-solid shadow-2xl border-2 rounded-[25px] ... p-[25px]">
                    <h4 className="text-2xl font-bold text-cyan-400 underline m-[30px]">{product.name}</h4>
                   <div className="ml-[50px]"> <img className="w-32 h-32 md:w-32 lg:w-48" src= {product.images[0]} alt="" /></div> 
                    <p className="text-sm font-medium text-gray-900 mt-[100px]">Price: {product.price} RWF</p>
                    <button class="rounded-full ... bg-cyan-400 justify-center ... text-xs h-[30px] w-[150px]" onClick={() => dispatch(addProduct(product.name))}>Add To Cart {addToCart}</button> <button class="rounded-full ... bg-red-400 justify-center ... text-xs h-[30px] w-[150px]" onClick={() => dispatch(removeProduct(product.name))}>Remove from Cart {addToCart}</button>
                </div>
            )
        })
    )
}
export default Products



// fetch('http://localhost:3000/api/v1/products/public')
//             .then(res => {
//                 return res.json();
//             })
//             .then(data => {
//                 let fetchedProducts = data.products;
//                 console.log(fetchedProducts)
//                 setProducts(fetchedProducts)
//             })
// () => {button = "Add To Cart" ? button = "Remove from cart":button = "Add To Cart"}