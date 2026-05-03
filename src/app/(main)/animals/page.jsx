
import AnimalCard from '@/components/AnimalCard';
import { fetchAllAnimals } from '@/lib/data-load';
import Link from 'next/link';
import React from 'react';

const AnimalsPage = async () => {
    const animals = await fetchAllAnimals();
    return (
        <div className='w-11/12 mx-auto py-5 md:py-8'>
            <div className='mb-5'>
                <h1 className='text-4xl font-bold'>All Animals</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    animals.map((animal, index) => <AnimalCard key={index} animal={animal}></AnimalCard>)
                }
            </div>
        </div>
    );
};

export default AnimalsPage;