import React from "react";
import { NextPageWithLayout } from "@types";
import { Layout } from "@components";

const Custom404: NextPageWithLayout = () => {
  return (
    <div>
      <h1>404 - page not found</h1>
    </div>
  );
};

Custom404.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Custom404;
