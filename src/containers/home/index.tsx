import React, { useEffect, useState } from "react";
import { Button, message, Space, Tooltip, Typography } from "antd";
import { useRouter } from "next/router";
import { isEven } from "@utils";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

interface HomeProps {
  title?: string;
}

export const Home: React.FC<HomeProps> = (props) => {
  const { title } = props;
  const router = useRouter();
  const [screenRes, setScreenRes] = useState("");

  useEffect(() => {
    const res = typeof window !== "undefined" ? `${window.innerWidth} * ${window.innerHeight}` : "";
    setScreenRes(res);
  }, []);

  return (
    <div className="relative h-full">
      <div className="flex flex-col p-4">
        <Typography.Title className="!mb-2">{title}</Typography.Title>
        <Space direction="vertical" size="middle">
          <Typography.Text>Financial Records App</Typography.Text>
          <Button
            type="primary"
            onClick={() => {
              message.info("Clicked!");
            }}
          >
            Click Me
          </Button>
          <Button
            onClick={() => {
              router.push("/settings");
            }}
          >
            Go to Settings Page
          </Button>
        </Space>
        <span className="mt-4">Screen Res: {screenRes}</span>
      </div>
      <div className="scrollbar relative mx-auto mb-4 h-[262px] w-80 overflow-auto rounded border border-solid border-neutral-200 p-4">
        {new Array(12).fill("").map((_, i) => (
          <div
            key={i}
            className="mx-auto mb-3 flex w-52 items-center rounded border border-solid py-2 px-4 text-white odd:border-success-400 odd:bg-success-500 even:border-neutral-400 even:bg-neutral-400"
          >
            {isEven(i) ? (
              <Tooltip title="Available">
                <AiOutlineCheckCircle className="cursor-help text-lg" />
              </Tooltip>
            ) : (
              <Tooltip title="Unavailable">
                <AiOutlineCloseCircle className="cursor-help text-lg" />
              </Tooltip>
            )}
            <span className="ml-2">
              {`${Math.floor(Math.random() * 1000)}${new Date().getTime().toString().slice(-7)}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
