import logo from "./logo.svg";
import "./App.css";
import Header from "./shared/components/header";
import "./scss/main.scss";
import Herobanner from "./routs/home/herobanner";
import Home from "./routs/home";
import Footer from "./shared/components/footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Components from "./shared/components";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Components />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      {/* <Header/>
      <Home/>
      <Footer/> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
