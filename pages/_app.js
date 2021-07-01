import Head from "next/head";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackToTop from "components/BackToTop/backToTop";
import BgDashboard from "components/BgDashboard/bgDashboard";
import Footer from "components/Footer/footer";
import Navigation from "components/Navigation/navigation";
import SwitchSectionMainPage from "components/SwitchSectionMainPage/switchSectionMainPage";
import "styles/globals.scss";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Immige</title>
        <meta name="description" content="Immige" />
        <meta charSet="utf-8" />
        <meta name="description" content="" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <Navigation />
        <BgDashboard />
        <SwitchSectionMainPage />
        {children}
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
