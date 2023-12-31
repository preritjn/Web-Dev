import {Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={RootLayout}>
      <Route exact index Component={Home}/>
      <Route exact path="about" Component={About}/>
      <Route path="help" Component={HelpLayout}>
        <Route exact path="faq" Component={Faq}/>
        <Route exact path="contact" Component={Contact}/>
      </Route>
      <Route path="*" Component={NotFound}/>
    </Route>
  )
)  

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
