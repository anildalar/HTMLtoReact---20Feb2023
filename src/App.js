import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import Layout from "./pages/Layout";
import Post from "./pages/Post";


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />}></Route>
              <Route path="/post" element={<Post />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
