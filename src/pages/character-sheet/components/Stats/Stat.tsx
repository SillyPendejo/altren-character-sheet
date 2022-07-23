import React, { useState } from "react";
import StatControls from "./StatControls";

export interface IStatsProps {
  name: string;
}

const Stat: React.FC<IStatsProps> = (props) => {
  const { name } = props;
  const [max, setMax] = useState(4);
  const [current, setCurrent] = useState(4);

  return (
    <div className="flex mb-2.5 items-center">
      <label className="text-xl mr-4">{name}</label>
      <span className="text-xl mr-5 font-semibold">{current}/{max}</span>
      <StatControls current={current} max={max} setCurrent={setCurrent}/>
    </div>
  );
};

export default Stat;
