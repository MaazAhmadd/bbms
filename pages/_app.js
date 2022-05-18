import Script from "next/script";
import "../styles/globals.css";
import "animate.css";

import store from "../components/redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"
        strategy="beforeInteractive"
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
