/**
 * @fileoverview gRPC-Web generated client stub for web.localization
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
proto.web.localization = require('./localization_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.web.localization.ClientLocalizationClient =
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
proto.web.localization.ClientLocalizationPromiseClient =
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
 *   !proto.web.localization.GetTranslationsRequest,
 *   !proto.web.localization.GetTranslationsResponse>}
 */
const methodDescriptor_ClientLocalization_getTranslations = new grpc.web.MethodDescriptor(
  '/web.localization.ClientLocalization/getTranslations',
  grpc.web.MethodType.UNARY,
  proto.web.localization.GetTranslationsRequest,
  proto.web.localization.GetTranslationsResponse,
  /**
   * @param {!proto.web.localization.GetTranslationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.localization.GetTranslationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.localization.GetTranslationsRequest,
 *   !proto.web.localization.GetTranslationsResponse>}
 */
const methodInfo_ClientLocalization_getTranslations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.localization.GetTranslationsResponse,
  /**
   * @param {!proto.web.localization.GetTranslationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.localization.GetTranslationsResponse.deserializeBinary
);


/**
 * @param {!proto.web.localization.GetTranslationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.localization.GetTranslationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.localization.GetTranslationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.localization.ClientLocalizationClient.prototype.getTranslations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.localization.ClientLocalization/getTranslations',
      request,
      metadata || {},
      methodDescriptor_ClientLocalization_getTranslations,
      callback);
};


/**
 * @param {!proto.web.localization.GetTranslationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.localization.GetTranslationsResponse>}
 *     A native promise that resolves to the response
 */
proto.web.localization.ClientLocalizationPromiseClient.prototype.getTranslations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.localization.ClientLocalization/getTranslations',
      request,
      metadata || {},
      methodDescriptor_ClientLocalization_getTranslations);
};


module.exports = proto.web.localization;

