import Nav from "../../components/nav";
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
    </div>
  );
}
