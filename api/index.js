import axios from 'axios'
import CryptoJS from "crypto-js";
import Oauth from "oauth-1.0a";
import https from 'https';

import {
    WpBaseUrl,
    WcBaseUrl,
    WcNextBaseUrl,
    JWTBaseUrl
} from "./config";

  
// function getOauth() {
//     return Oauth({
//         consumer: {
//             key: process.env.WC_CONSUMER_KEY,
//             secret: process.env.WC_CONSUMER_SECRET
//         },
//         signature_method: "HMAC-SHA1",
//         hash_function: function (base_string, key) {
//             return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
//         }
//     });
// }
  
// function serialize(obj) {
//   var str = [];
//   for (var p in obj)
//     if (obj.hasOwnProperty(p)) {
//       str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
//     }
//   return str.join("&");
// }

// function authorize(url, method){
//   const requestData = {
//     url,
//     method
//   }
//   return serialize(oauth.authorize(requestData));
// }

  
// const getWcHeader = () => {
//     // axios.defaults.baseURL = 'http://wpcontact.test/wp-json//wc/v3';
    
//     const agent = new https.Agent({
//       rejectUnauthorized: false
//     });
    
//     return {
//       auth: {
//         username: process.env.WC_CONSUMER_KEY,
//         password: process.env.WC_CONSUMER_SECRET
//       },
//       headers: {
//         "Content-Type": "application/json",
//       },
//       httpsAgent: agent,
//     }
// }


// // const getWcHeader2 = (endpoint = '', method = "GET", postData = {}) => {
// //     // axios.defaults.baseURL = WcBaseUrl;
// //     axios.defaults.baseURL = 'http://wpcontact.test/wp-json/wc/v3';
// //     const oauth = getOauth();

// //     const requestData = {
// //       consumer_key: process.env.WC_CONSUMER_KEY,
// //       consumer_secret: process.env.WC_CONSUMER_SECRET,
// //     }

// //     const agent = new https.Agent({
// //       rejectUnauthorized: false
// //     });
  
// //     return {
// //       // params: oauth.authorize(requestData)
// //     }
// //   }


// export const wcRequest = (query = '') => {
//     return new Promise((resolve, reject) => {
//       axios.defaults.baseURL = 'http://wpcontact.test/wp-json/wc/v3';

//       axios.interceptors.request.use(req => {

//         const oauth = getOauth();
//         const concat_str = req.url.indexOf("?") > -1 ? "&" : "?";
//         const url = req.baseURL + req.url;
    
//         req.url = url + concat_str + serialize( oauth.authorize(req))
//         // req.headers = oauth.toHeader(oauth.authorize(req))

//         console.log('hello');
//         console.log(req.headers);
//         // Important: request interceptors **must** return the request.
//         return req;
//       });
// //, getWcHeader2(query)
//       axios.get(query).then(response => {
//         if (response.status === 200) {
//           resolve(response);
//         } else {
//           reject(response);
//         }
//       }).catch(err => {
//         console.log(err);
//         resolve(err.response);
//       })
//     });
//   }

export const fetchCart = async () => {

}

export const addProductToCart = ( postData ) => {

}

export const clearCartItems = async () => {

}

export const removeProductFromCart = async (key) => {

}

export const fetchCoupons = async (code) => {

}

export const applyCoupon = async (code) => {

}

export const removeCoupon = async () => {
    
}

export const fetcheShipping = async () => {

}

export const updateShipping = async (id) => {

}

export const calculateShipping = async (postData) => {

}

export const createOrder = async (postData) => {

}

export const updateOrder = async (orderId, postData) => {

}

export const paymentProcess = async (postData) => {

}

export const loginUser = async (postData) => {

}

export const createCustomer = async (postData) => {

} 

export const updateCustomer = async (userId,userData) => {

} 

export const fetchWishlistItems = async () => {

}

export const addItemToWishlist = async (postData) => {

} 

export const removeItemFromWishlist = async (postData) => {

}