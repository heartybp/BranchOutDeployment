import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import Home from "./Home.jsx";
import Network from "./Network.jsx";
import Forum from "./Forum.jsx";
import Profile from "./Profile.jsx";
import Resources from "./Resources.jsx";
import OnboardingQuiz from "./components/OnboardingQuiz.jsx";
import Loading from "./components/Loading.jsx";
import Header from "./components/Header";
// import AIResumeFeedback from "./components/AIResumeFeedback";

function App() {
  return (
    <BrowserRouter basename="/BranchOutDeployment/">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/onBoardingQuiz" element={<OnboardingQuiz />} />
        <Route path="/home" element={<Home />} />
        <Route path="/network" element={<Network />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
