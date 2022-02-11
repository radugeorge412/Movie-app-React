import { Container } from "@material-ui/core";
import Search from "./pages/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Trending from "./pages/Trending";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Container>
            <Routes>
              <Route path="/" exact element={<Trending />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/TVSeries" element={<Series />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </Container>
        </div>
        <Navigation />
      </BrowserRouter>
    </>
  );
}

export default App;
