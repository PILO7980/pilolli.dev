import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '@utils/mdxUtils'

import SEO from '@components/SEO'
import DefaultLayout from '@components/default-layout'
import FullWidth from '@components/full-width'
import { VStack, Box, Heading, Text } from '@chakra-ui/core'
import BlogPost from '@components/blog-post'

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { posts } }
}

export default function Index({ posts }) {
  return (
    <DefaultLayout as="main">
      <SEO
        title="Homepage"
        description="Il sito di Antonio Pilolli, front-end developer e web designer"
      />
      <FullWidth
        p={8}
        fontSize="3xl"
        bg="linear-gradient(to top right, #9dff1c, #00c3ff)"
        color="black"
        mb={8}
      >
        Prova Componente full width
      </FullWidth>
      <VStack align="stretch" spacing={8}>
        {posts.map((post) => (
          <BlogPost key={`${post.filePath.replace(/\.mdx?$/, '')}`} {...post} />
        ))}
      </VStack>
    </DefaultLayout>
  )
}
