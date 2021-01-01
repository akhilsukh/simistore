import Nav from "../../components/nav";
import Card from "../../components/collection";
import CollectionsContainer from "../../components/collections-container";
import Catalog from "../../components/catalog";
import CatalogItem from "../../components/catalog-items";
import Head from "next/head";
import json from "../../public/data.json"

export default function CatalogPage() {
    const items = json.catalog.items;

    return (
        <div>
            <Head>
                <title>Catalog</title>
            </Head>
            <Nav/>

            <Catalog title="Catalog">
                {items.map((item, index) => {
                    return <CatalogItem key={index} title={item.title} price={item.price} img={item.imgMain} path={'catalog/' + item.path}/>
                })}
            </Catalog>
        </div>
    );
}