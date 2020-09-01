import Layout from '../../layout/index';
import { Typography, Divider } from 'antd';
const { Title, Paragraph } = Typography;

/**
 * 数据可视化页
 */
function DataVisualizationPage() {
    return <Layout selectKey={["sub2", "10"]}>
        <Typography>
            <Title>数据可视化</Title>
            <Divider />
            <Paragraph>
                <h4>散点图</h4>
                散点图是指在回归分析中，数据点在直角坐标系平面上的分布图，散点图表示因变量随自变量而变化的大致趋势，据此可以选择合适的函数对数据点进行拟合。
                <h4>直方图</h4>
                直方图(Histogram)，又称质量分布图，是一种统计报告图，由一系列高度不等的纵向条纹或线段表示数据分布的情况。 一般用横轴表示数据类型，纵轴表示分布情况。
                <h4>折线图</h4>
                折线图是排列在工作表的列或行中的数据可以绘制到折线图中。折线图可以显示随时间（根据常用比例设置）而变化的连续数据，因此非常适用于显示在相等时间间隔下数据的趋势。
            </Paragraph>
        </Typography>
    </Layout>
}


export default DataVisualizationPage;