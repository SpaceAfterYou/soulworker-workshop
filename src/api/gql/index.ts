import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import type * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  URL: any;
};

export interface BooleanOperationFilterInput {
  readonly eq?: InputMaybe<Scalars['Boolean']>;
  readonly neq?: InputMaybe<Scalars['Boolean']>;
}

export interface DateTimeOperationFilterInput {
  readonly eq?: InputMaybe<Scalars['DateTime']>;
  readonly gt?: InputMaybe<Scalars['DateTime']>;
  readonly gte?: InputMaybe<Scalars['DateTime']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly lt?: InputMaybe<Scalars['DateTime']>;
  readonly lte?: InputMaybe<Scalars['DateTime']>;
  readonly neq?: InputMaybe<Scalars['DateTime']>;
  readonly ngt?: InputMaybe<Scalars['DateTime']>;
  readonly ngte?: InputMaybe<Scalars['DateTime']>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']>>>;
  readonly nlt?: InputMaybe<Scalars['DateTime']>;
  readonly nlte?: InputMaybe<Scalars['DateTime']>;
}

export interface FloatOperationFilterInput {
  readonly eq?: InputMaybe<Scalars['Float']>;
  readonly gt?: InputMaybe<Scalars['Float']>;
  readonly gte?: InputMaybe<Scalars['Float']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly lt?: InputMaybe<Scalars['Float']>;
  readonly lte?: InputMaybe<Scalars['Float']>;
  readonly neq?: InputMaybe<Scalars['Float']>;
  readonly ngt?: InputMaybe<Scalars['Float']>;
  readonly ngte?: InputMaybe<Scalars['Float']>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly nlt?: InputMaybe<Scalars['Float']>;
  readonly nlte?: InputMaybe<Scalars['Float']>;
}

export interface IntOperationFilterInput {
  readonly eq?: InputMaybe<Scalars['Int']>;
  readonly gt?: InputMaybe<Scalars['Int']>;
  readonly gte?: InputMaybe<Scalars['Int']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly lt?: InputMaybe<Scalars['Int']>;
  readonly lte?: InputMaybe<Scalars['Int']>;
  readonly neq?: InputMaybe<Scalars['Int']>;
  readonly ngt?: InputMaybe<Scalars['Int']>;
  readonly ngte?: InputMaybe<Scalars['Int']>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly nlt?: InputMaybe<Scalars['Int']>;
  readonly nlte?: InputMaybe<Scalars['Int']>;
}

export interface ListFilterInputTypeOfPluginRatingEntityFilterInput {
  readonly all?: InputMaybe<PluginRatingEntityFilterInput>;
  readonly any?: InputMaybe<Scalars['Boolean']>;
  readonly none?: InputMaybe<PluginRatingEntityFilterInput>;
  readonly some?: InputMaybe<PluginRatingEntityFilterInput>;
}

export interface ListFilterInputTypeOfPluginVersionEntityFilterInput {
  readonly all?: InputMaybe<PluginVersionEntityFilterInput>;
  readonly any?: InputMaybe<Scalars['Boolean']>;
  readonly none?: InputMaybe<PluginVersionEntityFilterInput>;
  readonly some?: InputMaybe<PluginVersionEntityFilterInput>;
}

/** Information about pagination in a connection. */
export interface PageInfo {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor?: Maybe<Scalars['String']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  readonly hasNextPage: Scalars['Boolean'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor?: Maybe<Scalars['String']>;
}

export interface PluginInfoEntity {
  readonly averageRating: Scalars['Float'];
  readonly created: Scalars['DateTime'];
  readonly creator: UserEntity;
  readonly description: Scalars['String'];
  readonly id: Scalars['Int'];
  readonly name: Scalars['String'];
  readonly ratings?: Maybe<RatingsConnection>;
  readonly updated: Scalars['DateTime'];
  readonly versions?: Maybe<VersionsConnection>;
}


export type PluginInfoEntityRatingsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ReadonlyArray<PluginRatingEntitySortInput>>;
  where?: InputMaybe<PluginRatingEntityFilterInput>;
};


export type PluginInfoEntityVersionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ReadonlyArray<PluginVersionEntitySortInput>>;
  where?: InputMaybe<PluginVersionEntityFilterInput>;
};

