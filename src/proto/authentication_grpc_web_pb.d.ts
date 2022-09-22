import * as grpcWeb from 'grpc-web';

import * as authentication_pb from './authentication_pb';


export class ClientAuthenticationClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  viaAuthCode(
    request: authentication_pb.AuthRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: authentication_pb.AuthResponse) => void
  ): grpcWeb.ClientReadableStream<authentication_pb.AuthResponse>;

  logout(
    request: authentication_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: authentication_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<authentication_pb.Empty>;

}

export class ClientAuthenticationPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  viaAuthCode(
    request: authentication_pb.AuthRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<authentication_pb.AuthResponse>;

  logout(
    request: authentication_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<authentication_pb.Empty>;

}

