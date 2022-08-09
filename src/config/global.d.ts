import { config } from 'dotenv';

config();

export const {
  MAP_API_KEY,
} = process.env as {
  [key: string]: string;
};

interface ProcessEnv {
  [key: string]: string | undefined;
}