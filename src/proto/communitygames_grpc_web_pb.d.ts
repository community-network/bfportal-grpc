import * as grpcWeb from 'grpc-web';

import {
  CreatePlaygroundRequest,
  CreatePlaygroundResponse,
  DeletePlaygroundRequest,
  DeletePlaygroundResponse,
  GetBlueprintsByIdRequest,
  GetBlueprintsByIdResponse,
  GetConstraintsRequest,
  GetConstraintsResponse,
  GetPlaygroundRequest,
  GetProgressionTypesRequest,
  GetProgressionTypesResponse,
  GetScheduledBlueprintsRequest,
  GetScheduledBlueprintsResponse,
  ListPlaygroundsByOwnerRequest,
  ListPlaygroundsByOwnerResponse,
  PlaygroundInfoResponse,
  SharePlaygroundRequest,
  SharePlaygroundResponse,
  UpdatePlaygroundRequest,
  UpdatePlaygroundResponse} from './communitygames_pb';

export class CommunityGamesClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  createPlayground(
    request: CreatePlaygroundRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: CreatePlaygroundResponse) => void
  ): grpcWeb.ClientReadableStream<CreatePlaygroundResponse>;

  updatePlayground(
    request: UpdatePlaygroundRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: UpdatePlaygroundResponse) => void
  ): grpcWeb.ClientReadableStream<UpdatePlaygroundResponse>;

  deletePlayground(
    request: DeletePlaygroundRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: DeletePlaygroundResponse) => void
  ): grpcWeb.ClientReadableStream<DeletePlaygroundResponse>;

  getPlayground(
    request: GetPlaygroundRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: PlaygroundInfoResponse) => void
  ): grpcWeb.ClientReadableStream<PlaygroundInfoResponse>;

  listPlaygroundsByOwner(
    request: ListPlaygroundsByOwnerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ListPlaygroundsByOwnerResponse) => void
  ): grpcWeb.ClientReadableStream<ListPlaygroundsByOwnerResponse>;

  getBlueprintsById(
    request: GetBlueprintsByIdRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetBlueprintsByIdResponse) => void
  ): grpcWeb.ClientReadableStream<GetBlueprintsByIdResponse>;

  getScheduledBlueprints(
    request: GetScheduledBlueprintsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetScheduledBlueprintsResponse) => void
  ): grpcWeb.ClientReadableStream<GetScheduledBlueprintsResponse>;

  getConstraints(
    request: GetConstraintsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetConstraintsResponse) => void
  ): grpcWeb.ClientReadableStream<GetConstraintsResponse>;

  sharePlayground(
    request: SharePlaygroundRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SharePlaygroundResponse) => void
  ): grpcWeb.ClientReadableStream<SharePlaygroundResponse>;

  getProgressionTypes(
    request: GetProgressionTypesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetProgressionTypesResponse) => void
  ): grpcWeb.ClientReadableStream<GetProgressionTypesResponse>;

}

export class CommunityGamesPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  createPlayground(
    request: CreatePlaygroundRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<CreatePlaygroundResponse>;

  updatePlayground(
    request: UpdatePlaygroundRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<UpdatePlaygroundResponse>;

  deletePlayground(
    request: DeletePlaygroundRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<DeletePlaygroundResponse>;

  getPlayground(
    request: GetPlaygroundRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<PlaygroundInfoResponse>;

  listPlaygroundsByOwner(
    request: ListPlaygroundsByOwnerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ListPlaygroundsByOwnerResponse>;

  getBlueprintsById(
    request: GetBlueprintsByIdRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetBlueprintsByIdResponse>;

  getScheduledBlueprints(
    request: GetScheduledBlueprintsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetScheduledBlueprintsResponse>;

  getConstraints(
    request: GetConstraintsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetConstraintsResponse>;

  sharePlayground(
    request: SharePlaygroundRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SharePlaygroundResponse>;

  getProgressionTypes(
    request: GetProgressionTypesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetProgressionTypesResponse>;

}

