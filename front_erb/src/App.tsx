import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import SignInPage from "./pages/SignIn";
import PasswordRecoveryPage from "./pages/RecoveryPassword";
import JoinUsPage from "./pages/JoinUs";
import AccountSetup from "./pages/AccountSetUp";
import SignupFormStep2 from "./components/AcountSetup/Profile";
import TellUsAboutYourself from "./components/AcountSetup/TellAboutYourSelf";
import HowYouKnowForm from "./components/AcountSetup/TellAboutYourSelf";
import BusinessGallery from "./components/BussnissGallaryFreeLance";
import ControlPanel from "./pages/ControlPanal";
import UserAccount from "./pages/UserAccount";
import FinancialTransactions from "./pages/AccountBalance";
import AddProjectForm from "./pages/AddProject";
import AddServiceForm from "./pages/AddService";
import ServiceListingPage from "./pages/ServiceListPage";
import BusinessGalleryPage from "./pages/BusinessGalleryPage";
import SettingPage from "./pages/User-setting";
import EditAccountPage from "./pages/user-profile";
import OpenProjects from "./pages/Projects";
import FreelancerList from "./pages/Freelancers";
import ContactMePage from "./pages/ContactMePage";
// import MultiStepForm from "./pages/RecoveryPassword";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/password-recovery" element={<PasswordRecoveryPage />} />
          <Route path="/joinUs" element={<JoinUsPage />} />
          <Route path="/accountSetup" element={<AccountSetup />} />

          <Route path="/businessGallery" element={<BusinessGallery />} />
          {<Route path="/ControlPanel" element={<ControlPanel />} />}
          <Route path="/UserAccount" element={<UserAccount />} />
          <Route
            path="/FinancialTransactions"
            element={<FinancialTransactions />}
          />
          <Route path="/AddProjectForm" element={<AddProjectForm />} />
          <Route path="/AddServiceForm" element={<AddServiceForm />} />

          <Route path="/ServiceListingPage" element={<ServiceListingPage />} />
          <Route path="/BusinessGalleryPage" element={<BusinessGalleryPage />} />

          <Route path="/OpenProjects" element={<OpenProjects />} />

          
          <Route path="/SettingPage" element={<SettingPage />} />

          <Route path="/EditAccountPage" element={<EditAccountPage />} />

          
          <Route path="/FreelancerList" element={<FreelancerList />} />

          <Route path="/ContactMePage" element={<ContactMePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
