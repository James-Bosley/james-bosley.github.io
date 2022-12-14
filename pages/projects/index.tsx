import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import { GetStaticProps, NextPage } from "next";
import { getProjectsList, ProjectInfo } from "../../utils/projectUtils";
import ProjectsNav from "../../components/ProjectsNav";

export const getStaticProps: GetStaticProps = () => {
  const articleList = getProjectsList();
  return {
    props: {
      articleList,
    },
  };
};

interface Props {
  articleList: ProjectInfo[];
}

const ProjectsHome: NextPage<Props> = ({ articleList }) => {
  return (
    <div>
      <Head>
        <title>James Bosley | Projects</title>
        <meta name="description" content="Web Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mb-5">
        <Header pageTitle="Project Collection" />

        <div className="row">
          <ProjectsNav articleList={articleList} />

          <article className="col-0 col-md-9 px-4 px-md-5">
            <h3 className="mb-4">Welcome to my Project Porfolio</h3>
            <p>
              This is a collection of some of the projects I have worked on, from my very first
              creation, up to my most recent and most technologically comprehensive, full stack
              applications.
            </p>
            <p>
              I appreciate your time is precious, so if you only have a moment to check out one
              piece of my work, this is the one to look at -{" "}
              <Link href="/projects/gochamp">
                <a className="link-info">GoChamp</a>
              </Link>
              . It uses the widest range of technology and represents my latest work. It&apos;s also
              an application that I am in the process of launching commercially.
            </p>
            <p>
              I really wanted to put a wide range of projects on this site, to showcase my journey
              as a developer as well as demonstrate what my current skillset includes. It&apos;s
              easy to look back on many of these now and view them as somewhat rudimentary, but
              that&apos;s what development is all about, to learn and iterate.
            </p>

            <p>
              This site itself is also part of my portfolio. It&apos;s a React app frameworked with
              Next.js and aims to implement several of the features which makes next applications so
              performant. It&apos;s statically generated at build time, whilst allowing incremental
              additions to the dynamic routes on which each project can be found. I&apos;ve also
              used Bootstrap to style a site for the first time here. Choosing the right tools is as
              important as the implementation. Why waste time on custom styling, or anything else
              for that matter when out of the box is all you need?
            </p>

            <p>
              Thanks for visiting, and if you found any of these projects interesting, feel free to{" "}
              <a
                href="mailto:james_bosley@hotmail.co.uk"
                rel="noopener noreferrer"
                target="_blank"
                className="link-info"
              >
                get in touch
              </a>
              !
            </p>
          </article>
        </div>
      </main>
    </div>
  );
};

export default ProjectsHome;
