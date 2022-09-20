/**
 * @fileoverview gRPC-Web generated client stub for web.communitygames
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.web = {};
proto.web.communitygames = require('./communitygames_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.web.communitygames.CommunityGamesClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.web.communitygames.CommunityGamesPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.communitygames.CreatePlaygroundRequest,
 *   !proto.web.communitygames.CreatePlaygroundResponse>}
 */
const methodDescriptor_CommunityGames_createPlayground = new grpc.web.MethodDescriptor(
  '/web.communitygames.CommunityGames/createPlayground',
  grpc.web.MethodType.UNARY,
  proto.web.communitygames.CreatePlaygroundRequest,
  proto.web.communitygames.CreatePlaygroundResponse,
  /**
   * @param {!proto.web.communitygames.CreatePlaygroundRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.communitygames.CreatePlaygroundResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.communitygames.CreatePlaygroundRequest,
 *   !proto.web.communitygames.CreatePlaygroundResponse>}
 */
const methodInfo_CommunityGames_createPlayground = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.communitygames.CreatePlaygroundResponse,
  /**
   * @param {!proto.web.communitygames.CreatePlaygroundRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.communitygames.CreatePlaygroundResponse.deserializeBinary
);


/**
 * @param {!proto.web.communitygames.CreatePlaygroundRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.communitygames.CreatePlaygroundResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.communitygames.CreatePlaygroundResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.communitygames.CommunityGamesClient.prototype.createPlayground =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.communitygames.CommunityGames/createPlayground',
      request,
      metadata || {},
      methodDescriptor_CommunityGames_createPlayground,
      callback);
};


/**
 * @param {!proto.web.communitygames.CreatePlaygroundRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.communitygames.CreatePlaygroundResponse>}
 *     A native promise that resolves to the response
 */
proto.web.communitygames.CommunityGamesPromiseClient.prototype.createPlayground =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.communitygames.CommunityGames/createPlayground',
      request,
      metadata || {},
      methodDescriptor_CommunityGames_createPlayground);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.communitygames.UpdatePlaygroundRequest,
 *   !proto.web.communitygames.UpdatePlaygroundResponse>}
 */
const methodDescriptor_CommunityGames_updatePlayground = new grpc.web.MethodDescriptor(
  '/web.communitygames.CommunityGames/updatePlayground',
  grpc.web.MethodType.UNARY,
  proto.web.communitygames.UpdatePlaygroundRequest,
  proto.web.communitygames.UpdatePlaygroundResponse,
  /**
   * @param {!proto.web.communitygames.UpdatePlaygroundRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.communitygames.UpdatePlaygroundResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.communitygames.UpdatePlaygroundRequest,
 *   !proto.web.communitygames.UpdatePlaygroundResponse>}
 */
const methodInfo_CommunityGames_updatePlayground = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.communitygames.UpdatePlaygroundResponse,
  /**
   * @param {!proto.web.communitygames.UpdatePlaygroundRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.communitygames.UpdatePlaygroundResponse.deserializeBinary
);


/**
 * @param {!proto.web.communitygames.UpdatePlaygroundRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.communitygames.UpdatePlaygroundResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.communitygames.UpdatePlaygroundResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.communitygames.CommunityGamesClient.prototype.updatePlayground =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.communitygames.CommunityGames/updatePlayground',
      request,
      metadata || {},
      methodDescriptor_CommunityGames_updatePlayground,
      callback);
};


/**
 * @param {!proto.web.communitygames.UpdatePlaygroundRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.communitygames.UpdatePlaygroundResponse>}
 *     A native promise that resolves to the response
 */
proto.web.communitygames.CommunityGamesPromiseClient.prototype.updatePlayground =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.communitygames.CommunityGames/updatePlayground',
      request,
      metadata || {},
      methodDescriptor_CommunityGames_updatePlayground);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.communitygames.DeletePlaygroundRequest,
 *   !proto.web.communitygames.DeletePlaygroundResponse>}
 */
