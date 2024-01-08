import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={IndexPage}/>
      </Routes>
    </BrowserRouter>
  );
}