import { useRouter } from 'next/router';

function ClientProjectPage() {
  const { query } = useRouter();
  console.log({ query });

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
    </div>
  );
}

export default ClientProjectPage;
