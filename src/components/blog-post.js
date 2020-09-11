import NextLink from 'next/link'
import { Text, Heading, Box, Wrap, Badge, Link } from '@chakra-ui/core'

const BlogPost = (post) => {
  const { filePath, data } = post
  const { title, description, tags } = data

  return (
    <Box>
      <NextLink
        as={`/blog/${filePath.replace(/\.mdx?$/, '')}`}
        href={`/blog/[slug]`}
      >
        <Heading>
          <Link>{title}</Link>
        </Heading>
      </NextLink>
      <Text fontSize="lg">{description}</Text>
      <Wrap>
        {tags.map((tag) => (
          <Badge key={tag} size="sm" variant="subtle">
            {tag}
          </Badge>
        ))}
      </Wrap>
    </Box>
  )
}

export default BlogPost
