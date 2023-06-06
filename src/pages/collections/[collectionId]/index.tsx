import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { dehydrate } from "@tanstack/query-core";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { CollectionHeader } from "nftCollections/components/CollectionHeader/CollectionHeader";
import { Traits } from "nftCollections/components/Traits";
import {
  prefetchCollection,
  useGetCollectionSeo,
} from "nftCollections/services/getCollection/query";
import styles from "nftCollections/styles/Collections.module.css";

export default function Collection() {
  const router = useRouter();
  const { collectionId } = router.query;
  const { data: collection } = useGetCollectionSeo(collectionId as string);

  return (
    <>
      <Head>
        <title>{collection?.name}</title>
        <meta name="description" content={`${collection?.name} page`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container className={styles.root}>
          <CollectionHeader collectionId={collectionId as string} />
          <Divider className={styles.divider} />
          <Traits collectionId={collectionId as string} />
        </Container>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const collectionId = context.params?.collectionId;

  if (!collectionId) {
    return {
      notFound: true,
    };
  }

  const queryClient = await prefetchCollection(collectionId as string);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
