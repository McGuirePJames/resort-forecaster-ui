import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { gql } from 'graphql-request';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CurrentForecast = {
  __typename?: 'CurrentForecast';
  clouds?: Maybe<Scalars['Float']>;
  dewPoint?: Maybe<Scalars['Float']>;
  feelsLIke?: Maybe<Scalars['Float']>;
  humidity?: Maybe<Scalars['Float']>;
  pressure?: Maybe<Scalars['Float']>;
  sunrise?: Maybe<Scalars['Float']>;
  sunset?: Maybe<Scalars['Float']>;
  temp?: Maybe<Scalars['Float']>;
  uVI?: Maybe<Scalars['Float']>;
  visibility?: Maybe<Scalars['Float']>;
  windDeg?: Maybe<Scalars['Float']>;
  windGust?: Maybe<Scalars['Float']>;
  windSpeed?: Maybe<Scalars['Float']>;
};

export type Forecast = {
  __typename?: 'Forecast';
  currentForecast?: Maybe<CurrentForecast>;
};

export type Query = {
  __typename?: 'Query';
  forecast?: Maybe<Forecast>;
  skiResorts?: Maybe<Array<Maybe<SkiResort>>>;
};


export type QueryForecastArgs = {
  skiResortId: Scalars['String'];
};

export type SkiResort = {
  __typename?: 'SkiResort';
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  skiResortId: Scalars['String'];
};

export type CurrentForecastFieldsFragment = { __typename?: 'CurrentForecast', clouds?: number | null | undefined, dewPoint?: number | null | undefined, feelsLIke?: number | null | undefined, humidity?: number | null | undefined, pressure?: number | null | undefined, sunrise?: number | null | undefined, sunset?: number | null | undefined, temp?: number | null | undefined, uVI?: number | null | undefined, visibility?: number | null | undefined, windDeg?: number | null | undefined, windGust?: number | null | undefined, windSpeed?: number | null | undefined };

export type SkiResortFieldsFragment = { __typename?: 'SkiResort', skiResortId: string, name?: string | null | undefined, description?: string | null | undefined, imageUrl?: string | null | undefined, latitude?: number | null | undefined, longitude?: number | null | undefined };

export type GetForecastQueryVariables = Exact<{
  skiResortId: Scalars['String'];
}>;


export type GetForecastQuery = { __typename?: 'Query', forecast?: { __typename?: 'Forecast', currentForecast?: { __typename?: 'CurrentForecast', clouds?: number | null | undefined, dewPoint?: number | null | undefined, feelsLIke?: number | null | undefined, humidity?: number | null | undefined, pressure?: number | null | undefined, sunrise?: number | null | undefined, sunset?: number | null | undefined, temp?: number | null | undefined, uVI?: number | null | undefined, visibility?: number | null | undefined, windDeg?: number | null | undefined, windGust?: number | null | undefined, windSpeed?: number | null | undefined } | null | undefined } | null | undefined };

export type GetSkiResortsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSkiResortsQuery = { __typename?: 'Query', skiResorts?: Array<{ __typename?: 'SkiResort', skiResortId: string, name?: string | null | undefined, description?: string | null | undefined, imageUrl?: string | null | undefined, latitude?: number | null | undefined, longitude?: number | null | undefined } | null | undefined> | null | undefined };

export const CurrentForecastFieldsFragmentDoc = gql`
    fragment CurrentForecastFields on CurrentForecast {
  clouds
  dewPoint
  feelsLIke
  humidity
  pressure
  sunrise
  sunset
  temp
  uVI
  visibility
  windDeg
  windGust
  windSpeed
}
    `;
export const SkiResortFieldsFragmentDoc = gql`
    fragment SkiResortFields on SkiResort {
  skiResortId
  name
  description
  imageUrl
  latitude
  longitude
}
    `;
export const GetForecastDocument = gql`
    query GetForecast($skiResortId: String!) {
  forecast(skiResortId: $skiResortId) {
    currentForecast {
      ...CurrentForecastFields
    }
  }
}
    ${CurrentForecastFieldsFragmentDoc}`;
export const GetSkiResortsDocument = gql`
    query GetSkiResorts {
  skiResorts {
    ...SkiResortFields
  }
}
    ${SkiResortFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetForecast(variables: GetForecastQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetForecastQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetForecastQuery>(GetForecastDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetForecast');
    },
    GetSkiResorts(variables?: GetSkiResortsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSkiResortsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSkiResortsQuery>(GetSkiResortsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSkiResorts');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;