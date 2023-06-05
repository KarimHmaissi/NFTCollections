import clsx from "clsx";
import Image from "next/image";
import Typography from "@mui/material/Typography";

import { Trait as ITrait } from "nftCollections/services/getTraits";
import { formatEtherValue } from "nftCollections/utils";
import styles from "./Trait.module.css";
import { Opensea } from "../Icons/Opensea";

interface TraitProps {
  trait: ITrait;
  traitType: string;
}

export const Trait = ({ trait, traitType }: TraitProps) => {
  return (
    <div className={styles.root}>
      <Image
        src={trait.thumbnail}
        width={80}
        height={80}
        alt={trait.thumbnail}
        className={styles.thumbnail}
      />
      <div className={styles.dataWrapper}>
        <div className={clsx(styles.data, styles.titleWrapper)}>
          <Typography className={styles.traitTitle} color="grey.400">
            {traitType}
          </Typography>
          <Typography>{trait.value}</Typography>
        </div>
        <div className={styles.data}>
          <Typography color="grey.400" className={styles.dataTitle}>
            Trait floor
          </Typography>
          <Typography className={styles.dataValue}>
            <Opensea className={styles.openseaIcon} />
            {formatEtherValue(trait.traitFloor.price)}
          </Typography>
        </div>
        <div className={styles.data}>
          <Typography color="grey.400" className={styles.dataTitle}>
            Top offer
          </Typography>
          <Typography className={styles.dataValue}>
            <Opensea className={styles.openseaIcon} />
            {formatEtherValue(trait.topOffer.price)}
          </Typography>
        </div>
        <div className={styles.items}>
          <Typography color="grey.400" className={styles.dataTitle}>
            Items
          </Typography>
          <Typography>{trait.count}</Typography>
        </div>
      </div>
    </div>
  );
};
