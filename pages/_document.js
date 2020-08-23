import Document, { Html, Head, Main, NextScript } from 'next/document'
import BaiDuScript from '../component/BaiDuScript';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/img/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <BaiDuScript>
                        {
                            () => {
                                var _hmt = _hmt || [];
                                (function () {
                                    var hm = document.createElement("script");
                                    hm.src = "https://hm.baidu.com/hm.js?4f292f344d9fbf225b7787da9ea71d39";
                                    var s = document.getElementsByTagName("script")[0];
                                    s.parentNode.insertBefore(hm, s);
                                })();
                            }
                        }
                    </BaiDuScript>
                </body>
            </Html>
        )
    }
}

export default MyDocument;