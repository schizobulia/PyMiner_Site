import Layout from '../../layout/index';
import { Typography, Divider } from 'antd';
const { Title, Paragraph } = Typography;

function FileManagementPage() {
    return <Layout selectKey={["sub2", "14"]}>
        <Typography>
            <Title>文件管理</Title>
            <Divider />
            <Paragraph>
                <h4>说明</h4>
                在文件管理页面，用户能够查看或选择需要导入的数据文件，并以右键菜单进行操作，例如以外部工具打开或直接导入到当前程序中。
            </Paragraph>
        </Typography>
    </Layout>
}


export default FileManagementPage;