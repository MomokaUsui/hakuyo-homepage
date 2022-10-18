import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import { client } from "../libs/client";

const Results: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="px-20 py-10">準備中</div>
      <Footer />
    </div>
  );
};

export default Results;
