# CompletionEvent

## Example Usage

```typescript
import { CompletionEvent } from "@mistralai/mistralai-gcp/models/components";

let value: CompletionEvent = {
    data: {
        id: "<id>",
        model: "Model S",
        usage: {
            promptTokens: 16,
            completionTokens: 34,
            totalTokens: 50,
        },
        choices: [
            {
                index: 592845,
                delta: {},
                finishReason: "error",
            },
        ],
    },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [components.CompletionChunk](../../models/components/completionchunk.md) | :heavy_check_mark:                                                       | N/A                                                                      |