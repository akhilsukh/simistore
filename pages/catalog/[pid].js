import Nav from "../../components/nav";
// import fs from "fs";
import path from "path";
import Head from "next/head";
import Router, {useRouter} from 'next/router'
import json from "../../public/data.json"

export default function CatalogView(props) {
		// const {pid} = useRouter().query;

		return (
				<div>
						<Head>
								<title>{props.title}</title>
						</Head>
						<Nav/>

						<div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl m-auto p-8">
								<div className="col-span-1 p-4">
										<img className="text-5xl" src={props.imgMain} alt="item image"/>
								</div>

								<div className="col-span-1 p-4">
										<h2 className="text-4xl w-full">{props.title}</h2>
										<h3 className="my-4 text-2xl">${props.price}</h3>
										<h3 className="text-lg mt-6">Description:</h3>
										<p className="m-4 text-lg text-gray-800">{props.desc}</p>
										<h3 className="text-lg mt-6">Product Info:</h3>
										<p className="mx-4 my-2 text-lg text-gray-800">{"Length: " + props.size.length}</p>
										<p className="mx-4 my-2 text-lg text-gray-800">{"Fits Size: " + props.size.fitsSize}</p>
										<h3 className="text-lg mt-6">Fabric & Care: </h3>
										<p className="mx-4 my-2 text-lg text-gray-800">Machine Washable.</p>
								</div>
						</div>
				</div>
		);
}

export async function getStaticPaths() {
		const items = json.catalog.items;
		var path = [];
		for (var i = 0; i < items.length; i++) {
				path.push(items[i].path)
		}

		const paths = path.map((pid) => ({
				params: {
						pid: pid
				},
		}));

		return {
				paths: paths,
				fallback: false,
		};
}

export async function getStaticProps({params: {pid}}) {
		const items = json.catalog.items;
		var item;
		for (let i = 0; i < items.length; i++) {
				if (items[i].path === pid) {
						item = items[i];
				}
		}

		return {
				props: {
						"pid": pid,
						"title": item.title,
						"price": item.price,
						"size": item.sizing,
						"imgMain": item.imgMain.toString(),
						"desc": item.desc
				},
		};
}