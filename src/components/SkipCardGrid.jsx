// Importing necessary components, images, and icons
import { Card } from "flowbite-react";
import skip4Yard from "../assets/Skip-Sizes-3D_4-Yard.webp";
import skip6Yard from "../assets/Skip-Sizes-3D_6-Yard.webp";
import skip8Yard from "../assets/Skip-Sizes-3D_8-Yard.webp";
import skip12Yard from "../assets/Skip-Sizes-3D_12-Yard.webp";
import { FaLocationDot, FaClock, FaCheck } from "react-icons/fa6";
import { GiMineTruck, GiWeight } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

// SkipCardGrid component definition
const SkipCardGrid = ({ skip, isSelected, onSelect }) => {
  // Mapping skip sizes to their respective images
  const imageMap = {
    4: skip4Yard,
    6: skip4Yard,
    8: skip6Yard,
    10: skip6Yard,
    12: skip6Yard,
    14: skip8Yard,
    16: skip8Yard,
    20: skip12Yard,
    40: skip12Yard,
  };

  // Get image source based on skip size
  const imageSrc = imageMap[skip.size] || skipDefault;

  return (
    <>
      {/* Container with conditional background based on selection */}
      <div
        className={`rounded-none p-1 flex flex-col items-center justify-center mt-10 gap-6 w-full ${
          isSelected ? "bg-yellow-400" : "bg-white hover:bg-yellow-400"
        }`}
      >
        {/* Card component wrapping the entire content */}
        <Card
          onClick={onSelect}
          className=" bg-green-400 rounded-none p-4 cursor-pointer"
        >
          <div className="flex flex-col lg:flex-row w-full gap-6">
            {/* Left section: image and skip info */}
            <div className="flex flex-col lg:flex-row w-full lg:w-2/3 gap-4">
              {/* Skip image */}
              <img
                src={imageSrc}
                alt="Skip hire"
                className="w-full sm:max-w-xs h-auto object-contain rounded-md"
              />

              {/* Skip title and feature list */}
              <div className="flex flex-col space-y-2 ">
                <a onClick={onSelect} className="cursor-pointer">
                  <h2 className="poppins text-start text-2xl font-semibold text-white">
                    {skip.size} yard skip
                  </h2>
                </a>

                <p className="italic text-sm font-thin text-white text-start">
                  Perfect for general waste and bulky items.
                </p>

                {/* List of skip features with icons */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-4">
                  <div className="flex items-center min-w-[250px]">
                    {skip.allowed_on_road ? (
                      <>
                        <FaCheck className="text-lg text-green-400 mr-2" />
                        <p className="text-sm text-white">
                          Allowed on the road
                        </p>
                      </>
                    ) : (
                      <>
                        <RxCross2 className="text-xl text-red-500 mr-2" />
                        <p className="text-sm text-white">
                          Not allowed on the road
                        </p>
                      </>
                    )}
                  </div>

                  <div className="flex items-center min-w-[250px]">
                    <FaCheck className="text-lg text-green-400 mr-2" />
                    <p className="text-sm text-red-400">Price Before VTA 20%</p>
                  </div>

                  <div className="flex items-center min-w-[250px] ">
                    {!skip.forbidden ? (
                      <>
                        <FaCheck className="text-lg text-green-400 mr-2" />
                        <p className="text-sm text-white">
                          Booking allowed for this skip.
                        </p>
                      </>
                    ) : (
                      <>
                        <RxCross2 className="text-xl text-red-500 mr-2" />
                        <p className="text-sm text-white">
                          Booking not allowed for this skip.
                        </p>
                      </>
                    )}
                  </div>

                  <div className="flex items-center min-w-[250px]">
                    {skip.allows_heavy_waste ? (
                      <>
                        <FaCheck className="text-lg text-green-400 mr-2" />
                        <p className="text-sm text-white">
                          Heavy waste allowed.
                        </p>
                      </>
                    ) : (
                      <>
                        <RxCross2 className="text-xl text-red-500 mr-2" />
                        <p className="text-sm text-white">
                          Heavy waste not allowed.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right section: pricing and additional info */}
            <div className="flex flex-col w-full lg:w-1/3 gap-4">
              {/* Price display */}
              <h2 className="text-base font-bold text-white text-start">
                from{" "}
                <span className="ml-2 text-2xl font-bold text-cyan-800 bg-cyan-100 px-2.5 py-0.5">
                  £{skip.price_before_vat}
                </span>
              </h2>

              {/* Additional skip details with icons */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
                <div className="flex items-center mr-4 mb-2">
                  <FaClock className="text-lg text-white mr-2" />
                  <p className="text-sm text-white">
                    Hire period - {skip.hire_period_days} days
                  </p>
                </div>

                <div className="flex items-center mr-4 mb-2">
                  <GiMineTruck className="text-xl text-white mr-2" />
                  <p className="text-sm text-white">
                    Transport cost -{" "}
                    {skip.transport_cost != null
                      ? `£${skip.transport_cost}`
                      : "Free"}
                  </p>
                </div>
                <div className="flex items-center mr-4 mb-2">
                  <GiWeight className="text-lg text-white mr-2" />
                  <p className="text-sm text-white">
                    Cost per tonne -{" "}
                    {skip.per_tonne_cost != null
                      ? `£${skip.per_tonne_cost}`
                      : "Free"}
                  </p>
                </div>
                <div className="flex items-center mr-4 mb-2">
                  <FaLocationDot className="text-lg text-white mr-2" />
                  <p className="text-sm text-white">Lowestoft, UK</p>
                </div>
              </div>

              {/* Action button: select the skip */}
              <div className="pt-3 w-full cursor-pointer">
                <a
                  onClick={onSelect}
                  className="block w-full text-center rounded-none p-3 bg-yellow-400 text-white text-sm font-medium hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-cyan-300"
                >
                  {isSelected ? "Selected" : "Choose this skip"}
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default SkipCardGrid;