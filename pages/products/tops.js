import Nav from "../../components/nav";
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
    </div>
  );
}
