import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';
import { Breadcrumb } from '../Breadcrumb';


// Custom theme for code blocks
const codeTheme = {
  'code[class*="language-"]': {
    color: '#24292f',
    background: 'white',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    fontSize: '14px',
    lineHeight: '1.5',
  },
  'keyword': { color: '#cf222e' },     // red for keywords
  'function': { color: '#8250df' },    // purple for function names
  'string': { color: '#0550ae' },      // blue for strings
  'tag': { color: '#116329' },         // green for HTML tags
  'punctuation': { color: '#24292f' }, // dark gray for punctuation
  'operator': { color: '#cf222e' },    // red for operators
};

// Code block wrapper
const CodeBlockWrapper = styled.div`
  margin: 2rem 0;
  border-radius: 12px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

// Styled components for the documentation
const DocContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  color: #1a1a1a;
  line-height: 1.7;
`;

export const DocumentationPage = () => {
  const { topic } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await import(`../../docs/${topic}.md`);
        const text = await fetch(response.default).then(res => res.text());
        setContent(text);
        setLoading(false);
      } catch (err) {
        console.error('Error loading documentation:', err);
        setError('Documentation not found');
        setLoading(false);
      }
    };

    fetchContent();
  }, [topic]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-4 w-48 bg-gray-200 rounded mb-8"></div>
          <div className="h-8 w-64 bg-gray-200 rounded"></div>
          <div className="h-4 w-full bg-gray-200 rounded mt-4"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb />
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb />
      <DocContainer>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <CodeBlockWrapper>
                <SyntaxHighlighter
                  style={codeTheme}
                  language={match[1]}
                  PreTag="div"
                  customStyle={{
                    background: 'transparent',
                    padding: '1.5rem',
                    margin: 0,
                    border: 'none',
                  }}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </CodeBlockWrapper>
            ) : (
              <code
                style={{
                  background: '#f6f8fa',
                  padding: '0.2em 0.4em',
                  borderRadius: '6px',
                  fontFamily: 'ui-monospace, monospace',
                  fontSize: '85%',
                }}
                {...props}
              >
                {children}
              </code>
            );
          },
            img({node, ...props}) {
              return (
                <img
                  className="rounded-lg shadow-lg"
                  {...props}
                  alt={props.alt || ''}
                />
              );
            },
            h1: ({node, ...props}) => (
              <h1 className="!mt-0 !mb-8" {...props} />
            ),
            h2: ({node, ...props}) => (
              <h2 className="!mt-12 !mb-4" {...props} />
            ),
            h3: ({node, ...props}) => (
              <h3 className="!mt-8 !mb-3" {...props} />
            ),
            a: ({node, ...props}) => (
              <a className="text-blue-600 hover:text-blue-500 no-underline" {...props} />
            ),
            ul: ({node, ...props}) => (
              <ul className="my-6 list-disc list-inside" {...props} />
            ),
            ol: ({node, ...props}) => (
              <ol className="my-6 list-decimal list-inside" {...props} />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
        </DocContainer>
    </div>
  );
};
export default DocumentationPage;