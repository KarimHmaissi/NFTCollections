import Image from "next/image";
import Typography from "@mui/material/Typography";

import { Trait as ITrait } from "nftCollections/services/getTraits";
import { formatEtherValue } from "nftCollections/utils";
import styles from "./Trait.module.css";

interface TraitProps {
  trait: ITrait;
  traitType: string;
}

export const Trait = ({ trait, traitType }: TraitProps) => {
  return (
    <section>
      <div className={styles.root}>
        <Image
          src={trait.thumbnail}
          width={80}
          height={80}
          alt={trait.thumbnail}
          className={styles.thumbnail}
        />
        <div className={styles.data}>
          <Typography color="grey.400">{traitType}</Typography>
          <Typography>{trait.value}</Typography>
        </div>
        <div className={styles.data}>
          <Typography color="grey.400">Trait floor</Typography>
          <Typography>{formatEtherValue(trait.traitFloor.price)}</Typography>
        </div>
        <div className={styles.data}>
          <Typography color="grey.400">Top offer</Typography>
          <Typography>{formatEtherValue(trait.topOffer.price)}</Typography>
        </div>
        <div className={styles.items}>
          <Typography color="grey.400">Items</Typography>
          <Typography>{trait.count}</Typography>
        </div>
      </div>
    </section>
  );
};
