
import Layout from '../layout/index';
import Link from 'next/link';
import { Button } from 'antd';
import styles from './index.module.css';

/**
 * 首页
 */
function HomePage() {
    return <Layout>
        <div className={styles.banner}>
            <div>
                <p className={styles.hometip}>做开源界的MATLAB，道阻且长!</p>
                <p>需要更多MATLAB\PyQt\Python大牛加入！</p>
                <Button type="primary" shape="round" size="large">
                    <Link href="http://py2cn.com/docs/pyminer.wiki/%E5%A6%82%E4%BD%95%E5%8F%82%E4%B8%8E%E9%A1%B9%E7%9B%AE%EF%BC%9F.html"><a target="_blank">加入我们</a></Link>
                </Button>
            </div>
        </div>
    </Layout>

}

export default HomePage;