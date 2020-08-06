import Link from "next/link";

export default function card(props) {

    const { name, price, img } = props;

    return (
        <>
            <div className="w-auto h-auto p-2 m-2 border rounded shadow-md">
                <img className="w-64 h-64 border rounded" src={img}></img>
                <div className="flex flex-column justify-between p-2">
                    <h3 className="">
                        {name}
                    </h3>

                    <h3 className="">
                        ${price}
                    </h3>
                </div>
            </div>
        </>
    );
}
