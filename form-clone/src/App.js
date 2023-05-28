import HomePage from "./Components/HomePage";
import { Routes, Route } from "react-router-dom";
import ParentComponent from "./Components/ParentComponent";
import ResponderComponent from "./Components/Responder";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/form/edit/:id" element={<ParentComponent />}></Route>
        <Route
          path="/form/response/:id"
          element={<ResponderComponent />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
