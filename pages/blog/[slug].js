import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '@utils/mdxUtils'

import DefaultLayout from '@components/default-layout'
import SEO from '@components/SEO'
import { chakra, useColorModeValue, Box } from '@chakra-ui/core'
import components from '@components/mdx-components'

const Title = (props) => (
  <chakra.h1 color={useColorModeValue('green.500', 'green.300')} {...props} />
)

const Description = (props) => (
  <chakra.p
    fontSize={['md', 'lg', 'xl', '2xl']}
    fontWeight="semibold"
    fontStyle="italic"
    color={useColorModeValue('gray.600', 'whiteAlpha.800')}
    mb={6}
    {...props}
  />
)

const PostPage = ({ source, frontMatter }) => {
  const content = hydrate(source, { components })

  return (
    <DefaultLayout>
      <SEO title={frontMatter.title} description={frontMatter.description} />
      <Box gridColumn={['start / end', null, null, 'start / middle']}>
        <Title textStyle={`h1`}>{frontMatter.title}</Title>
        <Description>{frontMatter.description}</Description>
        {content}
      </Box>
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
      remarkPlugins: [require('remark-slug')],
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
