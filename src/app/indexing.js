import Head from 'next/head';
 
function IndexPage() {
  return (
    <div className="w-0 h-0">
      <Head>
        <title>Metto Official || Herbal Tea</title>
        <link
          rel="canonical"
          href="https://example.com/blog/original-post"
          key="canonical"
        />
      </Head>
      <p>This post exists on two URLs.</p>
    </div>
  );
}
 
export default IndexPage;
