import SEO from '@components/SEO';
import { ThemeProvider } from 'emotion-theming';
import { Preflight } from 'styled-preflight';
import theme from '../theme';

const Wrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <SEO
        title="Antonio Pilolli - Front-end developer"
        description="Questo è il sito di Antonio Pilolli, un front-end developer"
        url="www.pilolli.dev"
        twitter={{
          handle: '@pilo7980',
          site: 'https://twitter.com/pilo7980',
        }}
      />
      <Preflight />
      {children}
    </ThemeProvider>
  );
};

export default Wrapper;
