import '../styles/globals.css'

import App from 'next/app'
import Router from 'next/router'
import { Provider } from 'react-redux'
import { wrapper } from '../store/index';

import { useStore } from 'react-redux';

Router.events.on('routeChangeStart', url => {});
Router.events.on('routeChangeComplete', ()=> console.log('complete') );
Router.events.on('routeChangeError', ()=> console.log('error') );


function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  return (
    <Provider store={store}>
      <Component {...pageProps}/>
    </Provider>
  )
  return <Component {...pageProps} />
}

// const makeStore = () => initStore;

// export default wrapper.withRedux(MyApp)
export default wrapper.withRedux(MyApp)
