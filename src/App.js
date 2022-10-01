import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Capitalize Text" aboutText="About"/>
      <div className="container my-3">
      <TextForm heading="Enter Text to Capitalize"/>
      </div>
    </>
  );
}

export default App;
