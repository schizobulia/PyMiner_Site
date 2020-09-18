/*
 * @Author: wj
 * @Date: 2020-08-20 15:58:38
 * @LastEditTime: 2020-09-18 22:09:46
 * @LastEditors: wj
 * @Description: 首页
 * @FilePath: \PyMiner_Site\pages\index.js
 */

import Layout from '../layout/index';
import Link from 'next/link';
import { Button, Popover, Alert } from 'antd';
import styles from './index.module.css';

const content = (
    <div>
        <Alert message="建立激励机制，我们将会把所有捐赠分给每一位开发者，并公开捐赠信息。" type="info" />
        <p></p>
        <img
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <img
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
    </div>
);

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
                <Popover content={content} title="支持我们">
                    <Button type="primary" shape="round" size="large" style={{ marginLeft: '0.5rem' }}>
                        捐赠
                    </Button>
                </Popover>
            </div>
        </div>
    </Layout>

}

export default HomePage;