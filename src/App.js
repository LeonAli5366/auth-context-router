import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/about/About';
import Inventory from './component/inventory/Inventory';
import Order from './component/orders/Order';
import Shop from './component/Shop/Shop';
import Main from './layouts/Main';
import { ProductsAndCartLoader } from './loaders/ProductsAndCartLoaders';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/order',
          loader: ProductsAndCartLoader,
          element: <Order></Order>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        }
      ]
    },
    {
      path: '/about',
      element: <About></About>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
