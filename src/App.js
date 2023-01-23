import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routeMap } from "./router/routeMap";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routeMap.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;