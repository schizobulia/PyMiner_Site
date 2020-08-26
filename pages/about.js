import Layout from '../layout/index';
import { Typography, Divider } from 'antd';
import styles from './index.module.css';
const { Title, Paragraph } = Typography;

function AboutPage() {
    return <Layout selectKey={["sub7"]}>
        <Typography>
            <Title>联系我们</Title>
            <Divider />
            <Paragraph>
                <h4>PyMiner目前是由一群充满热情的开发小组维护的，我们欢迎并期待更多优秀的python、qt、pyqt、算法、数据分析、数据处理或者其他优秀朋友加入！</h4>
                <strong className={styles.subtitle}>作者： PyMiner Development Team</strong>
                <strong className={styles.subtitle}>作者QQ： 454017698</strong>
                <strong className={styles.subtitle}>PyMiner开发组QQ群： 945391275</strong>
                <div style={{ height: '2rem' }}></div>
                <strong className={styles.subtitle}>贡献人名单：(再次感谢各位卓越贡献，排名不分先后，小组成员较多，无法一一列出，更多名单请查看QQ群PyMiner开发组)</strong>
                <ul>
                    <li>learning｜torch_rookie</li>
                    <li>Irony."[讽刺]</li>
                    <li>吴宫幽径</li>
                    <li>D.I.D</li>
                    <li>pyqt_fun</li>
                    <li>Siffre@三弗</li>
                    <li>python萌新</li>
                    <li>dogface</li>
                    <li>熊二</li>
                    <li>opencascade高性能三维重建平台</li>
                    <li>没吃过鸡的程序猿</li>
                    <li>Nicewrap</li>
                    <li>深圳-PyQT打包</li>
                    <li>人间白头</li>
                    <li>HolidayCoffee</li>
                    <li>L</li>
                    <li>matlab_py</li>
                </ul>
            </Paragraph>
        </Typography>
    </Layout>
}


export default AboutPage;