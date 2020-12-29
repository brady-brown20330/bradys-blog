import { MDXProvider } from '@mdx-js/react';
// import Highlight, { defaultProps } from 'prism-react-renderer';
// import theme from 'prism-react-renderer/themes/dracula';
import React from 'react';
import Code from './src/components/Code';

const components = {
  'p.inlineCode': props => (
    <code style={{ backgroundColor: 'lightgray', fontSize: 'larger'}} {...props} />
  ),
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <Code
          codeString={props.children.trim()}
          language={
            props.className && props.className.replace('language-', '')
          }
          {...props}
        />
      );
    }
  },
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);