/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type FilesApiRoutesRetrieveFileRequest = {
  fileId: string;
};

/** @internal */
export const FilesApiRoutesRetrieveFileRequest$inboundSchema: z.ZodType<
  FilesApiRoutesRetrieveFileRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  file_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "file_id": "fileId",
  });
});

/** @internal */
export type FilesApiRoutesRetrieveFileRequest$Outbound = {
  file_id: string;
};

/** @internal */
export const FilesApiRoutesRetrieveFileRequest$outboundSchema: z.ZodType<
  FilesApiRoutesRetrieveFileRequest$Outbound,
  z.ZodTypeDef,
  FilesApiRoutesRetrieveFileRequest
> = z.object({
  fileId: z.string(),
}).transform((v) => {
  return remap$(v, {
    fileId: "file_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FilesApiRoutesRetrieveFileRequest$ {
  /** @deprecated use `FilesApiRoutesRetrieveFileRequest$inboundSchema` instead. */
  export const inboundSchema = FilesApiRoutesRetrieveFileRequest$inboundSchema;
  /** @deprecated use `FilesApiRoutesRetrieveFileRequest$outboundSchema` instead. */
  export const outboundSchema =
    FilesApiRoutesRetrieveFileRequest$outboundSchema;
  /** @deprecated use `FilesApiRoutesRetrieveFileRequest$Outbound` instead. */
  export type Outbound = FilesApiRoutesRetrieveFileRequest$Outbound;
}
