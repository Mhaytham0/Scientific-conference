// 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ResponsiveNavbar from "./components/navbar/navbar";
import PictureComponent from "./components/main-pic/main-pic";
import ConferenceTopics from "./components/topics/topics";
import Timer from "./components/timer/timer";
import PeopleList from "./components/peopleList/peopleList";
import ConferenceIntro from "./components/about/about";
import ResearchGuidelines from "./components/rules/rules";
import Footer from "./components/footer/footer";
import PaymentInfo from "./components/paymentInfo/paymentInfo";

// Placeholder components for future routes
// import NotFound from "./components/notFound/notFound"; // Create this file if not available

function App() {
  return (
    <BrowserRouter>
      <ResponsiveNavbar />

      <Routes>
        {/* Main Route */}
        <Route
          path="/"
          element={
            <>
              <PictureComponent
                src="https://raw.githubusercontent.com/Mhaytham0/Scientific-conference/refs/heads/master/public/mainPicture2.jpg"
                alt="Sample Picture"
                width="90%"
                height="650px"
              />
              <ConferenceTopics />
              <Timer />
              <PeopleList />
            </>
          }
        />

        {/* Individual Components as Routes */}
        <Route
          path="/topics"
          element={
            <>
              <ConferenceTopics />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <ConferenceIntro />
            </>
          }
        />
        <Route
          path="/conditions"
          element={
            <>
              <ResearchGuidelines />
            </>
          }
        />
        <Route
          path="/fees"
          element={
            <>
              <PaymentInfo />
            </>
          }
        />

        {/* 404 Page */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
