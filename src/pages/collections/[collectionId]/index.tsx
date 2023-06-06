import Head from "next/head";
import { GetServerSideProps } from "next";
import { dehydrate } from "@tanstack/query-core";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

import {
  prefetchCollection,
  useGetCollectionSeo,
} from "nftCollections/services/getCollection/query";
import { CollectionHeader } from "nftCollections/components/CollectionHeader/CollectionHeader";
import { useGetTraits } from "nftCollections/services/getTraits/query";
import { Traits } from "nftCollections/components/Traits";
import { TraitsLoading } from "nftCollections/components/TraitsLoading";
import styles from "nftCollections/styles/Collections.module.css";

export default function Collection() {
  const router = useRouter();
  const { collectionId } = router.query;
  const { data: collection } = useGetCollectionSeo(collectionId as string);

  const { data: traits, isLoading } = useGetTraits(collectionId as string);

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
          {traits && <Traits traits={traits} />}
          {isLoading && <TraitsLoading />}
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
