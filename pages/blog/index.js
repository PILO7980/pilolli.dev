import { Box, VStack } from '@chakra-ui/core'
import BlogPost from '@components/blog-post'
import DefaultLayout from '@components/default-layout'
import Search from '@components/search'
import SEO from '@components/seo'

import { BLOG_CONTENT_PATH } from '@configs/constants'
import { getMdxContent } from '@utils/get-mdx-content'

export default function BlogPage({ allMdx }) {
  const [filteredBlogs, setFilteredBlogs] = React.useState(allMdx)

  const handleFilter = (data) => {
    setFilteredBlogs(data)
  }

  return (
    <DefaultLayout as="main">
      <SEO
        title="Giardino Digitale"
        description="Il giardino digitale di Antonio Pilolli, front-end developer e web designer"
      />
      <Box gridColumn={['1', null, null, 'start / middle']}>
        <VStack align="stretch" spacing={8}>
          {filteredBlogs?.map((blog) => (
            <BlogPost key={blog.slug} blog={blog} />
          ))}
        </VStack>
      </Box>
      <Box
        gridColumn={['1', null, null, 'middle / end']}
        order={['-1', null, null, '0']}
      >
        <Search blogs={allMdx} handleFilter={handleFilter} />
      </Box>
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  const posts = await getMdxContent(BLOG_CONTENT_PATH)
  const allMdx = posts.map((post) => ({
    slug: post.slug,
    ...post.data,
  }))

  return {
    props: {
      allMdx,
    },
  }
}
