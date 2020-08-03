import Nav from "../../components/nav";
import Head from "next/head";

export default function PageBags() {
  return (
    <div>
      <Head>
        <title>Bags</title>
      </Head>
      <Nav />
      <div className="py-10">
        <h1 className="text-2xl text-center text-accent-1">Bags Page</h1>
      </div>
    </div>
  );
}
