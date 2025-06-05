import { useState, useEffect } from "react";
import "./App.css";
import { FaListUl } from "react-icons/fa";
import { FiColumns } from "react-icons/fi";
import SkipData from "./components/SkipData";

function App() {
  // State to control list view (active by default)
  const [filterList, setFilterList] = useState(true);
  // State to control column view
  const [filterCol, setFilterCol] = useState(false);
 
  // Switch to list view
  const listView = () => {
    setFilterList(true);
    setFilterCol(false);
  };

  // Switch to column view
  const colView = () => {
    setFilterCol(true);
    setFilterList(false);
  };

  useEffect(() => {
    // Media query for large screens (>=1024px)
    const mediaQuery = window.matchMedia("(min-width: 1024px)"); 
    
    // If screen is resized below 1024px, force list view
    const handleResize = (e) => {
      if (!e.matches) {
        listView();
      }
    };

    // On initial load, set to list view if screen is small
    if (!mediaQuery.matches) {
      listView();
    }

    // Listen to screen size changes
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <>
      {/* Header section with sticky position */}
      <div className="sticky top-0 p-0.5 z-30  items-center justify-center flex-col" style={{ backgroundColor: "#111827" }}>
        <h2 className="poppins text-4xl font-semibold tracking-tight text-gray-2000 dark:text-white">
          Choose Your Skip Size
        </h2>

        <p className="poppins italic read-the-docs">
          Select the skip size that best suits your needs
        </p>

        {/* Toggle buttons for list/column view, only shown on large screens */}
        <div className="flex items-center mb-6 gap-2 w-25">
          <button
            onClick={listView}
            className={`hidden items-center lg:flex poppins rounded-none p-4 px-6 py-3.5 text-center text-lg font-medium text-white focus:outline-none focus:ring-4
              ${filterCol
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-cyan-700 hover:bg-cyan-800 focus:ring-cyan-300 dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-400'
              }`}
          >
            <FaListUl />
          </button>

          <button
            onClick={colView}
            className={`hidden lg:flex poppins rounded-none p-4 px-6 py-3.5 text-center text-xl font-medium text-white focus:outline-none focus:ring-4
              ${filterList
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-cyan-700 hover:bg-cyan-800 focus:ring-cyan-300 dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-400'
              }`}
          >
            <FiColumns />
          </button>
        </div>
      </div>

      {/* Component that renders data based on selected view */}
      <SkipData filterCol={filterCol} filterList={filterList}/>
    </>
  );
}

export default App;