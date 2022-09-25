const withPWA = require("next-pwa");

const nextPwa = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable : process.env.NODE_ENV === 'development'
  },
})


module.exports = nextPwa
