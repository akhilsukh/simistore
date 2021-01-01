import Link from "next/link";

export default function Collection(props) {

    const {title, desc, img, path} = props;

    return (
        <Link href={path}>
            <div className="w-auto h-auto p-2 m-2 mb-4 hover:bg-gray-200 hover:rounded-lg cursor-pointer">
                <img className="w-96 m-auto rounded-sm transform-gpu rounded-sm" src={img} alt="collection image"/>
                <p className="text-xl pt-2 w-full text-left">
                    {title}
                </p>
                <p className="w-full text-lg text-left text-gray-700">
                    {desc}
                </p>
            </div>
        </Link>
    );
}
