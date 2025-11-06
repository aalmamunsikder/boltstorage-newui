import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import ForgotPassword from "./pages/AuthPages/ForgotPassword";
import ResetPassword from "./pages/AuthPages/ResetPassword";
import NotFound from "./pages/OtherPage/NotFound";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import CloudStorage from "./pages/Dashboard/CloudStorage";
import MyFiles from "./pages/Storage/MyFiles";
import Starred from "./pages/Storage/Starred";
import Recent from "./pages/Storage/Recent";
import Shared from "./pages/Storage/Shared";
import Trash from "./pages/Storage/Trash";
import Settings from "./pages/Storage/Settings";
import Activity from "./pages/Storage/Activity";
import SearchResults from "./pages/Storage/SearchResults";
import Upgrade from "./pages/Storage/Upgrade";
import Profile from "./pages/Storage/Profile";
import Landing from "./pages/Landing";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";
import TermsOfService from "./pages/Legal/TermsOfService";
import CookiePolicy from "./pages/Legal/CookiePolicy";
import HelpCenter from "./pages/Support/HelpCenter";
import About from "./pages/Company/About";
import Contact from "./pages/Company/Contact";
import Careers from "./pages/Company/Careers";
import Security from "./pages/Product/Security";
import Downloads from "./pages/Product/Downloads";
import Demo from "./pages/Product/Demo";
import Blog from "./pages/Resources/Blog";
import Status from "./pages/Resources/Status";
import { ToastProvider } from "./components/common/Toast";

export default function App() {
  return (
    <ToastProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Landing & Info Pages */}
          <Route index path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/security" element={<Security />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/status" element={<Status />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/help" element={<HelpCenter />} />

          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<CloudStorage />} />
            <Route path="/my-files" element={<MyFiles />} />
            <Route path="/starred" element={<Starred />} />
            <Route path="/recent" element={<Recent />} />
            <Route path="/shared" element={<Shared />} />
            <Route path="/trash" element={<Trash />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/upgrade" element={<Upgrade />} />
            <Route path="/profile" element={<Profile />} />

            {/* Others Page */}
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ToastProvider>
  );
}
