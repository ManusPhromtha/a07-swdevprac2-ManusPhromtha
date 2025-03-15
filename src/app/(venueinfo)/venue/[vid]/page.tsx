import Image from "next/image"

export default function CarDetailPage( {params} : { params: {vid:string}} ) {

    /**
     * Mock Data for Demonstration Only
     */
    const mockCarRepo = new Map()
    mockCarRepo.set("001", {name: "The Bloom Pavilion", image: "/img/bloom.jpg"})
    mockCarRepo.set("002", {name: "Spark Space", image: "/img/sparkspace.jpg"})
    mockCarRepo.set("003", {name: "The Grand Table", image: "/img/grandtable.jpg"})

    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">Venue ID {params.vid}</h1>
            <div className="flex flex-row my-5">
                <Image src={ (mockCarRepo.get(params.vid)).image }
                alt='Car Image'
                width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%]"/>
                <div className="text-md mx-5">{ (mockCarRepo.get(params.vid)).name }</div>
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    return [{vid:'001'},{vid:'002'},{vid:'003'}]
}