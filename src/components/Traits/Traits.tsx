import { useState } from "react";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { TraitsResponse } from "nftCollections/services/getTraits";
import { Trait } from "../Trait";
import styles from "./Traits.module.css";

interface TraitsProps {
  traits: TraitsResponse;
}

export const Traits = ({ traits }: TraitsProps) => {
  const [selectedOption, setSelectedOption] = useState("Trait floor");
  console.log("Rendering", selectedOption);

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    setSelectedOption(event.target.value);
  };

  const sortItems = (option: string) => {
    const allItems = Object.entries(traits.results).flatMap(
      ([category, traits]) => traits.map((trait) => ({ ...trait, category }))
    );

    switch (option) {
      case "Trait floor":
        return allItems.sort(
          (a, b) => +b.traitFloor.price - +a.traitFloor.price
        );
      case "Trait offer":
        return allItems.sort((a, b) => +b.topOffer.price - +a.topOffer.price);
      case "Rarity":
        return allItems.sort((a, b) => b.count - a.count);
      default:
        return allItems;
    }
  };

  const sortedItems = sortItems(selectedOption);

  const categoryCount = Object.keys(traits.results).length;

  const totalCount = Object.values(traits.results).reduce(
    (total, categoryTraits) => {
      return (
        total + categoryTraits.reduce((sum, trait) => sum + trait.count, 0)
      );
    },
    0
  );

  return (
    <section className={styles.root}>
      <div className={styles.header}>
        <Typography className={styles.heading} variant="h4">
          Top traits
        </Typography>
        <Select
          labelId="sorted-by"
          id="traits-sort"
          value={selectedOption}
          label="Sort by"
          onChange={handleSortChange}
          className={styles.sortSelect}
          inputProps={{ IconComponent: () => null }}
        >
          <MenuItem value="Trait floor">Sort by trait floor</MenuItem>
          <MenuItem value="Trait offer">Sort by trait offer</MenuItem>
          <MenuItem value="Rarity">Sort by rarity</MenuItem>
        </Select>
      </div>

      <Typography>
        The Collection Name NFT collection has{" "}
        <strong>{totalCount} unique traits</strong> among{" "}
        <strong>{categoryCount} trait categories.</strong>
      </Typography>

      <ul className={styles.traitList}>
        {sortedItems.map((trait, index) => (
          <li className={styles.traitListItem} key={trait.thumbnail + index}>
            <Trait traitType={trait.category} trait={trait} />
          </li>
        ))}
      </ul>
    </section>
  );
};