const methodDescriptor_CommunityGames_deletePlayground = new grpc.web.MethodDescriptor(
  '/web.communitygames.CommunityGames/deletePlayground',
  grpc.web.MethodType.UNARY,
  proto.web.communitygames.DeletePlaygroundRequest,
  proto.web.communitygames.DeletePlaygroundResponse,
  /**
   * @param {!proto.web.communitygames.DeletePlaygroundRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.communitygames.DeletePlaygroundResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.communitygames.DeletePlaygroundRequest,
 *   !proto.web.communitygames.DeletePlaygroundResponse>}
 */
const methodInfo_CommunityGames_deletePlayground = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.communitygames.DeletePlaygroundResponse,
  /**
   * @param {!proto.web.communitygames.DeletePlaygroundRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.communitygames.DeletePlaygroundResponse.deserializeBinary
);


/**
 * @param {!proto.web.communitygames.DeletePlaygroundRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.communitygames.DeletePlaygroundResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.communitygames.DeletePlaygroundResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.communitygames.CommunityGamesClient.prototype.deletePlayground =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.communitygames.CommunityGames/deletePlayground',
      request,
      metadata || {},
      methodDescriptor_CommunityGames_deletePlayground,
      callback);
};


/**
 * @param {!proto.web.communitygames.DeletePlaygroundRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.communitygames.DeletePlaygroundResponse>}
 *     A native promise that resolves to the response
 */
proto.web.communitygames.CommunityGamesPromiseClient.prototype.deletePlayground =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.communitygames.CommunityGames/deletePlayground',
      request,
      metadata || {},
      methodDescriptor_CommunityGames_deletePlayground);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.communitygames.GetPlaygroundRequest,
 *   !proto.web.communitygames.PlaygroundInfoResponse>}
 */
const methodDescriptor_CommunityGames_getPlayground = new grpc.web.MethodDescriptor(
  '/web.communitygames.CommunityGames/getPlayground',
  grpc.web.MethodType.UNARY,
  proto.web.communitygames.GetPlaygroundRequest,
  proto.web.communitygames.PlaygroundInfoResponse,
  /**
   * @param {!proto.web.communitygames.GetPlaygroundRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.communitygames.PlaygroundInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.communitygames.GetPlaygroundRequest,
 *   !proto.web.communitygames.PlaygroundInfoResponse>}
 */
const methodInfo_CommunityGames_getPlayground = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.communitygames.PlaygroundInfoResponse,
  /**
   * @param {!proto.web.communitygames.GetPlaygroundRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.communitygames.PlaygroundInfoResponse.deserializeBinary
);


/**
 * @param {!proto.web.communitygames.GetPlaygroundRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.communitygames.PlaygroundInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.communitygames.PlaygroundInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.communitygames.CommunityGamesClient.prototype.getPlayground =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.communitygames.CommunityGames/getPlayground',
      request,
      metadata || {},
      methodDescriptor_CommunityGames_getPlayground,
      callback);
};


/**
 * @param {!proto.web.communitygames.GetPlaygroundRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.communitygames.PlaygroundInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.web.communitygames.CommunityGamesPromiseClient.prototype.getPlayground =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.communitygames.CommunityGames/getPlayground',
      request,
      metadata || {},
      methodDescriptor_CommunityGames_getPlayground);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.communitygames.ListPlaygroundsByOwnerRequest,
 *   !proto.web.communitygames.ListPlaygroundsByOwnerResponse>}
 */
const methodDescriptor_CommunityGames_listPlaygroundsByOwner = new grpc.web.MethodDescriptor(
  '/web.communitygames.CommunityGames/listPlaygroundsByOwner',
  grpc.web.MethodType.UNARY,
  proto.web.communitygames.ListPlaygroundsByOwnerRequest,
  proto.web.communitygames.ListPlaygroundsByOwnerResponse,
  /**
   * @param {!proto.web.communitygames.ListPlaygroundsByOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.communitygames.ListPlaygroundsByOwnerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.communitygames.ListPlaygroundsByOwnerRequest,
 *   !proto.web.communitygames.ListPlaygroundsByOwnerResponse>}
 */
const methodInfo_CommunityGames_listPlaygroundsByOwner = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.communitygames.ListPlaygroundsByOwnerResponse,
  /**
   * @param {!proto.web.communitygames.ListPlaygroundsByOwnerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.communitygames.ListPlaygroundsByOwnerResponse.deserializeBinary
);


/**
 * @param {!proto.web.communitygames.ListPlaygroundsByOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.communitygames.ListPlaygroundsByOwnerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.communitygames.ListPlaygroundsByOwnerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.communitygames.CommunityGamesClient.prototype.listPlaygroundsByOwner =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.communitygames.CommunityGames/listPlaygroundsByOwner',
      request,
      metadata || {},
      methodDescriptor_CommunityGames_listPlaygroundsByOwner,
      callback);
};


/**
 * @param {!proto.web.communitygames.ListPlaygroundsByOwnerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.communitygames.ListPlaygroundsByOwnerResponse>}
 *     A native promise that resolves to the response
 */
proto.web.communitygames.CommunityGamesPromiseClient.prototype.listPlaygroundsByOwner =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.communitygames.CommunityGames/listPlaygroundsByOwner',
      request,
      metadata || {},
      methodDescriptor_CommunityGames_listPlaygroundsByOwner);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.communitygames.GetBlueprintsByIdRequest,
 *   !proto.web.communitygames.GetBlueprintsByIdResponse>}
 */
