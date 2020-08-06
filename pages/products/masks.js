import Nav from "../../components/nav";
import Card from "../../components/card";
import Head from "next/head";

export default function PageMasks() {
  return (
    <div>
      <Head>
        <title>Masks</title>
      </Head>
      <Nav />
      <div className="py-10">
        <h1 className="text-2xl text-center text-accent-1">Masks Page</h1>
      </div>
      <div className="card-container">
        <Card name="Yellow Mask" price="14.99" img={require("../../images/mask1.png")} />
        <Card name="Polka Dot Mask" price="14.99" img={require("../../images/mask2.png")} />
        <Card name="Cotton Mask" price="14.99" img={require("../../images/mask1.png")} />
      </div>
    </div>
  );
}
