import Layout from '../../layout/index';
import { Typography, Divider } from 'antd';
const { Title, Paragraph } = Typography;

/**
 * API设计页
 */
function ApiPage() {
    return <Layout selectKey={["sub4", "24"]}>
        <Typography>
            <Title>API设计</Title>
            <Divider />
            <Paragraph>
                <h4>数据接口</h4>
                更多内容正在整理中...
            </Paragraph>
        </Typography>
    </Layout>
}


export default ApiPage;