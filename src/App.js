import { Outlet } from "react-router-dom";
import { Nav } from "./components";

function App() {
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  );
}

export default App;
