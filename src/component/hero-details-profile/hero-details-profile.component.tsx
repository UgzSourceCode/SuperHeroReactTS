import React from 'react'
import { IHeroDataDetails } from '../../interface/IHeroDataDetails'
import "./hero-details-profile.styles.css"

const HeroDetailsProfile = ({id, name, fullName, image, gender, race, weight, height}: IHeroDataDetails) => {
  return (
    <div>
      <div className="table">
        <div className="table-row">
          <div className="table-cell">Name:</div>
          <div className="table-cell last-cell">{name}</div>
        </div>
        <div className="table-row">
          <div className="table-cell">ID:</div>
          <div className="table-cell last-cell">{id}</div>
        </div>
        <div className="table-row">
          <div className="table-cell">Full name:</div>
          <div className="table-cell last-cell">{fullName}</div>
        </div>
        <div className="table-row">
          <div className="table-cell">Photo:</div>
          <div className="table-cell last-cell"><img className="avatar" src={image} alt="Avatar of this hero" /></div>
        </div>
        <div className="table-row">
          <div className="table-cell">Gender:</div>
          <div className="table-cell last-cell">{gender}</div>
        </div>
        <div className="table-row">
          <div className="table-cell">Race:</div>
          <div className="table-cell last-cell">{race}</div>
        </div>
        <div className="table-row">
          <div className="table-cell">Weight:</div>
          <div className="table-cell last-cell">{weight}</div>
        </div>
        <div className="table-row">
          <div className="table-cell">Height:</div>
          <div className="table-cell last-cell">{height}</div>
        </div>
      </div>
    </div>
)
}

export default HeroDetailsProfile
