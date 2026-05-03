import { fetchAllAnimals } from "@/lib/data-load";
import FeaturedCard from "./FeaturedCard";

const FeaturedAnimals = async () => {
    const response = await fetchAllAnimals();
    const featured = response.slice(0, 4);
    console.log(featured);
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className="text-xl md:text-3xl font-bold text-[#1F2A24] mb-5">Featured Animals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    featured.map(animal => <FeaturedCard key={animal.id} animal={animal}></FeaturedCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedAnimals;