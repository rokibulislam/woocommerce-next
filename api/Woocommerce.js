import axios from "axios";
import Oauth from "oauth-1.0a";
import CryptoJS from "crypto-js";

const baseURL = "http://wpcontact.test/wp-json/wc/v3/";

function wcRequest(endpoint, params, method = 'GET' ) {
  const oauth = getOauth();

  const requestData = {
    url: baseURL + endpoint,
    method,
    params
  };

  const requestHTTP = requestData.url + "?" + serialize(oauth.authorize(requestData));
  
  return axios.get(requestHTTP);
}

function serialize(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }

function getOauth() {
  return Oauth({
    consumer: {
      key: 'ck_2e485230591448ccb2e0412a6cbd84c24b22ff9e',
      secret: 'cs_554db16d0ca71a139c6e713328f66b17e51b6071'
    },
    signature_method: "HMAC-SHA1",
    hash_function: function(base_string, key) {
      return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
    }
  });
}

// export default Woocommerce;
export default wcRequest;