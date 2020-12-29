import Nav from "../components/nav";
import Card from "../components/card";
import CardContainer from "../components/card-container";
import Catalog from "../components/catalog";
import CatalogItem from "../components/catalog-items";
import Head from "next/head";

// import mask1 from "../images/mask1.png"

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>SimiSews</title>
      </Head>
      <Nav />

      <div className="pb-4 h-screen">
        <img className="object-cover h-screen w-full px-0 m-auto z-0 absolute filter" src={"https://static.wixstatic.com/media/b29918_671ae260e3d846b6b482eedf873d44de~mv2.jpeg/v1/fill/w_1122,h_946,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/b29918_671ae260e3d846b6b482eedf873d44de~mv2.webp"} />
        <div className="object-bottom text-white z-10 m-auto absolute text-center w-fill inset-x-0 p-12 pt-20">
          <h1 className="text-6xl font-bold text-center">SimiSews</h1>
          <p className="text-lg lg:w-1/2 m-auto text-center">SimiSews is a leading clothing store based in Bay area, California. New fresh launch to offer great comfort without sacrificing style. Visit us to try our must-have collections for yourself.</p>
        </div>
      </div>

      <CardContainer title="Our Collections" subtext="SimiSews is a simple, yet elegant clothing brand for everyday wear.  Launched with needs of todays lifestyle in mind of busy professionals  who needs to grab quality items you are sure to love. Browse some of our products below.">
        <Card title="Tops" desc="Cotton and Silk tops that you can wear daily." img="https://static.wixstatic.com/media/b29918_9b79bd0b7c204d95b84ecd20d3f9039c~mv2.jpeg/v1/fill/w_555,h_300,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/b29918_9b79bd0b7c204d95b84ecd20d3f9039c~mv2.webp" />
        <Card title="Winter Wear" desc="Stay warm with our versatile additions." img="https://static.wixstatic.com/media/b29918_b5b817d932ee472caa32bd9f4a3ebb39~mv2.jpeg/v1/fill/w_555,h_300,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/b29918_b5b817d932ee472caa32bd9f4a3ebb39~mv2.webp" />
        <Card title="Accessories" desc="Masks, bags and pouches." img="https://static.wixstatic.com/media/b29918_20e55903708c48b8b7d24821a592117d~mv2.jpeg/v1/fill/w_555,h_300,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01/b29918_20e55903708c48b8b7d24821a592117d~mv2.webp" />
      </CardContainer>

      <Catalog title="Catalog">
        <CatalogItem title="Blue White Striped Top" path="" price="19.99" img="https://static.wixstatic.com/media/b29918_31aa9eb704c84b938502da1817af772a~mv2.jpeg/v1/fill/w_573,h_573,al_c,q_80,usm_0.66_1.00_0.01/b29918_31aa9eb704c84b938502da1817af772a~mv2.webp" />
        <CatalogItem title="Botanical Print Silk Top" path="" price="39.99" img="https://static.wixstatic.com/media/b29918_b37d60bee3ac4242be96bd02df15da36~mv2.jpeg/v1/fill/w_573,h_573,al_c,q_80,usm_0.66_1.00_0.01/b29918_b37d60bee3ac4242be96bd02df15da36~mv2.webp" />
        <CatalogItem title="Bag" path="" price="11.99" img="https://static.wixstatic.com/media/b29918_4c8625bc502945ecb6f6f8a80db56957~mv2.jpg/v1/fill/w_573,h_573,al_c,q_80,usm_0.66_1.00_0.01/b29918_4c8625bc502945ecb6f6f8a80db56957~mv2.webp" />
        <CatalogItem title="Pouch" path="" price="7.49" img="https://static.wixstatic.com/media/b29918_07096e7c2e4945db9ed706b16c1b170d~mv2.jpeg/v1/fill/w_573,h_573,al_c,q_80,usm_0.66_1.00_0.01/b29918_07096e7c2e4945db9ed706b16c1b170d~mv2.webpprice" />
        <CatalogItem title="Poncho" path="" price="54.99" img="https://static.wixstatic.com/media/b29918_54d0324695eb46f780014d1df4388266~mv2.jpeg/v1/fill/w_575,h_575,al_c,q_80,usm_0.66_1.00_0.01/b29918_54d0324695eb46f780014d1df4388266~mv2.webp" />
        <CatalogItem title="Ruffled Neck Yellow Top" path="" price ="13.99" img="https://static.wixstatic.com/media/b29918_fa2882cf56444d8a868f6b544df01703~mv2.jpeg/v1/fill/w_575,h_575,al_c,q_80,usm_0.66_1.00_0.01/b29918_fa2882cf56444d8a868f6b544df01703~mv2.webp" />
      </Catalog>
    </div>
  );
}
