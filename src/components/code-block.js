import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import { Button, useClipboard } from '@chakra-ui/core'

const CopyButton = ({ value }) => {
  const { onCopy, hasCopied } = useClipboard(value)
  return (
    <Button
      display="flex"
      alignItems="center"
      size="xs"
      position="absolute"
      top={2}
      right={2}
      bg="green.300"
      color="green.900"
      _hover={{
        bg: 'green.400',
      }}
      aria-label="Copia"
      role="button"
      onClick={onCopy}
    >
      {hasCopied ? 'Copiato' : 'Copia'}
    </Button>
  )
}

export default function CodeBlock({ children, className }) {
  const language = className.replace(/language-/, '')
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            overflowX: 'auto',
            marginTop: 20,
            marginBottom: 20,
            padding: 16,
            position: 'relative',
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
          <CopyButton value={children.trim()} />
        </pre>
      )}
    </Highlight>
  )
}

// TODO: Add line number and line highlight
