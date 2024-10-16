/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type JobsApiRoutesFineTuningCancelFineTuningJobRequest = {
    /**
     * The ID of the job to cancel.
     */
    jobId: string;
};

/** @internal */
export const JobsApiRoutesFineTuningCancelFineTuningJobRequest$inboundSchema: z.ZodType<
    JobsApiRoutesFineTuningCancelFineTuningJobRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        job_id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            job_id: "jobId",
        });
    });

/** @internal */
export type JobsApiRoutesFineTuningCancelFineTuningJobRequest$Outbound = {
    job_id: string;
};

/** @internal */
export const JobsApiRoutesFineTuningCancelFineTuningJobRequest$outboundSchema: z.ZodType<
    JobsApiRoutesFineTuningCancelFineTuningJobRequest$Outbound,
    z.ZodTypeDef,
    JobsApiRoutesFineTuningCancelFineTuningJobRequest
> = z
    .object({
        jobId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            jobId: "job_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobsApiRoutesFineTuningCancelFineTuningJobRequest$ {
    /** @deprecated use `JobsApiRoutesFineTuningCancelFineTuningJobRequest$inboundSchema` instead. */
    export const inboundSchema = JobsApiRoutesFineTuningCancelFineTuningJobRequest$inboundSchema;
    /** @deprecated use `JobsApiRoutesFineTuningCancelFineTuningJobRequest$outboundSchema` instead. */
    export const outboundSchema = JobsApiRoutesFineTuningCancelFineTuningJobRequest$outboundSchema;
    /** @deprecated use `JobsApiRoutesFineTuningCancelFineTuningJobRequest$Outbound` instead. */
    export type Outbound = JobsApiRoutesFineTuningCancelFineTuningJobRequest$Outbound;
}
