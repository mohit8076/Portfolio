// /* eslint no-use-before-define: 0 */
// /** @type {import('next').NextConfig} */
// const { i18n } = require('./next-i18next.config');
// const {nextPwa} = require('./next-pwa.config')

// const nextConfig = {
//   i18n,
//   reactStrictMode: true,
//   swcMinify: true,
//   nextPwa
// }
// // delete nextPwa.pwa;

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
;
const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
});
module.exports = withPWA({
    i18n,
    reactStrictMode: true,
    swcMinify: true,
})