const methodDescriptor_CommunityGames_getBlueprintsById = new grpc.web.MethodDescriptor(
  '/web.communitygames.CommunityGames/getBlueprintsById',
  grpc.web.MethodType.UNARY,
  proto.web.communitygames.GetBlueprintsByIdRequest,
  proto.web.communitygames.GetBlueprintsByIdResponse,
  /**
   * @param {!proto.web.communitygames.GetBlueprintsByIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.communitygames.GetBlueprintsByIdResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.communitygames.GetBlueprintsByIdRequest,
 *   !proto.web.communitygames.GetBlueprintsByIdResponse>}
 */
const methodInfo_CommunityGames_getBlueprintsById = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.communitygames.GetBlueprintsByIdResponse,
  /**
   * @param {!proto.web.communitygames.GetBlueprintsByIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.communitygames.GetBlueprintsByIdResponse.deserializeBinary
);


/**
 * @param {!proto.web.communitygames.GetBlueprintsByIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.communitygames.GetBlueprintsByIdResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.communitygames.GetBlueprintsByIdResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.communitygames.CommunityGamesClient.prototype.getBlueprintsById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.communitygames.CommunityGames/getBlueprintsById',
      request,
      metadata || {},
      methodDescriptor_CommunityGames_getBlueprintsById,
      callback);
};


/**
 * @param {!proto.web.communitygames.GetBlueprintsByIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.communitygames.GetBlueprintsByIdResponse>}
 *     A native promise that resolves to the response
 */
proto.web.communitygames.CommunityGamesPromiseClient.prototype.getBlueprintsById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.communitygames.CommunityGames/getBlueprintsById',
      request,
      metadata || {},
      methodDescriptor_CommunityGames_getBlueprintsById);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.communitygames.GetScheduledBlueprintsRequest,
 *   !proto.web.communitygames.GetScheduledBlueprintsResponse>}
 */
const methodDescriptor_CommunityGames_getScheduledBlueprints = new grpc.web.MethodDescriptor(
  '/web.communitygames.CommunityGames/getScheduledBlueprints',
  grpc.web.MethodType.UNARY,
  proto.web.communitygames.GetScheduledBlueprintsRequest,
  proto.web.communitygames.GetScheduledBlueprintsResponse,
  /**
   * @param {!proto.web.communitygames.GetScheduledBlueprintsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.communitygames.GetScheduledBlueprintsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.communitygames.GetScheduledBlueprintsRequest,
 *   !proto.web.communitygames.GetScheduledBlueprintsResponse>}
 */
const methodInfo_CommunityGames_getScheduledBlueprints = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.communitygames.GetScheduledBlueprintsResponse,
  /**
   * @param {!proto.web.communitygames.GetScheduledBlueprintsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.communitygames.GetScheduledBlueprintsResponse.deserializeBinary
);


/**
 * @param {!proto.web.communitygames.GetScheduledBlueprintsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.communitygames.GetScheduledBlueprintsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.communitygames.GetScheduledBlueprintsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.communitygames.CommunityGamesClient.prototype.getScheduledBlueprints =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.communitygames.CommunityGames/getScheduledBlueprints',
      request,
      metadata || {},
      methodDescriptor_CommunityGames_getScheduledBlueprints,
      callback);
};


/**
 * @param {!proto.web.communitygames.GetScheduledBlueprintsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.communitygames.GetScheduledBlueprintsResponse>}
 *     A native promise that resolves to the response
 */
proto.web.communitygames.CommunityGamesPromiseClient.prototype.getScheduledBlueprints =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.communitygames.CommunityGames/getScheduledBlueprints',
      request,
      metadata || {},
      methodDescriptor_CommunityGames_getScheduledBlueprints);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.communitygames.GetConstraintsRequest,
 *   !proto.web.communitygames.GetConstraintsResponse>}
 */
