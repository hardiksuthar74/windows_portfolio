import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Desktop from "./folders/Desktop";
import Home from "./folders/Home";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Desktop />}>
          <Route path="" element={<Navigate to={"/desktop"} />} />
          <Route path="desktop" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
