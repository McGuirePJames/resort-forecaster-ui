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
  Clouds?: Maybe<Scalars['Float']>;
  DewPoint?: Maybe<Scalars['Float']>;
  FeelsLIke?: Maybe<Scalars['Float']>;
  Humidity?: Maybe<Scalars['Float']>;
  Pressure?: Maybe<Scalars['Float']>;
  Sunrise?: Maybe<Scalars['Float']>;
  Sunset?: Maybe<Scalars['Float']>;
  Temp?: Maybe<Scalars['Float']>;
  UVI?: Maybe<Scalars['Float']>;
  Visibility?: Maybe<Scalars['Float']>;
  WindDeg?: Maybe<Scalars['Float']>;
  WindGust?: Maybe<Scalars['Float']>;
  WindSpeed?: Maybe<Scalars['Float']>;
};

export type Forecast = {
  __typename?: 'Forecast';
  CurrentForecast?: Maybe<CurrentForecast>;
};

export type Query = {
  __typename?: 'Query';
  forecast?: Maybe<Forecast>;
  skiResorts?: Maybe<Array<Maybe<SkiResort>>>;
};


export type QueryForecastArgs = {
  skiResortId?: InputMaybe<Scalars['ID']>;
};


export type QuerySkiResortsArgs = {
  skiResortId?: InputMaybe<Scalars['ID']>;
};

export type SkiResort = {
  __typename?: 'SkiResort';
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  skiResortId: Scalars['ID'];
};
