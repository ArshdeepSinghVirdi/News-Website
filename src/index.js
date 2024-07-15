import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import{BrowserRouter,Routes,Route} from "react-router-dom"
// import News from "./components/News"

// export default function index() {
//   return(
//     <BrowserRouter>
//     <Routes>
//        <Route  exact path="/News" element={<News/>} />
//         {/* {/* <Route path="/blogs" element={<Blogs />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<NoPage />} /> */}
//         </Routes>
//         </BrowserRouter> 
//   )
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
