import Layout from '../../layout/index';
import { Typography, Divider } from 'antd';
const { Title, Paragraph } = Typography;

function WorkspacePage() {
    return <Layout selectKey={["sub2", "13"]}>
        <Typography>
            <Title>工作区间</Title>
            <Divider />
            <Paragraph>
                <h4>说明</h4>
                工作区间负责展示用户历史对数据的操作，例如已经导入的全部文档，已经生成的数据结果。如果有多个数据集或结果，此处将保留全部多个记录。
            </Paragraph>
        </Typography>
    </Layout>
}


export default WorkspacePage;