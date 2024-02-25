// You are creating a function that aids in the maintenance
//  of a musical album collection. The collection is organized
//   as an object that contains multiple albums which are also 
//   objects. Each album is represented in the collection with
//    a unique id as the property name. Within each album object,
//  there are various properties describing information about 
//  the album. Not all albums have complete information.

// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
   
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
      if (value === '') {
    delete records[id][prop]
  }if (prop !== 'tracks' && value !== '' ){
    records[id][prop] = value
    } if (prop === 'tracks' && value !== '' && records[id].hasOwnProperty('tracks') ){
      records[id].tracks.push(value)
    } if (prop === 'tracks' && value !== '' && !records[id].hasOwnProperty('tracks') ){
      records[id].tracks = [value]
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');