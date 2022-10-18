import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Body from "../components/Body";
import Footer from "../components/footer";
import HakuyoKiroku from "../components/hakuyokiroku";
import Header from "../components/header";
import { client } from "../libs/client";
import { Record } from "../types";

type Props = {
  record: Array<Record>;
  record2: Array<Record>;
};
const Home: NextPage = ({ record, record2 }: any) => {
  return (
    <div className="">
      <Header />

      <div className="sm:px-20 px-1 py-10">
        <Body />
        <HakuyoKiroku record={record} record2={record2} />
      </div>
      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "record",
    queries: { limit: 100, orders: "createdAt" },
  });
  const data2 = await client.get({
    endpoint: "record2",
    queries: { limit: 100, orders: "createdAt" },
  });
  return {
    props: {
      record: data.contents,
      record2: data2.contents,
    },
  };
};

export default Home;
