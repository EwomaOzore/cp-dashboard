import React from 'react';
import { Content } from 'antd/es/layout/layout';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import CandidateItem from './CandidateItem';

const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
};

const RightContent = () => {
    return (
        <div className='bg-white rounded-lg'>
            <Content style={{ padding: 24 }}>
                <div className='flex justify-between'>
                    <div>
                        <Checkbox onChange={onChange} className='font-semibold text-[#1D4ED8]'>247 Candidates</Checkbox>
                    </div>
                    <div className='flex'>
                        <p className='text-[#1D4ED8] font-semibold cursor-pointer'>Qualified</p>
                        <span className="border-l border-[#F7F8FD] mx-2 h-5"></span>
                        <p className='cursor-pointer font-semibold'>Task <span className='bg-[#F7F8FD] rounded-full p-1 text-[#22215B]'>25</span></p>
                        <span className="border-l border-[#F7F8FD] mx-2 h-5"></span>
                        <p className='cursor-pointer font-semibold'>Disqualified <span className='bg-[#F7F8FD] rounded-full p-1 text-[#22215B]'>78</span></p>
                    </div>
                </div>
                <div className='flex flex-col mt-4'>
                    <CandidateItem
                        name='Aaliyah Sanderson'
                        state='Lagos'
                        country='Nigeria'
                        education='Bachelor - Cambridge University (2023 - 2023)'
                        hashtag='top_candidate'
                    />
                    <CandidateItem
                        name='John Doe'
                        state='New York'
                        country='USA'
                        education='Master - Harvard University (2022 - 2024)'
                        hashtag='high_achiever'
                    />
                    <CandidateItem
                        name='Jane Smith'
                        state='London'
                        country='UK'
                        education='PhD - Oxford University (2021 - 2025)'
                        hashtag='scholar'
                    />
                    <CandidateItem
                        name='Michael Johnson'
                        state='Los Angeles'
                        country='USA'
                        education='Bachelor - Stanford University (2023 - 2023)'
                        hashtag='top_performer'
                    />
                    <CandidateItem
                        name='Sara Brown'
                        state='Sydney'
                        country='Australia'
                        education='Master - University of Melbourne (2022 - 2024)'
                        hashtag='achiever'
                    />
                    <CandidateItem
                        name='David Wilson'
                        state='Toronto'
                        country='Canada'
                        education='Bachelor - University of Toronto (2023 - 2023)'
                        hashtag='talented'
                    />
                    <CandidateItem
                        name='Emma Johnson'
                        state='Chicago'
                        country='USA'
                        education='Master - Northwestern University (2022 - 2024)'
                        hashtag='exceptional'
                    />
                    <CandidateItem
                        name='William Davis'
                        state='Berlin'
                        country='Germany'
                        education='Bachelor - Humboldt University (2023 - 2023)'
                        hashtag='outstanding'
                    />
                    <CandidateItem
                        name='Olivia Martin'
                        state='Paris'
                        country='France'
                        education='PhD - Sorbonne University (2021 - 2025)'
                        hashtag='stellar'
                    />
                    <CandidateItem
                        name='Ethan Clark'
                        state='Tokyo'
                        country='Japan'
                        education='Bachelor - University of Tokyo (2023 - 2023)'
                        hashtag='promising'
                    />
                    {/* Add more CandidateItem components for each candidate */}
                </div>
            </Content>
        </div>
    );
};

export default RightContent;
