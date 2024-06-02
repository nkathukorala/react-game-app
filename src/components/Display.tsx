import { useState } from "react";
interface Props {
  value:number;
}

const Display = ({ value }: Props) => {

  return (
    <>
      <div>{value}</div>
    
      <br></br>
   
    </>
  );
};

export default Display;
