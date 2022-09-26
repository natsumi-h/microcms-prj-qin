import { createClient } from "microcms-js-sdk"; //ES6

// Initialize Client SDK.
export const microcmsClient = createClient({
  serviceDomain: "natsumih-blog",
  apiKey: process.env.MICROCMS_APIKEY,
});
