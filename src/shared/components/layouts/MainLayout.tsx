import NavBar from "../partials/NavBar";
import HomePage from "../../../pages/HomePage";
import AboutPage from "../../../pages/AboutPage";
import FeaturesPage from "../../../pages/FeaturesPage";
import PricingPage from "../../../pages/SubscriptionPage";
import ContactPage from "../../../pages/ContactPage";
import TestimonialPage from "../../../pages/TestimonialPage";
import RegistrationPage from "../../../pages/RegistrationPage";
function MainLayout() {
  return (
    <>
      <main className="font-montserrat">
        <NavBar />
        <HomePage />
        <AboutPage />
        <FeaturesPage />
        <PricingPage />
        <TestimonialPage/>
        <RegistrationPage/>
        <ContactPage />
      </main>
    </>
  );
}

export default MainLayout;
