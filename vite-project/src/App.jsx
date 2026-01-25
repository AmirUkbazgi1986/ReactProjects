import "./index.css";

/* react router dom */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  Link,
  NavLink,
  RouterProvider,
} from "react-router-dom";

/*page */
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/help/contact";
import Faq from "./pages/help/Faq";
import NotFound from "./pages/NotFound";
import Careers from "./pages/careers/Careers";
import CareerDetails from "./pages/careers/CareerDetails";

/* Layouts */
import Rootlayout from "./layouts/Rootlayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";

/*function */
import { careersLoader } from "./pages/careers/CareersLoader";
import { careerDetailsLoader } from "./pages/careers/CareerDetailsLoader";
import CareersError from "./pages/careers/CareersError";
import { contactAction } from "./pages/help/ContactAction";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route path="*" element={<NotFound />} />

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
