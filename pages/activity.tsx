import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Date from "../components/date";
import Footer from "../components/footer";
import GoogleMap from "../components/googlemap";
import Header from "../components/header";
import Table from "../components/table";
import { client } from "../libs/client";

const Activity: NextPage = () => {
  return (
    <div className="">
      <Header />
      <div className="px-20 py-10 bg-slate-50">
        <h2 className="text-center font-extrabold text-4xl  ">TEAM</h2>
        <hr className="my-5 border-gray-200 dark:border-gray-300" />
        <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center"></div>
        <p className="pb-10">
          顧問の先生を始め、卒業生、そして保護者の方々。
          たくさんの支えを追い風にして、私達は走り続けています。
          <br />
          興味を持たれた方、OBやOGの方、一緒に練習したいと言う方。
          柏陽高校陸上部は、いつでも皆さんをお待ちしています！
        </p>
        <div className="md:flex">
          <div className="bg-white shadow-md md:w-1/2 p-5 ">
            <Table />
          </div>
          <div className="bg-white shadow-md md:w-1/2 p-5">
            <Date />
          </div>
        </div>
        <GoogleMap />
      </div>
      <Footer />
    </div>
  );
};

// export const getStaticProps = async () => {
//   const data = await client.get({ endpoint: "introduction" });

//   return {
//     props: {
//       introduction: data.contents,
//     },
//   };
// };

export default Activity;
