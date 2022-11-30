import fs from 'fs';
import matter from 'gray-matter';
import SidebarLayout from '../../components/sidebarLayout'
import Question from '../../components/question';

export async function getStaticPaths() {
    // Retrieve all our slugs
    const files = fs.readdirSync('posts');
    const paths = files.map((fileName) => ({
        params: {
          slug: fileName.replace(/\.\w*/, ''),
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
        fileName.replace(/\.\w*/, ''),
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

            let font = JSON.parse(content);
            <div dangerouslySetInnerHTML={{ __html: FontFace.texto }} />
            font.questoes.map((e) =>
                <Question title={e[0]} description={e[1]} options={e[2]} solution={e[3]} />
            )
            

        </SidebarLayout>
    );
  }