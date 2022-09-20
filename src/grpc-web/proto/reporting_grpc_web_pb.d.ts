import * as grpcWeb from 'grpc-web';

import {
  ReportPlaygroundRequest,
  ReportPlaygroundResponse} from './reporting_pb';

export class WebReportingClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  reportPlayground(
    request: ReportPlaygroundRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ReportPlaygroundResponse) => void
  ): grpcWeb.ClientReadableStream<ReportPlaygroundResponse>;

}

export class WebReportingPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  reportPlayground(
    request: ReportPlaygroundRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ReportPlaygroundResponse>;

}

