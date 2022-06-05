import { gql } from 'apollo-server-express';
import { query } from './query';
import { input } from './input';
import { mutation } from './mutation';
import { types } from './types';
export const typeDefs = gql`
  ${query}
  ${input}
  ${mutation}
  ${types}
`;
