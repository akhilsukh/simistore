import Nav from "../../components/nav";
import Card from "../../components/card";
import Head from "next/head";

export default function PageTops() {
  return (
    <div>
      <Head>
        <title>Tops</title>
      </Head>
      <Nav />
      <div className="py-10">
        <h1 className="text-2xl text-center text-accent-1">Tops Page</h1>
      </div>
      <div className="card-container">
        <Card name="White Top" price="9.99" img={require("../../images/shirt1.png")} />
      </div>
    </div>
  );
}
