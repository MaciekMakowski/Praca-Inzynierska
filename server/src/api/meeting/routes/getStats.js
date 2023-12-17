module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "GET",
      path: "/meetings/statistics/data",
      handler: "meeting.getStats",
      config: {
        auth: false,
      },
    },
  ],
};
