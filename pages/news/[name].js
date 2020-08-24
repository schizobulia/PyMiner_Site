import Layout from '../../layout/index';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';

function NewsInfoPage(props) {
    return <Layout selectKey={["0", "0"]} topkey={['h0']}>
        <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
    </Layout>
}

export async function getStaticPaths() {
    const baseUrl = `http://py2cn.com/blog/data.json`;
    const res = await fetch(baseUrl);
    let data = await res.json();
    const paths = data.map((ele) => ({
        params: { name: ele },
    }));
    return {
        paths: paths, fallback: true
    };
}

export async function getStaticProps({ params }) {
    let name = encodeURI(params.name);
    const baseUrl = `http://py2cn.com/blog/${name}.md`;
    const res = await fetch(baseUrl);
    let md = new MarkdownIt({
        html: false,        // 在源码中启用 HTML 标签
        xhtmlOut: false,        // 使用 '/' 来闭合单标签 （比如 <br />）。
        breaks: false,        // 转换段落里的 '\n' 到 <br>。
        langPrefix: 'language-',  // 给围栏代码块的 CSS 语言前缀。对于额外的高亮代码非常有用。
        linkify: false,        // 将类似 URL 的文本自动转换为链接。
        typographer: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        },
    });
    let result = md.render(await res.text());
    return {
        props: {
            content: result
        },
    }
}

export default NewsInfoPage;