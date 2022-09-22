/**
 * @fileoverview gRPC-Web generated client stub for web.reporting
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as reporting_pb from './reporting_pb';


export class WebReportingClient {
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

  methodDescriptorreportPlayground = new grpcWeb.MethodDescriptor(
    '/web.reporting.WebReporting/reportPlayground',
    grpcWeb.MethodType.UNARY,
    reporting_pb.ReportPlaygroundRequest,
    reporting_pb.ReportPlaygroundResponse,
    (request: reporting_pb.ReportPlaygroundRequest) => {
      return request.serializeBinary();
    },
    reporting_pb.ReportPlaygroundResponse.deserializeBinary
  );

  reportPlayground(
    request: reporting_pb.ReportPlaygroundRequest,
    metadata: grpcWeb.Metadata | null): Promise<reporting_pb.ReportPlaygroundResponse>;

  reportPlayground(
    request: reporting_pb.ReportPlaygroundRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: reporting_pb.ReportPlaygroundResponse) => void): grpcWeb.ClientReadableStream<reporting_pb.ReportPlaygroundResponse>;

  reportPlayground(
    request: reporting_pb.ReportPlaygroundRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: reporting_pb.ReportPlaygroundResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/web.reporting.WebReporting/reportPlayground',
        request,
        metadata || {},
        this.methodDescriptorreportPlayground,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/web.reporting.WebReporting/reportPlayground',
    request,
    metadata || {},
    this.methodDescriptorreportPlayground);
  }

}

