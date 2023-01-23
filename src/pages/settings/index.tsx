import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@types";
import { Layout } from "@components";
import { Settings } from "@containers";

const SettingsPage: NextPageWithLayout = () => {
  return <Settings name="User Name" />;
};

SettingsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default SettingsPage;
