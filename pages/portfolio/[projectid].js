import { useRouter } from 'next/router';

function PortfolioProjectPage() {
  const {pathname, query} = useRouter();

  console.log({pathname});
  console.log({query});

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}

export default PortfolioProjectPage;
