import React, { useState } from "react";
import StatControls from "./StatControls";
export interface IStatProps {
  name: string;
  filledIconPath: string;
  emptyIconPath: string;
}

const Stat: React.FC<IStatProps> = (props) => {
  const { name, filledIconPath, emptyIconPath } = props;
  const [max, setMax] = useState(4);
  const [current, setCurrent] = useState(4);

  const statValueClassName = "inline-block text-center w-7"

  return (
    <div className="flex mb-2.5 items-center gap-2">
      <label className="text-xl">{name}</label>
      <span className="text-xl font-semibold">
        <span className={statValueClassName}>{current}</span>
        /
        <span className={statValueClassName}>{max}</span>
      </span>
      <StatControls
        current={current}
        max={max}
        name={name}
        setCurrent={setCurrent}
        filledIconPath={filledIconPath}
        emptyIconPath={emptyIconPath}
      />
    </div>
  );
};

export default Stat;
