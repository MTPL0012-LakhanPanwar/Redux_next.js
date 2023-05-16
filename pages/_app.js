import "../styles/globals.css";
import "../styles/featuredproducts.css";
import {wrapper} from "../store/index";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.1/css/all.css"
      />
      <Component {...pageProps} />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
      </div>
    </>
  );
}

export default wrapper.withRedux(MyApp); 
