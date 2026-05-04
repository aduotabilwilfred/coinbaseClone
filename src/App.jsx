import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import HeroSection from "./components/sections/HeroSection";
import ExploreCryptoSection from "./components/sections/ExploreCryptoSection";
import AdvancedTraderSection from "./components/sections/AdvancedTraderSection";
import FeatureCardsSection from "./components/sections/FeatureCardsSection";
import LearnSection from "./components/sections/LearnSection";
import TakeControlSection from "./components/sections/TakeControlSection";
import { SignIn, SignUpSelection, EmailSignUp } from "./pages/Auth";
import ProfilePage from "./pages/ProfilePage";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyCode from "./pages/VerifyCode";
import ExplorePage from "./pages/ExplorePage";
import MarketStatsPage from "./pages/MarketStatsPage";
import LearnPage from "./pages/LearnPage";
import CryptoBasicsPage from "./pages/CryptoBasicsPage";
import Loader from "./components/ui/Loader";

const Home = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <HeroSection />
      <ExploreCryptoSection />
      <AdvancedTraderSection />
      <FeatureCardsSection />
      <LearnSection />
      <TakeControlSection />
    </main>
    <Footer />
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/market-stats" element={<MarketStatsPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/account-type" element={<SignUpSelection />} />
      <Route path="/signup" element={<EmailSignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify" element={<VerifyCode />} />
      <Route path="/learn" element={<LearnPage />} />
      <Route path="/learn/crypto-basics" element={<CryptoBasicsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default App;
