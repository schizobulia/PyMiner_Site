import Layout from '../../layout/index';
import { List } from 'antd';
import Link from 'next/link';
import { getSortedNewssData } from '../../lib/news';

/**
 * 新闻列表页
 * @param {*} props 
 */
function NewsListPage(props) {
    return <Layout selectKey={["0", "0"]} topkey={['h0']}>
        <List
            header={<div>最新消息</div>}
            // footer={<div>Footer</div>}
            bordered
            dataSource={props.allNewsData}
            renderItem={item => (
                <List.Item key={{ item }}>
                    <Link href={`/news/${encodeURI(item.id)}`}>
                        <a target="_blank">{item.title}</a>
                    </Link>
                    <span>{item.date}</span>
                </List.Item>
            )}
        />
    </Layout>
}

export async function getStaticProps() {
    const allNewsData = getSortedNewssData();
    return {
        props: {
            allNewsData
        }
    }
}

export default NewsListPage;