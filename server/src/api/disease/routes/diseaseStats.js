module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "GET",
      path: "/diseases/statistics/data",
      handler: "disease.getStats",
      config: {
        auth: false,
      },
    },
  ],
};
