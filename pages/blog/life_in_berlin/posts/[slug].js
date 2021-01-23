import { GraphQLClient, request } from 'graphql-request';
import React from 'react';
import Layout from "../../../../components/Layout/layout";

const graphcms = new GraphQLClient(
    'https://api-eu-central-1.graphcms.com/v2/ckk8jqcm1172i01xvgbaue29l/master'
);

export async function getStaticProps({ params }) {
    const { post } = await graphcms.request(
        `
    query ProductPageQuery($slug: String!) {
      post(where: { slug: $slug }) {
        title
        date  
        content{
            raw
            html
            markdown
            text
        }
      }
    }
  `,
        {
            slug: params.slug,
        }
    );

    return {
        props: {
            post,
        },
    };
}

export async function getStaticPaths() {
    const { posts } = await graphcms.request(`
    {
      posts {
        slug
        title
        blogReference
      }
    }
  `);

    return {
        paths: posts.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: false,
    };
}

export default ({ post }) => (
    <React.Fragment>
        <Layout>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={createMarkup(post.content.html)} />
        </Layout>

    </React.Fragment>
);