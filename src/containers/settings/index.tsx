import React from "react";
import { Button, Space, Typography } from "antd";
import { useRouter } from "next/router";

interface SettingsProps {
  name?: string;
}

export const Settings: React.FC<SettingsProps> = (props) => {
  const { name } = props;
  const router = useRouter();

  const arrWithFalsyValue = ["ok", false, 2, null, 0, undefined, NaN, ""];
  const falsyBouncer = arrWithFalsyValue.filter(Boolean);
  console.log({ falsyBouncer }); // ["ok", 2]

  return (
    <div className="relative h-full">
      <div className="flex flex-col p-4">
        <Typography.Title className="!mb-2">{name}</Typography.Title>
        <Space direction="vertical" size="middle">
          <Typography.Text>This is a Settings Page</Typography.Text>
          <Button
            type="primary"
            onClick={() => {
              router.push("/");
            }}
          >
            Go to Home Page
          </Button>
        </Space>
      </div>
    </div>
  );
};
