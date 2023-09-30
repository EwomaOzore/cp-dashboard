import React from 'react';
import { Layout, theme } from 'antd';
import { FileTextOutlined, SearchOutlined, DownOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Typography } from 'antd';
import RightContent from './RightContent';

const { Content } = Layout;

const items: MenuProps['items'] = [
    {
        key: '1',
        label: 'Item 1',
    },
];

const Body = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div className='flex'>
            <Content style={{ margin: '0px 16px 0', overflow: 'initial' }}>
                <Input size="large" placeholder="Search by name, edu, exp or #tag" className='mb-5' prefix={<SearchOutlined />} />
                <div className='flex justify-between bg-white px-5 py-5 border border-b-gray-300'>
                    <p className='font-semibold text-xl text-black'>Filters</p>
                    <p>0 Selected</p>
                </div>
                <div className='rounded-lg' style={{ textAlign: 'left', background: colorBgContainer }}>
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
                <RightContent />
            </div>
        </div>
    )
}

export default Body;
