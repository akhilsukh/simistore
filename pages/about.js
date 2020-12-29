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
      <div className="py-10 mx-8">
        {/* <h1 className="text-2xl text-center text-accent-1">About SimiSews</h1> */}
        <div className="max-w-4xl m-auto my-4">
          <h2 className="text-xl my-4 italic">Nature Inspired. Forever.</h2>
          <p className="my-4">
            SimiSews was inspired by the unique style and energy nature and its ever changing seasons display. Come visit our nature-inspired catalog and connect with the quality items that we love to share.
          </p>
          <p className="my-4">
            Our variety of creative items suit a wide range of styles, sizes and price points. We aim to inspire our customers to be the best version of themselves and feel great, both inside and out.
          </p>
          <img className="m-auto my-4 w-full" src="https://static.wixstatic.com/media/b29918_cdfc7c46f1894ebd94bd64d10c858b5a~mv2.jpg/v1/crop/x_0,y_0,w_2098,h_1227/fill/w_940,h_550,al_c,q_85,usm_0.66_1.00_0.01/IMG_2933_edited.webp"></img>
        </div>

        <div className="max-w-4xl m-auto mt-12">
          <h2 className="text-4xl">Contact Us</h2>
          <p className="text-lg my-2">Email us at simivsukh@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