export interface PluginInfoEntityFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<PluginInfoEntityFilterInput>>;
  readonly averageRating?: InputMaybe<FloatOperationFilterInput>;
  readonly created?: InputMaybe<DateTimeOperationFilterInput>;
  readonly creator?: InputMaybe<UserEntityFilterInput>;
  readonly description?: InputMaybe<StringOperationFilterInput>;
  readonly id?: InputMaybe<IntOperationFilterInput>;
  readonly name?: InputMaybe<StringOperationFilterInput>;
  readonly or?: InputMaybe<ReadonlyArray<PluginInfoEntityFilterInput>>;
  readonly ratings?: InputMaybe<ListFilterInputTypeOfPluginRatingEntityFilterInput>;
  readonly updated?: InputMaybe<DateTimeOperationFilterInput>;
  readonly versions?: InputMaybe<ListFilterInputTypeOfPluginVersionEntityFilterInput>;
}

export interface PluginInfoEntitySortInput {
  readonly averageRating?: InputMaybe<SortEnumType>;
  readonly created?: InputMaybe<SortEnumType>;
  readonly creator?: InputMaybe<UserEntitySortInput>;
  readonly description?: InputMaybe<SortEnumType>;
  readonly id?: InputMaybe<SortEnumType>;
  readonly name?: InputMaybe<SortEnumType>;
  readonly updated?: InputMaybe<SortEnumType>;
}

export interface PluginRatingEntity {
  readonly created: Scalars['DateTime'];
  readonly id: Scalars['Int'];
  readonly isLiked: Scalars['Boolean'];
  readonly updated: Scalars['DateTime'];
}

export interface PluginRatingEntityFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<PluginRatingEntityFilterInput>>;
  readonly created?: InputMaybe<DateTimeOperationFilterInput>;
  readonly id?: InputMaybe<IntOperationFilterInput>;
  readonly isLiked?: InputMaybe<BooleanOperationFilterInput>;
  readonly or?: InputMaybe<ReadonlyArray<PluginRatingEntityFilterInput>>;
  readonly updated?: InputMaybe<DateTimeOperationFilterInput>;
}

export interface PluginRatingEntitySortInput {
  readonly created?: InputMaybe<SortEnumType>;
  readonly id?: InputMaybe<SortEnumType>;
  readonly isLiked?: InputMaybe<SortEnumType>;
  readonly updated?: InputMaybe<SortEnumType>;
}

export interface PluginVersionEntity {
  readonly created: Scalars['DateTime'];
  readonly id: Scalars['Int'];
  readonly updated: Scalars['DateTime'];
  readonly uri: Scalars['URL'];
  readonly version: SemanticVersion;
}

export interface PluginVersionEntityFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<PluginVersionEntityFilterInput>>;
  readonly created?: InputMaybe<DateTimeOperationFilterInput>;
  readonly id?: InputMaybe<IntOperationFilterInput>;
  readonly or?: InputMaybe<ReadonlyArray<PluginVersionEntityFilterInput>>;
  readonly updated?: InputMaybe<DateTimeOperationFilterInput>;
  readonly uri?: InputMaybe<UrlOperationFilterInput>;
  readonly version?: InputMaybe<SemanticVersionFilterInput>;
}

export interface PluginVersionEntitySortInput {
  readonly created?: InputMaybe<SortEnumType>;
  readonly id?: InputMaybe<SortEnumType>;
  readonly updated?: InputMaybe<SortEnumType>;
  readonly uri?: InputMaybe<UriSortInput>;
  readonly version?: InputMaybe<SemanticVersionSortInput>;
}

/** A connection to a list of items. */
export interface PluginsConnection {
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<PluginsEdge>>;
  /** A flattened list of the nodes. */
  readonly nodes?: Maybe<ReadonlyArray<PluginInfoEntity>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
}

/** An edge in a connection. */
export interface PluginsEdge {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: PluginInfoEntity;
}

export interface Query {
  readonly plugins?: Maybe<PluginsConnection>;
  readonly users: ReadonlyArray<UserEntity>;
}


export type QueryPluginsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<ReadonlyArray<PluginInfoEntitySortInput>>;
  where?: InputMaybe<PluginInfoEntityFilterInput>;
};

/** A connection to a list of items. */
export interface RatingsConnection {
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<RatingsEdge>>;
  /** A flattened list of the nodes. */
  readonly nodes?: Maybe<ReadonlyArray<PluginRatingEntity>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
}

/** An edge in a connection. */
export interface RatingsEdge {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: PluginRatingEntity;
}

export interface SemanticVersion {
  readonly buildLabel?: Maybe<Scalars['String']>;
  readonly compareTo: Scalars['Int'];
  readonly major: Scalars['Int'];
  readonly minor: Scalars['Int'];
  readonly patch: Scalars['Int'];
  readonly preReleaseLabel?: Maybe<Scalars['String']>;
}


