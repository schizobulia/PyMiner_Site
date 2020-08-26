import Layout from '../../layout/index';
import { Typography, Divider } from 'antd';
const { Title, Paragraph } = Typography;

/**
 * 业务流程页
 */
function WorkFlowPage() {
    return <Layout selectKey={["sub2", "15"]}>
        <Typography>
            <Title>业务流程</Title>
            <Divider />
            <Paragraph>
                <h4>说明</h4>
                业务流程是pyminer中非常重要的功能，通过在开始节点和结束节点之间以拖拽的方式添加功能节点，并在右键菜单中点击"设置"，即可在弹出窗口中修改此功能节点对应的参数。
            </Paragraph>
        </Typography>
    </Layout>
}


export default WorkFlowPage;