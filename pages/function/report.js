import Layout from '../../layout/index';
import { Typography, Divider } from 'antd';
const { Title, Paragraph } = Typography;

function ReportPage() {
    return <Layout selectKey={["sub2", "16"]}>
        <Typography>
            <Title>输出报告</Title>
            <Divider />
            <Paragraph>
                <h4>说明</h4>
                输出结果默认会直接展示在主界面的"输出"tab页中，在此页面，可以复制输出的结果，也可以将结果导出到word、excel、ppt、pdf等形式。
            </Paragraph>
        </Typography>
    </Layout>
}


export default ReportPage;