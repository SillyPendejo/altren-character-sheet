import React, { SetStateAction } from "react";
import Icon from "@mdi/react";
import { mdiMinusThick, mdiPlusThick } from "@mdi/js";

export interface IStatControlsProps {
  current: number;
  max: number;
  name: string;
  setCurrent: (value: SetStateAction<number>) => void;
  filledIconPath: string;
  emptyIconPath: string;
}

const StatControls: React.FC<IStatControlsProps> = (props) => {
  const { current, setCurrent, max, name, filledIconPath, emptyIconPath } =
    props;

  const getIconColor = (statName: string) => {
    switch (statName) {
      case "Здоровье": {
        return ["#b91c1c", "#b91c1c"];
      }
      default:
        return ["black", "black"];
    }
  };

  const [filledIconColor, emptyIconColor] = getIconColor(name);

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

  const handleStatIconClick = (index: number) => {
    setCurrent(index + 1);
  };

  const statIconPaths = () => {
    const statIcons: string[] = Array.apply(null, Array(max))
      .fill("empty")
      .fill("filled", 0, current) as string[];
    return statIcons;
  };

  return (
    <div className="flex items-center align-center">
      <div
        className="flex justify-center items-center w-8 h-8 border-2 border-black rounded-md"
        onClick={handleLvlMinus}
      >
        <Icon path={mdiMinusThick} size={0.8} color="black" />
      </div>
      <div className="flex mx-2">
        {statIconPaths().map((icon, index) => {
          const iconPath = icon === "filled" ? filledIconPath : emptyIconPath;
          const iconColor =
            icon === "filled" ? filledIconColor : emptyIconColor;
          return (
            <div onClick={() => handleStatIconClick(index)}>
              <Icon key={index} path={iconPath} size={1} color={iconColor} />
            </div>
          );
        })}
      </div>
      <div
        className="flex justify-center items-center w-8 h-8 mr-3 border-2 border-black rounded-md"
        onClick={handleLvlPlus}
      >
        <Icon path={mdiPlusThick} size={0.8} color="black" />
      </div>
    </div>
  );
};

export default StatControls;
