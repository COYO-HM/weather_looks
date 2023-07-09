import { ReactComponent as Korea } from '@assets/map/Korea.svg';
import { container, mapContainer } from '@components/Map/Map.css.ts';
import { useState } from 'react';

const Map = () => {
  const [selectedRegion, setSelectedRegion] = useState('Korea');

  console.log(selectedRegion);

  const onClick = (e: any) => {
    console.log(e.target.id);
    setSelectedRegion(e.target.id);
  };

  return (
    <div className={container}>
      <Korea className={mapContainer} onClick={onClick} />
    </div>
  );
};

export default Map;
