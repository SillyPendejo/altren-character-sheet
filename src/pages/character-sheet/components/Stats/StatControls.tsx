import React, { SetStateAction, useState } from "react";
import Icon from "@mdi/react";
import { mdiMinusThick, mdiPlusThick } from "@mdi/js";

export interface IStatProps {
  current: number;
  max: number;
  setCurrent: (value: SetStateAction<number>) => void;
}

const StatControls: React.FC<IStatProps> = (props) => {
  const { current, setCurrent, max } = props;
  const handleLvlMinus = () => {
    setCurrent((prevStat) => {
      if (prevStat === 0) return 0;
      return prevStat - 1;
    });
  };

  const handleLvlPlus = () => {
    setCurrent((prevStat) => {
      if (prevStat === max) return max;
      return prevStat + 1;
    });
  };

  return (
    <div className="flex items-center align-center">
      <div
        className="flex justify-center items-center w-8 h-8 border-2 border-black rounded-md"
        onClick={handleLvlMinus}
      >
        <Icon path={mdiMinusThick} size={0.8} color="black" />
      </div>
      <div className="w-8 text-center text-xl font-semibold">{current}</div>
      <div
        className="flex justify-center items-center w-8 h-8 mr-3 border-2 border-black rounded-md"
        onClick={handleLvlPlus}
      >
        <Icon path={mdiPlusThick} size={0.8} color="black" />
      </div>
      <div className="relative"></div>
    </div>
  );
};

export default StatControls;
