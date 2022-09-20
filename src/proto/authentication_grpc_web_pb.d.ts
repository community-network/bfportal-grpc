import * as grpcWeb from 'grpc-web';

import {
  AuthRequest,
  AuthResponse,
  Empty} from './authentication_pb';

export class ClientAuthenticationClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  viaAuthCode(
    request: AuthRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: AuthResponse) => void
  ): grpcWeb.ClientReadableStream<AuthResponse>;

  logout(
    request: Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Empty) => void
  ): grpcWeb.ClientReadableStream<Empty>;

}

export class ClientAuthenticationPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  viaAuthCode(
    request: AuthRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<AuthResponse>;

  logout(
    request: Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<Empty>;

}

