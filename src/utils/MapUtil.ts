export const MapInfo = {
  Korea: {
    id: 'Korea',
    label: 'region-korea',
    children: [
      'Seoul',
      'Busan',
      'Daegu',
      'Incheon',
      'Gwangju',
      'Daejeon',
      'Ulsan',
      'Sejong',
      'Gyeonggi-do',
      'Gangwon-do',
      'Chungcheongbuk-do',
      'Chungcheongnam-do',
      'Jeollabuk-do',
      'Jeollanam-do',
      'Gyeongsangbuk-do',
      'Gyeongsangnam-do',
      'Jeju-do',
    ],
    location: {
      latitude: 37, // 위도
      longitude: 127, // 경도
    },
  },
  Seoul: {
    id: 'Seoul',
    label: 'region-korea-seoul',
    parent: 'Korea',
    children: [],
    location: {
      latitude: 37, // 위도
      longitude: 127, // 경도
    },
  },
};
