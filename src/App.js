import Dashboard from "./components/Dashboard";
import SideBar from "./components/SideBar";
import Summary from "./components/Summary";

import { useEffect, useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="p-[2rem] pt-[5rem]">
          <div className="grid  grid-cols-12  h-screen justify-center gap-6">
            <SideBar />
            <Dashboard />
            <Summary />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
