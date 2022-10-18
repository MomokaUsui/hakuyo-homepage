import {
    MicroCMSListResponse,
    MicroCMSImage,
    MicroCMSListContent,
  } from 'microcms-js-sdk';
  
  export type Record = {
    event?: string;
    result?: string;
    name?: string;
    place?:string;
    createdAt?:string
  };
//   export type Record = MicroCMSListResponse<Record>;
//   export type ArticleListDetail = Record & MicroCMSListContent;