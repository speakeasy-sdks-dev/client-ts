/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type JobsApiRoutesFineTuningUpdateFineTunedModelRequest = {
    /**
     * The ID of the model to update.
     */
    modelId: string;
    updateFTModelIn: components.UpdateFTModelIn;
};

/** @internal */
export const JobsApiRoutesFineTuningUpdateFineTunedModelRequest$inboundSchema: z.ZodType<
    JobsApiRoutesFineTuningUpdateFineTunedModelRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        model_id: z.string(),
        UpdateFTModelIn: components.UpdateFTModelIn$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            model_id: "modelId",
            UpdateFTModelIn: "updateFTModelIn",
        });
    });

/** @internal */
export type JobsApiRoutesFineTuningUpdateFineTunedModelRequest$Outbound = {
    model_id: string;
    UpdateFTModelIn: components.UpdateFTModelIn$Outbound;
};

/** @internal */
export const JobsApiRoutesFineTuningUpdateFineTunedModelRequest$outboundSchema: z.ZodType<
    JobsApiRoutesFineTuningUpdateFineTunedModelRequest$Outbound,
    z.ZodTypeDef,
    JobsApiRoutesFineTuningUpdateFineTunedModelRequest
> = z
    .object({
        modelId: z.string(),
        updateFTModelIn: components.UpdateFTModelIn$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            modelId: "model_id",
            updateFTModelIn: "UpdateFTModelIn",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobsApiRoutesFineTuningUpdateFineTunedModelRequest$ {
    /** @deprecated use `JobsApiRoutesFineTuningUpdateFineTunedModelRequest$inboundSchema` instead. */
    export const inboundSchema = JobsApiRoutesFineTuningUpdateFineTunedModelRequest$inboundSchema;
    /** @deprecated use `JobsApiRoutesFineTuningUpdateFineTunedModelRequest$outboundSchema` instead. */
    export const outboundSchema = JobsApiRoutesFineTuningUpdateFineTunedModelRequest$outboundSchema;
    /** @deprecated use `JobsApiRoutesFineTuningUpdateFineTunedModelRequest$Outbound` instead. */
    export type Outbound = JobsApiRoutesFineTuningUpdateFineTunedModelRequest$Outbound;
}
