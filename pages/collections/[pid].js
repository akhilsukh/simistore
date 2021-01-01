import Nav from "../../components/nav";
import Head from "next/head";
import json from "../../public/data.json";
import Catalog from "../../components/catalog";
import CatalogItem from "../../components/catalog-items";

export default function CollectionsView(props) {
		const items = json.catalog.items;
		return (
				<div>
						<Head>
								<title>{props.name + " Collection"}</title>
						</Head>
						<Nav/>

						<div className="pb-4 h-64">
								<img className="object-cover h-64 w-full px-0 m-auto z-0 absolute" src={props.banner}  alt="banner image of cloth"/>
								<div className="object-bottom h-64 text-white z-10 m-auto absolute text-center w-fill inset-x-0 py-12 px-8 filter">
										<h1 className="text-5xl text-center">{props.name}</h1>
										<p className="text-lg lg:w-1/2 m-auto my-2 text-center">{props.desc}</p>
								</div>
						</div>

						{/*<div className="flex flex-col w-full max-w-7xl m-auto py-16 items-center justify-center">*/}
						{/*		<h2 className="text-4xl">{props.name}</h2>*/}
						{/*		<p className="m-4">{props.desc}</p>*/}
						{/*</div>*/}

						<Catalog title={"Items in " + props.name + " Collection"}>
								{items.map((item, index) => {
										var itemCollection = item.collection;
										if (itemCollection.includes(props.pid)) {
												return <CatalogItem key={index} title={item.title} price={item.price} img={item.imgMain}
												                    path={'/catalog/' + item.path}/>
										}
								})}
						</Catalog>

				</div>
		);
}

export async function getStaticPaths() {
		const items = json.catalog.items;
		const collections = json.collections.list;

		var paths = [];
		for (let i = 0; i < collections.length; i++) {
				paths.push(collections[i].id)
		}

		const formattedPaths = paths.map((pid) => ({
				params: {
						pid: pid
				},
		}));

		return {
				paths: formattedPaths,
				fallback: false,
		};
}

export async function getStaticProps({params: {pid}}) {
		// const items = json.catalog.items;
		const collections = json.collections.list;
		var collection;
		for (let i = 0; i < collections.length; i++) {
				if (collections[i].id === pid) {
						collection = collections[i];
				}
		}

		return {
				props: {
						"pid": pid,
						"name": collection.name,
						"desc": collection.desc,
						"banner": collection.banner
				},
		};
}