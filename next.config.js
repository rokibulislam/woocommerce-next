require('dotenv').config()
const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
        WP_API_BASE_URL: "http://wpcontact.test/wp-json",
        WC_CONSUMER_KEY: "ck_2e485230591448ccb2e0412a6cbd84c24b22ff9e",
        WC_CONSUMER_SECRET: "cs_554db16d0ca71a139c6e713328f66b17e51b6071"
    },
  }