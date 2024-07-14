// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Home from "./components/Home";
// import Coins from "./components/Coins";
// import Exchanges from "./components/Exchanges";
// import CoinDetails from "./components/CoinDetails";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/coins" element={<Coins />} />
//         <Route path="/exchanges" element={<Exchanges />} />
//         <Route path="/coin/:id" element={<CoinDetails />} />
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from './store';
import TableComponent from './components/TableComponent';
import ModalComponent from './components/ModalComponent';
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";

const App = () => {
  const [selectedSymbol, setSelectedSymbol] = useState('bitcoin');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/coin/:id" element={<CoinDetails />} />
        </Routes>
        <Footer />
        <div className="App">
          <button onClick={handleOpenModal}>Change Stock/Crypto</button>
          <TableComponent symbol={selectedSymbol} />
          <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
