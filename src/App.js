import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routeMap } from "./router/routeMap";
import Header from "./components/header";
const App = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 dark:text-gray-50 min-h-screen  font-sans">
      <Header />
      <BrowserRouter>
        <Routes>
          {routeMap.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
