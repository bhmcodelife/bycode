import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';


ReactDOM.createRoot( document.getElementById( 'root' )! ).render(

  <React.StrictMode>

    <App />
  </React.StrictMode>,
);
// import ReactDOM from 'react-dom/client';
// import { Route, Router } from 'react-router-dom';
// import App from './App';
// import './index.css';
// // <React.StrictMode>
// //   <App />
// // </React.StrictMode>,
// ReactDOM.createRoot( document.getElementById( 'root' )! ).render(
//   <Router>
//     {/* <App /> */ }
//     <div>
//       <Route path='/' component={ App } />
//     </div>
//   </Router>,

// );
// import { createBrowserRouter } from 'react-router-dom';
// import App from './App';

// const router = createBrowserRouter( [
//   {
//     path: "/",
//     element: <App />,
//   },
// ] );
// import ReactDOM from 'react-dom/client';
// import { Route, Router } from 'react-router-dom';
// import App from './App';
// import './index.css';
// // <React.StrictMode>
// //   <App />
// // </React.StrictMode>,
// ReactDOM.createRoot( document.getElementById( 'root' )! ).render(
//   <Router>
//     {/* <App /> */ }
//     <div>
//       <Route path='/' component={ App } />
//     </div>
//   </Router>,
