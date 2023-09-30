import React from 'react';

interface CandidateItemProps {
    name: string;
    state: string;
    country: string;
    education: string;
    hashtag: string;
}

const CandidateItem: React.FC<CandidateItemProps> = ({ name, state, country, education, hashtag }) => {
    // Extract initials from the first and second name
    const initials = name
        .split(' ')
        .slice(0, 2)
        .map((namePart) => namePart[0])
        .join('');

    return (
        <div className='flex items-center py-2 border-b border-gray-200'>
            <input id='#' type='checkbox' className='mr-5' />
            <div className=' w-16 h-16 rounded-full bg-[#EDF4FF] text-[#D0E1FF] text-3xl flex items-center justify-center mr-5'>
                {initials}
            </div>
            <div className='flex-grow'>
                <p className='font-bold'>{name}</p>
                <p className=' font-semibold'>{state}, {country}</p>
                <p>{education}</p>
                <p className='text-[#1D4ED8]'>#{hashtag}</p>
                <div className='flex mt-1'>
                    <span className='text-[#037092] font-thin mr-3 cursor-pointer border rounded-2xl px-2 bg-[#F3FAFC]'>New York</span>
                    <span className='text-[#037092] font-thin mr-3 cursor-pointer border rounded-2xl px-2 bg-[#F3FAFC]'>Marketing</span>
                    <span className='text-[#037092] font-thin mr-3 cursor-pointer border rounded-2xl px-2 bg-[#F3FAFC]'>London</span>
                </div>
            </div>
        </div>
    );
};

export default CandidateItem;
