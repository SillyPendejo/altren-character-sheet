import React from 'react'
import Header, { ICharacterSheetHeaderProps } from './components/Header'
import CharacterSheet from './components/Sheet'



const CharacterSheetPage: React.FC<ICharacterSheetHeaderProps> = () => {
    return (
        <>
            <Header/>
            <CharacterSheet />
        </>
    )
}

export default CharacterSheetPage