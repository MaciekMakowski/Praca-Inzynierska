module.exports = {
    routes: [
      { // Path defined with an URL parameter
        method: 'POST',
        path: '/isolations/addIsolation', 
        handler: 'isolation.createNew',
        config: {
          auth:false
        },
      },
    ]
  }