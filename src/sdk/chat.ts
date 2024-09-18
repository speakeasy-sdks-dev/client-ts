/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { chatComplete } from "../funcs/chatComplete.js";
import { chatStream } from "../funcs/chatStream.js";
import { EventStream } from "../lib/event-streams.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Chat extends ClientSDK {
  /**
   * Chat Completion
   */
  async complete(
    request: components.ChatCompletionRequest,
    options?: RequestOptions,
  ): Promise<components.ChatCompletionResponse> {
    return unwrapAsync(chatComplete(
      this,
      request,
      options,
    ));
  }

  /**
   * Stream chat completion
   *
   * @remarks
   * Mistral AI provides the ability to stream responses back to a client in order to allow partial results for certain requests. Tokens will be sent as data-only server-sent events as they become available, with the stream terminated by a data: [DONE] message. Otherwise, the server will hold the request open until the timeout or until completion, with the response containing the full result as JSON.
   */
  async stream(
    request: components.ChatCompletionStreamRequest,
    options?: RequestOptions,
  ): Promise<EventStream<components.CompletionEvent>> {
    return unwrapAsync(chatStream(
      this,
      request,
      options,
    ));
  }
}
