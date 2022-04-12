import Header from './Components/Header';
import Home from './Components/HomePage/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from './Components/CheckoutPage/Checkout';
import NotFound from './Components/NotFound';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}