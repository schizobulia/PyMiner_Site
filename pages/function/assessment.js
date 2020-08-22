import Layout from '../../layout/index';
import { Typography, Divider } from 'antd';
const { Title, Paragraph } = Typography;
import styles from './style.module.css';

function ModelingPage() {
    return <Layout selectKey={["sub2", "12"]}>
        <Typography>
            <Title>评估</Title>
            <Divider />
            <Paragraph>
                <h4>ROC/AUC</h4>
                也称ROC曲线、受试者工作特征曲线、感受性曲线（receiver operating characteristic curve），用于二分问题。
                <p className={styles.tag}>判别：</p>
                <ol>
                    <li>ROC曲线越靠近左上角,试验的准确性就越高；</li>
                    <li>可以算出线下面积（AUC, Area Under Curve）比较，AUC最大，则最佳；</li>
                    <li>AUC在 0.5～0.7时有较低准确性， 0.7～0.8时有一定准确性, 0.8~0.9则高，AUC在0.9以上时有非常高准确性。AUC=0.5时，说明诊断方法完全不起作用，无诊断价值。AUC &lt; 0.5不符合真实情况，在实际中极少出现。</li>
                </ol>
                <p className={styles.tag}>WOE</p>
                即 Weight of Evidence 证据权重
                <p className={styles.tag}>IV</p>
                即 Information Value 信息价值
                <p className={styles.tag}>GINI</p>
                即 GINI指数
                <p className={styles.tag}>binning</p>
                即，分箱。等距、等频、按需、优化离散(常用的检验指标有卡方，信息增益，基尼指数，或WOE)
            </Paragraph>
        </Typography>
    </Layout>
}


export default ModelingPage;