import { useEffect, useState } from "react";
import SkipCardGrid from './SkipCardGrid';
import SkipCard from "./SkipCard";
import LoadingSpinner from "./LoadingSpinner";
import ToastWithButton from "./ToastWithButton";

const SkipData = ({ filterCol, filterList }) => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    const [chooseSkip, setChooseSkip] = useState();
    const [chooseSkipInfo, setChooseSkipInfo] = useState();
    const handleSelect = (id, size) => {
    if (chooseSkip === id) {
      setChooseSkip(null); 
        setChooseSkipInfo(null);
    } else {
      setChooseSkip(id);
      setChooseSkipInfo(size);
    }
  };
  useEffect(() => {
    fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft")
      .then(res => {
        if (!res.ok) throw new Error("Impossible to fetch skips data");
        return res.json();
      })
      .then(data => {
        console.log("Data available :", data);
        setSkips(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingSpinner/> ;
  if (error) return <p>Message error : {error}</p>;

  return (
      <>
    {filterCol && <SkipCard skips={skips} />}

 {filterList && skips.length > 0 && (
  <>
    { chooseSkip ? <ToastWithButton size={chooseSkipInfo} />  : null }
    
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

  {filterList && skips.length === 0 && (
    <p className="text-center text-gray-500">No skip found</p>
  )}
</>
  );
}

export default SkipData