const methodDescriptor_CommunityGames_getConstraints = new grpc.web.MethodDescriptor(
  '/web.communitygames.CommunityGames/getConstraints',
  grpc.web.MethodType.UNARY,
  proto.web.communitygames.GetConstraintsRequest,
  proto.web.communitygames.GetConstraintsResponse,
  /**
   * @param {!proto.web.communitygames.GetConstraintsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.communitygames.GetConstraintsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.communitygames.GetConstraintsRequest,
 *   !proto.web.communitygames.GetConstraintsResponse>}
 */
const methodInfo_CommunityGames_getConstraints = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.communitygames.GetConstraintsResponse,
  /**
   * @param {!proto.web.communitygames.GetConstraintsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.communitygames.GetConstraintsResponse.deserializeBinary
);


/**
 * @param {!proto.web.communitygames.GetConstraintsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.communitygames.GetConstraintsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.communitygames.GetConstraintsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.communitygames.CommunityGamesClient.prototype.getConstraints =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.communitygames.CommunityGames/getConstraints',
      request,
      metadata || {},
      methodDescriptor_CommunityGames_getConstraints,
      callback);
};


/**
 * @param {!proto.web.communitygames.GetConstraintsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.communitygames.GetConstraintsResponse>}
 *     A native promise that resolves to the response
 */
proto.web.communitygames.CommunityGamesPromiseClient.prototype.getConstraints =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.communitygames.CommunityGames/getConstraints',
      request,
      metadata || {},
      methodDescriptor_CommunityGames_getConstraints);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.communitygames.SharePlaygroundRequest,
 *   !proto.web.communitygames.SharePlaygroundResponse>}
 */
const methodDescriptor_CommunityGames_sharePlayground = new grpc.web.MethodDescriptor(
  '/web.communitygames.CommunityGames/sharePlayground',
  grpc.web.MethodType.UNARY,
  proto.web.communitygames.SharePlaygroundRequest,
  proto.web.communitygames.SharePlaygroundResponse,
  /**
   * @param {!proto.web.communitygames.SharePlaygroundRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.communitygames.SharePlaygroundResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.communitygames.SharePlaygroundRequest,
 *   !proto.web.communitygames.SharePlaygroundResponse>}
 */
const methodInfo_CommunityGames_sharePlayground = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.communitygames.SharePlaygroundResponse,
  /**
   * @param {!proto.web.communitygames.SharePlaygroundRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.communitygames.SharePlaygroundResponse.deserializeBinary
);


/**
 * @param {!proto.web.communitygames.SharePlaygroundRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.communitygames.SharePlaygroundResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.communitygames.SharePlaygroundResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.communitygames.CommunityGamesClient.prototype.sharePlayground =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.communitygames.CommunityGames/sharePlayground',
      request,
      metadata || {},
      methodDescriptor_CommunityGames_sharePlayground,
      callback);
};


/**
 * @param {!proto.web.communitygames.SharePlaygroundRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.communitygames.SharePlaygroundResponse>}
 *     A native promise that resolves to the response
 */
proto.web.communitygames.CommunityGamesPromiseClient.prototype.sharePlayground =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.communitygames.CommunityGames/sharePlayground',
      request,
      metadata || {},
      methodDescriptor_CommunityGames_sharePlayground);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.communitygames.GetProgressionTypesRequest,
 *   !proto.web.communitygames.GetProgressionTypesResponse>}
 */
const methodDescriptor_CommunityGames_getProgressionTypes = new grpc.web.MethodDescriptor(
  '/web.communitygames.CommunityGames/getProgressionTypes',
  grpc.web.MethodType.UNARY,
  proto.web.communitygames.GetProgressionTypesRequest,
  proto.web.communitygames.GetProgressionTypesResponse,
  /**
   * @param {!proto.web.communitygames.GetProgressionTypesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.communitygames.GetProgressionTypesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.communitygames.GetProgressionTypesRequest,
 *   !proto.web.communitygames.GetProgressionTypesResponse>}
 */
const methodInfo_CommunityGames_getProgressionTypes = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.communitygames.GetProgressionTypesResponse,
  /**
   * @param {!proto.web.communitygames.GetProgressionTypesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.communitygames.GetProgressionTypesResponse.deserializeBinary
);


/**
 * @param {!proto.web.communitygames.GetProgressionTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.communitygames.GetProgressionTypesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.communitygames.GetProgressionTypesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.communitygames.CommunityGamesClient.prototype.getProgressionTypes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.communitygames.CommunityGames/getProgressionTypes',
      request,
      metadata || {},
      methodDescriptor_CommunityGames_getProgressionTypes,
      callback);
};


/**
 * @param {!proto.web.communitygames.GetProgressionTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.communitygames.GetProgressionTypesResponse>}
 *     A native promise that resolves to the response
 */
proto.web.communitygames.CommunityGamesPromiseClient.prototype.getProgressionTypes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.communitygames.CommunityGames/getProgressionTypes',
      request,
      metadata || {},
      methodDescriptor_CommunityGames_getProgressionTypes);
};


module.exports = proto.web.communitygames;

