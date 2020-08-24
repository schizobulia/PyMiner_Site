import Layout from '../../layout/index';
import { getAllNewsIds, getNewsData } from '../../lib/news';


export async function getStaticPaths() {
    const paths = await getAllNewsIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getNewsData(params.name);
    return {
        props: {
            postData
        }
    }
}

export default function NewsInfoPage(props) {
    return <Layout selectKey={["0", "0"]} topkey={['h0']}>
        <div dangerouslySetInnerHTML={{ __html: props.postData && props.postData.contentHtml }} />
    </Layout>
};