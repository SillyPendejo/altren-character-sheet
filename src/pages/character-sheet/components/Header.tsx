import React from "react";

export interface ICharacterSheetHeaderProps {}

const Header: React.FC<ICharacterSheetHeaderProps> = () => {
  return (
    <header className="flex justify-start items-center w-screen h-12 mb-2 px-5 gap-7 bg-amber-700 text-white text-xl ">
      <div>Альтрен сила</div>
      <a
        className="underline"
        rel="noreferrer"
        target="_blank"
        href="https://docs.google.com/document/d/1vkRXUlUhQfK_n9pQ8-XV-Uf3BXWyCKDN/edit#heading=h.5dmeztpjukr3"
      >
        <div>Рулбук</div>
      </a>
    </header>
  );
};

export default Header;
