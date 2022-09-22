import * as grpcWeb from 'grpc-web';

import * as localization_pb from './localization_pb';


export class ClientLocalizationClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getTranslations(
    request: localization_pb.GetTranslationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: localization_pb.GetTranslationsResponse) => void
  ): grpcWeb.ClientReadableStream<localization_pb.GetTranslationsResponse>;

}

export class ClientLocalizationPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getTranslations(
    request: localization_pb.GetTranslationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<localization_pb.GetTranslationsResponse>;

}