export type SemanticVersionCompareToArgs = {
  value?: InputMaybe<SemanticVersionInput>;
};

export interface SemanticVersionFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<SemanticVersionFilterInput>>;
  readonly buildLabel?: InputMaybe<StringOperationFilterInput>;
  readonly major?: InputMaybe<IntOperationFilterInput>;
  readonly minor?: InputMaybe<IntOperationFilterInput>;
  readonly or?: InputMaybe<ReadonlyArray<SemanticVersionFilterInput>>;
  readonly patch?: InputMaybe<IntOperationFilterInput>;
  readonly preReleaseLabel?: InputMaybe<StringOperationFilterInput>;
}

export interface SemanticVersionInput {
  readonly buildLabel?: InputMaybe<Scalars['String']>;
  readonly major: Scalars['Int'];
  readonly minor: Scalars['Int'];
  readonly patch: Scalars['Int'];
  readonly preReleaseLabel?: InputMaybe<Scalars['String']>;
}

export interface SemanticVersionSortInput {
  readonly buildLabel?: InputMaybe<SortEnumType>;
  readonly major?: InputMaybe<SortEnumType>;
  readonly minor?: InputMaybe<SortEnumType>;
  readonly patch?: InputMaybe<SortEnumType>;
  readonly preReleaseLabel?: InputMaybe<SortEnumType>;
}

export const enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
};

export interface StringOperationFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<StringOperationFilterInput>>;
  readonly contains?: InputMaybe<Scalars['String']>;
  readonly endsWith?: InputMaybe<Scalars['String']>;
  readonly eq?: InputMaybe<Scalars['String']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly ncontains?: InputMaybe<Scalars['String']>;
  readonly nendsWith?: InputMaybe<Scalars['String']>;
  readonly neq?: InputMaybe<Scalars['String']>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly nstartsWith?: InputMaybe<Scalars['String']>;
  readonly or?: InputMaybe<ReadonlyArray<StringOperationFilterInput>>;
  readonly startsWith?: InputMaybe<Scalars['String']>;
}

export interface UriSortInput {
  readonly absolutePath?: InputMaybe<SortEnumType>;
  readonly absoluteUri?: InputMaybe<SortEnumType>;
  readonly authority?: InputMaybe<SortEnumType>;
  readonly dnsSafeHost?: InputMaybe<SortEnumType>;
  readonly fragment?: InputMaybe<SortEnumType>;
  readonly host?: InputMaybe<SortEnumType>;
  readonly hostNameType?: InputMaybe<SortEnumType>;
  readonly idnHost?: InputMaybe<SortEnumType>;
  readonly isAbsoluteUri?: InputMaybe<SortEnumType>;
  readonly isDefaultPort?: InputMaybe<SortEnumType>;
  readonly isFile?: InputMaybe<SortEnumType>;
  readonly isLoopback?: InputMaybe<SortEnumType>;
  readonly isUnc?: InputMaybe<SortEnumType>;
  readonly localPath?: InputMaybe<SortEnumType>;
  readonly originalString?: InputMaybe<SortEnumType>;
  readonly pathAndQuery?: InputMaybe<SortEnumType>;
  readonly port?: InputMaybe<SortEnumType>;
  readonly query?: InputMaybe<SortEnumType>;
  readonly scheme?: InputMaybe<SortEnumType>;
  readonly userEscaped?: InputMaybe<SortEnumType>;
  readonly userInfo?: InputMaybe<SortEnumType>;
}

export interface UrlOperationFilterInput {
  readonly eq?: InputMaybe<Scalars['URL']>;
  readonly gt?: InputMaybe<Scalars['URL']>;
  readonly gte?: InputMaybe<Scalars['URL']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['URL']>>>;
  readonly lt?: InputMaybe<Scalars['URL']>;
  readonly lte?: InputMaybe<Scalars['URL']>;
  readonly neq?: InputMaybe<Scalars['URL']>;
  readonly ngt?: InputMaybe<Scalars['URL']>;
  readonly ngte?: InputMaybe<Scalars['URL']>;
  readonly nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['URL']>>>;
  readonly nlt?: InputMaybe<Scalars['URL']>;
  readonly nlte?: InputMaybe<Scalars['URL']>;
}

export interface UserEntity {
  readonly avatar: Scalars['String'];
  readonly created: Scalars['DateTime'];
  readonly id: Scalars['Int'];
  readonly name: Scalars['String'];
  readonly updated: Scalars['DateTime'];
}

