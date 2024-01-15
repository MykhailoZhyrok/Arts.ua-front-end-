import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Layout} from './components/Layout';
import { Main } from './Pages/Main/Main';
import { Collection } from './Pages/Collection/Collection';
import { Contact } from './Pages/Contact/Contact';
import { Basket } from './Pages/Basket/Basket';
import { OrdersInfo } from './Pages/Basket/OrdersInfo';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/bascket' element={<Basket/>} />
          <Route path='/buy' element={<OrdersInfo/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
