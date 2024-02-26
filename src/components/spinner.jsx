import React from "react";
import { infinity } from "ldrs";
infinity.register();
const Spinner = () => {
  return (
    <div className="mx-auto text-center">
      <l-infinity
        size="200"
        stroke="4"
        bg-opacity="0.1"
        color="white"
        speed="1.5"
      />
    </div>
  );
};
export default Spinner;
