import { useQuery } from 'react-query';
import { getSunDataByLocation } from '@services/WeatherService.ts';
import { GetSunDataResponseModel } from '@models/weather.ts';
import { useEffect, useState } from 'react';

const Home = () => {
  // const [city, setCity] = useState<KoreaCityTypes>('서울');
  // const { data } = useQuery<GetSunDataResponseModel>(['getSunData'], () => getSunDataByCity(city));
  const [location, setLocation] = useState<{ latitude: number; longitude: number }>({
    latitude: 0,
    longitude: 0,
  });
  const { data } = useQuery<GetSunDataResponseModel>(['getSunDataByLocation'], () =>
    getSunDataByLocation(location.longitude, location.latitude)
  );
  const today = new Date();

  console.log(data, location);

  useEffect(() => {
    const navigator = window.navigator;
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition(function (position) {
        console.log(position.coords.latitude, position.coords.longitude);
        setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
      });
    }
  }, []);

  const parseStrToTime = (str: string) =>
    parseInt(str.trim().slice(0, 2)) * 60 + parseInt(str.trim().slice(2, 4));
  const getTimeTheme = () => {
    if (data?.items[0]) {
      const { sunrise, sunset } = data.items[0];
      const now = today.getHours() * 60 + today.getMinutes();
      if (3 * 60 <= now && now < parseStrToTime(sunrise)) {
        // dawn: 3AM ~ sunrise
        return 'dawn';
      } else if (parseStrToTime(sunrise) <= now && now < 8 * 60) {
        // sunrise: sunrise ~ 8AM
        return 'sunrise';
      } else if (8 * 60 <= now && now < 11 * 60) {
        // morning: 8AM ~ 11AM
        return 'morning';
      } else if (11 * 60 <= now && now < 14 * 60) {
        // noon: 11AM ~ 2PM
        return 'noon';
      } else if (14 * 60 <= now && now < parseStrToTime(sunset)) {
        // noon: 2PM ~ sunset
        return 'afternoon';
      } else if (parseStrToTime(sunset) <= now && now < 20 * 60) {
        return 'dinner';
      } else if (20 * 60 <= now && now < 24 * 60) {
        return 'night';
      }
    }
  };

  const timeTheme = getTimeTheme();

  // console.log(timeTheme);

  // const lightMode =

  return <></>;
};
export default Home;
