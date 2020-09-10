import React from 'react';
import { Layout, Menu, Row, Col, BackTop, Badge } from 'antd';
import Link from 'next/link';
import { CheckCircleOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

/**
 * 首页全局Layout
 */
export default class SiderLayout extends React.Component {

    render() {
        const topKey = this.props.topkey;
        return (
            <Layout style={{ minHeight: '100vh' }} hasSider={true}>
                <title>PyMiner</title>
                <Layout className="site-layout">
                    <Header className="header" style={{ padding: 0, paddingLeft: '20px', background: 'white' }} >
                        <Row>
                            <Col xs={20} sm={4} md={6} lg={8} xl={17}>
                                <div className="logo" style={{ height: '64px' }}>
                                    <Link href="/"><a>
                                        <span style={{ width: '100%', height: '60px', display: "block", lineHeight: '60px', textAlign: 'left', fontSize: '20px', letterSpacing: '.0.25em', fontWeight: '700', textTransform: 'uppercase', color: '#111010' }}>
                                            <CheckCircleOutlined fill="#ffffff" />
                                            <span style={{ width: '0.3rem', display: 'inline-block', }}></span>
                                            PyMiner
                                        </span>
                                    </a>
                                    </Link>
                                </div>
                            </Col>
                            <Col xs={2} sm={4} md={6} lg={8} xl={7}>
                                <Menu mode="horizontal" defaultSelectedKeys={topKey}>
                                    <Menu.Item key="h1">
                                        <Link href="https://gitee.com/py2cn/pyminer"><a target="_blank">Gitee</a></Link>
                                    </Menu.Item>
                                    <Menu.Item key="h2">
                                        <Link href="https://github.com/aboutlong/pyminer"><a target="_blank">Github</a></Link>
                                    </Menu.Item>
                                    <Menu.Item key="h4">
                                        <Link href="http://py2cn.com/docs/"><a target="_blank">文档</a></Link>
                                    </Menu.Item>
                                    <Menu.Item key="h5">
                                        <Link href="/plug"><a>插件</a></Link>
                                    </Menu.Item>
                                    <Menu.Item key="h0">
                                        <Link href="/news/list"><a>新闻</a></Link>
                                    </Menu.Item>
                                    <Menu.Item key="h3">
                                        <Badge count="hot" offset={[10, -5]}>
                                            <Link href="https://gitee.com/py2cn/pyminer/issues"><a target="_blank">开源计划</a></Link>
                                        </Badge>
                                    </Menu.Item>
                                    <SubMenu title="更多">
                                        <Menu.Item key="setting:1"> <Link href="https://www.python.org/"><a target="_blank">蟒蛇</a></Link> </Menu.Item>
                                        <Menu.Item key="setting:2"> <Link href="https://www.anaconda.com/"><a target="_blank">水蟒</a></Link>  </Menu.Item>
                                        <Menu.Item key="setting:3"> <Link href="https://www.jetbrains.com/pycharm/"><a target="_blank">药香</a></Link>  </Menu.Item>
                                        <Menu.Item key="setting:4"> <Link href="https://numpy.org/"><a target="_blank">麻木</a></Link>  </Menu.Item>
                                        <Menu.Item key="setting:5"> <Link href="https://pandas.pydata.org/pandas-docs/stable/"><a target="_blank">大熊猫</a></Link>  </Menu.Item>
                                        <Menu.Item key="setting:6"> <Link href="https://scikit-learn.org/"><a target="_blank">斯克莱恩</a></Link>  </Menu.Item>
                                        <Menu.Item key="setting:7"> <Link href="https://matplotlib.org/"><a target="_blank">matplotlib</a></Link>  </Menu.Item>
                                        <Menu.Item key="setting:8"> <Link href="http://seaborn.pydata.org/"><a target="_blank">海生的</a></Link>  </Menu.Item>
                                        <Menu.Item key="setting:9"> <Link href="https://doc.qt.io/qt-5/classes.html"><a target="_blank">pyqt5</a></Link>  </Menu.Item>
                                        <Menu.Item key="setting:10"> <Link href="https://mirrors.tuna.tsinghua.edu.cn/"><a target="_blank">清华开源架构</a></Link>  </Menu.Item>
                                        <Menu.Item key="setting:11"> <Link href="https://mirrors.tencent.com/"><a target="_blank">腾讯开源官方</a></Link>  </Menu.Item>
                                        <Menu.Item key="setting:12"> <Link href="https://mirrors.huaweicloud.com/"><a target="_blank">华为开源架构</a></Link>  </Menu.Item>
                                        <Menu.Item key="setting:13"> <Link href="https://cloud.tencent.com/"><a target="_blank">腾讯云</a></Link>  </Menu.Item>
                                        <Menu.Item key="setting:14"> <Link href="https://docs.qq.com/" ><a target="_blank">腾讯文档</a></Link> </Menu.Item>
                                        <Menu.Item key="setting:15"> <Link href="https://tophub.today/"><a target="_blank">今日热榜</a></Link>  </Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Col>
                        </Row>
                    </Header>
                    <Content style={{ boxShadow: '0 0px 8px 0 rgba(0,0,0,0.06), 0 1px 0px 0 rgba(0,0,0,0.02)', backgroundColor: 'white' }}>
                        {this.props.children}
                        <BackTop />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>2020©PyMiner开发小组，QQ群：945391275</Footer>
                </Layout>
            </Layout>
        );
    }
}