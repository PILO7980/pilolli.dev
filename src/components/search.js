import React, { useState } from 'react'
import Fuse from 'fuse.js'

import { Stack, Input } from '@chakra-ui/core'

import TagList from '@components/taglist'

const fuseOptions = {
  threshold: 0.35,
  location: 0,
  distance: 100,
  minMatchCharLength: 1,
  shouldSort: true,
  includeScore: true,
  useExtendedSearch: true,
  keys: ['title', 'tags'],
}

export default function Search({ blogs, handleFilter }) {
  const [searchValue, setSearchValue] = useState('')
  const [searchTags, setSearchTags] = useState([])
  const fuse = new Fuse(blogs, fuseOptions)
  const tags = [...new Set(blogs.flatMap(({ tags }) => tags))]

  React.useEffect(() => {
    if (searchValue === '' && searchTags.length === 0) {
      handleFilter(blogs)
    } else {
      // Allow for a search for tag
      const formattedTags = [...searchTags.map((item) => ({ tags: item }))]
      const formattedTitle = searchValue.length ? [{ title: searchValue }] : []
      const queries = {
        $or: [
          { tags: searchValue },
          { title: searchValue },
          {
            $and: [...formattedTags, ...formattedTitle],
          },
        ],
      }
      const results = fuse.search(queries).map((result) => result.item)
      handleFilter(results)
    }
  }, [searchValue, searchTags])

  const onChange = (e) => {
    const { value } = e.target
    setSearchValue(value)
  }

  const onTagClick = (tag) => {
    if (searchTags.includes(tag)) {
      setSearchTags(searchTags.filter((included) => included != tag))
    } else {
      setSearchTags([...searchTags, tag])
    }
  }

  return (
    <Stack w="100%" spacing={6}>
      <TagList tags={tags} value={searchTags} onChange={setSearchTags} />
      <Input value={searchValue} onChange={onChange} />
    </Stack>
  )
}
