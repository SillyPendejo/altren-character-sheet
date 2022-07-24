import React, { SetStateAction } from "react";
import Icon from "@mdi/react";
import {
  mdiHeart as fullHeartPath,
  mdiHeartOutline as emptyHeartPath,
  mdiSkull as skullPath,
  mdiHeartBrokenOutline as borkenHeartPath,
} from "@mdi/js";

export interface IHealthControlsProps {
  current: number;
  max: number;
  setCurrent: (value: SetStateAction<number>) => void;
}

const HealthControls: React.FC<IHealthControlsProps> = (props) => {
  const { current, setCurrent, max } = props;

  const [fullHeartColor, emptyHeartColor] = ["#b91c1c", "#b91c1c"];
  const [fullHeartDeathColor, brokenHeartDeathColor] = ["black", "black"];

  const handleStatIconClick = (index: number) => {
    setCurrent(current > 0 ? index + 1 : index * -1 - 1);
  };

  const handleClickSkull = () => {
    if (current === 1) {
      setCurrent(0);
    } else if (current <= 0) {
      setCurrent(1)
    }
  };

  const statIconPaths = () => {
    const statIcons: string[] = Array.apply(null, Array(max))
      .fill("empty")
      .fill("filled", 0, current > 0 ? current : current * -1) as string[];
    return statIcons;
  };

  const skullColor = current > 1 ? "lightGrey" : "grey"

  return (
    <div className="flex items-center align-center">
      <div className="flex mx-2">
        <div></div>
        <div onClick={handleClickSkull}>
          <Icon path={skullPath} size={1} color={skullColor} />
        </div>
        {current > 0 &&
          statIconPaths().map((icon, index) => {
            const iconPath = icon === "filled" ? fullHeartPath : emptyHeartPath;
            const iconColor = icon === "filled" ? fullHeartColor : emptyHeartColor;
            return (
              <div onClick={() => handleStatIconClick(index)}>
                <Icon key={index} path={iconPath} size={1} color={iconColor} />
              </div>
            );
          })}
        {current <= 0 &&
          statIconPaths().map((icon, index) => {
            const  iconPath = icon === "filled" ? borkenHeartPath : emptyHeartPath;
            const  iconColor = icon === "filled" ? fullHeartDeathColor : brokenHeartDeathColor;
            return (
              <div onClick={() => handleStatIconClick(index)}>
                <Icon key={index} path={iconPath} size={1} color={iconColor} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HealthControls;
