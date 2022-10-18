import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "./footer";
import Header from "./header";
import { client } from "../libs/client";
import { Record } from "../types";

type Props = {
    record: Array<Record>;
    record2: Array<Record>;
  };

const HakuyoKiroku: any = ({ record, record2 }: Props) => {
  return (
    <div className="shadow-lg bg-white sm:p-5">
      <p className="text-3xl pt-3 font-bold text-green-700">
        柏陽高校歴代記録
      </p>
      <hr className="my-5 border-green-600" />
      <div className="md:flex">
        <div className="pr-2  md:w-1/2">
          <div className="overflow-x-auto relative  sm:rounded-lg  pr-2">
            <p className="">男子</p>
            <table className="my-3 w-full text-sm text-left text-gray-700 pr-5 table-fixed ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    種目
                  </th>
                  <th scope="col" className="py-3 px-6">
                    記録
                  </th>
                  <th scope="col" className="py-3 px-6 ">
                    氏名(期)
                  </th>
                  <th scope="col" className="py-3 px-3">
                    会場(年)
                  </th>
                </tr>
              </thead>
              <tbody>
                {record.map((record: any) => (
                  <tr
                    key={record.id}
                    className="bg-white border-b  hover:bg-gray-50"
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {record.event}
                    </th>
                    <td className="py-4 px-6">{record.result}</td>
                    <td className="py-4 px-6 break-words">{record.name}</td>
                    <td className="py-4 px-6">{record.place}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="pl-2 md:w-1/2">
          <div className="overflow-x-auto relative sm:rounded-lg">
            <p className=" pl-2">女子</p>
            <table className="my-3 w-full text-sm text-left text-gray-700 table-fixed">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    種目
                  </th>
                  <th scope="col" className="py-3 px-6">
                    記録
                  </th>
                  <th scope="col" className="py-3 px-6">
                    氏名(期)
                  </th>
                  <th scope="col" className="py-3 px-6">
                    会場(年)
                  </th>
                </tr>
              </thead>
              <tbody>
                {record2.map((record2: any) => (
                  <tr
                    key={record2.id}
                    className="bg-white border-b  hover:bg-gray-50"
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {record2.event}
                    </th>
                    <td className="py-4 px-6">{record2.result}</td>
                    <td className="py-4 px-6 break-words">{record2.name}</td>
                    <td className="py-4 px-6">{record2.place}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <hr className="my-5 border-gray-200 " />
      <p className="text-lg">お願い</p>
      柏陽記録は1999年～2008年頃の記録が残っていないためその間の成績が抜けています。
      <br />
      このページに記載されている以上の記録をご存知の方がおりましたら、お手数ですが、
      <a
        className="pb-5  mr-2 underline hover:no-underline text-green-700 hover:text-gray-500"
        href="mailto:hakuyo894athletics@gmail.com"
      >
        hakuyo894athletics@gmail.com
      </a>
      までご連絡お願いいたします。
      <br />
      <br />
      ご本人様がこのサイトを見て｢名前を出しても構わない｣｢イニシャルもやめて欲しい｣といった事がございましたら、管理人までご連絡ください。
      <br />
      現役生の皆さん、柏陽記録を塗り替えられるよう頑張ってください！！
    </div>
  );
};

export default HakuyoKiroku;
