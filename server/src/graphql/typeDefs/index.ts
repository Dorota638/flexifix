import { query } from './query';
import { input } from './input';
import { mutation } from './mutation';
import { types } from './types';
export const typeDefs = `#graphql
  ${query}
  ${input}
  ${mutation}
  ${types}
`;
