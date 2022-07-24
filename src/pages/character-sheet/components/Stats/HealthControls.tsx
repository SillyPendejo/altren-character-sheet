import React, { SetStateAction } from "react";
import Icon from "@mdi/react";
import { mdiHeart as filledIconPath, mdiHeartOutline as emptyIconPath} from "@mdi/js";

export interface IHealthControlsProps {
  current: number;
  max: number;
  setCurrent: (value: SetStateAction<number>) => void;
}


const HealthControls: React.FC<IHealthControlsProps> = (props) => {
  const { current, setCurrent, max } = props;
  
  const [filledIconColor, emptyIconColor] = ["#b91c1c", "#b91c1c"]

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
      <div className="flex mx-2">
        {statIconPaths().map((icon, index) => {
          const iconPath = icon === "filled" ? filledIconPath : emptyIconPath
          const iconColor = icon === "filled" ? filledIconColor : emptyIconColor
          return (
          <div onClick={() => handleStatIconClick(index)}>
            <Icon key={index} path={iconPath} size={1} color={iconColor} />
          </div>
        )})}
      </div>
    </div>
  );
};

export default HealthControls;