import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../generated/graphql';

export const graphQLClient = new GraphQLClient('https://ava-map-api-app.azurewebsites.net/graphql');
// export const graphQLClient = new GraphQLClient('https://localhost:8080/graphql');

export const graph = getSdk(graphQLClient);
