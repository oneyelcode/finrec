import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@types";
import { Layout } from "@components";
import { Home } from "@containers";

const HomePage: NextPageWithLayout = () => {
  return <Home title="Finrec" />;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
