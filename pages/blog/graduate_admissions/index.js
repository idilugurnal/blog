import Link from "next/link";
import { GraphQLClient } from 'graphql-request';
import Layout from "../../../components/Layout/layout";


export async function getStaticProps() {

    const client = new GraphQLClient( "https://api-eu-central-1.graphcms.com/v2/ckk8jqcm1172i01xvgbaue29l/master");

    const {posts} = await client.request(
        `
      { 
        posts {
          slug
          title 
          blogReference
        }
      }
    `
    );

    return {
        props: {
            posts,
        },
    };
}

export default ({ posts }) =>
    <div>
        <Layout>
            {posts.map(({ slug, title, blogReference }) => (
                blogReference === "graduate_admissions"
                    ? (<h3><Link key={slug} href={`/blog/graduate_admissions/posts/${slug}`}>
                        <a>{title}</a>
                    </Link></h3>)
                    : null
            ))}
        </Layout>
    </div>
