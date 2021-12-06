import React from "react";
import s from './Map.module.scss';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const Maps = () => (


  <YMaps>
    <div className={s.mapWrap}>
      <Map state={{ center: [55.755500, 37.611787], zoom: 15 }}>
        <Placemark
          modules={['geoObject.addon.balloon']}
          geometry={[55.755500, 37.611787]}
          options={{
            iconColor: 'rgb(255,0,0)'
          }}
          properties={{
            balloonContentHeader: 'Встречаемся тут!'
            // balloonContentBody: 'Встречаемся тут!'
            // balloonContentFooter: "Подвал"
          }} />
      </Map>
    </div>
  </YMaps>
);

export default Maps;
