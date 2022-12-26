/* eslint-disable @typescript-eslint/no-extra-semi */
/* eslint-disable semi */
import type { RedisClientType } from 'redis';

// * redis client interface
export interface RedisInterface {
  client: RedisClientType;
  connect(): Promise<RedisInterface>;
  get(key: string): Promise<string>;
  set(key: string, value: string): Promise<boolean>;
};

// * redis config interface
export interface RedisConfigInterface {
	url: string;
};
