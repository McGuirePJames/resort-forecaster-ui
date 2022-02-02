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
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
  /** The built-in `Decimal` scalar type. */
  Decimal: any;
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  UUID: any;
};

export type Avalanche = {
  __typename?: 'Avalanche';
  aspect?: Maybe<Scalars['String']>;
  cause?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  depth?: Maybe<Scalars['Int']>;
  elevation?: Maybe<Scalars['Int']>;
  externalId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type AvalancheFilterInput = {
  and?: InputMaybe<Array<AvalancheFilterInput>>;
  aspect?: InputMaybe<StringOperationFilterInput>;
  cause?: InputMaybe<StringOperationFilterInput>;
  date?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  depth?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  elevation?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
  externalId?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  latitude?: InputMaybe<ComparableNullableOfDoubleOperationFilterInput>;
  longitude?: InputMaybe<ComparableNullableOfDoubleOperationFilterInput>;
  or?: InputMaybe<Array<AvalancheFilterInput>>;
  type?: InputMaybe<StringOperationFilterInput>;
  width?: InputMaybe<ComparableNullableOfInt32OperationFilterInput>;
};

export type AvalancheInput = {
  aspect?: InputMaybe<Scalars['String']>;
  cause?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['DateTime']>;
  depth?: InputMaybe<Scalars['Int']>;
  elevation?: InputMaybe<Scalars['Int']>;
  externalId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type AvalancheSortInput = {
  aspect?: InputMaybe<SortEnumType>;
  cause?: InputMaybe<SortEnumType>;
  date?: InputMaybe<SortEnumType>;
  depth?: InputMaybe<SortEnumType>;
  elevation?: InputMaybe<SortEnumType>;
  externalId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  latitude?: InputMaybe<SortEnumType>;
  longitude?: InputMaybe<SortEnumType>;
  type?: InputMaybe<SortEnumType>;
  width?: InputMaybe<SortEnumType>;
};

export type ComparableDecimalOperationFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  neq?: InputMaybe<Scalars['Decimal']>;
  ngt?: InputMaybe<Scalars['Decimal']>;
  ngte?: InputMaybe<Scalars['Decimal']>;
  nin?: InputMaybe<Array<Scalars['Decimal']>>;
  nlt?: InputMaybe<Scalars['Decimal']>;
  nlte?: InputMaybe<Scalars['Decimal']>;
};

export type ComparableGuidOperationFilterInput = {
  eq?: InputMaybe<Scalars['UUID']>;
  gt?: InputMaybe<Scalars['UUID']>;
  gte?: InputMaybe<Scalars['UUID']>;
  in?: InputMaybe<Array<Scalars['UUID']>>;
  lt?: InputMaybe<Scalars['UUID']>;
  lte?: InputMaybe<Scalars['UUID']>;
  neq?: InputMaybe<Scalars['UUID']>;
  ngt?: InputMaybe<Scalars['UUID']>;
  ngte?: InputMaybe<Scalars['UUID']>;
  nin?: InputMaybe<Array<Scalars['UUID']>>;
  nlt?: InputMaybe<Scalars['UUID']>;
  nlte?: InputMaybe<Scalars['UUID']>;
};

export type ComparableNullableOfDateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  ngt?: InputMaybe<Scalars['DateTime']>;
  ngte?: InputMaybe<Scalars['DateTime']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  nlt?: InputMaybe<Scalars['DateTime']>;
  nlte?: InputMaybe<Scalars['DateTime']>;
};

export type ComparableNullableOfDecimalOperationFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  neq?: InputMaybe<Scalars['Decimal']>;
  ngt?: InputMaybe<Scalars['Decimal']>;
  ngte?: InputMaybe<Scalars['Decimal']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']>>>;
  nlt?: InputMaybe<Scalars['Decimal']>;
  nlte?: InputMaybe<Scalars['Decimal']>;
};

export type ComparableNullableOfDoubleOperationFilterInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
  ngt?: InputMaybe<Scalars['Float']>;
  ngte?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nlt?: InputMaybe<Scalars['Float']>;
  nlte?: InputMaybe<Scalars['Float']>;
};

export type ComparableNullableOfInt32OperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  ngt?: InputMaybe<Scalars['Int']>;
  ngte?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nlt?: InputMaybe<Scalars['Int']>;
  nlte?: InputMaybe<Scalars['Int']>;
};

export type ComparableNullableOfInt64OperationFilterInput = {
  eq?: InputMaybe<Scalars['Long']>;
  gt?: InputMaybe<Scalars['Long']>;
  gte?: InputMaybe<Scalars['Long']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  lt?: InputMaybe<Scalars['Long']>;
  lte?: InputMaybe<Scalars['Long']>;
  neq?: InputMaybe<Scalars['Long']>;
  ngt?: InputMaybe<Scalars['Long']>;
  ngte?: InputMaybe<Scalars['Long']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  nlt?: InputMaybe<Scalars['Long']>;
  nlte?: InputMaybe<Scalars['Long']>;
};

