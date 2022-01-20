import { GraphQLClient } from 'graphql-request';
import { getSdk } from './types';

export const graphQLClient = new GraphQLClient('https://localhost:8080/graphql');

export const graph = getSdk(graphQLClient);
