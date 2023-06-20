import React, {useState} from "react";
import Navbar from "./Components/Navbar";
import NewsContainer from "./Components/NewsContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
function App() {
  const apiKey = process.env.REACT_APP_NEWS_API;  //Enter you api key here
  const [progress, setProgress] = useState(10)
  
  
  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
        height={4}
        color='#f11946'
        progress={progress} 
      />
        <Routes>
          <Route exact path="/" element={<NewsContainer setProgress = {setProgress} key = "general" category="general" APIKey={apiKey} country="in"/>} />
          <Route exact path="/business" element={<NewsContainer setProgress = {setProgress} key = "business" category="business" APIKey={apiKey} country="in"/>} />
          <Route exact path="/entertainment" element={<NewsContainer setProgress = {setProgress} key = "entertainment" category="entertainment" APIKey={apiKey} country="in"/>} />
          <Route exact path="/health" element={<NewsContainer setProgress = {setProgress} key = "health" category="health" APIKey={apiKey} country="in"/>} />
          <Route exact path="/science" element={<NewsContainer setProgress = {setProgress} key = "science" category="science" APIKey={apiKey} country="in"/>} />
          <Route exact path="/sports" element={<NewsContainer setProgress = {setProgress} key = "sports" category="sports" APIKey={apiKey} country="in"/>} />
          <Route exact path="/technology" element={<NewsContainer setProgress = {setProgress} key = "technology" category="technology" APIKey={apiKey} country="in"/>} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
