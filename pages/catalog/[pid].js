import Nav from "../../components/nav";
import Card from "../../components/card";
import CardContainer from "../../components/card-container";
import Catalog from "../../components/catalog";
import CatalogItem from "../../components/catalog-items";
import Head from "next/head";
import Router, { useRouter } from 'next/router'

// import mask1 from "../images/mask1.png"

export default function CatalogView() {
  const { pid } = useRouter().query;

  return (
    <div>
      <Head>
        <title>{pid}</title>
      </Head>
      <Nav />

      <div className="flex flex-col w-full max-w-7xl m-auto py-16 items-center justify-center">
            <h2 className="text-4xl">{pid}</h2>
            <p className="m-4">description</p>
        </div>

    </div>
  );
}
