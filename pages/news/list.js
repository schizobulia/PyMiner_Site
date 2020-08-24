import Layout from '../../layout/index';
import { List } from 'antd';
import Link from 'next/link';

function NewsListPage(props) {
    return <Layout selectKey={["0", "0"]} topkey={['h0']}>
        <List
            header={<div>最新消息</div>}
            // footer={<div>Footer</div>}
            bordered
            dataSource={props.data}
            renderItem={item => (
                <List.Item key={{ item }}>
                    <Link href={`/news/${encodeURI(item)}`}>
                        <a target="_blank">{item}</a>
                    </Link>
                </List.Item>
            )}
        />
    </Layout>
}

export async function getStaticProps() {
    const baseUrl = `http://py2cn.com/blog/data.json`;
    const res = await fetch(baseUrl);
    return {
        props: {
            data: await res.json()
        },
    }
}

export default NewsListPage;