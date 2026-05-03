import { fetchAllAnimals } from "@/lib/data-load";
import Image from "next/image";
import Link from "next/link";

const Banner = async () => {
    const allAnimals = await fetchAllAnimals();

    return (
        <div className='md:grid grid-cols-12 w-11/12 mx-auto bg-[#E7F0E6] py-2 md:py-5 px-3 md:px-8 mt-3 md:mt-8 rounded mb-5 md:mb-8'>
            <div className='col-span-7 md:flex items-center'>
                <div className="space-y-5">
                    <h1 className="text-[#1F2A24] text-2xl md:text-5xl font-bold">Find Trusted Qurbani <br /> animals near you</h1>
                    <p className="text-[#6D756F] text-sm md:text-lg">Explore cows and goats with clear details, fair pricing, and <br /> simple authenticated booking.</p>
                    <Link href="/animals" className='btn bg-[#1F7A4D] text-white font-medium'>Browse Animals</Link>
                </div>
            </div>
            <div className='col-span-5'>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <Image
                            src={allAnimals[0].image}
                            className="w-full"
                            alt="something"
                            width={400}
                            height={400}
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <Image
                            src={allAnimals[1].image}
                            className="w-full"
                            alt="something"
                            fill={true}
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <Image
                            src={allAnimals[2].image}
                            className="w-full"
                            alt="something"
                            fill={true}
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <Image
                            src={allAnimals[3].image}
                            className="w-full"
                            alt="something"
                            fill={true}
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
