/**
 * @fileoverview gRPC-Web generated client stub for web.authentication
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as authentication_pb from './authentication_pb';


export class AuthenticationClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorviaAuthCode = new grpcWeb.MethodDescriptor(
    '/web.authentication.Authentication/viaAuthCode',
    grpcWeb.MethodType.UNARY,
    authentication_pb.AuthRequest,
    authentication_pb.AuthResponse,
    (request: authentication_pb.AuthRequest) => {
      return request.serializeBinary();
    },
    authentication_pb.AuthResponse.deserializeBinary
  );

  viaAuthCode(
    request: authentication_pb.AuthRequest,
    metadata: grpcWeb.Metadata | null): Promise<authentication_pb.AuthResponse>;

  viaAuthCode(
    request: authentication_pb.AuthRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: authentication_pb.AuthResponse) => void): grpcWeb.ClientReadableStream<authentication_pb.AuthResponse>;

  viaAuthCode(
    request: authentication_pb.AuthRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: authentication_pb.AuthResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/web.authentication.Authentication/viaAuthCode',
        request,
        metadata || {},
        this.methodDescriptorviaAuthCode,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/web.authentication.Authentication/viaAuthCode',
    request,
    metadata || {},
    this.methodDescriptorviaAuthCode);
  }

  methodDescriptorlogout = new grpcWeb.MethodDescriptor(
    '/web.authentication.Authentication/logout',
    grpcWeb.MethodType.UNARY,
    authentication_pb.Empty,
    authentication_pb.Empty,
    (request: authentication_pb.Empty) => {
      return request.serializeBinary();
    },
    authentication_pb.Empty.deserializeBinary
  );

  logout(
    request: authentication_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<authentication_pb.Empty>;

  logout(
    request: authentication_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: authentication_pb.Empty) => void): grpcWeb.ClientReadableStream<authentication_pb.Empty>;

  logout(
    request: authentication_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: authentication_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/web.authentication.Authentication/logout',
        request,
        metadata || {},
        this.methodDescriptorlogout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/web.authentication.Authentication/logout',
    request,
    metadata || {},
    this.methodDescriptorlogout);
  }

}

