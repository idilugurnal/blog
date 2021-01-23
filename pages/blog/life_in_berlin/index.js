import Link from "next/link";
import { GraphQLClient } from 'graphql-request';
import Layout from "../../../components/Layout/layout";
import styles from "../bloglist.module.scss";


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

let flag = true;
const reference = "life_in_berlin";

export default ({ posts }) =>
    <div >
        <Layout>
            {posts.forEach(({blogReference }) => (
                blogReference === reference
                    ? {flag} = false
                    : null
            ))}
            {flag
                ? <p> There are no posts for now. Working on creating content 😊 </p>
                : posts.map(({ slug, title, blogReference }) => (
                    blogReference === reference
                        ? (<h3 ><Link key={slug} href={`/blog/${reference}/posts/${slug}`}>
                            <a className={styles.postTitle}>{title}</a>
                        </Link></h3>)
                        : null
                ))}
        </Layout>
    </div>


