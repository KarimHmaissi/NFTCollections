import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import { Collection } from "nftCollections/services/getCollection";
import styles from "./CollectionHeader.module.css";
import { Eth, VerifiedIcon } from "../Icons";
import {
  convertToPercentage,
  formatDate,
  formatEtherValue,
} from "nftCollections/utils";

interface CollectionHeaderProps {
  collection: Collection;
}

export const CollectionHeader = ({ collection }: CollectionHeaderProps) => {
  const collectionResult = collection.result;

  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <section className={styles.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className={styles.header}>
            <Image
              src={collectionResult.thumbnail}
              width={desktop ? 128 : 71}
              height={desktop ? 128 : 71}
              alt={collectionResult.name}
              className={styles.thumbnail}
            />
            <div className={styles.headerDetails}>
              <Typography variant="h6" className={styles.name}>
                {collectionResult.name}{" "}
                {collectionResult.verified && <VerifiedIcon />}
              </Typography>
              <div className={styles.headerDetailsExtended}>
                <Typography variant="body1" className={styles.brand}>
                  {collectionResult.brand.name}
                </Typography>
                <Typography variant="body1" color="grey.600">
                  {formatDate(collectionResult.mintedAt)}
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={styles.finDetails}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography
                color="grey.500"
                variant="body2"
                className={styles.dataTitle}
              >
                Floor
              </Typography>
              <Typography variant="h6">
                {formatEtherValue(collectionResult.stats.floorPrice)} <Eth />{" "}
                <Typography
                  variant="subtitle2"
                  component="span"
                  color="grey.600"
                  className={styles.percentage}
                >
                  {convertToPercentage(collectionResult.stats.floorPriceDelta)}
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                color="grey.500"
                variant="body2"
                className={styles.dataTitle}
              >
                24h Vol
              </Typography>
              <Typography variant="h6">
                {formatEtherValue(collectionResult.stats.volume24h)} <Eth />
                <Typography
                  variant="subtitle2"
                  component="span"
                  color="grey.800"
                  className={styles.percentage}
                >
                  {convertToPercentage(collectionResult.stats.volume24hDelta)}
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                color="grey.500"
                variant="body2"
                className={styles.dataTitle}
              >
                Market Cap
              </Typography>
              <Typography variant="h6">
                {formatEtherValue(
                  collectionResult.stats.floorPrice,
                  collectionResult.stats.items
                )}{" "}
                <Eth />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};
