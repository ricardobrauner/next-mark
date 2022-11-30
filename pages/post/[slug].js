import fs from 'fs';
import matter from 'gray-matter';
import SidebarLayout from '../../components/sidebarLayout'

export async function getStaticPaths() {
    // Retrieve all our slugs
    const files = fs.readdirSync('posts');
    const paths = files.map((fileName) => ({
        params: {
          slug: fileName.replace('.txt', ''),
        },
    }));

    return {
        paths,
        fallback: false,
    };
  }

  export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`posts/${slug}.txt`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);

    const files = fs.readdirSync('posts');
    const slugs = files.map((fileName) => 
        fileName.replace('.txt', ''),
    );
    return {
      props: {
        frontmatter,
        content,
        slugs,
      },
    };
  }

  export default function PostPage({ frontmatter, content, slugs }) {
    return (
        <SidebarLayout posts={slugs}>

            <div dangerouslySetInnerHTML={{ __html: content }} />

        </SidebarLayout>
    );
  }