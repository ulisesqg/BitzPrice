import Head from "next/head";

import Nav from "./Nav";
import Index from "../pages";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>BitzPrice App</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/cosmo/bootstrap.min.css"
        />
      </Head>
      <Nav />
      <div className="container">{props.children}</div>
    </>
  );
};

export default Layout;
