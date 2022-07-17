import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



import store from './redux/store';
import App from './App'
import Cart from './components/cart/Cart';
import Addtocart from './pages/AddToCart/Addtocart';
import Test from './pages/test/Test';
import Aside from './components/aside/Aside';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <Provider store={store}>
        <Cart />

        <BrowserRouter >
            <Routes >
                <Route path='/' element={<><App />  <Aside /></>} />
                <Route path='cart' element={<><Addtocart /> <Aside /></>} />
                <Route path='test' element={<> <Test /> <Aside /></>} />
            </Routes>
        </BrowserRouter>


    </Provider>
);



