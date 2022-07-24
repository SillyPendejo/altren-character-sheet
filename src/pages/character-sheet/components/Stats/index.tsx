import React from "react";
import Stat from './Stat' 
import { mdiHeart, mdiHeartOutline } from "@mdi/js";
import Health from "./Health";

export interface IStatsProps {}

const Stats: React.FC<IStatsProps> = () => {
  return (
    <div className="flex-column">
        {/* <Stat name={'Здоровье'} filledIconPath={mdiHeart} emptyIconPath={mdiHeartOutline}/> */}
        <Health/>
    </div>
  )
}

export default Stats
