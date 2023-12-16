module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "GET",
      path: "/isolations/statistics/data",
      handler: "isolation.getStats",
      config: {
        auth: false,
      },
    },
  ],
};
