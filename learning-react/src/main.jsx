import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoApp from '@/components/ToDoApp.jsx'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import stockReducer from './reducers/addToStore.js'
import cartReducer from './reducers/addToCart.js'



const store = configureStore({
  reducer: {
    stock: stockReducer,
    cart: cartReducer
  },
})
const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(
  <Provider store={store}>
  <React.StrictMode>
  <TodoApp />
  </React.StrictMode>
  </Provider>
);


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
