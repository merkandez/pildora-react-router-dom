# Introducción a React Router DOM

Este proyecto es una guía básica para entender y usar React Router DOM en una aplicación React. React Router DOM es una librería de enrutamiento que permite crear aplicaciones web de una sola página (SPA) que se comportan como aplicaciones de múltiples páginas.

## Características principales de React Router DOM

- **Enrutamiento declarativo**: Define rutas usando componentes de React.
- **Soporte para rutas anidadas**: Permite organizar la aplicación con rutas dentro de rutas.
- **Navegación dinámica**: Facilita la navegación entre diferentes partes de la aplicación sin recargar la página.
- **URL amigables**: Permite crear rutas con parámetros dinámicos.

## Instalación y Configuración del Proyecto

### 1. Instalar Node.js y npm

Asegúrate de tener Node.js y npm instalados en tu sistema. Puedes descargar Node.js desde su [página oficial](https://nodejs.org/). npm se instala automáticamente con Node.js.

### 2. Crear un Proyecto React

Usa `Create React App` para crear un nuevo proyecto React.

```bash
npx create-react-app react-router-example
cd react-router-example
```

instalamos `react-router-dom`

```bash
npm install react-router-dom`

```


## Estructura del Proyecto

Vamos a crear los siguientes archivos y carpetas:

/src/components/Navbar.js
/src/components/Product.js
/src/pages/Home.js
/src/pages/About.js
/src/pages/Contact.js
/src/App.js
/src/index.js

## Crear Componentes y Páginas

# Navbar.js
Este es el Navbar que se visualizará en todas las páginas.
```bash
// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/product/1">Product 1</Link></li>
        <li><Link to="/product/2">Product 2</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
```
# Product.js
El componente Product utiliza useParams para obtener el productId de la URL y mostrarlo.

```bash
// src/components/Product.js
import React from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  const { productId } = useParams();
  return (
    <div>
      <h2>Product ID: {productId}</h2>
    </div>
  );
}

export default Product;
```

# Home.js
La página principal (Home).
```bash
// src/pages/Home.js
import React from 'react';

function Home() {
  return <h2>Welcome to the Home Page!</h2>;
}

export default Home;
```

# About.js
```bash
// src/pages/About.js
import React from 'react';

function About() {
  return <h2>About Us</h2>;
}

export default About;
```

# Contact.js
```bash
// src/pages/Contact.js
import React from 'react';

function Contact() {
  return <h2>Contact Us</h2>;
}

export default Contact;
```

# App.js
```bash
// src/App.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
```

# index.js

```bash
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './components/Product';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "product/:productId", element: <Product /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```
## Ejecuta la aplicación

Inicializamos la aplicación con

```bash
npm start
```

## Explicación de los Conceptos

Rutas Básicas: En el archivo index.js, definimos rutas simples para Home, About, Contact, y Product. createBrowserRouter se utiliza para definir las rutas principales.

Navegación con Link: El Navbar utiliza el componente Link de react-router-dom para crear enlaces que permiten la navegación entre las diferentes rutas sin recargar la página.

Rutas Dinámicas con useParams: En el componente Product, usamos useParams para capturar el productId de la URL. Esto permite mostrar detalles específicos basados en el parámetro de la ruta.

Outlet para Rutas Anidadas: El componente App incluye un Outlet, que es donde React Router renderiza el componente correspondiente según la ruta actual.

## Conclusión

Esta aplicación pequeña cubre los aspectos clave de React Router DOM, desde la configuración básica de rutas y navegación, hasta el uso de parámetros dinámicos con useParams. Es un excelente punto de partida para aprender a manejar la navegación en aplicaciones React.