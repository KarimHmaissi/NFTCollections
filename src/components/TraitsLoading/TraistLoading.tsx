import Skeleton from "@mui/material/Skeleton";
import styles from "./TraitsLoading.module.css";

const TraitLoading = () => {
  return (
    <div className={styles.traitLoadingWrapper}>
      <Skeleton
        variant="rounded"
        width={80}
        height={80}
        className={styles.imageLoading}
      />
      <div className={styles.data}>
        <Skeleton variant="text" sx={{ fontSize: "1rem", width: "100%" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem", width: "100%" }} />
      </div>
      <div className={styles.data}>
        <Skeleton variant="text" sx={{ fontSize: "1rem", width: "100%" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem", width: "100%" }} />
      </div>
      <div className={styles.data}>
        <Skeleton variant="text" sx={{ fontSize: "1rem", width: "100%" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem", width: "100%" }} />
      </div>
    </div>
  );
};

export const TraitsLoading = () => {
  return (
    <section className={styles.root}>
      <Skeleton variant="text" sx={{ fontSize: "2.125rem", width: "100%" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem", width: "100%" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem", width: "100%" }} />
      <TraitLoading />
      <TraitLoading />
      <TraitLoading />
      <TraitLoading />
      <TraitLoading />
      <TraitLoading />
      <TraitLoading />
    </section>
  );
};
