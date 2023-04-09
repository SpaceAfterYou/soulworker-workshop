import type { DeepReadonly } from "ts-essentials";

export type BackendErrResponse = DeepReadonly<{
  status: false;
  code: number;
}>;

export type BackendResponse<T> = DeepReadonly<BackendErrResponse | ({ status: true } & T)>;
