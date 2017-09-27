// @flow
import type { IndexName, SearchParameters } from 'algoliasearch';
import type { RequestMethod, RequestOptions } from 'algoliasearch-requester';

export type SearchRequest = {|
  indexName: IndexName,
  params: SearchParameters,
|};

export default function search(
  requests: SearchRequest[] = [],
  {
    requester,
    options,
  }: {
    requester: RequestMethod,
    options?: RequestOptions,
  }
) {
  return requester({
    method: 'POST',
    path: '/1/indexes/*/queries',
    body: { requests },
    options,
    requestType: 'read',
  });
}
