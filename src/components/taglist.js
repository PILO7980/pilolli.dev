import React from 'react'
import {
  Box,
  Wrap,
  useCheckbox,
  useCheckboxGroup,
  useStyleConfig,
} from '@chakra-ui/core'

function TagButton(props) {
  const { getCheckboxProps, getInputProps } = useCheckbox(props)
  const tagStyles = useStyleConfig('TagButton', props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} />
      <Box {...checkbox} {...tagStyles}>
        {props.value}
      </Box>
    </Box>
  )
}

export default function TagList({ tags, value, onChange }) {
  const { getCheckboxProps } = useCheckboxGroup({
    value,
    onChange,
  })

  return (
    <Wrap spacing={2}>
      {tags.map((value) => {
        const tag = getCheckboxProps({ value })
        return <TagButton key={value} {...tag} />
      })}
    </Wrap>
  )
}
