import { Component, ErrorInfo } from 'react';
import { Link } from 'react-router-dom';

import store, { RootState } from 'redux/store';
import styled from 'styled-components';
import { getUserAgent } from 'utils/getUserAgent';

import Text from '../Text';

const FallbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  z-index: 1;
`;

const BodyWrapper = styled.div<{ margin?: string }>`
  padding: 1rem;
  width: 100%;
`;

const CodeBlockWrapper = styled.div`
  background: ${({ theme }) => theme.bg0};
  overflow: auto;
  white-space: pre;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04),
    0px 16px 24px rgba(0, 0, 0, 0.04), 0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 24px;
  padding: 18px 24px;
  color: ${({ theme }) => theme.text1};
`;

const LinkWrapper = styled.div`
  color: ${({ theme }) => theme.blue1};
  padding: 6px 24px;
`;

const SomethingWentWrongWrapper = styled.div`
  padding: 6px 24px;
`;

const AutoColumn = styled.div<{
  gap?: 'sm' | 'md' | 'lg' | string;
  justify?:
    | 'stretch'
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'space-between';
}>`
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: ${({ gap }) =>
    (gap === 'sm' && '8px') ||
    (gap === 'md' && '12px') ||
    (gap === 'lg' && '24px') ||
    gap};
  justify-items: ${({ justify }) => justify && justify};
`;

const Row = styled.div<{
  width?: string;
  align?: string;
  justify?: string;
  padding?: string;
  border?: string;
  borderRadius?: string;
}>`
  width: ${({ width }) => width ?? '100%'};
  display: flex;
  padding: 0;
  align-items: ${({ align }) => align ?? 'center'};
  justify-content: ${({ justify }) => justify ?? 'flex-start'};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
`;

const AutoRow = styled(Row)<{ gap?: string; justify?: string }>`
  flex-wrap: wrap;
  margin: ${({ gap }) => gap && `-${gap}`};
  justify-content: ${({ justify }) => justify && justify};

  & > * {
    margin: ${({ gap }) => gap} !important;
  }
`;
const Label = styled.div<{ fontSize: number; fontWeight?: number }>`
  font-size: ${({ fontSize }) => fontSize && fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight && fontWeight};
`;
type ErrorBoundaryState = {
  error: Error | null;
};

function getRelevantState(): null | keyof RootState {
  const path = window.location.hash;
  if (!path.startsWith('#/')) {
    return null;
  }
  const pieces = path.substring(2).split(/[\/\\?]/);
  switch (pieces[0]) {
    case 'bepro':
      return 'bepro';
    case 'trade':
      return 'trade';
    case 'market':
      return 'market';
    case 'liquidity':
      return 'liquidity';
    case 'markets':
      return 'markets';
    case 'ui':
      return 'ui';
    case 'portfolio':
      return 'portfolio';
    default:
      break;
  }
  return null;
}

function issueBody(error: Error): string {
  const relevantState = getRelevantState();
  const deviceData = getUserAgent();
  return `## URL
  
${window.location.href}

${
  relevantState
    ? `## \`${relevantState}\` state
    
\`\`\`json
${JSON.stringify(store.getState()[relevantState], null, 2)}
\`\`\`
`
    : ''
}
${
  error.name &&
  `## Error

\`\`\`
${error.name}${error.message && `: ${error.message}`}
\`\`\`
`
}
${
  error.stack &&
  `## Stacktrace

\`\`\`
${error.stack}
\`\`\`
`
}
${
  deviceData &&
  `## Device data

\`\`\`json
${JSON.stringify(deviceData, null, 2)}
\`\`\`
`
}
`;
}

export default class ErrorBoundary extends Component<
  unknown,
  ErrorBoundaryState
> {
  constructor(props: unknown) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.log(error);
    // eslint-disable-next-line no-console
    console.log(errorInfo);
    // ReactGA.exception({
    //   ...error,
    //   ...errorInfo,
    //   fatal: true
    // });
  }

  render() {
    const { error } = this.state;
    if (error !== null) {
      const encodedBody = encodeURIComponent(issueBody(error));
      return (
        <FallbackWrapper>
          <BodyWrapper>
            <AutoColumn gap="md">
              <SomethingWentWrongWrapper>
                <Label fontSize={24} fontWeight={600}>
                  Something went wrong
                </Label>
              </SomethingWentWrongWrapper>
              <CodeBlockWrapper>
                <code>
                  <Label fontSize={10}>{error.stack}</Label>
                </code>
              </CodeBlockWrapper>
              <AutoRow>
                <LinkWrapper>
                  <Text as="p" scale="tiny" fontWeight="semibold" color="white">
                    <Link
                      id="create-github-issue-link"
                      target="_blank"
                      to={`https://github.com/The-OpenDAO/sos-market/issues/new?assignees=&labels=bug&body=${encodedBody}&title=${encodeURIComponent(
                        `Crash report: \`${error.name}${
                          error.message && `: ${error.message}`
                        }\``
                      )}`}
                    >
                      Create an issue on GitHub
                      <span>↗</span>
                    </Link>
                  </Text>
                </LinkWrapper>
                {/* <LinkWrapper>
                  <Text as="p" scale="tiny" fontWeight="semibold" color="white">
                    <Link
                      id="get-support-on-discord"
                      target="_blank"
                      to="https://discord.gg/FCfyBSbCU5"
                    >
                      Get support on Discord
                      <span>↗</span>
                    </Link>
                  </Text>
                </LinkWrapper> */}
              </AutoRow>
            </AutoColumn>
          </BodyWrapper>
        </FallbackWrapper>
      );
    }
    const { children } = this.props;
    return children;
  }
}
