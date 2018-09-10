import { CUSTOM_APP_DATA } from './app-data';
import { CUSTOM_META_DATA } from './meta-data';

export const CUSTOM_CONFIG = {
  // Add Your custom configs hereh
  prodApiEndpoint: 'https://ngspree-api.herokuapp.com/',
  // prodApiEndpoint: 'http://localhost:3000/',
  frontEndUrl: 'https://angularspree.firebaseapp.com/',
  appName: 'Angularspree',
  fevicon: 'https://via.placeholder.com/350x150',
  header: {
    brand: {
      logo: '/assets/default/logo.svg',
      name: 'Angularspree',
      height: '42',
      width: '140'
    },
    searchPlaceholder: 'Find good furniture for me',
    showGithubRibon: false
  },
  showDummyCardInfo: true,
  // Following are the test crediantials for payubiz payment gateway.
  payuBizSalt: '***REMOVED***',
  payuBizKey: '***REMOVED***',
  freeShippingAmount: 50,
  currency_symbol: '$', // USD $
  PaymentMethodCod: 'COD',
  PaymentMethodPayubiz: 'Payubiz',
  defaultPaymentMethod: 'Payubiz',
  reviewsDisplayLimit: 5,

  ...CUSTOM_APP_DATA,
  ...CUSTOM_META_DATA
};
