import Layout from '../layout/index';
import { Typography, Divider } from 'antd';
import Link from 'next/link';
import styles from './index.module.css';
const { Title, Paragraph } = Typography;

const frinedsLinks = [
    { name: 'learning｜torch_rookie', link: '' },
    { name: 'Irony."[讽刺]', link: '' },
    { name: '吴宫幽径', link: '' },
    { name: 'D.I.D', link: 'https://github.com/schizobulia' },
    { name: '郑君', link: '' },
    { name: '冰中的火', link: '' },
    { name: 'pyqt_fun', link: '' },
    { name: 'Siffre@三弗', link: '' },
    { name: 'python萌新', link: '' },
    { name: 'dogface', link: '' },
    { name: '熊二', link: '' },
    { name: 'opencascade高性能三维重建平台', link: '' },
    { name: '没吃过鸡的程序猿', link: '' },
    { name: 'Nicewrap', link: '' },
    { name: '深圳-PyQT打包', link: '' },
    { name: '人间白头', link: '' },
    { name: 'HolidayCoffee', link: '' },
    { name: 'L', link: '' },
    { name: 'matlab_py', link: '' },
]

function AboutPage() {
    let LIS = frinedsLinks.map((e, i) => {
        return <li>
            <Link href={e.link} key={i}>
                <a target="_blank">{e.name}</a>
            </Link>
        </li>
    });
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
                    {LIS}
                </ul>
            </Paragraph>
        </Typography>
    </Layout>
}


export default AboutPage;