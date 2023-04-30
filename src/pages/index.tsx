import { Helmet } from 'react-helmet';
import Hero from "../components/hero.jsx";
import Layout from "../components/layout";
import SEO from "../components/seo";
import GetInTouch from "../components/getInTouch";


function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`olutola`, `jide`, `olutola jide`, `jide olutola`, `olutola olajide`, `michael`, `olutola michael`, `olutola michael olajide`]}
        title="Home"
      />
      <Helmet title="Home - Olutola Olajide &bull; Cloud Engineer"/>
      <Hero/>
      <GetInTouch/>
    </Layout>
  );
}

export default IndexPage;
