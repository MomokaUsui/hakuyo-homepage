import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { client } from "../libs/client";

const Header: NextPage = () => {
  return (
    <div>
      <header className="bg-green-50 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={"/"}>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image src="/public/kosho.png" alt="img" width={20} height={20} />
              <span className="ml-3 text-2xl font-semibold hover:text-gray-500 text-green-900 cursor-pointer">
                柏陽高校陸上競技部
              </span>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-xl justify-center">
            {/* <Link href="/results">
              <p className="mr-10 font-semibold text-gray-900 hover:text-gray-500 text-center cursor-pointer">
                Results
                <br />
                <span className="text-base font-normal">大会結果</span>
              </p>
            </Link> */}
            <Link href="/activity">
              <p className="mr-8 font-semibold text-gray-900 hover:text-gray-500 text-center cursor-pointer">
                Activity
                <br />
                <span className="text-base font-normal">活動紹介</span>
              </p>
            </Link>
            <Link href="https://ameblo.jp/hakuyotfclub/">
              {/* TODO:ここにリンク追加する */}
              <p className="mr-6 font-semibold text-gray-900 hover:text-gray-500 text-center cursor-pointer">
                Blog
                <br />
                <span className="text-base font-normal">柏の木下で</span>
              </p>
            </Link>
            <Link href="/inquiry">
              <p className="mr-0 font-semibold text-gray-900 hover:text-gray-500 text-center cursor-pointer">
                Inquiry
                <br />
                <span className="text-base font-normal">サイトについて</span>
              </p>
            </Link>
          </nav>
          <a className="ml-5 text-gray-900 flex">
            {/* <span className="text-gray-900 flex mr-3">
              Instagram
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </span> */}
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