export interface UserEntityFilterInput {
  readonly and?: InputMaybe<ReadonlyArray<UserEntityFilterInput>>;
  readonly avatar?: InputMaybe<StringOperationFilterInput>;
  readonly created?: InputMaybe<DateTimeOperationFilterInput>;
  readonly id?: InputMaybe<IntOperationFilterInput>;
  readonly name?: InputMaybe<StringOperationFilterInput>;
  readonly or?: InputMaybe<ReadonlyArray<UserEntityFilterInput>>;
  readonly updated?: InputMaybe<DateTimeOperationFilterInput>;
}

export interface UserEntitySortInput {
  readonly avatar?: InputMaybe<SortEnumType>;
  readonly created?: InputMaybe<SortEnumType>;
  readonly id?: InputMaybe<SortEnumType>;
  readonly name?: InputMaybe<SortEnumType>;
  readonly updated?: InputMaybe<SortEnumType>;
}

/** A connection to a list of items. */
export interface VersionsConnection {
  /** A list of edges. */
  readonly edges?: Maybe<ReadonlyArray<VersionsEdge>>;
  /** A flattened list of the nodes. */
  readonly nodes?: Maybe<ReadonlyArray<PluginVersionEntity>>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
}

/** An edge in a connection. */
export interface VersionsEdge {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: PluginVersionEntity;
}

export type AvailablePluginsQueryVariables = Exact<{ [key: string]: never; }>;


export type AvailablePluginsQuery = { readonly plugins?: { readonly nodes?: ReadonlyArray<{ readonly id: number, readonly name: string, readonly description: string, readonly averageRating: number, readonly creator: { readonly name: string }, readonly versions?: { readonly nodes?: ReadonlyArray<{ readonly uri: any, readonly version: { readonly major: number, readonly minor: number, readonly patch: number } }> | null } | null }> | null } | null };

export type InstalledPluginsQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type InstalledPluginsQuery = { readonly plugins?: { readonly nodes?: ReadonlyArray<{ readonly name: string, readonly description: string, readonly averageRating: number, readonly creator: { readonly name: string } }> | null } | null };

export type MyPluginsListQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type MyPluginsListQuery = { readonly plugins?: { readonly nodes?: ReadonlyArray<{ readonly id: number, readonly name: string }> | null } | null };

export type MyPluginsInfoQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type MyPluginsInfoQuery = { readonly plugins?: { readonly nodes?: ReadonlyArray<{ readonly name: string, readonly description: string, readonly averageRating: number, readonly versions?: { readonly nodes?: ReadonlyArray<{ readonly uri: any, readonly version: { readonly major: number, readonly minor: number, readonly patch: number } }> | null } | null }> | null } | null };


export const AvailablePluginsDocument = gql`
    query availablePlugins {
  plugins {
    nodes {
      id
      name
      description
      creator {
        name
      }
      averageRating
      versions(last: 1) {
        nodes {
          version {
            major
            minor
            patch
          }
          uri
        }
      }
    }
  }
}
    `;

/**
 * __useAvailablePluginsQuery__
 *
 * To run a query within a Vue component, call `useAvailablePluginsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAvailablePluginsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAvailablePluginsQuery();
 */
export function useAvailablePluginsQuery(options: VueApolloComposable.UseQueryOptions<AvailablePluginsQuery, AvailablePluginsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AvailablePluginsQuery, AvailablePluginsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AvailablePluginsQuery, AvailablePluginsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AvailablePluginsQuery, AvailablePluginsQueryVariables>(AvailablePluginsDocument, {}, options);
}
export function useAvailablePluginsLazyQuery(options: VueApolloComposable.UseQueryOptions<AvailablePluginsQuery, AvailablePluginsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AvailablePluginsQuery, AvailablePluginsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AvailablePluginsQuery, AvailablePluginsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<AvailablePluginsQuery, AvailablePluginsQueryVariables>(AvailablePluginsDocument, {}, options);
}
export type AvailablePluginsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AvailablePluginsQuery, AvailablePluginsQueryVariables>;
export const InstalledPluginsDocument = gql`
    query installedPlugins($id: Int!) {
  plugins(where: {id: {eq: $id}}) {
    nodes {
      name
      description
      creator {
        name
      }
      averageRating
    }
  }
}
    `;

/**
 * __useInstalledPluginsQuery__
 *
 * To run a query within a Vue component, call `useInstalledPluginsQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstalledPluginsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useInstalledPluginsQuery({
 *   id: // value for 'id'
 * });
 */
