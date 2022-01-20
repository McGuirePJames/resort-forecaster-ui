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

export type Avalanche = {
  __typename?: 'Avalanche';
  aspect?: Maybe<Scalars['String']>;
  cause?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
  elevation?: Maybe<Scalars['Int']>;
  externalId: Scalars['String'];
  id: Scalars['String'];
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type CurrentForecast = {
  __typename?: 'CurrentForecast';
  clouds?: Maybe<Scalars['Float']>;
  dewPoint?: Maybe<Scalars['Float']>;
  feelsLike?: Maybe<Scalars['Float']>;
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

export type Query = {
  __typename?: 'Query';
  avalanches?: Maybe<Array<Maybe<Avalanche>>>;
  skiResorts?: Maybe<Array<Maybe<SkiResort>>>;
  weatherForecast?: Maybe<WeatherForecast>;
};


export type QueryWeatherForecastArgs = {
  skiResortId: Scalars['String'];
};

export type SkiResort = {
  __typename?: 'SkiResort';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  weatherForecast?: Maybe<WeatherForecast>;
};

export type WeatherForecast = {
  __typename?: 'WeatherForecast';
  currentForecast?: Maybe<CurrentForecast>;
};

export type AvalanceFieldsFragment = { __typename?: 'Avalanche', id: string, externalId: string, latitude?: number | null | undefined, longitude?: number | null | undefined, elevation?: number | null | undefined, aspect?: string | null | undefined, type?: string | null | undefined, cause?: string | null | undefined, depth?: number | null | undefined, width?: number | null | undefined };

export type CurrentForecastFieldsFragment = { __typename?: 'CurrentForecast', clouds?: number | null | undefined, dewPoint?: number | null | undefined, feelsLike?: number | null | undefined, humidity?: number | null | undefined, pressure?: number | null | undefined, sunrise?: number | null | undefined, sunset?: number | null | undefined, temp?: number | null | undefined, uVI?: number | null | undefined, visibility?: number | null | undefined, windDeg?: number | null | undefined, windGust?: number | null | undefined, windSpeed?: number | null | undefined };

export type SkiResortFieldsFragment = { __typename?: 'SkiResort', id: string, name?: string | null | undefined, description?: string | null | undefined, imageUrl?: string | null | undefined, latitude?: number | null | undefined, longitude?: number | null | undefined };

export type GetAvalanchesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAvalanchesQuery = { __typename?: 'Query', avalanches?: Array<{ __typename?: 'Avalanche', id: string, externalId: string, latitude?: number | null | undefined, longitude?: number | null | undefined, elevation?: number | null | undefined, aspect?: string | null | undefined, type?: string | null | undefined, cause?: string | null | undefined, depth?: number | null | undefined, width?: number | null | undefined } | null | undefined> | null | undefined };

export type GetForecastQueryVariables = Exact<{
  skiResortId: Scalars['String'];
}>;


export type GetForecastQuery = { __typename?: 'Query', weatherForecast?: { __typename?: 'WeatherForecast', currentForecast?: { __typename?: 'CurrentForecast', clouds?: number | null | undefined, dewPoint?: number | null | undefined, feelsLike?: number | null | undefined, humidity?: number | null | undefined, pressure?: number | null | undefined, sunrise?: number | null | undefined, sunset?: number | null | undefined, temp?: number | null | undefined, uVI?: number | null | undefined, visibility?: number | null | undefined, windDeg?: number | null | undefined, windGust?: number | null | undefined, windSpeed?: number | null | undefined } | null | undefined } | null | undefined };

export type GetSkiResortsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSkiResortsQuery = { __typename?: 'Query', skiResorts?: Array<{ __typename?: 'SkiResort', id: string, name?: string | null | undefined, description?: string | null | undefined, imageUrl?: string | null | undefined, latitude?: number | null | undefined, longitude?: number | null | undefined, weatherForecast?: { __typename?: 'WeatherForecast', currentForecast?: { __typename?: 'CurrentForecast', clouds?: number | null | undefined, dewPoint?: number | null | undefined, feelsLike?: number | null | undefined, humidity?: number | null | undefined, pressure?: number | null | undefined, sunrise?: number | null | undefined, sunset?: number | null | undefined, temp?: number | null | undefined, uVI?: number | null | undefined, visibility?: number | null | undefined, windDeg?: number | null | undefined, windGust?: number | null | undefined, windSpeed?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export const AvalanceFieldsFragmentDoc = gql`
    fragment AvalanceFields on Avalanche {
  id
  externalId
  latitude
  longitude
  elevation
  aspect
  type
  cause
  depth
  width
}
    `;
export const CurrentForecastFieldsFragmentDoc = gql`
    fragment CurrentForecastFields on CurrentForecast {
  clouds
  dewPoint
  feelsLike
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
  id
  name
  description
  imageUrl
  latitude
  longitude
}
    `;
export const GetAvalanchesDocument = gql`
    query GetAvalanches {
  avalanches {
    ...AvalanceFields
  }
}
    ${AvalanceFieldsFragmentDoc}`;
export const GetForecastDocument = gql`
    query GetForecast($skiResortId: String!) {
  weatherForecast(skiResortId: $skiResortId) {
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
    weatherForecast {
      currentForecast {
        ...CurrentForecastFields
      }
    }
  }
}
    ${SkiResortFieldsFragmentDoc}
${CurrentForecastFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetAvalanches(variables?: GetAvalanchesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAvalanchesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAvalanchesQuery>(GetAvalanchesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAvalanches');
    },
    GetForecast(variables: GetForecastQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetForecastQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetForecastQuery>(GetForecastDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetForecast');
    },
    GetSkiResorts(variables?: GetSkiResortsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSkiResortsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSkiResortsQuery>(GetSkiResortsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSkiResorts');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;