import Layout from '../layout/index';
import { Typography, Divider } from 'antd';
const { Title, Paragraph } = Typography;

function ResourcesPage() {
    return <Layout selectKey={["sub5"]}>
        <Typography>
            <Title>资源</Title>
            <Divider />
            <Paragraph>
                <h4>图标</h4>
                当前应用程序图标来自开源LibreOffice中的Colibre主题
                <h4>字体</h4>
                前端默认使用MS yahei UI ,英文建议使用SourceCodePro
            </Paragraph>
        </Typography>
    </Layout>
}


export default ResourcesPage;