export function useInstalledPluginsQuery(variables: InstalledPluginsQueryVariables | VueCompositionApi.Ref<InstalledPluginsQueryVariables> | ReactiveFunction<InstalledPluginsQueryVariables>, options: VueApolloComposable.UseQueryOptions<InstalledPluginsQuery, InstalledPluginsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<InstalledPluginsQuery, InstalledPluginsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<InstalledPluginsQuery, InstalledPluginsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<InstalledPluginsQuery, InstalledPluginsQueryVariables>(InstalledPluginsDocument, variables, options);
}
export function useInstalledPluginsLazyQuery(variables: InstalledPluginsQueryVariables | VueCompositionApi.Ref<InstalledPluginsQueryVariables> | ReactiveFunction<InstalledPluginsQueryVariables>, options: VueApolloComposable.UseQueryOptions<InstalledPluginsQuery, InstalledPluginsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<InstalledPluginsQuery, InstalledPluginsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<InstalledPluginsQuery, InstalledPluginsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<InstalledPluginsQuery, InstalledPluginsQueryVariables>(InstalledPluginsDocument, variables, options);
}
export type InstalledPluginsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<InstalledPluginsQuery, InstalledPluginsQueryVariables>;
export const MyPluginsListDocument = gql`
    query myPluginsList($id: Int!) {
  plugins(where: {creator: {id: {eq: $id}}}) {
    nodes {
      id
      name
    }
  }
}
    `;

/**
 * __useMyPluginsListQuery__
 *
 * To run a query within a Vue component, call `useMyPluginsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyPluginsListQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useMyPluginsListQuery({
 *   id: // value for 'id'
 * });
 */
export function useMyPluginsListQuery(variables: MyPluginsListQueryVariables | VueCompositionApi.Ref<MyPluginsListQueryVariables> | ReactiveFunction<MyPluginsListQueryVariables>, options: VueApolloComposable.UseQueryOptions<MyPluginsListQuery, MyPluginsListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<MyPluginsListQuery, MyPluginsListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<MyPluginsListQuery, MyPluginsListQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<MyPluginsListQuery, MyPluginsListQueryVariables>(MyPluginsListDocument, variables, options);
}
export function useMyPluginsListLazyQuery(variables: MyPluginsListQueryVariables | VueCompositionApi.Ref<MyPluginsListQueryVariables> | ReactiveFunction<MyPluginsListQueryVariables>, options: VueApolloComposable.UseQueryOptions<MyPluginsListQuery, MyPluginsListQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<MyPluginsListQuery, MyPluginsListQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<MyPluginsListQuery, MyPluginsListQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<MyPluginsListQuery, MyPluginsListQueryVariables>(MyPluginsListDocument, variables, options);
}
export type MyPluginsListQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<MyPluginsListQuery, MyPluginsListQueryVariables>;
export const MyPluginsInfoDocument = gql`
    query myPluginsInfo($id: Int!) {
  plugins(where: {id: {eq: $id}}) {
    nodes {
      name
      description
      averageRating
      versions {
        nodes {
          version {
            major
            minor
            patch
          }
          uri
        }
      }
    }
  }
}
    `;

/**
 * __useMyPluginsInfoQuery__
 *
 * To run a query within a Vue component, call `useMyPluginsInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyPluginsInfoQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useMyPluginsInfoQuery({
 *   id: // value for 'id'
 * });
 */
export function useMyPluginsInfoQuery(variables: MyPluginsInfoQueryVariables | VueCompositionApi.Ref<MyPluginsInfoQueryVariables> | ReactiveFunction<MyPluginsInfoQueryVariables>, options: VueApolloComposable.UseQueryOptions<MyPluginsInfoQuery, MyPluginsInfoQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<MyPluginsInfoQuery, MyPluginsInfoQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<MyPluginsInfoQuery, MyPluginsInfoQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<MyPluginsInfoQuery, MyPluginsInfoQueryVariables>(MyPluginsInfoDocument, variables, options);
}
export function useMyPluginsInfoLazyQuery(variables: MyPluginsInfoQueryVariables | VueCompositionApi.Ref<MyPluginsInfoQueryVariables> | ReactiveFunction<MyPluginsInfoQueryVariables>, options: VueApolloComposable.UseQueryOptions<MyPluginsInfoQuery, MyPluginsInfoQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<MyPluginsInfoQuery, MyPluginsInfoQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<MyPluginsInfoQuery, MyPluginsInfoQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<MyPluginsInfoQuery, MyPluginsInfoQueryVariables>(MyPluginsInfoDocument, variables, options);
}
export type MyPluginsInfoQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<MyPluginsInfoQuery, MyPluginsInfoQueryVariables>;