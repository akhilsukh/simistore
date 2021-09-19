import Link from "next/link";

export default function  CatalogItem(props) {

    const {title, price, img, path} = props;

    return (
        <Link href={path}>
            <div className="w-auto h-auto p-2 m-2 mb-4 cursor-pointer hover:bg-gray-200 hover:rounded-lg catalog-box">
                <img className="w-96 m-auto transform-gpu rounded-sm catalog-box-image" src={img}/>
                <p className="text-lg pt-2 w-full text-center catalog-box-title">
                    {title}
                </p>
                <p className="w-full text-center text-gray-800 catalog-box-price">
                    {price}
                </p>
            </div>
        </Link>
    );
}