export type CurrentForecast = {
  __typename?: 'CurrentForecast';
  clouds?: Maybe<Scalars['Decimal']>;
  dewPoint?: Maybe<Scalars['Decimal']>;
  feelsLike?: Maybe<Scalars['Decimal']>;
  humidity?: Maybe<Scalars['Decimal']>;
  id: Scalars['UUID'];
  pressure?: Maybe<Scalars['Decimal']>;
  sunrise?: Maybe<Scalars['Long']>;
  sunset?: Maybe<Scalars['Long']>;
  temp?: Maybe<Scalars['Decimal']>;
  uVI?: Maybe<Scalars['Decimal']>;
  visibility?: Maybe<Scalars['Decimal']>;
  windDeg?: Maybe<Scalars['Decimal']>;
  windGust?: Maybe<Scalars['Decimal']>;
  windSpeed?: Maybe<Scalars['Decimal']>;
};

export type CurrentForecastFilterInput = {
  and?: InputMaybe<Array<CurrentForecastFilterInput>>;
  clouds?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  dewPoint?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  feelsLike?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  humidity?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  or?: InputMaybe<Array<CurrentForecastFilterInput>>;
  pressure?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  sunrise?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  sunset?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  temp?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  uVI?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  visibility?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  windDeg?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  windGust?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
  windSpeed?: InputMaybe<ComparableNullableOfDecimalOperationFilterInput>;
};

export type CurrentForecastSortInput = {
  clouds?: InputMaybe<SortEnumType>;
  dewPoint?: InputMaybe<SortEnumType>;
  feelsLike?: InputMaybe<SortEnumType>;
  humidity?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  pressure?: InputMaybe<SortEnumType>;
  sunrise?: InputMaybe<SortEnumType>;
  sunset?: InputMaybe<SortEnumType>;
  temp?: InputMaybe<SortEnumType>;
  uVI?: InputMaybe<SortEnumType>;
  visibility?: InputMaybe<SortEnumType>;
  windDeg?: InputMaybe<SortEnumType>;
  windGust?: InputMaybe<SortEnumType>;
  windSpeed?: InputMaybe<SortEnumType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAvalanche: Scalars['String'];
  addFeedback: MutationResponse;
};


export type MutationAddAvalancheArgs = {
  avalanche: AvalancheInput;
};


export type MutationAddFeedbackArgs = {
  description: Scalars['String'];
  feedbackTypeId: Scalars['Int'];
};

export type MutationResponse = {
  __typename?: 'MutationResponse';
  errors: Array<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  avalanches: Array<Avalanche>;
  forecast: WeatherForecast;
  skiResorts: Array<SkiResort>;
  skiResortsById: Array<SkiResort>;
};


export type QueryAvalanchesArgs = {
  order?: InputMaybe<Array<AvalancheSortInput>>;
  where?: InputMaybe<AvalancheFilterInput>;
};


export type QueryForecastArgs = {
  skiResortId: Scalars['String'];
};


export type QuerySkiResortsArgs = {
  order?: InputMaybe<Array<SkiResortSortInput>>;
  where?: InputMaybe<SkiResortFilterInput>;
};


export type QuerySkiResortsByIdArgs = {
  ids: Array<Scalars['UUID']>;
};

export type SkiResort = {
  __typename?: 'SkiResort';
  description?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  imageUrl?: Maybe<Scalars['String']>;
  latitude: Scalars['Decimal'];
  longitude: Scalars['Decimal'];
  name?: Maybe<Scalars['String']>;
  weatherForecast?: Maybe<WeatherForecast>;
};

export type SkiResortFilterInput = {
  and?: InputMaybe<Array<SkiResortFilterInput>>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableGuidOperationFilterInput>;
  imageUrl?: InputMaybe<StringOperationFilterInput>;
  latitude?: InputMaybe<ComparableDecimalOperationFilterInput>;
  longitude?: InputMaybe<ComparableDecimalOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<SkiResortFilterInput>>;
  weatherForecast?: InputMaybe<WeatherForecastFilterInput>;
};

