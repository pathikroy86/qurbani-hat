import OrderForm from '@/components/OrderForm';
import { fetchAllAnimals } from '@/lib/data-load';
import Image from 'next/image';

const AnimalDetails = async ({ params }) => {
    const { id } = await params;
    const data = await fetchAllAnimals();
    const res = data.find(animal => animal.id == id);
    const { name, breed, category, price, weight, image, location, type, age, description } = res;
    return (
        <div className='w-11/12 mx-auto py-5 md:py-8'>
            <h1 className='text-[#1F2A24] text-2xl md:text-4xl font-bold mb-4'>Animal Details</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                    <Image className='h-[400px] w-full rounded-lg object-cover'
                        src={image}
                        alt={name}
                        width={400}
                        height={300}
                    />
                </div>
                <div className='bg-base-200 px-5 py-5 rounded-lg'>
                    <h1 className='text-[#1F2A24] text-3xl font-bold mb-2'>{name}</h1>
                    <p className='text-[#6D756F] mb-4'>{type} / {breed} / {category}</p>
                    <h2 className='text-[#1F7A4D] text-2xl font-bold mb-4'>Tk {price}</h2>
                    <p className='text-[#1F2A24] font-medium mb-4'>Weight: {weight} kg</p>
                    <p className='text-[#1F2A24] font-medium mb-4'>Age: {age} years</p>
                    <p className='text-[#1F2A24] font-medium mb-4'>Location: {location}</p>
                    <p className='text-[#6D756F]'>{description}</p>
                </div>
            </div>
            <OrderForm></OrderForm>
        </div>
    );
};

export default AnimalDetails;
