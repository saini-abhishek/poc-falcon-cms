module.exports = {
  responses: {
    privateAttributes: ["createdAt", "updatedAt", "publishedAt"], // removing this fields from public API
  },
  rest: {
    defaultLimit: 500,
    maxLimit: 1000,
    withCount: true,
  },
};
