    // libs/client.js
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'hakuyotf',
  apiKey: process.env.API_KEY || '',
});