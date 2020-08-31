import NextLink from 'next/link'
import { Text, Heading, Box, Wrap, Tag, Link } from '@chakra-ui/core'

const BlogPost = (post) => {
  const { filePath, data } = post
  const { title, description, tags } = data

  return (
    <Box>
      <NextLink
        as={`/blog/${filePath.replace(/\.mdx?$/, '')}`}
        href={`/blog/[slug]`}
      >
        <Link>
          <Heading>{title}</Heading>
        </Link>
      </NextLink>
      <Text fontSize="lg">{description}</Text>
      <Wrap>
        {tags.map((tag) => (
          <Tag key={tag} size="sm" variant="solid">
            {tag}
          </Tag>
        ))}
      </Wrap>
    </Box>
  )
}

export default BlogPost
