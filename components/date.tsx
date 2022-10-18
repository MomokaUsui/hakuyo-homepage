import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "./footer";
import Header from "./header";
import { client } from "../libs/client";

const Date: NextPage = () => {
  return (
    <div className="p-5">
      <p className="text-2xl pb-3 ">活動日</p>
      <div className="flex pb-3">月　火　水　金　日</div>
      <p className="pb-5">
        日曜日に大会のあった次の月曜日は休み
        <br />
        冬季練習中は火・木に朝練あり
      </p>
      <p className="text-2xl pb-3">活動時間</p>
    </div>
  );
};

export default Date;
