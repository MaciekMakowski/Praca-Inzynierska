module.exports = {
    routes: [
      { // Path defined with an URL parameter
        method: 'POST',
        path: '/adoptions/createAdoptionByGuest', 
        handler: 'adoption.createByGuest',
        config: {
          auth:false
        },
      },
    ]
  }