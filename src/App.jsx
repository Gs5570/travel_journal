import Navbar from "./assets/components/Navbar";
import VisitedSite from "./assets/components/visitedSite";

//data for props
import data from "./assets/data/data";

//style
import "./App.css";

function App() {
  const visitedSiteElt = data.map((item, index) => {
    return <VisitedSite key={index} details={item} />;
  });
  return (
    <div className="app-container">
      <Navbar />
      <div className="sites">{visitedSiteElt}</div>
    </div>
  );
}

export default App;
