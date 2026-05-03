import Image from "next/image";
import Link from "next/link";


const FeaturedCard = ({ animal }) => {
    const { name, breed, category, price, weight, image, location, id } = animal;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure className="p-3">
                    <Image className="h-64 w-full rounded-xl"
                        src={image}
                        alt={name}
                        width={200}
                        height={100}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-[#6D756F] text-sm ">{breed}/{category}</p>
                    <h2 className="text-[#1F7A4D] text-xl font-bold">Tk {price}</h2>
                    <p className="text-[#6D756F] text-sm ">{weight} | {location}</p>
                    <div className="mt-6">
                        <Link href={`/featuredAnimals/${id}`}><button className="btn bg-[#1F7A4D] text-white btn-block">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;