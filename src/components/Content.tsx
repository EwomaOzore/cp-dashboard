import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import { DownOutlined, FileTextOutlined, SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { MenuProps } from 'antd';
import { Dropdown, Space, Typography } from 'antd';
import RightContent from './RightContent';

const { Content } = Layout;

const items: MenuProps['items'] = [
    {
        key: '1',
        label: 'Item 1',
    },
];

type Candidate = {
    name: string;
    state: string;
    country: string;
    education: string;
    hashtag: string;
};

const candidates: Candidate[] = [
    {
        name: 'Aaliyah Sanderson',
        state: 'Lagos',
        country: 'Nigeria',
        education: 'Bachelor - Cambridge University (2023 - 2023)',
        hashtag: 'top_candidate',
    },
    {
        name: 'John Doe',
        state: 'New York',
        country: 'USA',
        education: 'Master - Harvard University (2022 - 2024)',
        hashtag: 'high_achiever',
    },
    {
        name: 'Jane Smith',
        state: 'London',
        country: 'UK',
        education: 'PhD - Oxford University (2021 - 2025)',
        hashtag: 'scholar',
    },
    {
        name: 'Michael Johnson',
        state: 'Los Angeles',
        country: 'USA',
        education: 'Bachelor - Stanford University (2023 - 2023)',
        hashtag: 'top_performer',
    },
    {
        name: 'Sara Brown',
        state: 'Sydney',
        country: 'Australia',
        education: 'Master - University of Melbourne (2022 - 2024)',
        hashtag: 'achiever',
    },
    {
        name: 'David Wilson',
        state: 'Toronto',
        country: 'Canada',
        education: 'Bachelor - University of Toronto (2023 - 2023)',
        hashtag: 'talented',
    },
    {
        name: 'Emma Johnson',
        state: 'Chicago',
        country: 'USA',
        education: 'Master - Northwestern University (2022 - 2024)',
        hashtag: 'exceptional',
    },
    {
        name: 'William Davis',
        state: 'Berlin',
        country: 'Germany',
        education: 'Bachelor - Humboldt University (2023 - 2023)',
        hashtag: 'outstanding',
    },
    {
        name: 'Olivia Martin',
        state: 'Paris',
        country: 'France',
        education: 'PhD - Sorbonne University (2021 - 2025)',
        hashtag: 'stellar',
    },
    {
        name: 'Ethan Clark',
        state: 'Tokyo',
        country: 'Japan',
        education: 'Bachelor - University of Tokyo (2023 - 2023)',
        hashtag: 'promising',
    },
    // Add more candidates here
];

const Body = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filteredData, setFilteredData] = useState<Candidate[]>(candidates);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);

        const filteredCandidates = candidates.filter((candidate) =>
            candidate.name.toLowerCase().includes(query.toLowerCase())
        );

        setFilteredData(filteredCandidates);
    };

    return (
        <div className="flex">
            <Content style={{ margin: '0px 16px 0', overflow: 'initial' }}>
                <Input
                    size="large"
                    placeholder="Search by name, edu, exp, or #tag"
                    className="mb-5"
                    prefix={<SearchOutlined />}
                    onChange={handleSearch}
                />
                <div className="flex justify-between bg-white px-5 py-5 border border-b-gray-300">
                    <p className="font-semibold text-xl text-black">Filters</p>
                    <p>0 Selected</p>
                </div>
                <div className="rounded-lg" style={{ textAlign: 'left', background: colorBgContainer }}>
                    <div style={{ flex: '40%' }}>
                        <Dropdown
                            menu={{
                                items,
                                selectable: true,
                            }}
                        >
                            <div className='bg-white p-1 px-5 border'>
                                <Typography.Link>
                                    <Space align='center'>
                                        <FileTextOutlined className='text-black' />
                                        <p className='font-semibold text-black mt-3'>Personal Information</p>
                                        <DownOutlined style={{ color: 'black' }} />
                                    </Space>
                                </Typography.Link>
                            </div>
                        </Dropdown>

                        <Dropdown
                            menu={{
                                items,
                                selectable: true,
                            }}
                        >
                            <div className='bg-white p-1 px-5 border'>
                                <Typography.Link>
                                    <Space align='center'>
                                        <FileTextOutlined className='text-black' />
                                        <p className='font-semibold text-black mt-3'>Education</p>
                                        <DownOutlined style={{ color: 'black' }} />
                                    </Space>
                                </Typography.Link>
                            </div>
                        </Dropdown>

                        <Dropdown
                            menu={{
                                items,
                                selectable: true,
                            }}
                        >
                            <div className='bg-white p-1 px-5 border'>
                                <Typography.Link>
                                    <Space align='center'>
                                        <FileTextOutlined className='text-black' />
                                        <p className='font-semibold text-black mt-3'>Work Experience</p>
                                        <DownOutlined style={{ color: 'black' }} />
                                    </Space>
                                </Typography.Link>
                            </div>
                        </Dropdown>

                        <Dropdown
                            menu={{
                                items,
                                selectable: true,
                            }}
                        >
                            <div className='bg-white p-1 px-5 border'>
                                <Typography.Link>
                                    <Space align='center'>
                                        <FileTextOutlined className='text-black' />
                                        <p className='font-semibold text-black mt-3'>Activity Filter</p>
                                        <DownOutlined style={{ color: 'black' }} />
                                    </Space>
                                </Typography.Link>
                            </div>
                        </Dropdown>

                        <Dropdown
                            menu={{
                                items,
                                selectable: true,
                            }}
                        >
                            <div className='bg-white p-1 px-5 border'>
                                <Typography.Link>
                                    <Space align='center'>
                                        <FileTextOutlined className='text-black' />
                                        <p className='font-semibold text-black mt-3'>Advanced Filter</p>
                                        <DownOutlined style={{ color: 'black' }} />
                                    </Space>
                                </Typography.Link>
                            </div>
                        </Dropdown>
                    </div>
                </div>
            </Content>
            <div style={{ flex: '60%', marginRight: '20px' }}>
                <RightContent candidates={searchQuery ? filteredData : candidates} />
            </div>
        </div>
    );
};

export default Body;
