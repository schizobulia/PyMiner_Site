/**
 * 百度统计
 */
export default ({ children }) => (
    <script dangerouslySetInnerHTML={{ __html: `(${children.toString()})();` }}></script>
);