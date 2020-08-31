import React, { ChangeEvent, MouseEvent, useState } from 'react';
import HeroBar from '../../component/hero-bar/hero-bar.component';
import HeroShortProfile from '../../component/hero-short-profile/hero-short-profile.component';
import { TopBar } from '../../component/top-bar/top-bar.component';
import IHeroData from '../../interface/IHeroData';
import { getHeroFromAPI } from '../../tools/hero-downloader/hero-downloader';

const HomePages = () => {
  const [heroId, setHeroId] = useState<number>(1);
  const [hero, setHero] = useState<IHeroData | undefined>(undefined);

  const handleChangeId = (evt: ChangeEvent<HTMLInputElement>):void => {
    setHeroId(parseInt(evt.target.value));
  }

  const onClickShow = (evt: MouseEvent): void => {
    getHeroFromAPI(heroId, (h) => {
      setHero(h);
    });
  }

  return (
    <div>
      <TopBar />
      <HeroBar value={heroId} onChangeValue={handleChangeId} onClickShow={onClickShow} />
      { hero ?
        <HeroShortProfile
          id={hero.id}
          image={hero.image}
          name={hero.name}
          fullName={hero.fullName}
        />
        : null
      }
    </div>
  )
}

export default HomePages;