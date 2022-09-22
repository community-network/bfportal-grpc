/**
 * @fileoverview gRPC-Web generated client stub for web.authentication
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
proto.web.authentication = require('./authentication_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.web.authentication.ClientAuthenticationClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

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
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.web.authentication.ClientAuthenticationPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

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
 *   !proto.web.authentication.AuthRequest,
 *   !proto.web.authentication.AuthResponse>}
 */
const methodDescriptor_ClientAuthentication_viaAuthCode = new grpc.web.MethodDescriptor(
  '/web.authentication.ClientAuthentication/viaAuthCode',
  grpc.web.MethodType.UNARY,
  proto.web.authentication.AuthRequest,
  proto.web.authentication.AuthResponse,
  /**
   * @param {!proto.web.authentication.AuthRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.authentication.AuthResponse.deserializeBinary
);


/**
 * @param {!proto.web.authentication.AuthRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.authentication.AuthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.authentication.AuthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.authentication.ClientAuthenticationClient.prototype.viaAuthCode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.authentication.ClientAuthentication/viaAuthCode',
      request,
      metadata || {},
      methodDescriptor_ClientAuthentication_viaAuthCode,
      callback);
};


/**
 * @param {!proto.web.authentication.AuthRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.authentication.AuthResponse>}
 *     Promise that resolves to the response
 */
proto.web.authentication.ClientAuthenticationPromiseClient.prototype.viaAuthCode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.authentication.ClientAuthentication/viaAuthCode',
      request,
      metadata || {},
      methodDescriptor_ClientAuthentication_viaAuthCode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.authentication.Empty,
 *   !proto.web.authentication.Empty>}
 */
const methodDescriptor_ClientAuthentication_logout = new grpc.web.MethodDescriptor(
  '/web.authentication.ClientAuthentication/logout',
  grpc.web.MethodType.UNARY,
  proto.web.authentication.Empty,
  proto.web.authentication.Empty,
  /**
   * @param {!proto.web.authentication.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.authentication.Empty.deserializeBinary
);


/**
 * @param {!proto.web.authentication.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.authentication.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.authentication.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.authentication.ClientAuthenticationClient.prototype.logout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.authentication.ClientAuthentication/logout',
      request,
      metadata || {},
      methodDescriptor_ClientAuthentication_logout,
      callback);
};


/**
 * @param {!proto.web.authentication.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.authentication.Empty>}
 *     Promise that resolves to the response
 */
proto.web.authentication.ClientAuthenticationPromiseClient.prototype.logout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.authentication.ClientAuthentication/logout',
      request,
      metadata || {},
      methodDescriptor_ClientAuthentication_logout);
};


module.exports = proto.web.authentication;

