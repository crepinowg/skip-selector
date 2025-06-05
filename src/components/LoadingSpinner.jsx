import { Spinner } from "flowbite-react";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-center">
        <Spinner color="warning" aria-label="Center-aligned spinner example" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
