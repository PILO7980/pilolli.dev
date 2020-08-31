import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import path from 'path'
import dynamic from 'next/dynamic'
import { postFilePaths, POSTS_PATH } from '@utils/mdxUtils'

import DefaultLayout from '@components/default-layout'
import SEO from '@components/SEO'
import { Heading, Text } from '@chakra-ui/core'
import components from '@components/mdx-components'

const PostPage = ({ source, frontMatter }) => {
  const content = hydrate(source, { components })

  return (
    <DefaultLayout>
      <SEO title={frontMatter.title} description={frontMatter.description} />
      <Heading as="h1" mb={2}>
        {frontMatter.title}
      </Heading>
      <Text fontWeight="semibold" fontSize={['sm', 'md', 'lg']} mb={1}>
        {frontMatter.description}
      </Text>
      {content}
    </DefaultLayout>
  )
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [
        require('remark-slug'),
        require('remark-autolink-headings'),
      ],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export default PostPage
