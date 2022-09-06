import { useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';

import { Layout } from '../components/Layout';

const IndexPage = () => {
  const session = useSession();

  useEffect(() => {
    if (session?.data?.error === 'RefreshAccessTokenError') {
      // Force sign in to hopefully resolve error
      signIn('keycloak');
    }
  }, [session]);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1 className="mt-5">Appointment App built with Next.js + Keycloak 👋</h1>
      <div className="mb-5 lead text-muted">
        This is an appointment Next.js site using Keycloak.
      </div>
    </Layout>
  );
}

export default IndexPage;
