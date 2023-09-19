import { Helmet } from 'react-helmet';
import Hero from "../components/hero.jsx";
import Layout from "../components/layout";
import SEO from "../components/seo";
import GetInTouch from "../components/getInTouch";
import Projects from '../components/projects';


function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`olutola`, `jide`, `olutola jide`, `jide olutola`, `olutola olajide`, `michael`, `olutola michael`, `olutola michael olajide`]}
        title="Home"
      />
      <Helmet title="Olutola Olajide &bull; Cloud DevOps Engineer"/>
      <Hero/>
      <Projects/>
      <GetInTouch/>
    </Layout>
  );
}

export default IndexPage;
