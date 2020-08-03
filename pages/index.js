import Nav from "../components/nav";
import Head from "next/head";

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>SimiCraft</title>
      </Head>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-accent-1">
          Welcome to <b>simicraft.com</b>
        </h1>
      </div>
    </div>
  );
}
