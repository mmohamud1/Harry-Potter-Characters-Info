import React from 'react'

const CharacterItem = ({ character }) => {
    //console.log(character);
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={character.image} alt=""/>
                </div>
                <div className="card-back">
                    <h1>{character.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor:</strong> {character.actor}
                        </li>
                        <li>
                            <strong>Ancestry:</strong> {character.ancestry}
                        </li>
                        <li>
                            <strong>Brithday:</strong> {character.dateOfBirth}
                        </li>
                        <li>
                            <strong>Gender:</strong> {character.gender}
                        </li>
                        <li>
                            <strong>Hair Colour:</strong> {character.hairColour}
                        </li>
                        <li>
                            <strong>Eye Colour:</strong> {character.eyeColour}
                        </li>
                        <li>
                            <strong>House:</strong> {character.house}
                        </li>
                        <li>
                            <strong>Patronus:</strong> {character.patronus}
                        </li>
                        <li>
                            <strong>Wand:</strong> {character.wand.wood}, {character.wand.core}, {character.wand.length}"
                        </li>
                    </ul>
                </div>
            </div>      
        </div>
    )
}

export default CharacterItem
