import React from "react"
import NameAndRace from "./NameAndRace"
import Characteristics from "./Characteristics"
import Stats from "./Stats";

export interface ICharacterSheetProps {}

const CharacterSheet: React.FC<ICharacterSheetProps> = () => {
  return (
    <div className="w-screen p-6">
        <NameAndRace />
        <Characteristics />
        <Stats />
    </div>
  );
};

export default CharacterSheet;
