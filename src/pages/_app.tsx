import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import { useAuth } from '../lib/auth';

type Props = {
  children: JSX.Element;
};

const Auth = ({ children }: Props): JSX.Element => {
  const isLoading = useAuth();

  return isLoading ? <LoadingStyle>Loading...</LoadingStyle> : children;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Auth>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Auth>
    </RecoilRoot>
  );
}
export default MyApp;

const LoadingStyle = styled.p`
  width: 100%;
  height: 100vh;
  color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  letter-spacing: 0.2em;
  font-weight: bold;
  color: #000;
`;
