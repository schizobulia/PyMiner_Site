import Layout from '../../layout/index';
import { Typography, Divider } from 'antd';
const { Title, Paragraph } = Typography;

function DataProcessingPage() {
    return <Layout selectKey={["sub3", "18"]}>
        <Typography>
            <Title>UI设计</Title>
            <Divider />
            <Paragraph>
                <h4>数据处理</h4>
                更多内容正在整理中...
            </Paragraph>
        </Typography>
    </Layout>
}


export default DataProcessingPage;