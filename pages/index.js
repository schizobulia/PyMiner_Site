
import Layout from '../layout/index';
import { Typography, Divider, Button } from 'antd';
import styles from './index.module.css';
import { DownloadOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

function downloadClick() {
    window.open('https://gitee.com/py2cn/pyminer');
}

/**
 * 首页
 */
function HomePage() {
    return <Layout selectKey={['1']}>
        <Typography>
            <Title>概述</Title>
            <Divider />
            <Paragraph>
                <h4>首先，PyMiner是一个开源的数据处理、分析、建模、评估软件。很大程度上，PyMiner希望能够成为国产的开源的MATLAB！</h4>
                <strong className={styles.subtitle}>技术说明：</strong>
                    PyMiner项目开发环境基于Window 10 X64，使用Python3.8+PyQt5.15+Pycharm进行技术开发， 同时，此项目支持跨平台，这意味着即使是Linux、Mac也可以使用或开发此软件！
                    <strong className={styles.subtitle}>如何安装：</strong>
                <ol>
                    <li>下载项目源码</li>
                    <li>安装python并打开命令行工具，使用<mark> pip install -r requirements.txt</mark> 导入python包，如果你的python依赖包下载太慢，我建议使用：<mark>pip install -i https://mirrors.cloud.tencent.com/pypi/simple -r requirements.txt</mark></li>
                    <li>调用python 执行目录下pyminer.py，例如python安装在C盘根目录下，可以在cmd命令行中执行：<mark>C:\python\python.exe C:\PyMiner\pyminer.py</mark></li>
                    <li>此外，你也可以使用pyinstaller进行编译后使用，编译语句：<mark>pyinstaller -i logo.ico -w pyminer.py</mark></li>
                </ol>
                <Button type="primary" shape="round" icon={<DownloadOutlined />} size="middle" onClick={downloadClick}>
                    立即下载
                    </Button>
                <Divider />
                <font style={{ fontSize: '18px' }}>截图预览</font>
                <br />
                <img src="/img/preview1.png" alt="PyMiner数据预览1" className={styles.img} />
                <br />
                <img src="/img/preview2.png" alt="PyMiner数据预览2" className={styles.img} />
                <br />
                <img src="/img/preview3.png" alt="PyMiner数据预览3" className={styles.img} />
                <br />
                <img src="/img/preview4.png" alt="PyMiner数据预览4" className={styles.img} />
            </Paragraph>
        </Typography>
    </Layout>

}

export default HomePage;