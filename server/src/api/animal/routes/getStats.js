module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "GET",
      path: "/animals/statistics/data",
      handler: "animal.getStats",
      config: {
        auth: false,
      },
    },
  ],
};
