import IHeroData from "../../interface/IHeroData";
import { IHeroDataDetails } from "../../interface/IHeroDataDetails";

export const getHeroFromAPI = (heroId: number, save: (data: IHeroData) => void): void => {
  fetch(`/api/888348685024612/${heroId}`)
          .then(res => res.json())
          .then((json) => {
            if (json.response === "success") {
              console.log(json);
              save({
                id: json.id,
                name: json.name,
                fullName: json.biography['full-name'],
                image: json.image.url
              });
            }
          })
          .catch(() => console.log("error: download hero fail"))
}

export const getHeroDetailsFromAPI = (heroId: number, save: (data: IHeroDataDetails) => void): void => {
  fetch(`/api/888348685024612/${heroId}`)
          .then(res => res.json())
          .then((json) => {
            if (json.response === "success") {
              console.log(json);
              save({
                id: json.id,
                name: json.name,
                fullName: json.biography['full-name'],
                image: json.image.url,
                gender: json.appearance['eye-color'],
                height: json.appearance['height'][0] + " " + json.appearance['height'][1],
                race: json.appearance['race'],
                weight: json.appearance['weight'][0] + " " + json.appearance['weight'][1]
              });
            }
          })
          .catch(() => console.log("error"))
}