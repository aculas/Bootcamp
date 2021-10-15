import React, { useStae } from "react";
import Box from "./Box";

const Boxlist = () => {
  const [box, setBox] = useState();
  return (
    <div>
      <h1>Color Box Maker</h1>
      <div>
        <Box />
      </div>
    </div>
  );
};

export default Boxlist;
