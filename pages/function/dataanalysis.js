import Layout from '../../layout/index';
import { Typography, Divider } from 'antd';
const { Title, Paragraph } = Typography;

function DataAnalysisPage() {
    return <Layout selectKey={["sub2", "9"]}>
        <Typography>
            <Title>数据分析</Title>
            <Divider />
            <Paragraph>
                <h4>描述统计</h4>
                描述统计是通过图表或数学方法，对数据资料进行整理、分析，并对数据的分布状态、数字特征和随机变量之间关系进行估计和描述的方法。描述统计分为集中趋势分析和离中趋势分析和相关分析三大部分。
                <h4>缺失值统计</h4>
                可以查看缺失值的分布情况。
            </Paragraph>
        </Typography>
    </Layout>
}


export default DataAnalysisPage;