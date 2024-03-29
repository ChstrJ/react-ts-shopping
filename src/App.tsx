import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { Navbar } from "./components/Navbar";
import { ShoppingProvider } from "./context/ShoppingCart";

function App() {
  return (
    <>
      <ShoppingProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </ShoppingProvider>
    </>
  );
}

export default App;
