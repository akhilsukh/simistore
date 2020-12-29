import Link from "next/link";

export default function card(props) {

    const { title, desc, img } = props;

    return (
        <div className="w-auto h-auto p-2 m-2">
            <img className="w-96 m-auto rounded-sm" src={img}></img>
                <p className="uppercase text-xl pt-4 w-full text-center">
                    {title}
                </p>
                <p className="w-full text-lg text-center">
                    {desc}
                </p>
        </div>
    );
}
