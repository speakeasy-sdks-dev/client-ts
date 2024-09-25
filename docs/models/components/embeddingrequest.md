# EmbeddingRequest

## Example Usage

```typescript
import { EmbeddingRequest } from "@mistralai/mistralai/models/components";

let value: EmbeddingRequest = {
  inputs: [
    "<value>",
  ],
  model: "PT Cruiser",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `inputs`                                | *components.Inputs*                     | :heavy_check_mark:                      | Text to embed.                          |
| `model`                                 | *string*                                | :heavy_check_mark:                      | ID of the model to use.                 |
| `encodingFormat`                        | *string*                                | :heavy_minus_sign:                      | The format to return the embeddings in. |