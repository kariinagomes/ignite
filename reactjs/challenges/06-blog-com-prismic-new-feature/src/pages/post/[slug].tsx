import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

import { getPrismicClient } from '../../services/prismic';

import Comments from '../../components/Comments';
import ExitPreview from '../../components/ExitPreview';
import Header from '../../components/Header';

import { formatDate } from '../../utils/formatDate';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  last_publication_date?: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
  preview?: boolean | null;
  prevPost?: Post | null;
  nextPost?: Post | null;
}

export default function Post({
  post,
  preview,
  prevPost,
  nextPost,
}: PostProps): JSX.Element {
  const { isFallback } = useRouter();

  const readingTime = Math.ceil(
    RichText.asText(
      post.data.content.reduce((acc, item) => [...acc, ...item.body], [])
    ).split(' ').length / 200
  );

  if (isFallback) {
    return <span>Carregando...</span>;
  }

  return (
    <>
      <Head>
        <title>{post.data.title} | spacetraveling</title>
      </Head>
      <main className={styles.post}>
        <Header />
        <img src={post.data.banner.url} alt={post.data.title} />
        <article className={commonStyles.container}>
          <h1>{post.data.title}</h1>
          <div className={commonStyles.publicationInfo}>
            <time>{formatDate(post.first_publication_date)}</time>
            <span>{post.data.author}</span>
            <span>{readingTime} min</span>
            <div>
              <span>* editado em {formatDate(post.last_publication_date)}</span>
            </div>
          </div>
          <div className={styles.postContent}>
            {post.data.content.map(content => (
              <section key={content.heading}>
                <h2>{content.heading}</h2>
                {content.body.map(body => (
                  <p key={body.text}>{body.text}</p>
                ))}
              </section>
            ))}
          </div>
          <div className={styles.pagination}>
            <div>
              {prevPost && (
                <Link href={`/post/${prevPost.uid}`}>
                  <a className={styles.prevPost}>
                    <span>{prevPost.data.title}</span>
                    <strong>Post anterior</strong>
                  </a>
                </Link>
              )}
            </div>
            <div>
              {nextPost && (
                <Link href={`/post/${nextPost.uid}`}>
                  <a className={styles.nextPost}>
                    <span>{nextPost.data.title}</span>
                    <strong>Próximo post</strong>
                  </a>
                </Link>
              )}
            </div>
          </div>
          <Comments />
          {preview && <ExitPreview />}
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const posts = await prismic.query(
    [Prismic.Predicates.at('document.type', 'posts')],
    {
      fetch: ['posts.title', 'posts.subtitle', 'posts.author'],
      pageSize: 2,
    }
  );

  const paths = posts.results.map(post => ({
    params: {
      slug: post.uid,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({
  params,
  preview = false,
  previewData,
}) => {
  const { slug } = params;

  const prismic = getPrismicClient();
  const response = await prismic.getByUID('posts', String(slug), {
    ref: previewData?.ref ?? null,
  });

  const prevPost =
    (
      await prismic.query([Prismic.predicates.at('document.type', 'posts')], {
        after: slug,
        orderings: '[document.first_publication_date desc]',
        fetch: ['posts.title'],
      })
    ).results[0] ?? null;

  const nextPost =
    (
      await prismic.query([Prismic.predicates.at('document.type', 'posts')], {
        after: slug,
        orderings: '[document.first_publication_date]',
        fetch: ['posts.title'],
      })
    ).results[0] ?? null;

  return {
    props: {
      post: response,
      preview,
      prevPost,
      nextPost,
    },
    revalidate: 60 * 30, // 30 minutes
  };
};
