import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import HeroDetailsProfile from '../../component/hero-details-profile/hero-details-profile.component';
import { TopBar } from '../../component/top-bar/top-bar.component';
import { IHeroDataDetails } from '../../interface/IHeroDataDetails';
import { getHeroDetailsFromAPI } from '../../tools/hero-downloader/hero-downloader';

const HeroDetailsPage = () => {
    let { id } = useParams<{ id: string }>();
    const [hero, setHero] = useState<IHeroDataDetails | undefined>(undefined)

    useEffect(() => {
      getHeroDetailsFromAPI(parseInt(id), (h) => {
        setHero(h);
      });
    }, [id])

    return (
        <div>
            <TopBar />
            <h2>{id}</h2>
            {hero ?
              <HeroDetailsProfile
                id={hero.id}
                name={hero.name}
                fullName={hero.fullName}
                image={hero.image}
                gender={hero.gender}
                race={hero.race}
                weight={hero.weight}
                height={hero.height}
              />
            : null }
        </div>
    )
}

export default HeroDetailsPage