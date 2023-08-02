import Welcome from "./components/Welcome/Welcome";
import Clients from "./components/ClientsPage/ClientsPage";
import Residencies from "./components/Residencies/Residencies";
import OurValue from "./components/OurValue/OurValue";
function App() {
  return (
    <>
      <Welcome></Welcome>
      <Clients></Clients>
      <Residencies></Residencies>
      <OurValue />
    </>
  );
}

export default App;
