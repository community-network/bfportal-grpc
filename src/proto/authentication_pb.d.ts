import * as jspb from "google-protobuf"

export class PlayerInfo extends jspb.Message {
  getNucleusid(): number;
  setNucleusid(value: number): PlayerInfo;

  getPersonaid(): number;
  setPersonaid(value: number): PlayerInfo;

  getPlatformid(): number;
  setPlatformid(value: number): PlayerInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerInfo): PlayerInfo.AsObject;
  static serializeBinaryToWriter(message: PlayerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerInfo;
  static deserializeBinaryFromReader(message: PlayerInfo, reader: jspb.BinaryReader): PlayerInfo;
}

export namespace PlayerInfo {
  export type AsObject = {
    nucleusid: number,
    personaid: number,
    platformid: number,
  }
}

export class AuthRequest extends jspb.Message {
  getAuthcode(): string;
  setAuthcode(value: string): AuthRequest;

  getRedirecturi(): string;
  setRedirecturi(value: string): AuthRequest;

  getProduct(): string;
  setProduct(value: string): AuthRequest;

  getFirstpartyid(): string;
  setFirstpartyid(value: string): AuthRequest;

  getPlatform(): Platform;
  setPlatform(value: Platform): AuthRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthRequest): AuthRequest.AsObject;
  static serializeBinaryToWriter(message: AuthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthRequest;
  static deserializeBinaryFromReader(message: AuthRequest, reader: jspb.BinaryReader): AuthRequest;
}

export namespace AuthRequest {
  export type AsObject = {
    authcode: string,
    redirecturi: string,
    product: string,
    firstpartyid: string,
    platform: Platform,
  }
}

export class Duration extends jspb.Message {
  getSeconds(): number;
  setSeconds(value: number): Duration;

  getNanos(): number;
  setNanos(value: number): Duration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Duration.AsObject;
  static toObject(includeInstance: boolean, msg: Duration): Duration.AsObject;
  static serializeBinaryToWriter(message: Duration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Duration;
  static deserializeBinaryFromReader(message: Duration, reader: jspb.BinaryReader): Duration;
}

export namespace Duration {
  export type AsObject = {
    seconds: number,
    nanos: number,
  }
}

export class TimeTravel extends jspb.Message {
  getOffset(): Duration | undefined;
  setOffset(value?: Duration): TimeTravel;
  hasOffset(): boolean;
  clearOffset(): TimeTravel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeTravel.AsObject;
  static toObject(includeInstance: boolean, msg: TimeTravel): TimeTravel.AsObject;
  static serializeBinaryToWriter(message: TimeTravel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeTravel;
  static deserializeBinaryFromReader(message: TimeTravel, reader: jspb.BinaryReader): TimeTravel;
}

export namespace TimeTravel {
  export type AsObject = {
    offset?: Duration.AsObject,
  }
}

export class ProtocolVersionOverride extends jspb.Message {
  getOriginal(): string;
  setOriginal(value: string): ProtocolVersionOverride;

  getOverridden(): string;
  setOverridden(value: string): ProtocolVersionOverride;

  getReason(): Reason;
  setReason(value: Reason): ProtocolVersionOverride;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProtocolVersionOverride.AsObject;
  static toObject(includeInstance: boolean, msg: ProtocolVersionOverride): ProtocolVersionOverride.AsObject;
  static serializeBinaryToWriter(message: ProtocolVersionOverride, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProtocolVersionOverride;
  static deserializeBinaryFromReader(message: ProtocolVersionOverride, reader: jspb.BinaryReader): ProtocolVersionOverride;
}

export namespace ProtocolVersionOverride {
  export type AsObject = {
    original: string,
    overridden: string,
    reason: Reason,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class AuthResponse extends jspb.Message {
  getSessionid(): string;
  setSessionid(value: string): AuthResponse;

  getPlayer(): PlayerInfo | undefined;
  setPlayer(value?: PlayerInfo): AuthResponse;
  hasPlayer(): boolean;
  clearPlayer(): AuthResponse;

  getUserbitsList(): Array<UserBits>;
  setUserbitsList(value: Array<UserBits>): AuthResponse;
  clearUserbitsList(): AuthResponse;
  addUserbits(value: UserBits, index?: number): AuthResponse;

  getTimetravel(): TimeTravel | undefined;
  setTimetravel(value?: TimeTravel): AuthResponse;
  hasTimetravel(): boolean;
  clearTimetravel(): AuthResponse;

  getProtocolversionoverride(): ProtocolVersionOverride | undefined;
  setProtocolversionoverride(value?: ProtocolVersionOverride): AuthResponse;
  hasProtocolversionoverride(): boolean;
  clearProtocolversionoverride(): AuthResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthResponse): AuthResponse.AsObject;
  static serializeBinaryToWriter(message: AuthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthResponse;
  static deserializeBinaryFromReader(message: AuthResponse, reader: jspb.BinaryReader): AuthResponse;
}

export namespace AuthResponse {
  export type AsObject = {
    sessionid: string,
    player?: PlayerInfo.AsObject,
    userbitsList: Array<UserBits>,
    timetravel?: TimeTravel.AsObject,
    protocolversionoverride?: ProtocolVersionOverride.AsObject,
  }
}

export enum Platform { 
  UNKNOWN = 0,
  PC = 1,
  PS4 = 2,
  XBOXONE = 3,
  PS5 = 4,
  XBSX = 5,
  COMMON = 6,
}
export enum Reason { 
  NONE = 0,
  PLAYER = 1,
  SYNC = 2,
}
export enum UserBits { 
  USER_BIT_UNSPECIFIED = 0,
  USER_BIT_ACCEPTED_TOS = 1,
  USER_BIT_ENABLE_USERSHARING = 2,
  USER_BIT_ENABLE_CRASHREPORTS = 3,
  USER_BIT_COMPLETED_TUTORIAL = 4,
  USER_BIT_CLIENT_ENABLE_USAGESHARING = 5,
}
