/**
 * @fileoverview gRPC-Web generated client stub for web.reporting
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
proto.web.reporting = require('./reporting_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.web.reporting.WebReportingClient =
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
proto.web.reporting.WebReportingPromiseClient =
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
 *   !proto.web.reporting.ReportPlaygroundRequest,
 *   !proto.web.reporting.ReportPlaygroundResponse>}
 */
const methodDescriptor_WebReporting_reportPlayground = new grpc.web.MethodDescriptor(
  '/web.reporting.WebReporting/reportPlayground',
  grpc.web.MethodType.UNARY,
  proto.web.reporting.ReportPlaygroundRequest,
  proto.web.reporting.ReportPlaygroundResponse,
  /**
   * @param {!proto.web.reporting.ReportPlaygroundRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.reporting.ReportPlaygroundResponse.deserializeBinary
);


/**
 * @param {!proto.web.reporting.ReportPlaygroundRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.reporting.ReportPlaygroundResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.reporting.ReportPlaygroundResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.reporting.WebReportingClient.prototype.reportPlayground =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.reporting.WebReporting/reportPlayground',
      request,
      metadata || {},
      methodDescriptor_WebReporting_reportPlayground,
      callback);
};


/**
 * @param {!proto.web.reporting.ReportPlaygroundRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.reporting.ReportPlaygroundResponse>}
 *     Promise that resolves to the response
 */
proto.web.reporting.WebReportingPromiseClient.prototype.reportPlayground =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.reporting.WebReporting/reportPlayground',
      request,
      metadata || {},
      methodDescriptor_WebReporting_reportPlayground);
};


module.exports = proto.web.reporting;

