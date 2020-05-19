require('dotenv').config();

module.exports = {
  env: {
    SITE_URL: process.env.SITE_URL,
    NO_INDEX: process.env.NO_INDEX,
  },
  /* eslint-disable-next-line no-unused-vars */
  // async exportPathMap(defaultPathMap) {
  //   return {
  //     '/': { page: '/' },
  //   };
  // },
};
