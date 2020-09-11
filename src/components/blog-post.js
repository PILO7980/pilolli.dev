import NextLink from 'next/link'
import { Text, Heading, Box, Wrap, Badge, Link } from '@chakra-ui/core'

const BlogPost = ({ blog }) => {
  const { slug, title, description, tags } = blog

  return (
    <Box>
      <NextLink as={`/blog/${slug}`} href={`/blog/[slug]`}>
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
