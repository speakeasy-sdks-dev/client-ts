/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { HTTPClient } from "./http.js";
import { Logger } from "./logger.js";
import { RetryConfig } from "./retries.js";
import { Params, pathToFunc } from "./url.js";

/**
 * Production server
 */
export const ServerProd = "prod";
/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = {
  [ServerProd]: "https://api.mistral.ai",
} as const;

export type SDKOptions = {
  apiKey?: string | (() => Promise<string>);

  httpClient?: HTTPClient;
  /**
   * Allows overriding the default server used by the SDK
   */
  server?: keyof typeof ServerList;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
  /**
   * Allows overriding the default retry config used by the SDK
   */
  retryConfig?: RetryConfig;
  timeoutMs?: number;
  debugLogger?: Logger;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
  let serverURL = options.serverURL;

  const params: Params = {};

  if (!serverURL) {
    const server = options.server ?? ServerProd;
    serverURL = ServerList[server] || "";
  }

  const u = pathToFunc(serverURL)(params);
  return new URL(u);
}

export const SDK_METADATA = {
  language: "typescript",
  openapiDocVersion: "0.0.2",
  sdkVersion: "1.1.0",
  genVersion: "2.420.7",
  userAgent:
    "speakeasy-sdk/typescript 1.1.0 2.420.7 0.0.2 @mistralai/mistralai-gcp",
} as const;
