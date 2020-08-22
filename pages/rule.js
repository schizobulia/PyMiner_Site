import Layout from '../layout/index';
import { Typography, Divider } from 'antd';
import styles from './index.module.css';
const { Title, Paragraph } = Typography;

function RulePage() {
    return <Layout selectKey={["sub1", "3"]}>
        <Typography>
            <Title>编程规范</Title>
            <Divider />
            <Paragraph>
                <h4>前言</h4>
                <strong className={styles.subtitle}>技术说明：</strong>
                规则并不是完美的，通过禁止在特定情况下有用的特性，可能会对代码实现造成影响。但是我们制定规则的目的“为了大多数程序员可以得到更多的好处”， 如果在团队运作中认为某个规则无法遵循，希望可以共同改进该规则。
                <p><ins>参考该规范之前，希望您具有相应的Python基础能力，而不是通过该文档来学习Python。，</ins></p>
                <strong className={styles.subtitle}>最基本的，你需要：</strong>
                <ol>
                    <li>了解Python的PEP标准；</li>
                    <li>熟知Python的基本语言特性，包和模块相关特性；</li>
                    <li>了解Python的标准库；</li>
                    <li>了解Pyqt5(尤其是信号与槽) 或者Qt；</li>
                </ol>
                <strong className={styles.subtitle}>重点关注：</strong>
                <ol>
                    <li>约定Python的编程风格，比如命名，排版等。</li>
                    <li>Python的模块化设计，如何设计模块，类，接口和函数。</li>
                    <li>Python、pyqt相关特性的优秀实践，比如常量，类型转换等。</li>
                    <li>现代Python、pyqt的优秀实践，包括Python、pyqt中可以提高代码可维护性，提高代码可靠性的相关约定。</li>
                </ol>
                <strong className={styles.subtitle}>约定：</strong>
                <ul >
                    <li><strong style={{ color: '#cb2a2a' }}>规则：</strong>编程时必须遵守的约定(must)</li>
                    <li><strong style={{ color: '#009688' }}>建议：</strong>编程时应该遵守的约定(should)</li>
                    <li>本规范适用通用PyMiner标准, 如果没有特定的标准版本，适用所有的版本。 </li>
                </ul>
                <strong className={styles.subtitle}>例外：</strong>
                <p>无论是'规则'还是'建议'，都必须理解该条目这么规定的原因，并努力遵守。但是，有些规则和建议可能会有例外。</p>
                <p>在不违背总体原则，经过充分考虑，有充足的理由的前提下，可以适当违背规范中约定。例外破坏了代码的一致性，请尽量避免。'规则'的例外应该是极少的。</p>
                <strong className={styles.subtitle}>下列情况，应风格一致性原则优先：</strong>
                <p>修改外部开源代码、第三方代码时，应该遵守开源代码、第三方代码已有规范，保持风格统一。</p>
                <p>某些特定领域，优先参考其行业规范。</p>
                <strong className={styles.subtitle}>好代码的原则：</strong>
                <ol>
                    <li>通过所有测试（Passes its tests）</li>
                    <li>尽可能消除重复 (Minimizes duplication)</li>
                    <li>尽可能清晰表达 (Maximizes clarity)</li>
                    <li>更少代码元素 (Has fewer elements)</li>
                    <li>以上四个原则的重要程度依次降低。</li>
                </ol>
            </Paragraph>
            <div style={{ height: '3rem' }}></div>
            <Typography>
                <h3 id="named">命名</h3>
                <Divider />
                <Paragraph>
                    <h4>通用命名</h4>
                    <strong className={styles.subtitle}>常见命名风格有：</strong>
                    <strong className={styles.subtitle}>驼峰风格(CamelCase)</strong>
                    <p>大小写字母混用，单词连在一起，不同单词间通过单词首字母大写来分开。按连接后的首字母是否大写，又分: 大驼峰(UperCamelCase)和小驼峰(lowerCamelCase)</p>
                    <strong className={styles.subtitle}>内核风格(unix_like)</strong>
                    <p>单词全小写，用下划线分割。</p>
                    <p>如：'test_result'</p>
                    <strong className={styles.subtitle}>匈牙利风格</strong>
                    <p>在‘大驼峰’的基础上，加上前缀；前缀用于表达类型或用途。</p>
                    <p>如：'uiSavedCount', 'bTested'</p>
                    <p style={{ color: '#cb2a2a' }}>规则： 标识符命名使用驼峰风格</p>
                    <p style={{ color: '#cb2a2a' }}>规则： ui文件命名以ui_开头，使用ui_功能模块_具体模块命名方式</p>
                    <p>例如：数据处理-列描述的原始前端UI文件命名：ui_data_column_desc.ui,使用pyuic转换后名称为 ui_data_column_desc.py</p>
                </Paragraph>
            </Typography>

            <h5>更多内容正在整理中...</h5>
        </Typography>
    </Layout>
}


export default RulePage;