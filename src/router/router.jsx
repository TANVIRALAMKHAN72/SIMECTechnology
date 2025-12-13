import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/rootLayout";
import HomePage from "../Pages/HomePage";
import Services from "../Pages/Service/Services";
import ProjectsSection from "../Pages/Projects/ProjectsSection";
import FAQSection from "../Pages/FAQ/FAQSection.jsx";
import ContactSection from "../Pages/Contact/ContactSection.jsx";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/projects",
        element : <ProjectsSection></ProjectsSection>
      },
      {
        path: "/FAQ",
        element : <FAQSection></FAQSection>
      },
      {
        path: "/contact",
        element : <ContactSection></ContactSection>
      }
    ]
  },
]);