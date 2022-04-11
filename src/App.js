import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      { <Footer /> }
    </div>
  );
}
export default App;