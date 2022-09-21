import * as jspb from 'google-protobuf'



export class StringValue extends jspb.Message {
  getValue(): string;
  setValue(value: string): StringValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringValue.AsObject;
  static toObject(includeInstance: boolean, msg: StringValue): StringValue.AsObject;
  static serializeBinaryToWriter(message: StringValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringValue;
  static deserializeBinaryFromReader(message: StringValue, reader: jspb.BinaryReader): StringValue;
}

export namespace StringValue {
  export type AsObject = {
    value: string,
  }
}

export class ReportPlaygroundRequest extends jspb.Message {
  getProtocolversion(): string;
  setProtocolversion(value: string): ReportPlaygroundRequest;

  getPlaygroundid(): string;
  setPlaygroundid(value: string): ReportPlaygroundRequest;

  getCategory(): Category;
  setCategory(value: Category): ReportPlaygroundRequest;

  getRequesteremail(): StringValue | undefined;
  setRequesteremail(value?: StringValue): ReportPlaygroundRequest;
  hasRequesteremail(): boolean;
  clearRequesteremail(): ReportPlaygroundRequest;

  getSubject(): StringValue | undefined;
  setSubject(value?: StringValue): ReportPlaygroundRequest;
  hasSubject(): boolean;
  clearSubject(): ReportPlaygroundRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportPlaygroundRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportPlaygroundRequest): ReportPlaygroundRequest.AsObject;
  static serializeBinaryToWriter(message: ReportPlaygroundRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportPlaygroundRequest;
  static deserializeBinaryFromReader(message: ReportPlaygroundRequest, reader: jspb.BinaryReader): ReportPlaygroundRequest;
}

export namespace ReportPlaygroundRequest {
  export type AsObject = {
    protocolversion: string,
    playgroundid: string,
    category: Category,
    requesteremail?: StringValue.AsObject,
    subject?: StringValue.AsObject,
  }
}

export class ReportPlaygroundResponse extends jspb.Message {
  getPetitionid(): string;
  setPetitionid(value: string): ReportPlaygroundResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportPlaygroundResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReportPlaygroundResponse): ReportPlaygroundResponse.AsObject;
  static serializeBinaryToWriter(message: ReportPlaygroundResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportPlaygroundResponse;
  static deserializeBinaryFromReader(message: ReportPlaygroundResponse, reader: jspb.BinaryReader): ReportPlaygroundResponse;
}

export namespace ReportPlaygroundResponse {
  export type AsObject = {
    petitionid: string,
  }
}

export enum Category { 
  UNKNOWN_CATEGORY = 0,
  CHEATING = 1,
  HARASSMENT = 2,
  SPAM = 3,
  PLAGIARISM = 4,
  HATE_SPEECH = 5,
  SEXUALLY_EXPLICIT = 6,
  CHILD_SOLICITATION = 7,
  TERRORIST_THREAT = 8,
  CLIENT_HACK = 9,
  SUICIDE_THREAT = 10,
  DOXING = 11,
  ADVERTISING = 12,
  INAPPROPRIATE = 13,
  VIOLENT = 14,
  OFFENSIVE = 15,
  OFFENSIVE_CHAT = 16,
  OFFENSIVE_NAME = 17,
}
