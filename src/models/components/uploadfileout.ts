/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { catchUnrecognizedEnum, OpenEnum, Unrecognized } from "../../types/enums.js";
import { SampleType, SampleType$inboundSchema, SampleType$outboundSchema } from "./sampletype.js";
import { Source, Source$inboundSchema, Source$outboundSchema } from "./source.js";
import * as z from "zod";

/**
 * The intended purpose of the uploaded file. Only accepts fine-tuning (`fine-tune`) for now.
 */
export const Purpose = {
    FineTune: "fine-tune",
} as const;
/**
 * The intended purpose of the uploaded file. Only accepts fine-tuning (`fine-tune`) for now.
 */
export type Purpose = OpenEnum<typeof Purpose>;

export type UploadFileOut = {
    /**
     * The unique identifier of the file.
     */
    id: string;
    /**
     * The object type, which is always "file".
     */
    object: string;
    /**
     * The size of the file, in bytes.
     */
    bytes: number;
    /**
     * The UNIX timestamp (in seconds) of the event.
     */
    createdAt: number;
    /**
     * The name of the uploaded file.
     */
    filename: string;
    /**
     * The intended purpose of the uploaded file. Only accepts fine-tuning (`fine-tune`) for now.
     */
    purpose?: "fine-tune" | undefined;
    sampleType: SampleType;
    numLines?: number | null | undefined;
    source: Source;
};

/** @internal */
export const Purpose$inboundSchema: z.ZodType<Purpose, z.ZodTypeDef, unknown> = z.union([
    z.nativeEnum(Purpose),
    z.string().transform(catchUnrecognizedEnum),
]);

/** @internal */
export const Purpose$outboundSchema: z.ZodType<Purpose, z.ZodTypeDef, Purpose> = z.union([
    z.nativeEnum(Purpose),
    z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Purpose$ {
    /** @deprecated use `Purpose$inboundSchema` instead. */
    export const inboundSchema = Purpose$inboundSchema;
    /** @deprecated use `Purpose$outboundSchema` instead. */
    export const outboundSchema = Purpose$outboundSchema;
}

/** @internal */
export const UploadFileOut$inboundSchema: z.ZodType<UploadFileOut, z.ZodTypeDef, unknown> = z
    .object({
        id: z.string(),
        object: z.string(),
        bytes: z.number().int(),
        created_at: z.number().int(),
        filename: z.string(),
        purpose: z.literal("fine-tune").optional(),
        sample_type: SampleType$inboundSchema,
        num_lines: z.nullable(z.number().int()).optional(),
        source: Source$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            created_at: "createdAt",
            sample_type: "sampleType",
            num_lines: "numLines",
        });
    });

/** @internal */
export type UploadFileOut$Outbound = {
    id: string;
    object: string;
    bytes: number;
    created_at: number;
    filename: string;
    purpose: "fine-tune";
    sample_type: string;
    num_lines?: number | null | undefined;
    source: string;
};

/** @internal */
export const UploadFileOut$outboundSchema: z.ZodType<
    UploadFileOut$Outbound,
    z.ZodTypeDef,
    UploadFileOut
> = z
    .object({
        id: z.string(),
        object: z.string(),
        bytes: z.number().int(),
        createdAt: z.number().int(),
        filename: z.string(),
        purpose: z.literal("fine-tune").default("fine-tune"),
        sampleType: SampleType$outboundSchema,
        numLines: z.nullable(z.number().int()).optional(),
        source: Source$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            createdAt: "created_at",
            sampleType: "sample_type",
            numLines: "num_lines",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadFileOut$ {
    /** @deprecated use `UploadFileOut$inboundSchema` instead. */
    export const inboundSchema = UploadFileOut$inboundSchema;
    /** @deprecated use `UploadFileOut$outboundSchema` instead. */
    export const outboundSchema = UploadFileOut$outboundSchema;
    /** @deprecated use `UploadFileOut$Outbound` instead. */
    export type Outbound = UploadFileOut$Outbound;
}
