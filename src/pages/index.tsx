import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "nftCollections/styles/Home.module.css";
import Link from "next/link";
import { Container, Typography } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Collections App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Container maxWidth="md">
          <Typography gutterBottom variant="h4">
            Notes
          </Typography>

          <div className={styles.marginBottom}>
            <Typography gutterBottom variant="h5">
              Exercise 1 -{" "}
              <Link href="/collections/0x123" className={styles.link}>
                Link
              </Link>
            </Typography>
            <ul>
              <li>
                <Typography gutterBottom>
                  {" "}
                  The solution <strong>will not work</strong>out the box due to
                  CORS. Due to a missing `Access-Control-Allow-Origin` header on
                  the endpoints response the browser CORS policy will prevent
                  the API requests. I got around this locally by turning off
                  CORS in the browser
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  For state management I used{" "}
                  <a
                    className={styles.link}
                    href="https://tanstack.com/query/latest/docs/react/overview"
                  >
                    React Query.
                  </a>
                  In order to prevent unnecessary rerenders and optimize
                  performance I take advantage of{" "}
                  <a
                    className={styles.link}
                    href="https://tkdodo.eu/blog/react-query-render-optimizations#structural-sharing"
                  >
                    Structural sharing
                  </a>{" "}
                  and react query selectors to target specific parts of the data
                  in components
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  For architecture I built a separate services layer with MSW
                  mocks and custom query hooks with React Query
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  For styling I used css modules and{" "}
                  <a className={styles.link} href="https://mui.com/">
                    Material UI
                  </a>
                </Typography>
              </li>
            </ul>
          </div>

          <div className={styles.marginBottom}>
            <Typography gutterBottom variant="h5">
              Exercise 2 -{" "}
              <Link href="/collection" className={styles.link}>
                Link
              </Link>
            </Typography>
            <ul>
              <li>
                <Typography gutterBottom>
                  The second solution is built on a `/collection` page with a
                  hardcoded collection object
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  On mobile the content drops underneath the image
                </Typography>
              </li>
            </ul>
          </div>

          <div className={styles.marginBottom}>
            <Typography gutterBottom variant="h5">
              TODO in a real project
            </Typography>
            <ul>
              <li>
                <Typography gutterBottom>
                  Write unit tests for the components, service layer transforms
                  and utils
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  Write integration tests for the pages
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  Write pact contract tests for the two endpoints used
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  Create a docker image for deployment
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>Create pipeline scripts</Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  Add husky pre commit/push hooks to run linting, tests and
                  build
                </Typography>
              </li>
              <li>
                <Typography gutterBottom>
                  Further optimizations to the traits components. Use selector
                  to prevent unnecessary rerenders
                </Typography>
              </li>
            </ul>
          </div>
        </Container>
      </main>
    </>
  );
}
