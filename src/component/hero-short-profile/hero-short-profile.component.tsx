import React, { MouseEvent } from 'react'
import { useHistory } from 'react-router-dom';
import IHeroData from '../../interface/IHeroData'
import { ButtonSend } from '../button-send/button-send.component';

const HeroShortProfile = ({ id, name, fullName, image }:IHeroData) => {
  const history = useHistory();

  const onClickDetails = (evt: MouseEvent) => {
    history.push(`/details/${id}`);
  }

  return (
    <div>
      <h2>ID: {id}</h2>
      <h2>Name: {name}</h2>
      <h2>Full name: {fullName}</h2>
      <img src={image} alt="Your hero photos"></img>
      <p>
        <ButtonSend onClickButton={onClickDetails} text="Show details"/>
      </p>
    </div>
  )
}

export default HeroShortProfile
