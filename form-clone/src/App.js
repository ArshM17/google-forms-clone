import FormHeader from "./Components/FormHeader";
import HomePage from "./Components/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/form/:id" element={<FormHeader />}></Route>
      </Routes>
    </>
  );
}

export default App;
