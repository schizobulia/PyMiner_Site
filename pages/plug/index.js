import React, { useState } from 'react';
import Layout from '../../layout/index';
import { FundViewOutlined, CloudDownloadOutlined } from '@ant-design/icons';
import { Card, Skeleton, Avatar, List, Tag } from 'antd';
const { Meta } = Card;


const data = [
    {
        "name": "test",
        "version": "1.0",
        "description": "这是测试插件",
        "icon": "http://py2cn.com/img/favicon.ico",
        "author": "schizobulia",
        "type": "可视化",
        "tag": "仿真,医疗"
    },
    {
        "name": "test",
        "version": "1.0",
        "description": "这是测试插件",
        "icon": "http://py2cn.com/img/favicon.ico",
        "author": "schizobulia",
        "type": "可视化",
        "tag": "仿真,医疗"
    },
    {
        "name": "test",
        "version": "1.0",
        "description": "这是测试插件",
        "icon": "http://py2cn.com/img/favicon.ico",
        "author": "schizobulia",
        "type": "可视化",
        "tag": "仿真,医疗"
    },
    {
        "name": "test",
        "version": "1.0",
        "description": "这是测试插件",
        "icon": "http://py2cn.com/img/favicon.ico",
        "author": "schizobulia",
        "type": "可视化",
        "tag": "仿真,医疗"
    },
    {
        "name": "test",
        "version": "1.0",
        "description": "这是测试插件",
        "icon": "http://py2cn.com/img/favicon.ico",
        "author": "schizobulia",
        "type": "可视化",
        "tag": "仿真,医疗"
    },
    {
        "name": "test",
        "version": "1.0",
        "description": "这是测试插件",
        "icon": "http://py2cn.com/img/favicon.ico",
        "author": "schizobulia",
        "type": "可视化",
        "tag": "仿真,医疗"
    },
    {
        "name": "test",
        "version": "1.0",
        "description": "这是测试插件",
        "icon": "http://py2cn.com/img/favicon.ico",
        "author": "schizobulia",
        "type": "可视化",
        "tag": "仿真,医疗"
    }
];

const TAGS = [
    '可视化', '医疗', '农业', '生物'
]

/**
 * 新闻列表页
 * @param {*} props 
 */
function PlugListPage() {

    const [loading, setLoading] = useState(true);

    let thread = setTimeout(() => {
        setLoading(false);
        clearTimeout(thread);
    }, 3000);

    return <Layout topkey={["h5"]}>
        <div style={{ width: "80%", margin: "0 auto" }}>
            <div style={{ marginTop: '1rem', marginBottom: '1rem', fontSize: '1rem' }}>
                {

                    TAGS.map((item, index) => (
                        <Tag color="#108ee9" key={index}>{item}</Tag>
                    ))
                }
            </div>
            <Skeleton loading={loading}>
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 6,
                        xxl: 4,
                    }}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Card
                                cover={
                                    <img
                                        alt={item.name}
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                }
                                actions={[
                                    <CloudDownloadOutlined />,
                                    <FundViewOutlined />
                                ]}
                            >
                                <Meta
                                    avatar={<Avatar src={item.icon} />}
                                    title={item.name}
                                    description={item.description}
                                />
                            </Card>
                        </List.Item>
                    )}
                />
            </Skeleton>
        </div>
    </Layout>
}


export default PlugListPage;