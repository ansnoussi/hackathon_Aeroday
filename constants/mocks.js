const trips = [
  {
    id: 1,
    date: 'Yesterday',
    distance: '1788 Km',
    from: 'Orly Airport, Orly, France',
    to: 'Tunis-Carthage, Tunis, Tunisie',
  },
  {
    id: 2,
    date: 'Oct 12',
    distance: '469.2 km',
    from: 'Lyon–Bron Airport, Bron, France',
    to: 'Orly Airport, Orly, France',
  },
];

const drivingData = [
  {
    id: 1,
    status: 'bad',
    action: 'breaking',
    icon: require('../assets/images/Icon/BreakingBad.png'),
  },
  {
    id: 2,
    status: 'fair',
    action: 'speeding',
    icon: require('../assets/images/Icon/SpeedingFair.png'),
  },
  {
    id: 3,
    status: 'good',
    action: 'breaking',
    icon: require('../assets/images/Icon/BreakingGood.png'),
  },
];

const location = {
  latitude: 40.73978092263567,
  longitude: -73.87333547273988,
  latitudeDelta: 0.06,
  longitudeDelta: 0.06,
}

export { trips, drivingData, location };
