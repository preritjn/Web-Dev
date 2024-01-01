import {Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import CareersLayout from "./layouts/CareersLayout";
import Careers, { careersLoader } from "./pages/Careers";
import CareerDetails, { careerDetailsLoader } from "./pages/CareerDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={RootLayout}>
      <Route exact index Component={Home}/>
      <Route exact path="about" Component={About}/>
      <Route path="help" Component={HelpLayout}>
        <Route exact path="faq" Component={Faq}/>
        <Route exact path="contact" Component={Contact}/>
      </Route>
      <Route exact path="careers" Component={CareersLayout}>
        <Route exact index Component={Careers} loader={careersLoader}/>
        <Route path=":id" Component={CareerDetails} loader={careerDetailsLoader}/>
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
