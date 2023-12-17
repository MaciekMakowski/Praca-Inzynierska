module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "GET",
      path: "/guests/statistics/data",
      handler: "guest.getStats",
      config: {
        auth: false,
      },
    },
  ],
};
