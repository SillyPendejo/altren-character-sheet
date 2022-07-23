import React from "react";
import Characteristic from './Characteristic' 

export interface ICharacteristicsProps {}

const Characteristics: React.FC<ICharacteristicsProps> = () => {
  return (
    <div className="flex-column mb-8">
        <Characteristic name={'Сила'}/>
        <Characteristic name={'Ловкость'}/>
        <Characteristic name={'Интеллект'}/>
        <Characteristic name={'Харизма'}/>
        <Characteristic name={'Выносливость'}/>
    </div>
  )
}

export default Characteristics
