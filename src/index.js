import React from 'react'; //Importa la biblioteca principal de React, que es necesaria para crear componentes de React.
import ReactDOM from 'react-dom/client'; //Importa ReactDOM, que se utiliza para renderizar componentes de React en el DOM del navegador.


import { createBrowserRouter, RouterProvider } from 'react-router-dom'; /* createBrowserRouter: Función de react-router-dom que se utiliza para crear un router basado en el navegador. Este router maneja la navegación de la aplicación.
RouterProvider: Componente que proporciona el router a la aplicación, permitiendo que los componentes hijos accedan a las rutas definidas. */


import App from './App'; //Importa el componente principal de la aplicación, que generalmente contiene la estructura básica y el layout de la aplicación.

import Home from './pages/Home'; //Importa el componente de la página de producto, que  muestra detalles de un producto específico basado en un parámetro dinámico (productId).
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './components/Product'; //Importa el componente de la página de producto, que  muestra detalles de un producto específico basado en un parámetro dinámico (productId).

const router = createBrowserRouter([
  {
    path: "/", //Define la ruta principal de la aplicación.
    element: <App />, //Especifica que el componente App se renderizará en la ruta principal.
    children: [ //Define las rutas hijas que se renderizarán dentro del componente App
      { path: "/", element: <Home /> }, //Ruta para la página de inicio.
      { path: "about", element: <About /> }, //Ruta para la página “Acerca de”.
      { path: "contact", element: <Contact /> }, //Ruta para la página de contacto.
      { path: "product/:productId", element: <Product /> }, //Ruta para la página de producto con un parámetro dinámico (productId).
    ],
  },
]);

//Encuentra el elemento con el id root en el HTML y renderiza la aplicación React en ese elemento.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* Componente que ayuda a identificar problemas potenciales en la aplicación. Solo se activa en modo desarrollo. */}
    <RouterProvider router={router} /> {/* Proporciona el router creado a la aplicación, permitiendo la navegación entre las rutas definidas. */}
  </React.StrictMode>
);