import type { HTTPMethod } from '../api-helpers/api-hofs';
import type { Schema, InferType } from 'yup';

type FetcherConfig<S extends Schema | null> = {
  readonly method: HTTPMethod;
  readonly schema: S;
  readonly body?: object;
  readonly config?: RequestInit;
};

export async function fetcher<S extends null>(
  path: string,
  { method, body, config, schema }: FetcherConfig<S>,
): Promise<null>;

export async function fetcher<S extends Schema>(
  path: string,
  { method, body, config, schema }: FetcherConfig<S>,
): Promise<InferType<S>>;

export async function fetcher<S extends Schema | null>(
  path: string,
  { method, body, config, schema }: FetcherConfig<S>,
) {
  try {
    const response = await fetch(path, {
      ...config,
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      method,
      ...(body && { body: JSON.stringify(body) }),
    });
    if (response.ok) {
      if (!schema) {
        return null;
      }
      return schema.cast(await response.json().catch(() => {}));
    }
    throw new ResponseError(response.statusText, response.status);
  } catch (err) {
    if (err instanceof ResponseError) {
      throw err;
    }
    throw new ResponseError('Something went wrong during fetching!');
  }
}

export class ResponseError extends Error {
  constructor(message: string, public readonly status?: number) {
    super(message);
    // eslint-disable-next-line functional/no-this-expression -- TypeScript class
    this.name = 'ResponseError';
    // eslint-disable-next-line functional/no-this-expression -- TypeScript class
    Object.setPrototypeOf(this, ResponseError.prototype);
  }
}
