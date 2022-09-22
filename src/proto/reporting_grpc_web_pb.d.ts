import * as grpcWeb from 'grpc-web';

import * as reporting_pb from './reporting_pb';


export class WebReportingClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  reportPlayground(
    request: reporting_pb.ReportPlaygroundRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: reporting_pb.ReportPlaygroundResponse) => void
  ): grpcWeb.ClientReadableStream<reporting_pb.ReportPlaygroundResponse>;

}

export class WebReportingPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  reportPlayground(
    request: reporting_pb.ReportPlaygroundRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<reporting_pb.ReportPlaygroundResponse>;

}

