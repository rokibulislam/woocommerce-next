import { combineReducers } from "redux";

import { productsReducer } from './reducer/product'
import { cartReducer } from './reducer/cart'
import { userReducer } from './reducer/user'
import { orderReducer } from './reducer/order'
import { wishlistReducer } from './reducer/wishlist'
import { couponReducer } from './reducer/coupon'
import { shippingReducer } from './reducer/shipping'
import { paymentReducer } from './reducer/payment'
import { currencyReducer } from './reducer/currency'
import { countryReducer } from './reducer/country'
import { productCategoryReducer } from './reducer/category'

export default combineReducers({
	products: productsReducer,
	// currencyType: currencyTypeReducer,
	cart: cartReducer,
	coupons: couponReducer,
	payment: paymentReducer,
	shipping: shippingReducer,
	orders: orderReducer,
	countries: countryReducer,
	currentUser: userReducer,
	// productFilterQuery: productFilterReducer,
	productCategories: productCategoryReducer,
	// filterableProductAttribute: filterableProductAttributeReducer,
    wishlist: wishlistReducer
});