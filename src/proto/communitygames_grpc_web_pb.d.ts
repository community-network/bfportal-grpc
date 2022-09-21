import * as grpcWeb from 'grpc-web';

import * as communitygames_pb from './communitygames_pb';


export class CommunityGamesClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createPlayground(
    request: communitygames_pb.CreatePlaygroundRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: communitygames_pb.CreatePlaygroundResponse) => void
  ): grpcWeb.ClientReadableStream<communitygames_pb.CreatePlaygroundResponse>;

  updatePlayground(
    request: communitygames_pb.UpdatePlaygroundRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: communitygames_pb.UpdatePlaygroundResponse) => void
  ): grpcWeb.ClientReadableStream<communitygames_pb.UpdatePlaygroundResponse>;

  deletePlayground(
    request: communitygames_pb.DeletePlaygroundRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: communitygames_pb.DeletePlaygroundResponse) => void
  ): grpcWeb.ClientReadableStream<communitygames_pb.DeletePlaygroundResponse>;

  getPlayground(
    request: communitygames_pb.GetPlaygroundRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: communitygames_pb.PlaygroundInfoResponse) => void
  ): grpcWeb.ClientReadableStream<communitygames_pb.PlaygroundInfoResponse>;

  listPlaygroundsByOwner(
    request: communitygames_pb.ListPlaygroundsByOwnerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: communitygames_pb.ListPlaygroundsByOwnerResponse) => void
  ): grpcWeb.ClientReadableStream<communitygames_pb.ListPlaygroundsByOwnerResponse>;

  getBlueprintsById(
    request: communitygames_pb.GetBlueprintsByIdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: communitygames_pb.GetBlueprintsByIdResponse) => void
  ): grpcWeb.ClientReadableStream<communitygames_pb.GetBlueprintsByIdResponse>;

  getScheduledBlueprints(
    request: communitygames_pb.GetScheduledBlueprintsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: communitygames_pb.GetScheduledBlueprintsResponse) => void
  ): grpcWeb.ClientReadableStream<communitygames_pb.GetScheduledBlueprintsResponse>;

  getConstraints(
    request: communitygames_pb.GetConstraintsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: communitygames_pb.GetConstraintsResponse) => void
  ): grpcWeb.ClientReadableStream<communitygames_pb.GetConstraintsResponse>;

  sharePlayground(
    request: communitygames_pb.SharePlaygroundRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: communitygames_pb.SharePlaygroundResponse) => void
  ): grpcWeb.ClientReadableStream<communitygames_pb.SharePlaygroundResponse>;

  getProgressionTypes(
    request: communitygames_pb.GetProgressionTypesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: communitygames_pb.GetProgressionTypesResponse) => void
  ): grpcWeb.ClientReadableStream<communitygames_pb.GetProgressionTypesResponse>;

}

export class CommunityGamesPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  createPlayground(
    request: communitygames_pb.CreatePlaygroundRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<communitygames_pb.CreatePlaygroundResponse>;

  updatePlayground(
    request: communitygames_pb.UpdatePlaygroundRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<communitygames_pb.UpdatePlaygroundResponse>;

  deletePlayground(
    request: communitygames_pb.DeletePlaygroundRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<communitygames_pb.DeletePlaygroundResponse>;

  getPlayground(
    request: communitygames_pb.GetPlaygroundRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<communitygames_pb.PlaygroundInfoResponse>;

  listPlaygroundsByOwner(
    request: communitygames_pb.ListPlaygroundsByOwnerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<communitygames_pb.ListPlaygroundsByOwnerResponse>;

  getBlueprintsById(
    request: communitygames_pb.GetBlueprintsByIdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<communitygames_pb.GetBlueprintsByIdResponse>;

  getScheduledBlueprints(
    request: communitygames_pb.GetScheduledBlueprintsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<communitygames_pb.GetScheduledBlueprintsResponse>;

  getConstraints(
    request: communitygames_pb.GetConstraintsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<communitygames_pb.GetConstraintsResponse>;

  sharePlayground(
    request: communitygames_pb.SharePlaygroundRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<communitygames_pb.SharePlaygroundResponse>;

  getProgressionTypes(
    request: communitygames_pb.GetProgressionTypesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<communitygames_pb.GetProgressionTypesResponse>;

}

