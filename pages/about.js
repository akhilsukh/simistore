import Nav from "../components/nav";
import Card from "../components/card";
import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Nav />
      <div className="py-10">
        <h1 className="text-2xl text-center text-accent-1">About</h1>
      </div>
      <div className="card-container">

      </div>
    </div>
  );
}
