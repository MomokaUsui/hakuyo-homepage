import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import { client } from "../libs/client";

function Inquiry() {
  return (
    <div className="">
      <Header />
      <div className="px-20">
        <h2 className="py-5 text-2xl">このサイトについて</h2>
        <p className="pb-10">
          柏陽高校陸上競技部ホームページは、柏陽高校の陸上部について１人でも多くの方に知ってもらうために作成しています。
          <br />
          2022年にリニューアルしました。以前のサイトは、
          <a
            className="underline text-green-700 hover:no-underline hover:text-gray-500"
            href="http://hakuyouathletics.web.fc2.com/"
          >
            こちら
          </a>
          です。(2015年までの記録は以前のサイトに掲載されています。)
          <br />
          <br />
          <p>
            2022年夏までは、teacup掲示板『柏の木下で』におきまして大会の結果や反省を掲載していましたが、teacup掲示板サービス終了により
          </p>
          2022年夏からは、
          <a
            href="https://ameblo.jp/hakuyotfclub/"
            className="underline text-green-700 hover:no-underline hover:text-gray-500"
          >
            Amebaブログ『柏の木下で』
          </a>
          におきまして各代のマネージャーが大会の結果をプレイヤーが試合の反省を掲載するかたちをとっています。
          <br />
          <br />
          本ページは柏陽高等学校陸上競技部ＯＢ・ＯＧ会によって運営されています。
          <br />
          管理人の都合や不注意により更新や対応が遅れたりサイト上に誤りがあることがございます。ご了承ください。何かございましたら下記の連絡先までご連絡ください。
          <br />
          ホームページ管理人は、2022年10月時点で51期の薄井が担当しております。
        </p>
        <h2 className="py-5 text-2xl">管理人連絡先</h2>
        <p className="pb-10">
          連絡は、下記のメールアドレスまでお願いします(部員は名前と何期生かを書いてください)
          <br />
          <a
            className="pb-5 text-xl underline hover:no-underline text-green-700 hover:text-gray-500"
            href="mailto:hakuyo894athletics@gmail.com"
          >
            hakuyo894athletics@gmail.com
          </a>
          <br /> <br />
          ホームページの修正・削除依頼などを受け付けています。
          <br />
          OB会費や『SPIKE』に関しての質問もこちらにお願いします。
          <br />
          現役生とのコンタクトもこちらから可能ですが、instagramからが確実です。
          <br />
          メールアドレスの変更がありましたのでご注意ください (2021年8/14)
          <br />
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Inquiry;
