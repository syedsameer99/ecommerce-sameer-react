import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <SideNav />
        <Layout />
      </div>
    </>
  );
}

export default App;
