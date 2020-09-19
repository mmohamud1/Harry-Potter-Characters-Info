import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from './Spinner';

const CharacterGrid = ({isLoading, characters}) => {
    return isLoading ? (<Spinner />) : (<section className="cards">
        {characters.map(character => (
            <CharacterItem key={character.yearOfBirth + character.actor} character={character}></CharacterItem>   
    ))}
    </section>);
};

export default CharacterGrid;
