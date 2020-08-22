import Layout from '../../layout/index';
import { Typography, Divider } from 'antd';
const { Title, Paragraph } = Typography;

function DataProcessingPage() {
    return <Layout selectKey={["sub2", "8"]}>
        <Typography>
            <Title>数据处理</Title>
            <Divider />
            <Paragraph>
                <h4>数据信息</h4>
                可以查看当前数据的创建时间，更新时间，文件大小，内存占用，文件路径等详细信息。
                <h4>数据角色</h4>
                可以查看当前数据的各列的角色，是否ID列，自变量，或目标变量。
            </Paragraph>
        </Typography>
    </Layout>
}


export default DataProcessingPage;