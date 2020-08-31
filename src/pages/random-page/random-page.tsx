import React, { useEffect, useState } from 'react'
import { ButtonSend } from '../../component/button-send/button-send.component';
import HeroShortProfile from '../../component/hero-short-profile/hero-short-profile.component'
import { TopBar } from '../../component/top-bar/top-bar.component'
import IHeroData from '../../interface/IHeroData';
import { getHeroFromAPI } from '../../tools/hero-downloader/hero-downloader';

const prepareHero = (heroId: number, setHero: (hero: IHeroData) => void) : void => {
  getHeroFromAPI(heroId, (h) => {
    setHero(h);
  });
}

const getNewRandom = (setHero: (hero: IHeroData) => void) : void => {
  const id = 1 + Math.floor((900 - 1) * Math.random());
  prepareHero(id, setHero);
}

const RandomPage = () => {
  const [hero, setHero] = useState<IHeroData | undefined>(undefined);

  useEffect(() => {
    getNewRandom(setHero);
  }, []);

  const nextHero = () => {
    getNewRandom(setHero);
  }

  return (
    <div>
      <TopBar />
      <ButtonSend onClickButton={nextHero} text="Next random hero" />
      {
        hero?
        <HeroShortProfile
          key={hero.id}
          id={hero.id}
          image={hero.image}
          name={hero.name}
          fullName={hero.fullName}
        /> : null
      }
    </div>
  )
}

export default RandomPage
