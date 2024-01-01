import {Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import CareersLayout from "./layouts/CareersLayout";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails";
import CareersError from "./pages/careers/CareersError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={RootLayout}>
      <Route exact index Component={Home}/>
      <Route exact path="about" Component={About}/>
      <Route path="help" Component={HelpLayout}>
        <Route exact path="faq" Component={Faq}/>
        <Route exact path="contact" Component={Contact} action={contactAction}/>
      </Route>
      <Route exact path="careers" Component={CareersLayout} errorElement={<CareersError/>}>
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
