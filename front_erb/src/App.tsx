import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import SignInPage from "./pages/SignIn";
import PasswordRecoveryPage from "./pages/RecoveryPassword";
import JoinUsPage from "./pages/JoinUs";
import AccountSetup from "./pages/AccountSetUp";
import SignupFormStep2 from "./components/Profile";
import TellUsAboutYourself from "./components/TellAboutYourSelf";
import HowYouKnowForm from "./components/TellAboutYourSelf";
import BusinessGallery from "./components/BussnissGallaryFreeLance";
import ControlPanel from "./pages/ControlPanal";
import UserAccount from "./pages/UserAccount";
import FinancialTransactions from "./pages/AccountBalance";
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
          { <Route path="/ControlPanel" element={<ControlPanel />} /> }
        <Route path="/UserAccount" element={<UserAccount />} />
        <Route path="/FinancialTransactions" element={<FinancialTransactions />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
