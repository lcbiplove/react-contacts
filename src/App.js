import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import ContactDetail from "./containers/ContactDetail";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/contacts/:id" element={<ContactDetail />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
};

export default App;