import { useState, useEffect } from "react";
import "./App.css";
import { FaListUl } from "react-icons/fa";
import { FiColumns } from "react-icons/fi";
import SkipData from "./components/SkipData";

function App() {
  const [filterList, setFilterList] = useState(true);
const [filterCol, setFilterCol] = useState(false);
 
const listView = () => {
  setFilterList(true);
  setFilterCol(false);
};

const colView = () => {
  setFilterCol(true);
  setFilterList(false);
};

useEffect(() => {
  const mediaQuery = window.matchMedia("(min-width: 1024px)"); 
  const handleResize = (e) => {
    if (!e.matches) {
      
      listView()
    }
  };

  if (!mediaQuery.matches) {
    listView()
  }

  mediaQuery.addEventListener("change", handleResize);

  return () => {
    mediaQuery.removeEventListener("change", handleResize);
  };
}, []);
  return (
    <>
    <div className="sticky top-0 p-0.5 z-30  items-center justify-center flex-col" style={{ backgroundColor: "#242424" }}>
  <h2 className="poppins text-4xl font-semibold tracking-tight text-gray-2000 dark:text-white">
    Choose Your Skip Size
  </h2>

  <p className="poppins italic read-the-docs">
    Select the skip size that best suits your needs
  </p>

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

      <SkipData filterCol={filterCol} filterList={filterList}/>
      
    </>
  );
}

export default App;
