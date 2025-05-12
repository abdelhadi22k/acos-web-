import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from './page/HomePage';
import BlogPage from './page/BlogPage';

import BlogDetels from './components/blog/BlogDetels';
import SearchPage from "./page/SearchPage";



function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Blog/:slug" element={<BlogDetels />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
