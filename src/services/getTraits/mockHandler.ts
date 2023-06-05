import { rest } from "msw";

import getConfig from "next/config";
import { TraitMock } from "./__mocks__";

const config = getConfig();
const baseUrl = config.serverRuntimeConfig.baseCollectionsDomain;

export const getMockHandler = () => {
  return rest.get(`${baseUrl}/collections/*/traits`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(TraitMock));
  });
};
