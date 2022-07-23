import React from "react";

export interface INameRaceProps {}

const NameAndRace: React.FC<INameRaceProps> = () => {
  return (
    <div className="flex gap-2 mb-10">
      <div className="flex-col">
        <input
          className="p-2 w-64 border-2 text-lg rounded-md border-amber-900"
          id="character-name"
          type="text"
        ></input>
        <div>
          <label className="w-64" htmlFor="character-name">
            Имя персонажа
          </label>
        </div>
      </div>
      <div className="flex-col">
        <input
          className="p-2 w-64 border-2 text-lg rounded-md border-amber-900"
          id="character-name"
          type="text"
        ></input>
        <div>
          <label className="w-64" htmlFor="character-name">
            Раса
          </label>
        </div>
      </div>
    </div>
  )
}

export default NameAndRace;
