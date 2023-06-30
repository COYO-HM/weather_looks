import axios from 'axios';

export const getSunData = async (location = '서울') => {
  const today = new Date();
  const dateString = `${today.getFullYear()}${
    today.getMonth() >= 9 ? today.getMonth() + 1 : '0' + (today.getMonth() + 1)
  }${today.getDate() >= 10 ? today.getDate() : '0' + today.getDate()}`;

  return axios
    .get(
      `https://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getAreaRiseSetInfo?location=${encodeURIComponent(
        location
      )}&locdate=${dateString}&ServiceKey=${import.meta.env.VITE_OPEN_API_KEY}`
    )
    .then((res) => res.data?.response.body);
};
