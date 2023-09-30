import React from 'react';
import { Content } from 'antd/es/layout/layout';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import CandidateItem from './CandidateItem';

const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
};

type Candidate = {
    name: string;
    state: string;
    country: string;
    education: string;
    hashtag: string;
};

type RightContentProps = {
    candidates: Candidate[];
};

const RightContent = ({ candidates }: RightContentProps) => {
    return (
        <div className="bg-white rounded-lg">
            <Content style={{ padding: 24 }}>
                <div className="flex justify-between">
                    <div>
                        <Checkbox onChange={onChange} className="font-semibold text-[#1D4ED8]">
                            {candidates.length} Candidates
                        </Checkbox>
                    </div>
                    <div className="flex">
                        <p className="text-[#1D4ED8] font-semibold cursor-pointer">Qualified</p>
                        <span className="border-l border-[#F7F8FD] mx-2 h-5"></span>
                        <p className="cursor-pointer font-semibold">
                            Task <span className="bg-[#F7F8FD] rounded-full p-1 text-[#22215B]">25</span>
                        </p>
                        <span className="border-l border-[#F7F8FD] mx-2 h-5"></span>
                        <p className="cursor-pointer font-semibold">
                            Disqualified <span className="bg-[#F7F8FD] rounded-full p-1 text-[#22215B]">78</span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    {candidates.map((candidate) => (
                        <CandidateItem
                            key={candidate.name}
                            name={candidate.name}
                            state={candidate.state}
                            country={candidate.country}
                            education={candidate.education}
                            hashtag={candidate.hashtag}
                        />
                    ))}
                </div>
            </Content>
        </div>
    );
};

export default RightContent;
