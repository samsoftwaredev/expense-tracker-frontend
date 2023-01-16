import Head from "next/head";

interface Props {
  pageTitle?: string;
}

const Meta = ({ pageTitle = "Kipsi" }: Props) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
