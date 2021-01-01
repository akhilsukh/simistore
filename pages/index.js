import Nav from "../components/nav";
import Collection from "../components/collection";
import CollectionsContainer from "../components/collections-container";
import Catalog from "../components/catalog";
import CatalogItem from "../components/catalog-items";
import Head from "next/head";
import json from "../public/data.json";

export default function IndexPage() {
  const items = json.catalog.items;
  const collections = json.collections.list;

    return (
    <div>
      <Head>
        <title>SimiSews</title>
      </Head>
      <Nav />

      <div className="pb-4 h-screen">
        <img className="object-cover h-screen w-full px-0 m-auto z-0 absolute" src={"https://static.wixstatic.com/media/b29918_671ae260e3d846b6b482eedf873d44de~mv2.jpeg/v1/fill/w_1122,h_946,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/b29918_671ae260e3d846b6b482eedf873d44de~mv2.webp"}  alt="banner image of cloth"/>
        <div className="object-bottom text-white z-10 m-auto absolute text-center w-fill inset-x-0 py-12 px-8 filter">
          <h1 className="text-6xl font-bold text-center">SimiSews</h1>
          <p className="text-xl lg:w-1/2 m-auto text-center">SimiSews is a freshly-launched clothing store based in Bay area, California. New fresh launch to offer great comfort without sacrificing style. Visit us to try our must-have collections for yourself.</p>
        </div>
      </div>

      <CollectionsContainer title="Our Collections" subtext="SimiSews is a simple, yet elegant clothing brand for everyday wear.  Launched with needs of todays lifestyle in mind of busy professionals  who needs to grab quality items you are sure to love. Browse some of our products below.">
        {collections.map((collection, index) => {
            return <Collection key={index} title={collection.name} desc={collection.desc} img={collection.banner}
                                path={'collections/' + collection.id}/>
        })}
      </CollectionsContainer>

        <Catalog title="Featured Items">
            {items.map((item, index) => {
                if (item.featured === 1) {
                    return <CatalogItem key={index} title={item.title} price={item.price} img={item.imgMain}
                                        path={'catalog/' + item.path}/>
                }
            })}
        </Catalog>
    </div>
  );
}
