module.exports = {
    routes: [
      { // Path defined with an URL parameter
        method: 'GET',
        path: '/animals/info/:petid', 
        handler: 'animal.getAnimalInfo',
        config: {
          auth:false
        },
      },
    ]
  }