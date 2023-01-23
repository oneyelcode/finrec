import React from "react";
import { NextPageWithLayout } from "@types";
import { Layout } from "@components";

const Custom500: NextPageWithLayout = () => {
  return (
    <div>
      <h1>500 - Server-side error occurred</h1>
    </div>
  );
};

Custom500.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Custom500;
