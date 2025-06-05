import { useEffect, useState } from "react";
import SkipCardGrid from './SkipCardGrid';
import SkipCard from "./SkipCard";
import LoadingSpinner from "./LoadingSpinner";
import ToastWithButton from "./ToastWithButton";

const SkipData = ({ filterCol, filterList }) => {
  // State to store skips data fetched from the API
  const [skips, setSkips] = useState([]);

  // State to manage loading status
  const [loading, setLoading] = useState(true);

  // State to handle potential error messages
  const [error, setError] = useState(null);

  // State to keep track of the selected skip's ID
  const [chooseSkip, setChooseSkip] = useState();

  // State to store information about the selected skip
  const [chooseSkipInfo, setChooseSkipInfo] = useState();

  // Function to handle selection/deselection of a skip
  const handleSelect = (id, size) => {
    if (chooseSkip === id) {
      // Deselect if already selected
      setChooseSkip(null); 
      setChooseSkipInfo(null);
    } else {
      // Set selected skip
      setChooseSkip(id);
      setChooseSkipInfo(size);
    }
  };

  // Fetch skips data from API on component mount
  useEffect(() => {
    fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft")
      .then(res => {
        if (!res.ok) throw new Error("Impossible to fetch skips data");
        return res.json();
      })
      .then(data => {
        console.log("Data available :", data);
        setSkips(data);       // Update skips state
        setLoading(false);    // Disable loading state
      })
      .catch(err => {
        console.error(err);
        setError(err.message); // Set error message
        setLoading(false);     // Disable loading state
      });
  }, []);

  // Show loading spinner while fetching data
  if (loading) return <LoadingSpinner/> ;

  // Show error message if data fetching fails
  if (error) return <p>Message error : {error}</p>;

  return (
    <>
      {/* Display SkipCard when column view is enabled */}
      {filterCol && <SkipCard skips={skips} />}

      {/* Display grid of skip cards if list view is enabled and skips are available */}
      {filterList && skips.length > 0 && (
        <>
          {/* Show toast if a skip has been selected */}
          {chooseSkip ? <ToastWithButton size={chooseSkipInfo} /> : null}
          
          {/* Render each skip card in a grid */}
          {skips.map((skip) => (
            <SkipCardGrid
              key={skip.id}
              skip={skip}
              isSelected={chooseSkip === skip.id}
              onSelect={() => handleSelect(skip.id, skip.size)}
            />
          ))}
        </>
      )}

      {/* Display message if no skips were found */}
      {filterList && skips.length === 0 && (
        <p className="text-center text-gray-500">No skip found</p>
      )}
    </>
  );
}

export default SkipData