/**
 * 百度统计组件
 */
export default ({ children }) => (
    <script dangerouslySetInnerHTML={{ __html: `(${children.toString()})();` }}></script>
);