export interface ISunData {
  aste: string; // 천문박명(저녁)
  astm: string; // 천문박명(아침)
  civile: string; // 시민박명(저녁)
  civilm: string; // 시민박명(아침)
  latitude: number; // 위도
  latitudeNum: string; // 위도(실수)
  location: string; // 지역
  locdate: number; // 날짜
  longitude: number; // 경도
  longitudeNum: string; // 경도(실수)
  moonrise: string; // 월출
  moonset: string; // 월몰
  moontransit: string; // 월중
  naute: string; // 항해박명(저녁)
  nautm: string; // 항해박명(아침)
  sunrise: string; // 일출
  sunset: string; // 일몰
  suntransit: number; // 일중
}

export interface IGetSunDataResponse {
  items: ISunData[];
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}
