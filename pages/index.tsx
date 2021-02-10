import HlsVideoJS from 'components/HlsVideoJS'
import Layout from 'components/Layout'

const source = process.env.NEXT_PUBLIC_URL

const IndexPage = () => (
  <Layout title="HLS Test">
    <h1>Hello This is test with HLS with videoJS</h1>
    <HlsVideoJS videoSource={source}/>
  </Layout>
)

export default IndexPage
