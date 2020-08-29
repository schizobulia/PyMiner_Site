import React from 'react';
import { Layout, Menu, Input, Row, Col, BackTop, Badge } from 'antd';
import Link from 'next/link';
import {
    HomeOutlined,
    HourglassOutlined,
    CodepenOutlined,
    FolderOpenOutlined,
    UsergroupAddOutlined,
    FileWordOutlined,
    AntDesignOutlined,
    ApiOutlined,
    CheckCircleOutlined
} from '@ant-design/icons';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;

/**
 * 首页全局Layout
 */
export default class SiderLayout extends React.Component {

    state = {
        collapsed: false, //Layout收缩状态控制
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        const selectKey = this.props.selectKey;
        const topKey = this.props.topkey;
        return (
            <Layout style={{ minHeight: '100vh' }} hasSider={true}>
                <title>PyMiner</title>
                <Sider collapsible breakpoint="lg" collapsed={this.state.collapsed} onCollapse={this.onCollapse} theme="dark" collapsedWidth="0" defaultCollapsed={true}>
                    <div className="logo" style={{ height: '64px' }}>
                        <span style={{ width: '100%', height: '60px', display: "block", lineHeight: '60px', textAlign: 'center', fontSize: '20px', letterSpacing: '.0.25em', fontWeight: '700', textTransform: 'uppercase', color: 'white' }}>
                            <CheckCircleOutlined fill="#ffffff" />
                            <span style={{ width: '0.3rem', display: 'inline-block', }}></span>
                            PyMiner
                        </span>
                    </div>
                    <Menu theme="dark" selectedKeys={selectKey} defaultOpenKeys={selectKey} mode="inline" >
                        <Menu.Item key="1" icon={<HomeOutlined />}>
                            <Link href="/">
                                <a>主页</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="sub1" icon={<CodepenOutlined />}>
                            <Link href="/rule">
                                <a>编程规范</a>
                            </Link>
                        </Menu.Item>

                        <SubMenu key="sub2" icon={<HourglassOutlined />} title="功能设计">
                            <Menu.Item key="8">
                                <Link href="/function/dataprocessing">
                                    <a>数据处理</a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="9">
                                <Link href="/function/dataanalysis">
                                    <a>数据分析</a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="10">
                                <Link href="/function/datavisualization">
                                    <a>数据可视化</a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="11">
                                <Link href="/function/modeling">
                                    <a>模型建立</a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="12">
                                <Link href="/function/assessment">
                                    <a>评估</a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="13">
                                <Link href="/function/workspace">
                                    <a>工作区间</a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="14">
                                <Link href="/function/filemanagement">
                                    <a>文件管理</a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="15">
                                <Link href="/function/workflow">
                                    <a>业务流程</a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="16">
                                <Link href="/function/report">
                                    <a>输出报告</a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="17">
                                <Link href="/function/console">
                                    <a>控制台</a>
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<AntDesignOutlined />} title="UI设计">
                            <Menu.Item key="18">
                                <Link href="/ui/dataprocessing">
                                    <a>数据处理</a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="19">数据分析</Menu.Item>
                            <Menu.Item key="20">数据分析</Menu.Item>
                            <Menu.Item key="21">可视化</Menu.Item>
                            <Menu.Item key="22">模型</Menu.Item>
                            <Menu.Item key="23">评估</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" icon={<ApiOutlined />} title="API设计">
                            <Menu.Item key="24">
                                <Link href="/interface/one">
                                    <a>API 1</a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="25">API 2</Menu.Item>
                            <Menu.Item key="26">API 3</Menu.Item>
                            <Menu.Item key="27">API 4</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="sub5" icon={<FolderOpenOutlined />}>
                            <Link href="/resources">
                                <a>资源文件</a>
                            </Link>
                        </Menu.Item>
                        <SubMenu key="sub6" icon={<FileWordOutlined />} title="相关文档">
                            <Menu.Item key="31">
                                <Link href="/word/agreement">
                                    <a>许可协议</a>
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="sub7" icon={<UsergroupAddOutlined />}>
                            <Link href="/about">
                                <a>加入我们</a>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="header" style={{ padding: 0, paddingLeft: '20px', background: 'white' }} >
                        <Row>
                            <Col xs={20} sm={4} md={6} lg={8} xl={5}>
                                <Search
                                    placeholder="开发中"
                                    style={{ width: '100%', borderRadius: '8px' }}
                                />
                            </Col>
                            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                                <Menu mode="horizontal" defaultSelectedKeys={topKey}>

                                    <Menu.Item key="h1">
                                        <Link href="https://gitee.com/py2cn/pyminer"><a target="_blank">Gitee</a></Link>
                                    </Menu.Item>
                                    <Menu.Item key="h2">
                                        <Link href="https://github.com/aboutlong/pyminer"><a target="_blank">Github</a></Link>
                                    </Menu.Item>
                                    <Menu.Item key="h0">
                                        <Link href="/news/list"><a>新闻</a></Link>
                                    </Menu.Item>
                                    <Menu.Item key="h3">
                                        <Badge count="hot" offset={[10, -5]}>
                                            <Link href="https://gitee.com/py2cn/pyminer/issues"><a target="_blank">开源计划</a></Link>
                                        </Badge>
                                    </Menu.Item>
                                    <Menu.Item key="h4">
                                        <Badge count="hot" offset={[10, -5]}>
                                            <Link href="http://py2cn.com/zentao/www"><a target="_blank">禅道任务</a></Link>
                                        </Badge>
                                    </Menu.Item>
                                    <Menu.Item key="h5">
                                        <Badge count="hot" offset={[10, -5]}>
                                            <Link href="http://py2cn.com/bbs/"><a target="_blank">社区</a></Link>
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
                    <Content style={{ margin: '10px 16px', padding: '20px 30px', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 0px 8px 0 rgba(0,0,0,0.06), 0 1px 0px 0 rgba(0,0,0,0.02)', backgroundColor: 'white' }}>
                        {this.props.children}
                        <BackTop />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>2020©PyMiner开发小组，QQ群：945391275</Footer>
                </Layout>
            </Layout>
        );
    }
}