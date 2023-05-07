import FormEdit from "./Components/FormEdit";
import HomePage from "./Components/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/form/:id" element={<FormEdit />}></Route>
      </Routes>
    </>
  );
}

export default App;
