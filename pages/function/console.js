import Layout from '../../layout/index';
import { Typography, Divider } from 'antd';
const { Title, Paragraph } = Typography;

/**
 * 控制台页
 */
function ConsolePage() {
    return <Layout selectKey={["sub2", "17"]}>
        <Typography>
            <Title>控制台</Title>
            <Divider />
            <Paragraph>
                <h4>说明</h4>
                控制台能够输出命令，调用内置的函数，此处命令已经经过一定加工，可以执行伪matlab命令，也可以直接执行python命令
            </Paragraph>
        </Typography>
    </Layout>
}


export default ConsolePage;