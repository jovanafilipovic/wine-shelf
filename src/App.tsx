import { Routes, Route } from "react-router-dom";
import Header from "./components/common/NavigationMenu";
import Footer from "./components/common/Footer";
import { routes } from "./routes";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
