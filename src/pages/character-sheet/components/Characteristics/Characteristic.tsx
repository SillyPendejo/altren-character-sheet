import React from "react"
import CharacteristicLvlControls from "./CharacteristicLvlControls"

export interface ICharacteristicProps {
    name: string
}

const Characteristic: React.FC<ICharacteristicProps> = (props) => {
    const { name } = props
  return (
    <div className="flex mb-2.5 items-center">
        <div className="w-40 text-xl ">{name}</div>
        <CharacteristicLvlControls />
    </div>
  )
}

export default Characteristic