import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Food from "./components/Food";
import Subscribe from "./components/Subscribe";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import TestimonialSlider from "./components/TestimonialSlider";
import ShowCase from "./components/ShowCase";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Food />
      <ShowCase />
      <TestimonialSlider />
      <Subscribe />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
