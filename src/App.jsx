import { BrowserRouter,Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import Update from "./pages/Update";
import EditData from "./pages/EditData";
import Search from "./pages/search";

const App=()=>{
  return(
    <>
    <center>
      <h1>The tool Kit app </h1>
    </center>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="insert" element={<Insert/>}/>
      <Route path="display" element={<Display/>}/>
      <Route path="update" element={<Update/>}/>
      <Route path="search" element={<Search/>}/>
      <Route path="/EditData/:myid" element={<EditData/>}/>
       </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;