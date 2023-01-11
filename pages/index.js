import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Animee | Home</title>
        <meta name="description" content="Top anime and manga." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}></main>
    </>
  );
}