export type SkiResortSortInput = {
  description?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  imageUrl?: InputMaybe<SortEnumType>;
  latitude?: InputMaybe<SortEnumType>;
  longitude?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  weatherForecast?: InputMaybe<WeatherForecastSortInput>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ncontains?: InputMaybe<Scalars['String']>;
  nendsWith?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nstartsWith?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type WeatherForecast = {
  __typename?: 'WeatherForecast';
  currentForecast: CurrentForecast;
};

export type WeatherForecastFilterInput = {
  and?: InputMaybe<Array<WeatherForecastFilterInput>>;
  currentForecast?: InputMaybe<CurrentForecastFilterInput>;
  or?: InputMaybe<Array<WeatherForecastFilterInput>>;
};

export type WeatherForecastSortInput = {
  currentForecast?: InputMaybe<CurrentForecastSortInput>;
};

export type AvalanceFieldsFragment = { __typename?: 'Avalanche', id: any, externalId?: string | null | undefined, latitude?: number | null | undefined, longitude?: number | null | undefined, elevation?: number | null | undefined, aspect?: string | null | undefined, type?: string | null | undefined, cause?: string | null | undefined, depth?: number | null | undefined, width?: number | null | undefined };

export type CurrentForecastFieldsFragment = { __typename?: 'CurrentForecast', clouds?: any | null | undefined, dewPoint?: any | null | undefined, feelsLike?: any | null | undefined, humidity?: any | null | undefined, pressure?: any | null | undefined, sunrise?: any | null | undefined, sunset?: any | null | undefined, temp?: any | null | undefined, uVI?: any | null | undefined, visibility?: any | null | undefined, windDeg?: any | null | undefined, windGust?: any | null | undefined, windSpeed?: any | null | undefined };

export type MutationResponseFieldsFragment = { __typename?: 'MutationResponse', success: boolean, errors: Array<string> };

export type SkiResortFieldsFragment = { __typename?: 'SkiResort', id: any, name?: string | null | undefined, description?: string | null | undefined, imageUrl?: string | null | undefined, latitude: any, longitude: any };

export type AddFeedbackMutationVariables = Exact<{
  description: Scalars['String'];
  feedbackTypeId: Scalars['Int'];
}>;


export type AddFeedbackMutation = { __typename?: 'Mutation', addFeedback: { __typename?: 'MutationResponse', success: boolean, errors: Array<string> } };

export type GetAvalanchesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAvalanchesQuery = { __typename?: 'Query', avalanches: Array<{ __typename?: 'Avalanche', id: any, externalId?: string | null | undefined, latitude?: number | null | undefined, longitude?: number | null | undefined, elevation?: number | null | undefined, aspect?: string | null | undefined, type?: string | null | undefined, cause?: string | null | undefined, depth?: number | null | undefined, width?: number | null | undefined }> };

export type GetForecastQueryVariables = Exact<{
  skiResortId: Scalars['String'];
}>;


export type GetForecastQuery = { __typename?: 'Query', forecast: { __typename?: 'WeatherForecast', currentForecast: { __typename?: 'CurrentForecast', clouds?: any | null | undefined, dewPoint?: any | null | undefined, feelsLike?: any | null | undefined, humidity?: any | null | undefined, pressure?: any | null | undefined, sunrise?: any | null | undefined, sunset?: any | null | undefined, temp?: any | null | undefined, uVI?: any | null | undefined, visibility?: any | null | undefined, windDeg?: any | null | undefined, windGust?: any | null | undefined, windSpeed?: any | null | undefined } } };

export type GetSkiResortsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSkiResortsQuery = { __typename?: 'Query', skiResorts: Array<{ __typename?: 'SkiResort', id: any, name?: string | null | undefined, description?: string | null | undefined, imageUrl?: string | null | undefined, latitude: any, longitude: any, weatherForecast?: { __typename?: 'WeatherForecast', currentForecast: { __typename?: 'CurrentForecast', clouds?: any | null | undefined, dewPoint?: any | null | undefined, feelsLike?: any | null | undefined, humidity?: any | null | undefined, pressure?: any | null | undefined, sunrise?: any | null | undefined, sunset?: any | null | undefined, temp?: any | null | undefined, uVI?: any | null | undefined, visibility?: any | null | undefined, windDeg?: any | null | undefined, windGust?: any | null | undefined, windSpeed?: any | null | undefined } } | null | undefined }> };

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
export const MutationResponseFieldsFragmentDoc = gql`
    fragment MutationResponseFields on MutationResponse {
  success
  errors
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
export const AddFeedbackDocument = gql`
    mutation AddFeedback($description: String!, $feedbackTypeId: Int!) {
  addFeedback(description: $description, feedbackTypeId: $feedbackTypeId) {
    ...MutationResponseFields
  }
}
    ${MutationResponseFieldsFragmentDoc}`;
export const GetAvalanchesDocument = gql`
    query GetAvalanches {
  avalanches {
    ...AvalanceFields
  }
}
    ${AvalanceFieldsFragmentDoc}`;
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
    AddFeedback(variables: AddFeedbackMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddFeedbackMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddFeedbackMutation>(AddFeedbackDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddFeedback');
    },
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