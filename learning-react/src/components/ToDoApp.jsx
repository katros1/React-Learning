import Products from '@/components/ProductsList.jsx'
import { addProduct } from '../reducers/addToCart';

const cart = useSelector((state) => state.cart.product.length)
const TodoApp = () => {
  return (
    <>
      <nav className="bg-cyan-400 h-[70px] flex justify-center ...">
        <div className="mt-[25px] font-bold text-white text-2xl font-mono">  DESTRUCTORS </div>
        <div className='text-white absolute top-[28px] left-[805px]' >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </div>
      </nav>
      <div className='text-cyan-500 absolute top-[100px] right-[55px]' >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          <span className='bg-red-500 ml-[15px]  rounded-[50%] p-[2px] absolute bottom-[25px]'>{cart}</span>
        </div>
      <div className="inline-grid grid-cols-3 gap-4  ml-[100px] mt-[100px] flex space-x-4 ...">
        <Products />
      </div>
    </>
  );
};
export default TodoApp;