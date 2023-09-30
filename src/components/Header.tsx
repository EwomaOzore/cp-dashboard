import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Typography } from 'antd';
import mail from '../assets/Mail.svg';
import tag from '../assets/tag.svg';
import check from '../assets/User_Check.svg';
import close from '../assets/User_Close.svg';
import voice from '../assets/User_Voice.svg';

const items: MenuProps['items'] = [
    {
        key: '1',
        label: 'Applied',
    },
    {
        key: '2',
        label: 'Shortlisted',
    },
    {
        key: '3',
        label: 'Technical Interview',
    },
    {
        key: '4',
        label: 'Opportunity Browsing',
    },
    {
        key: '5',
        label: 'Video Interview I',
    },
    {
        key: '6',
        label: 'Video Interview II',
    },
    {
        key: '7',
        label: 'Video Interview III',
    },
    {
        key: '8',
        label: 'Offer',
    },
    {
        key: '9',
        label: 'Withdrawn',
    },
];

const Header: React.FC = () => {

    return (
        <div className='p-5 flex justify-between'>
            <div>
                <p className="text-[#1D4ED8] cursor-pointer font-bold text-lg font-poppins">
                    London Internship Program
                </p>
                <p className='text-[#0B0B0B]'>London</p>
            </div>
            <Dropdown
                menu={{
                    items,
                    selectable: true,
                    defaultSelectedKeys: ['9'],
                }}
            >
                <Typography.Link>
                    <div className='bg-white rounded-lg p-1 px-5'>
                        <Space className='-mb-10 justify-between'>
                            <p className='font-semibold text-[#1D4ED8]'>Opportunity Browsing</p>
                            <DownOutlined className='mb-4 ml-10' />
                        </Space>
                    </div>
                </Typography.Link>
            </Dropdown>
            <Space className='flex flex-row' direction="vertical">
                <div className='flex'>
                    <img src={tag} alt="" className='bg-white rounded-lg mr-2 cursor-pointer p-1' />
                    <img src={close} alt="" className='bg-white rounded-lg mr-2 cursor-pointer p-1' />
                    <img src={check} alt="" className='bg-white rounded-lg mr-2 cursor-pointer p-1' />
                    <img src={voice} alt="" className='bg-white rounded-lg mr-2 cursor-pointer p-1' />
                    <img src={mail} alt="" className='bg-white rounded-lg mr-2 cursor-pointer p-1' />
                </div>
                <div>
                    <Dropdown.Button
                        icon={<DownOutlined />}
                        menu={{ items }}
                        className='bg-[#1D4ED8] rounded-lg'
                    >
                        <p className='font-semibold text-white'>Move To Video Interview I</p>
                    </Dropdown.Button>
                </div>
            </Space>
        </div>
    );
};

export default Header;
