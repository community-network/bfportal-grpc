import * as grpcWeb from 'grpc-web';

import {
  GetTranslationsRequest,
  GetTranslationsResponse} from './localization_pb';

export class ClientLocalizationClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  getTranslations(
    request: GetTranslationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetTranslationsResponse) => void
  ): grpcWeb.ClientReadableStream<GetTranslationsResponse>;

}

export class ClientLocalizationPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  getTranslations(
    request: GetTranslationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetTranslationsResponse>;

}

