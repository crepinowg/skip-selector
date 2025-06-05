import { Button, Toast } from "flowbite-react";
import { IoWarning } from "react-icons/io5";

const ToastWithButton = () => {
  return (
  <div className="sticky top-30 left-345 p-2 z-30 items-center flex-col w-full flex justify-end" style={{ backgroundColor: "#242424" }}>
  <Toast className="rounded-md p-2 flex items-center w-full max-w-5xl ">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-900 dark:text-cyan-300">
      <IoWarning className="h-5 w-5" />
    </div>
    <div className="flex flex-col items-center justify-center w-full max-w-5xl">
      <div className="poppins italic mb-2 text-xs font-normal">
        Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
      </div>
      <div className="flex gap-2">
        <Button color="light" size="xs">Back</Button>
        <Button size="xs">Continue</Button>
      </div>
    </div>
  </Toast>
</div>
  );
}

export default ToastWithButton