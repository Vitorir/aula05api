import { BrowserRouter, Route, Routes } from "react-router-dom";
import Eventos from "./Pages/Eventos/Eventos";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import EventDetail from "./Pages/EventDetail/EventDetail";
import Page404 from "./Pages/Page404/";

function App() {
  return (
    <>
      <h1>Hello, World!</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Eventos" element={<Eventos />} />
            <Route path="/Eventos/:idCurso" element={<EventDetail />} />
            <Route path="*" element={<Page404 />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
