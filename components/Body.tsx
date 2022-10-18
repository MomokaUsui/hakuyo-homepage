import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "./footer";
import Header from "./header";
import { client } from "../libs/client";

const Body: NextPage = () => {
  return (
    <div>
      {/* <p className="pb-10 text-3xl font-normal text-green-700">
        柏陽高校陸上競技部　ホームページ
      </p> */}

      <p className="py-10">
        『SPIKE』について(お知らせ)
        <br />
        毎年柏陽高校陸上競技部の会報である『SPIKE』をOBの方々に発行しております。住所変更をした方、SPIKEが送られてこない方、他にもご不明点がございましたら、下記のメールアドレスにご連絡をお願いいたします。
        またオンラインの会報へのシフトも考えております。オンラインでの受け取りを希望する方もお気軽にご連絡ください。
        メールアドレス: hakuyo894athletics@gmail.com
      </p>
    </div>
  );
};

export default Body;
