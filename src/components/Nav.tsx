import React from 'react';
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import type { MenuProps } from 'antd';
import '../App.css'
import {
    BookOutlined,
    CalendarOutlined,
    FileTextOutlined,
    HeartOutlined,
    HomeOutlined,
    LeftOutlined,
    SettingOutlined,
    ShareAltOutlined,
    UserOutlined,
    UsergroupAddOutlined,
} from '@ant-design/icons';

const items: MenuProps['items'] = [
    HomeOutlined,
    UsergroupAddOutlined,
    CalendarOutlined,
    ShareAltOutlined,
    FileTextOutlined,
    BookOutlined,
    HeartOutlined,
    LeftOutlined,
].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
}));

const others: MenuProps['items'] = [
    SettingOutlined,
    UserOutlined,
].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
}));

const Nav: React.FC = () => {
    return (
        <>
            <Sider
                style={{
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    backgroundColor: 'white',
                    display: 'flex',
                }}
            >
                <Menu items={items} className='mb-64 pl-2' />
                <Menu items={others} className='pl-2' />
            </Sider>

        </>
    );
};

export default Nav;