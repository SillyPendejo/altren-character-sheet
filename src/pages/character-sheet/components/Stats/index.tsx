import React from "react";
import Stat from './Stat' 

export interface IStatsProps {}

const Stats: React.FC<IStatsProps> = () => {
  return (
    <div className="flex-column">
        <Stat name={'Здоровье'}/>
    </div>
  )
}

export default Stats
