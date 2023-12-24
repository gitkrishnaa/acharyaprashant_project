import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Contents from "./components/Contents";
import FAQ from "./components/FAQ";
import Video_series from "./components/Video_series";
import Footer from "./components/Footer";
import Notify from "./components/Notify";

function App() {
  return (
    <div id="main-wrapper">
      <Nav />
      <Notify />
      <div className="container-fulid p-3 ">
        <Video_series />
        <Contents />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default App;
