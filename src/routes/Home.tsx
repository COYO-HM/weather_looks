import { useQuery } from 'react-query';
import { getSunData } from '@services/WeatherService.ts';
import { IGetSunDataResponse } from '@/models/weather.ts';

const Home = () => {
  const { data } = useQuery<IGetSunDataResponse>('getSunData', () => getSunData('수원'));
  console.log(data);
  return <></>;
};
export default Home;
