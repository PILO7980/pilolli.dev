import hydrate from 'next-mdx-remote/hydrate'
import { BLOG_CONTENT_PATH } from '@configs/constants'
import { getMdxContent } from '@utils/get-mdx-content'

import DefaultLayout from '@components/default-layout'
import SEO from '@components/seo'
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

const PostPage = ({ mdxSource, frontMatter }) => {
  const content = hydrate(mdxSource, { components })
  const { title, description } = frontMatter

  return (
    <DefaultLayout>
      <SEO title={title} description={description} />
      <Box gridColumn={['1', null, null, 'start / middle']}>
        <Title textStyle={`h1`}>{title}</Title>
        <Description>{description}</Description>
        {content}
      </Box>
      <Box gridColumn={['1', null, null, 'middle / end']}>
        {
          // Sidebar
        }
      </Box>
    </DefaultLayout>
  )
}

export async function getStaticPaths() {
  const posts = await getMdxContent(BLOG_CONTENT_PATH)
  const paths = posts.map(({ slug }) => ({
    params: {
      slug: slug.split('/'),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await getMdxContent(BLOG_CONTENT_PATH)
  const postSlug = slug.join('/')
  const [post] = posts.filter((post) => post.slug === postSlug)

  if (!post) {
    console.warn(`No content found for slug ${postSlug}`)
  }

  return {
    props: {
      mdxSource: post.mdx,
      frontMatter: post.data,
    },
  }
}

export default PostPage
