module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "GET",
      path: "/resources/statistics/data",
      handler: "resource.getStats",
      config: {
        auth: false,
      },
    },
  ],
};
