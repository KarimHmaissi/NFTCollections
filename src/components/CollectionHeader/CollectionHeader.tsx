import clsx from "clsx";
import Image from "next/image";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";

import {
  useGetCollectionData,
  useGetCollectionDetails,
} from "nftCollections/services/getCollection/query";
import { Eth, VerifiedIcon } from "../Icons";
import styles from "./CollectionHeader.module.css";

interface CollectionHeaderProps {
  collectionId: string;
}

const CollectionHeaderData = ({ collectionId }: CollectionHeaderProps) => {
  const { data: collection } = useGetCollectionData(collectionId);

  return (
    <div className={styles.data}>
      {collection && (
        <>
          <div className={clsx(styles.dataWrapper, styles.floor)}>
            <Typography
              color="grey.500"
              variant="body2"
              className={styles.dataTitle}
            >
              Floor
            </Typography>
            <Typography variant="h6">
              {collection.floorPrice} <Eth />{" "}
              <Typography
                variant="subtitle2"
                component="span"
                color="grey.600"
                className={styles.percentage}
              >
                {collection.floorPriceDelta}
              </Typography>
            </Typography>
          </div>
          <div className={clsx(styles.dataWrapper, styles.volume)}>
            <Typography
              color="grey.500"
              variant="body2"
              className={styles.dataTitle}
            >
              24h Vol
            </Typography>
            <Typography variant="h6">
              {collection.volume24h} <Eth />
              <Typography
                variant="subtitle2"
                component="span"
                color="grey.800"
                className={styles.percentage}
              >
                {collection.volume24hDelta}
              </Typography>
            </Typography>
          </div>
          <div className={styles.dataWrapper}>
            <Typography
              color="grey.500"
              variant="body2"
              className={styles.dataTitle}
            >
              Market Cap
            </Typography>
            <Typography variant="h6">
              {collection.marketCap} <Eth />
            </Typography>
          </div>
        </>
      )}
    </div>
  );
};

export const CollectionHeader = ({ collectionId }: CollectionHeaderProps) => {
  const { data: collection } = useGetCollectionDetails(collectionId);

  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <section className={styles.root}>
      {collection && (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <div className={styles.header}>
              <Image
                src={collection.thumbnail}
                width={desktop ? 128 : 71}
                height={desktop ? 128 : 71}
                alt={collection.name}
                className={styles.thumbnail}
              />
              <div className={styles.headerDetails}>
                <Typography variant="h6" className={styles.name}>
                  {collection.name} {collection.verified && <VerifiedIcon />}
                </Typography>
                <div className={styles.headerDetailsExtended}>
                  <Typography variant="body1" className={styles.brand}>
                    {collection.name}
                  </Typography>
                  <Typography variant="body1" color="grey.600">
                    {collection.mintedAt}
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <CollectionHeaderData collectionId={collectionId} />
        </Grid>
      )}
    </section>
  );
};
