import axios from "axios";
import getConfig from "next/config";

const config = getConfig();

console.log("Getting config", config.publicRuntimeConfig.baseCollectionsDomain);

export const http = axios.create({
  baseURL: config.publicRuntimeConfig.baseCollectionsDomain,
});
