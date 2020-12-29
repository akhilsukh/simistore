import Link from "next/link";

export default function CardContainer(props) {

    const { children, subtext, title } = props;

    return (
        <div className="bg-gray-100 py-16">
            <div className="flex flex-col w-full max-w-7xl m-auto items-center justify-center">
                <h2 className="text-4xl">{title}</h2>
                <p className="m-4">{subtext}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                    {children}
                </div>
            </div>
        </div>


    );
}
