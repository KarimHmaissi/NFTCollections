import { rest } from "msw";

import getConfig from "next/config";
import { collectionMock } from "./__mocks__";

const config = getConfig();
const baseUrl = config.serverRuntimeConfig.baseCollectionsDomain;

export const getCollectionMockHandler = () => {
  return rest.get(`${baseUrl}/collections/*`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(collectionMock));
  });
};
