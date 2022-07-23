import React from "react"

export interface IStatsProps {
    name: string
}

const Characteristic: React.FC<IStatsProps> = (props) => {
   const { name } = props
  return (
    <div className="flex mb-2.5 items-center">
        <label>{name}</label>
        <input type="text"/>
    </div>
  )
}

export default Characteristic