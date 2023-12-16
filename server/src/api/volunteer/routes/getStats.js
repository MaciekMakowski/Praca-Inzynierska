module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "GET",
      path: "/volunteers/statistics/data",
      handler: "volunteer.getStats",
      config: {
        auth: false,
      },
    },
  ],
};
