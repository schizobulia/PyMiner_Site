import Layout from '../../layout/index';
import { Typography, Divider } from 'antd';
const { Title, Paragraph } = Typography;

function ModelingPage() {
    return <Layout selectKey={["sub2", "11"]}>
        <Typography>
            <Title>模型建立</Title>
            <Divider />
            <Paragraph>
                <h4>逻辑回归</h4>
                logistic回归又称logistic回归分析，是一种广义的线性回归分析模型，常用于数据挖掘，疾病自动诊断，经济预测等领域。
            </Paragraph>
        </Typography>
    </Layout>
}


export default ModelingPage;