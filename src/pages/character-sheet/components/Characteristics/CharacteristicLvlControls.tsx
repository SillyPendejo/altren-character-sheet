import React, { useState } from "react";
import Icon from "@mdi/react";
import {
  mdiDiceD4,
  mdiDiceD6,
  mdiDiceD8,
  mdiDiceD10,
  mdiDiceD12,
  mdiDiceD20,
  mdiPlusThick,
  mdiMinusThick,
} from "@mdi/js";

export interface ILvlControlsProps {}

const LvlControls: React.FC<ILvlControlsProps> = () => {
  const [lvl, setLvl] = useState(0);
  const dicePaths = [
    mdiDiceD4,
    mdiDiceD4,
    mdiDiceD6,
    mdiDiceD8,
    mdiDiceD10,
    mdiDiceD12,
    mdiDiceD20,
  ];
  const diceColors = [
    "#7f1d1d",
    "#7f1d1d",
    "#92400e",
    "#f59e0b",
    "#faca1b",
    "#84cc16",
    "#059669",
  ];

  const handleLvlMinus = () => {
    setLvl((prevLvl) => {
      if (prevLvl === 0) return 0;
      return prevLvl - 1;
    });
  };

  const handleLvlPlus = () => {
    setLvl((prevLvl) => {
      if (prevLvl === 6) return 6;
      return prevLvl + 1;
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
      <div className="w-8 text-center text-xl font-semibold">{lvl}</div>
      <div
        className="flex justify-center items-center w-8 h-8 mr-3 border-2 border-black rounded-md"
        onClick={handleLvlPlus}
      >
        <Icon path={mdiPlusThick} size={0.8} color="black" />
      </div>
      <div className="relative">
        <Icon path={dicePaths[lvl]} size={1.8} color={diceColors[lvl]} />
        {lvl === 0 && (
          <div className="absolute top-0 left-8 self-start text-reg align-middle font-bold w-6 h-6 pl-0.5 text-white rounded-full bg-red-700">
            -2
          </div>
        )}
      </div>
    </div>
  );
};

export default LvlControls;
