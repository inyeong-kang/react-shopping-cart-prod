import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProductsListPage from './pages/ProductsListPage';
import CartProductsListPage from './pages/CartProductsListPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './Layout';
import OrderProductsListPage from './pages/OrderProductsListPage';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Suspense>
        <Layout>
          <Routes>
            <Route
              path='/'
              element={
                <Suspense>
                  <ProductsListPage />
                </Suspense>
              }
            />
            <Route path='/cart' element={<CartProductsListPage />} />
            <Route path='/order' element={<OrderProductsListPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
