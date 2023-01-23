import React from "react";
import Head from "next/head";

interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, title = "Finrec" } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Financial Records App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full text-center">
        <span>Header</span>
        <div>{children}</div>
        <span>Footer</span>
      </div>
    </>
  );
};

export { Layout };
