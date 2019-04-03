const fs = require('fs')
const stations = require('../data/stations.json')
const stationsMeta = require('../data/stationsMeta.json')

var matched = 0

stations.forEach(station => {
  const stationMatched = stationsMeta.find(s => s.name === station.name)

  if (stationMatched !== undefined) {
    matched++
    station.name_clean = stationMatched.name_clean
  }
})

fs.writeFile('./data/stations.json', JSON.stringify(stations, null, 2), () => {
  console.log(`All done, ${matched}/${stations.length} matched`)
})
