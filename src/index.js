import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './page/NotFound';
import AllProducts from './components/Products/AllProducts';
import NewProducts from './components/Products/NewProducts';
import MyCart from './components/Products/MyCart';
import ProductsDetail from './components/Products/ProductsDetail';
import Home from './page/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {index: true , element: <Home />},
      {path: 'products' , element: <AllProducts />},
      {path: 'products/new' , element: <NewProducts />},
      {path: 'products/:id' , element: <ProductsDetail />},
      {path: '/carts', element: <MyCart/>}
    ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
