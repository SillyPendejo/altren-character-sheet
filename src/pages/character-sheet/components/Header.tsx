import React from "react";

export interface ICharacterSheetHeaderProps {}

const Header: React.FC<ICharacterSheetHeaderProps> = () => {
  return (
    <header className="flex w-screen h-12 mb-2 bg-amber-700 text-white">
      <div>nav</div>
    </header>
  );
};

export default Header;
