import Nav from "../components/nav";
import Card from "../components/card";
import Head from "next/head";

import mask1 from "../images/mask1.png"

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>simistore</title>
      </Head>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-accent-1">
          Welcome to <b className="text-blue-700">simistore.com</b>
        </h1>
      </div>
      <div className="card-container">
        <Card name="Yellow Mask" price="14.99" img={require("../images/mask1.png")} />
        <Card name="Blue Scarf" price="9.99" img={require("../images/shirt1.png")} />
        <Card name="Polka Dot Mask" price="14.99" img={require("../images/mask2.png")} />
        <Card name="Cotton Mask" price="14.99" img={require("../images/mask1.png")} />
      </div>
    </div>
  );
}
