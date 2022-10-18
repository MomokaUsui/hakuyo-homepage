import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { client } from "../libs/client";

const Table: NextPage = () => {
  return (
    <div className="pb-10 md:pr-36 p-5 ">
      <p className="text-2xl pb-5">部員数</p>
      <table className="table md:p-4 bg-white shadow rounded-lg">
        <thead>
          <tr>
            <th className="border-b-2 md:p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900"></th>
            <th className="border-b-2 md:p-4 pr-8 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              男子
            </th>
            <th className="border-b-2 md:p-4 pr-8 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              女子
            </th>
            <th className="border-b-2 p-4 pr-8  dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              合計
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-gray-700">
            {/* 1行目 */}
            <td className="border-b-2 p-4 dark:border-dark-5">1年生 55期</td>
            <td className="border-b-2 p-4 dark:border-dark-5">8人</td>
            <td className="border-b-2 p-4 dark:border-dark-5">9人</td>
            <td className="border-b-2 p-4 dark:border-dark-5">15人</td>
          </tr>
          <tr className="text-gray-700">
            {/* 2行目 */}
            <td className="border-b-2 p-4 dark:border-dark-5">2年生 54期</td>
            <td className="border-b-2 p-4 dark:border-dark-5">12人</td>
            <td className="border-b-2 p-4 dark:border-dark-5">7人</td>
            <td className="border-b-2 p-4 dark:border-dark-5">19人</td>
          </tr>
          <tr className="text-gray-700">
            {/* 3行目 */}
            <td className="border-b-2 p-4 dark:border-dark-5">3年生 53期</td>
            <td className="border-b-2 p-4 dark:border-dark-5">13人</td>
            <td className="border-b-2 p-4 dark:border-dark-5">5人</td>
            <td className="border-b-2 p-4 dark:border-dark-5">18人</td>
          </tr>
          <tr className="text-gray-900 ">
            {/* 3行目 */}
            <td className="border-b-2 p-4 dark:border-dark-5">部員合計</td>
            <td className="border-b-2 p-4 dark:border-dark-5">33人</td>
            <td className="border-b-2 p-4 dark:border-dark-5">21人</td>
            <td className="border-b-2 p-4 dark:border-dark-5">54人</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
