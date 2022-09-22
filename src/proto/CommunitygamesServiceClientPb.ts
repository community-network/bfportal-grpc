/**
 * @fileoverview gRPC-Web generated client stub for web.communitygames
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as communitygames_pb from './communitygames_pb';


export class CommunityGamesClient {
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

  methodDescriptorcreatePlayground = new grpcWeb.MethodDescriptor(
    '/web.communitygames.CommunityGames/createPlayground',
    grpcWeb.MethodType.UNARY,
    communitygames_pb.CreatePlaygroundRequest,
    communitygames_pb.CreatePlaygroundResponse,
    (request: communitygames_pb.CreatePlaygroundRequest) => {
      return request.serializeBinary();
    },
    communitygames_pb.CreatePlaygroundResponse.deserializeBinary
  );

  createPlayground(
    request: communitygames_pb.CreatePlaygroundRequest,
    metadata: grpcWeb.Metadata | null): Promise<communitygames_pb.CreatePlaygroundResponse>;

  createPlayground(
    request: communitygames_pb.CreatePlaygroundRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: communitygames_pb.CreatePlaygroundResponse) => void): grpcWeb.ClientReadableStream<communitygames_pb.CreatePlaygroundResponse>;

  createPlayground(
    request: communitygames_pb.CreatePlaygroundRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: communitygames_pb.CreatePlaygroundResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/web.communitygames.CommunityGames/createPlayground',
        request,
        metadata || {},
        this.methodDescriptorcreatePlayground,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/web.communitygames.CommunityGames/createPlayground',
    request,
    metadata || {},
    this.methodDescriptorcreatePlayground);
  }

  methodDescriptorupdatePlayground = new grpcWeb.MethodDescriptor(
    '/web.communitygames.CommunityGames/updatePlayground',
    grpcWeb.MethodType.UNARY,
    communitygames_pb.UpdatePlaygroundRequest,
    communitygames_pb.UpdatePlaygroundResponse,
    (request: communitygames_pb.UpdatePlaygroundRequest) => {
      return request.serializeBinary();
    },
    communitygames_pb.UpdatePlaygroundResponse.deserializeBinary
  );

  updatePlayground(
    request: communitygames_pb.UpdatePlaygroundRequest,
    metadata: grpcWeb.Metadata | null): Promise<communitygames_pb.UpdatePlaygroundResponse>;

  updatePlayground(
    request: communitygames_pb.UpdatePlaygroundRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: communitygames_pb.UpdatePlaygroundResponse) => void): grpcWeb.ClientReadableStream<communitygames_pb.UpdatePlaygroundResponse>;

  updatePlayground(
    request: communitygames_pb.UpdatePlaygroundRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: communitygames_pb.UpdatePlaygroundResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/web.communitygames.CommunityGames/updatePlayground',
        request,
        metadata || {},
        this.methodDescriptorupdatePlayground,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/web.communitygames.CommunityGames/updatePlayground',
    request,
    metadata || {},
    this.methodDescriptorupdatePlayground);
  }

  methodDescriptordeletePlayground = new grpcWeb.MethodDescriptor(
    '/web.communitygames.CommunityGames/deletePlayground',
    grpcWeb.MethodType.UNARY,
    communitygames_pb.DeletePlaygroundRequest,
    communitygames_pb.DeletePlaygroundResponse,
    (request: communitygames_pb.DeletePlaygroundRequest) => {
      return request.serializeBinary();
    },
    communitygames_pb.DeletePlaygroundResponse.deserializeBinary
  );

  deletePlayground(
    request: communitygames_pb.DeletePlaygroundRequest,
    metadata: grpcWeb.Metadata | null): Promise<communitygames_pb.DeletePlaygroundResponse>;

  deletePlayground(
    request: communitygames_pb.DeletePlaygroundRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: communitygames_pb.DeletePlaygroundResponse) => void): grpcWeb.ClientReadableStream<communitygames_pb.DeletePlaygroundResponse>;

  deletePlayground(
    request: communitygames_pb.DeletePlaygroundRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: communitygames_pb.DeletePlaygroundResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/web.communitygames.CommunityGames/deletePlayground',
        request,
        metadata || {},
        this.methodDescriptordeletePlayground,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/web.communitygames.CommunityGames/deletePlayground',
    request,
    metadata || {},
    this.methodDescriptordeletePlayground);
  }

  methodDescriptorgetPlayground = new grpcWeb.MethodDescriptor(
    '/web.communitygames.CommunityGames/getPlayground',
    grpcWeb.MethodType.UNARY,
    communitygames_pb.GetPlaygroundRequest,
    communitygames_pb.PlaygroundInfoResponse,
    (request: communitygames_pb.GetPlaygroundRequest) => {
      return request.serializeBinary();
    },
    communitygames_pb.PlaygroundInfoResponse.deserializeBinary
  );

  getPlayground(
    request: communitygames_pb.GetPlaygroundRequest,
    metadata: grpcWeb.Metadata | null): Promise<communitygames_pb.PlaygroundInfoResponse>;

  getPlayground(
    request: communitygames_pb.GetPlaygroundRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: communitygames_pb.PlaygroundInfoResponse) => void): grpcWeb.ClientReadableStream<communitygames_pb.PlaygroundInfoResponse>;

  getPlayground(
    request: communitygames_pb.GetPlaygroundRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: communitygames_pb.PlaygroundInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/web.communitygames.CommunityGames/getPlayground',
        request,
        metadata || {},
        this.methodDescriptorgetPlayground,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/web.communitygames.CommunityGames/getPlayground',
    request,
    metadata || {},
    this.methodDescriptorgetPlayground);
  }

  methodDescriptorlistPlaygroundsByOwner = new grpcWeb.MethodDescriptor(
    '/web.communitygames.CommunityGames/listPlaygroundsByOwner',
    grpcWeb.MethodType.UNARY,
    communitygames_pb.ListPlaygroundsByOwnerRequest,
    communitygames_pb.ListPlaygroundsByOwnerResponse,
    (request: communitygames_pb.ListPlaygroundsByOwnerRequest) => {
      return request.serializeBinary();
    },
    communitygames_pb.ListPlaygroundsByOwnerResponse.deserializeBinary
  );

  listPlaygroundsByOwner(
    request: communitygames_pb.ListPlaygroundsByOwnerRequest,
    metadata: grpcWeb.Metadata | null): Promise<communitygames_pb.ListPlaygroundsByOwnerResponse>;

  listPlaygroundsByOwner(
    request: communitygames_pb.ListPlaygroundsByOwnerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: communitygames_pb.ListPlaygroundsByOwnerResponse) => void): grpcWeb.ClientReadableStream<communitygames_pb.ListPlaygroundsByOwnerResponse>;

  listPlaygroundsByOwner(
    request: communitygames_pb.ListPlaygroundsByOwnerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: communitygames_pb.ListPlaygroundsByOwnerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/web.communitygames.CommunityGames/listPlaygroundsByOwner',
        request,
        metadata || {},
        this.methodDescriptorlistPlaygroundsByOwner,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/web.communitygames.CommunityGames/listPlaygroundsByOwner',
    request,
    metadata || {},
    this.methodDescriptorlistPlaygroundsByOwner);
  }

  methodDescriptorgetBlueprintsById = new grpcWeb.MethodDescriptor(
    '/web.communitygames.CommunityGames/getBlueprintsById',
    grpcWeb.MethodType.UNARY,
    communitygames_pb.GetBlueprintsByIdRequest,
    communitygames_pb.GetBlueprintsByIdResponse,
    (request: communitygames_pb.GetBlueprintsByIdRequest) => {
      return request.serializeBinary();
    },
    communitygames_pb.GetBlueprintsByIdResponse.deserializeBinary
  );

  getBlueprintsById(
    request: communitygames_pb.GetBlueprintsByIdRequest,
    metadata: grpcWeb.Metadata | null): Promise<communitygames_pb.GetBlueprintsByIdResponse>;

  getBlueprintsById(
    request: communitygames_pb.GetBlueprintsByIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: communitygames_pb.GetBlueprintsByIdResponse) => void): grpcWeb.ClientReadableStream<communitygames_pb.GetBlueprintsByIdResponse>;

  getBlueprintsById(
    request: communitygames_pb.GetBlueprintsByIdRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: communitygames_pb.GetBlueprintsByIdResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/web.communitygames.CommunityGames/getBlueprintsById',
        request,
        metadata || {},
        this.methodDescriptorgetBlueprintsById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/web.communitygames.CommunityGames/getBlueprintsById',
    request,
    metadata || {},
    this.methodDescriptorgetBlueprintsById);
  }

  methodDescriptorgetScheduledBlueprints = new grpcWeb.MethodDescriptor(
    '/web.communitygames.CommunityGames/getScheduledBlueprints',
    grpcWeb.MethodType.UNARY,
    communitygames_pb.GetScheduledBlueprintsRequest,
    communitygames_pb.GetScheduledBlueprintsResponse,
    (request: communitygames_pb.GetScheduledBlueprintsRequest) => {
      return request.serializeBinary();
    },
    communitygames_pb.GetScheduledBlueprintsResponse.deserializeBinary
  );

  getScheduledBlueprints(
    request: communitygames_pb.GetScheduledBlueprintsRequest,
    metadata: grpcWeb.Metadata | null): Promise<communitygames_pb.GetScheduledBlueprintsResponse>;

  getScheduledBlueprints(
    request: communitygames_pb.GetScheduledBlueprintsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: communitygames_pb.GetScheduledBlueprintsResponse) => void): grpcWeb.ClientReadableStream<communitygames_pb.GetScheduledBlueprintsResponse>;

  getScheduledBlueprints(
    request: communitygames_pb.GetScheduledBlueprintsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: communitygames_pb.GetScheduledBlueprintsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/web.communitygames.CommunityGames/getScheduledBlueprints',
        request,
        metadata || {},
        this.methodDescriptorgetScheduledBlueprints,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/web.communitygames.CommunityGames/getScheduledBlueprints',
    request,
    metadata || {},
    this.methodDescriptorgetScheduledBlueprints);
  }

  methodDescriptorgetConstraints = new grpcWeb.MethodDescriptor(
    '/web.communitygames.CommunityGames/getConstraints',
    grpcWeb.MethodType.UNARY,
    communitygames_pb.GetConstraintsRequest,
    communitygames_pb.GetConstraintsResponse,
    (request: communitygames_pb.GetConstraintsRequest) => {
      return request.serializeBinary();
    },
    communitygames_pb.GetConstraintsResponse.deserializeBinary
  );

  getConstraints(
    request: communitygames_pb.GetConstraintsRequest,
    metadata: grpcWeb.Metadata | null): Promise<communitygames_pb.GetConstraintsResponse>;

  getConstraints(
    request: communitygames_pb.GetConstraintsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: communitygames_pb.GetConstraintsResponse) => void): grpcWeb.ClientReadableStream<communitygames_pb.GetConstraintsResponse>;

  getConstraints(
    request: communitygames_pb.GetConstraintsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: communitygames_pb.GetConstraintsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/web.communitygames.CommunityGames/getConstraints',
        request,
        metadata || {},
        this.methodDescriptorgetConstraints,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/web.communitygames.CommunityGames/getConstraints',
    request,
    metadata || {},
    this.methodDescriptorgetConstraints);
  }

  methodDescriptorsharePlayground = new grpcWeb.MethodDescriptor(
    '/web.communitygames.CommunityGames/sharePlayground',
    grpcWeb.MethodType.UNARY,
    communitygames_pb.SharePlaygroundRequest,
    communitygames_pb.SharePlaygroundResponse,
    (request: communitygames_pb.SharePlaygroundRequest) => {
      return request.serializeBinary();
    },
    communitygames_pb.SharePlaygroundResponse.deserializeBinary
  );

  sharePlayground(
    request: communitygames_pb.SharePlaygroundRequest,
    metadata: grpcWeb.Metadata | null): Promise<communitygames_pb.SharePlaygroundResponse>;

  sharePlayground(
    request: communitygames_pb.SharePlaygroundRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: communitygames_pb.SharePlaygroundResponse) => void): grpcWeb.ClientReadableStream<communitygames_pb.SharePlaygroundResponse>;

  sharePlayground(
    request: communitygames_pb.SharePlaygroundRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: communitygames_pb.SharePlaygroundResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/web.communitygames.CommunityGames/sharePlayground',
        request,
        metadata || {},
        this.methodDescriptorsharePlayground,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/web.communitygames.CommunityGames/sharePlayground',
    request,
    metadata || {},
    this.methodDescriptorsharePlayground);
  }

  methodDescriptorgetProgressionTypes = new grpcWeb.MethodDescriptor(
    '/web.communitygames.CommunityGames/getProgressionTypes',
    grpcWeb.MethodType.UNARY,
    communitygames_pb.GetProgressionTypesRequest,
    communitygames_pb.GetProgressionTypesResponse,
    (request: communitygames_pb.GetProgressionTypesRequest) => {
      return request.serializeBinary();
    },
    communitygames_pb.GetProgressionTypesResponse.deserializeBinary
  );

  getProgressionTypes(
    request: communitygames_pb.GetProgressionTypesRequest,
    metadata: grpcWeb.Metadata | null): Promise<communitygames_pb.GetProgressionTypesResponse>;

  getProgressionTypes(
    request: communitygames_pb.GetProgressionTypesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: communitygames_pb.GetProgressionTypesResponse) => void): grpcWeb.ClientReadableStream<communitygames_pb.GetProgressionTypesResponse>;

  getProgressionTypes(
    request: communitygames_pb.GetProgressionTypesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: communitygames_pb.GetProgressionTypesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/web.communitygames.CommunityGames/getProgressionTypes',
        request,
        metadata || {},
        this.methodDescriptorgetProgressionTypes,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/web.communitygames.CommunityGames/getProgressionTypes',
    request,
    metadata || {},
    this.methodDescriptorgetProgressionTypes);
  }

}

