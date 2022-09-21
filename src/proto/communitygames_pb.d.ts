import * as jspb from 'google-protobuf'



export class ProgressionEntry extends jspb.Message {
  getProgressionmode(): string;
  setProgressionmode(value: string): ProgressionEntry;

  getProgressiblesList(): Array<Mutator>;
  setProgressiblesList(value: Array<Mutator>): ProgressionEntry;
  clearProgressiblesList(): ProgressionEntry;
  addProgressibles(value?: Mutator, index?: number): Mutator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProgressionEntry.AsObject;
  static toObject(includeInstance: boolean, msg: ProgressionEntry): ProgressionEntry.AsObject;
  static serializeBinaryToWriter(message: ProgressionEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProgressionEntry;
  static deserializeBinaryFromReader(message: ProgressionEntry, reader: jspb.BinaryReader): ProgressionEntry;
}

export namespace ProgressionEntry {
  export type AsObject = {
    progressionmode: string,
    progressiblesList: Array<Mutator.AsObject>,
  }
}

export class TranslationMetadata extends jspb.Message {
  getKind(): string;
  setKind(value: string): TranslationMetadata;

  getTranslationid(): string;
  setTranslationid(value: string): TranslationMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranslationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: TranslationMetadata): TranslationMetadata.AsObject;
  static serializeBinaryToWriter(message: TranslationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranslationMetadata;
  static deserializeBinaryFromReader(message: TranslationMetadata, reader: jspb.BinaryReader): TranslationMetadata;
}

export namespace TranslationMetadata {
  export type AsObject = {
    kind: string,
    translationid: string,
  }
}

export class ResourceLocation extends jspb.Message {
  getRef(): string;
  setRef(value: string): ResourceLocation;

  getUrl(): string;
  setUrl(value: string): ResourceLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceLocation.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceLocation): ResourceLocation.AsObject;
  static serializeBinaryToWriter(message: ResourceLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceLocation;
  static deserializeBinaryFromReader(message: ResourceLocation, reader: jspb.BinaryReader): ResourceLocation;
}

export namespace ResourceLocation {
  export type AsObject = {
    ref: string,
    url: string,
  }
}

export class Resource extends jspb.Message {
  getLocation(): ResourceLocation | undefined;
  setLocation(value?: ResourceLocation): Resource;
  hasLocation(): boolean;
  clearLocation(): Resource;

  getKind(): string;
  setKind(value: string): Resource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resource.AsObject;
  static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
  static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resource;
  static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
}

export namespace Resource {
  export type AsObject = {
    location?: ResourceLocation.AsObject,
    kind: string,
  }
}

export class Metadata extends jspb.Message {
  getTranslationsList(): Array<TranslationMetadata>;
  setTranslationsList(value: Array<TranslationMetadata>): Metadata;
  clearTranslationsList(): Metadata;
  addTranslations(value?: TranslationMetadata, index?: number): TranslationMetadata;

  getResourcesList(): Array<Resource>;
  setResourcesList(value: Array<Resource>): Metadata;
  clearResourcesList(): Metadata;
  addResources(value?: Resource, index?: number): Resource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
  static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metadata;
  static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
  export type AsObject = {
    translationsList: Array<TranslationMetadata.AsObject>,
    resourcesList: Array<Resource.AsObject>,
  }
}

export class Tag extends jspb.Message {
  getId(): string;
  setId(value: string): Tag;

  getSortorder(): number;
  setSortorder(value: number): Tag;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): Tag;
  hasMetadata(): boolean;
  clearMetadata(): Tag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tag.AsObject;
  static toObject(includeInstance: boolean, msg: Tag): Tag.AsObject;
  static serializeBinaryToWriter(message: Tag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tag;
  static deserializeBinaryFromReader(message: Tag, reader: jspb.BinaryReader): Tag;
}

export namespace Tag {
  export type AsObject = {
    id: string,
    sortorder: number,
    metadata?: Metadata.AsObject,
  }
}

export class ProgressionMode extends jspb.Message {
  getValue(): string;
  setValue(value: string): ProgressionMode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProgressionMode.AsObject;
  static toObject(includeInstance: boolean, msg: ProgressionMode): ProgressionMode.AsObject;
  static serializeBinaryToWriter(message: ProgressionMode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProgressionMode;
  static deserializeBinaryFromReader(message: ProgressionMode, reader: jspb.BinaryReader): ProgressionMode;
}

export namespace ProgressionMode {
  export type AsObject = {
    value: string,
  }
}

export class PlaygroundResponse extends jspb.Message {
  getOriginalplayground(): Playground | undefined;
  setOriginalplayground(value?: Playground): PlaygroundResponse;
  hasOriginalplayground(): boolean;
  clearOriginalplayground(): PlaygroundResponse;

  getValidatedplayground(): Playground | undefined;
  setValidatedplayground(value?: Playground): PlaygroundResponse;
  hasValidatedplayground(): boolean;
  clearValidatedplayground(): PlaygroundResponse;

  getTagList(): Array<Tag>;
  setTagList(value: Array<Tag>): PlaygroundResponse;
  clearTagList(): PlaygroundResponse;
  addTag(value?: Tag, index?: number): Tag;

  getProgressionmode(): ProgressionMode | undefined;
  setProgressionmode(value?: ProgressionMode): PlaygroundResponse;
  hasProgressionmode(): boolean;
  clearProgressionmode(): PlaygroundResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaygroundResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlaygroundResponse): PlaygroundResponse.AsObject;
  static serializeBinaryToWriter(message: PlaygroundResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaygroundResponse;
  static deserializeBinaryFromReader(message: PlaygroundResponse, reader: jspb.BinaryReader): PlaygroundResponse;
}

export namespace PlaygroundResponse {
  export type AsObject = {
    originalplayground?: Playground.AsObject,
    validatedplayground?: Playground.AsObject,
    tagList: Array<Tag.AsObject>,
    progressionmode?: ProgressionMode.AsObject,
  }
}

export class MapInfo extends jspb.Message {
  getMapname(): string;
  setMapname(value: string): MapInfo;

  getMode(): string;
  setMode(value: string): MapInfo;

  getGamesize(): number;
  setGamesize(value: number): MapInfo;

  getRounds(): number;
  setRounds(value: number): MapInfo;

  getMutators(): Mutator | undefined;
  setMutators(value?: Mutator): MapInfo;
  hasMutators(): boolean;
  clearMutators(): MapInfo;

  getLocation(): string;
  setLocation(value: string): MapInfo;

  getPreroundsize(): number;
  setPreroundsize(value: number): MapInfo;

  getWarmupsize(): number;
  setWarmupsize(value: number): MapInfo;

  getAllowedspectators(): number;
  setAllowedspectators(value: number): MapInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MapInfo): MapInfo.AsObject;
  static serializeBinaryToWriter(message: MapInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapInfo;
  static deserializeBinaryFromReader(message: MapInfo, reader: jspb.BinaryReader): MapInfo;
}

export namespace MapInfo {
  export type AsObject = {
    mapname: string,
    mode: string,
    gamesize: number,
    rounds: number,
    mutators?: Mutator.AsObject,
    location: string,
    preroundsize: number,
    warmupsize: number,
    allowedspectators: number,
  }
}

export class MapRotation extends jspb.Message {
  getMapsList(): Array<MapInfo>;
  setMapsList(value: Array<MapInfo>): MapRotation;
  clearMapsList(): MapRotation;
  addMaps(value?: MapInfo, index?: number): MapInfo;

  getRotationbehavior(): RotationBehavior;
  setRotationbehavior(value: RotationBehavior): MapRotation;

  getRoundbehavior(): RoundBehavior;
  setRoundbehavior(value: RoundBehavior): MapRotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapRotation.AsObject;
  static toObject(includeInstance: boolean, msg: MapRotation): MapRotation.AsObject;
  static serializeBinaryToWriter(message: MapRotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapRotation;
  static deserializeBinaryFromReader(message: MapRotation, reader: jspb.BinaryReader): MapRotation;
}

export namespace MapRotation {
  export type AsObject = {
    mapsList: Array<MapInfo.AsObject>,
    rotationbehavior: RotationBehavior,
    roundbehavior: RoundBehavior,
  }
}

export class TeamStructure extends jspb.Message {
  getTeamid(): number;
  setTeamid(value: number): TeamStructure;

  getCapacity(): number;
  setCapacity(value: number): TeamStructure;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamStructure.AsObject;
  static toObject(includeInstance: boolean, msg: TeamStructure): TeamStructure.AsObject;
  static serializeBinaryToWriter(message: TeamStructure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamStructure;
  static deserializeBinaryFromReader(message: TeamStructure, reader: jspb.BinaryReader): TeamStructure;
}

export namespace TeamStructure {
  export type AsObject = {
    teamid: number,
    capacity: number,
  }
}

export class InternalTeamStructure extends jspb.Message {
  getTeamid(): number;
  setTeamid(value: number): InternalTeamStructure;

  getCapacity(): number;
  setCapacity(value: number): InternalTeamStructure;

  getCapacitytype(): CapacityType;
  setCapacitytype(value: CapacityType): InternalTeamStructure;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InternalTeamStructure.AsObject;
  static toObject(includeInstance: boolean, msg: InternalTeamStructure): InternalTeamStructure.AsObject;
  static serializeBinaryToWriter(message: InternalTeamStructure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InternalTeamStructure;
  static deserializeBinaryFromReader(message: InternalTeamStructure, reader: jspb.BinaryReader): InternalTeamStructure;
}

export namespace InternalTeamStructure {
  export type AsObject = {
    teamid: number,
    capacity: number,
    capacitytype: CapacityType,
  }
}

export class MutatorSparseFloatEntry extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): MutatorSparseFloatEntry;

  getValue(): number;
  setValue(value: number): MutatorSparseFloatEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutatorSparseFloatEntry.AsObject;
  static toObject(includeInstance: boolean, msg: MutatorSparseFloatEntry): MutatorSparseFloatEntry.AsObject;
  static serializeBinaryToWriter(message: MutatorSparseFloatEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutatorSparseFloatEntry;
  static deserializeBinaryFromReader(message: MutatorSparseFloatEntry, reader: jspb.BinaryReader): MutatorSparseFloatEntry;
}

export namespace MutatorSparseFloatEntry {
  export type AsObject = {
    index: number,
    value: number,
  }
}

export class MutatorSparseFloat extends jspb.Message {
  getDefaultvalue(): number;
  setDefaultvalue(value: number): MutatorSparseFloat;

  getSize(): number;
  setSize(value: number): MutatorSparseFloat;

  getSparsevaluesList(): Array<MutatorSparseFloatEntry>;
  setSparsevaluesList(value: Array<MutatorSparseFloatEntry>): MutatorSparseFloat;
  clearSparsevaluesList(): MutatorSparseFloat;
  addSparsevalues(value?: MutatorSparseFloatEntry, index?: number): MutatorSparseFloatEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutatorSparseFloat.AsObject;
  static toObject(includeInstance: boolean, msg: MutatorSparseFloat): MutatorSparseFloat.AsObject;
  static serializeBinaryToWriter(message: MutatorSparseFloat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutatorSparseFloat;
  static deserializeBinaryFromReader(message: MutatorSparseFloat, reader: jspb.BinaryReader): MutatorSparseFloat;
}

export namespace MutatorSparseFloat {
  export type AsObject = {
    defaultvalue: number,
    size: number,
    sparsevaluesList: Array<MutatorSparseFloatEntry.AsObject>,
  }
}

export class MutatorFloat extends jspb.Message {
  getValue(): number;
  setValue(value: number): MutatorFloat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutatorFloat.AsObject;
  static toObject(includeInstance: boolean, msg: MutatorFloat): MutatorFloat.AsObject;
  static serializeBinaryToWriter(message: MutatorFloat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutatorFloat;
  static deserializeBinaryFromReader(message: MutatorFloat, reader: jspb.BinaryReader): MutatorFloat;
}

export namespace MutatorFloat {
  export type AsObject = {
    value: number,
  }
}

export class MutatorBoolean extends jspb.Message {
  getBoolvalue(): boolean;
  setBoolvalue(value: boolean): MutatorBoolean;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutatorBoolean.AsObject;
  static toObject(includeInstance: boolean, msg: MutatorBoolean): MutatorBoolean.AsObject;
  static serializeBinaryToWriter(message: MutatorBoolean, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutatorBoolean;
  static deserializeBinaryFromReader(message: MutatorBoolean, reader: jspb.BinaryReader): MutatorBoolean;
}

export namespace MutatorBoolean {
  export type AsObject = {
    boolvalue: boolean,
  }
}

export class MutatorString extends jspb.Message {
  getStringvalue(): string;
  setStringvalue(value: string): MutatorString;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutatorString.AsObject;
  static toObject(includeInstance: boolean, msg: MutatorString): MutatorString.AsObject;
  static serializeBinaryToWriter(message: MutatorString, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutatorString;
  static deserializeBinaryFromReader(message: MutatorString, reader: jspb.BinaryReader): MutatorString;
}

export namespace MutatorString {
  export type AsObject = {
    stringvalue: string,
  }
}

export class MutatorInt extends jspb.Message {
  getValue(): number;
  setValue(value: number): MutatorInt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutatorInt.AsObject;
  static toObject(includeInstance: boolean, msg: MutatorInt): MutatorInt.AsObject;
  static serializeBinaryToWriter(message: MutatorInt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutatorInt;
  static deserializeBinaryFromReader(message: MutatorInt, reader: jspb.BinaryReader): MutatorInt;
}

export namespace MutatorInt {
  export type AsObject = {
    value: number,
  }
}

export class MutatorSparseBooleanEntry extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): MutatorSparseBooleanEntry;

  getValue(): boolean;
  setValue(value: boolean): MutatorSparseBooleanEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutatorSparseBooleanEntry.AsObject;
  static toObject(includeInstance: boolean, msg: MutatorSparseBooleanEntry): MutatorSparseBooleanEntry.AsObject;
  static serializeBinaryToWriter(message: MutatorSparseBooleanEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutatorSparseBooleanEntry;
  static deserializeBinaryFromReader(message: MutatorSparseBooleanEntry, reader: jspb.BinaryReader): MutatorSparseBooleanEntry;
}

export namespace MutatorSparseBooleanEntry {
  export type AsObject = {
    index: number,
    value: boolean,
  }
}

export class MutatorSparseBoolean extends jspb.Message {
  getDefaultvalue(): boolean;
  setDefaultvalue(value: boolean): MutatorSparseBoolean;

  getSize(): number;
  setSize(value: number): MutatorSparseBoolean;

  getSparsevaluesList(): Array<MutatorSparseBooleanEntry>;
  setSparsevaluesList(value: Array<MutatorSparseBooleanEntry>): MutatorSparseBoolean;
  clearSparsevaluesList(): MutatorSparseBoolean;
  addSparsevalues(value?: MutatorSparseBooleanEntry, index?: number): MutatorSparseBooleanEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutatorSparseBoolean.AsObject;
  static toObject(includeInstance: boolean, msg: MutatorSparseBoolean): MutatorSparseBoolean.AsObject;
  static serializeBinaryToWriter(message: MutatorSparseBoolean, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutatorSparseBoolean;
  static deserializeBinaryFromReader(message: MutatorSparseBoolean, reader: jspb.BinaryReader): MutatorSparseBoolean;
}

export namespace MutatorSparseBoolean {
  export type AsObject = {
    defaultvalue: boolean,
    size: number,
    sparsevaluesList: Array<MutatorSparseBooleanEntry.AsObject>,
  }
}

export class SparseIntEntity extends jspb.Message {
  getValuesList(): Array<number>;
  setValuesList(value: Array<number>): SparseIntEntity;
  clearValuesList(): SparseIntEntity;
  addValues(value: number, index?: number): SparseIntEntity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SparseIntEntity.AsObject;
  static toObject(includeInstance: boolean, msg: SparseIntEntity): SparseIntEntity.AsObject;
  static serializeBinaryToWriter(message: SparseIntEntity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SparseIntEntity;
  static deserializeBinaryFromReader(message: SparseIntEntity, reader: jspb.BinaryReader): SparseIntEntity;
}

export namespace SparseIntEntity {
  export type AsObject = {
    valuesList: Array<number>,
  }
}

export class MutatorSparseIntEntry extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): MutatorSparseIntEntry;

  getValue(): number;
  setValue(value: number): MutatorSparseIntEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutatorSparseIntEntry.AsObject;
  static toObject(includeInstance: boolean, msg: MutatorSparseIntEntry): MutatorSparseIntEntry.AsObject;
  static serializeBinaryToWriter(message: MutatorSparseIntEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutatorSparseIntEntry;
  static deserializeBinaryFromReader(message: MutatorSparseIntEntry, reader: jspb.BinaryReader): MutatorSparseIntEntry;
}

export namespace MutatorSparseIntEntry {
  export type AsObject = {
    index: number,
    value: number,
  }
}

export class MutatorSparseInt extends jspb.Message {
  getDefaultvalue(): number;
  setDefaultvalue(value: number): MutatorSparseInt;

  getSize(): number;
  setSize(value: number): MutatorSparseInt;

  getSparsevalues(): MutatorSparseIntEntry | undefined;
  setSparsevalues(value?: MutatorSparseIntEntry): MutatorSparseInt;
  hasSparsevalues(): boolean;
  clearSparsevalues(): MutatorSparseInt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutatorSparseInt.AsObject;
  static toObject(includeInstance: boolean, msg: MutatorSparseInt): MutatorSparseInt.AsObject;
  static serializeBinaryToWriter(message: MutatorSparseInt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutatorSparseInt;
  static deserializeBinaryFromReader(message: MutatorSparseInt, reader: jspb.BinaryReader): MutatorSparseInt;
}

export namespace MutatorSparseInt {
  export type AsObject = {
    defaultvalue: number,
    size: number,
    sparsevalues?: MutatorSparseIntEntry.AsObject,
  }
}

export class MutatorKind extends jspb.Message {
  getMutatorboolean(): MutatorBoolean | undefined;
  setMutatorboolean(value?: MutatorBoolean): MutatorKind;
  hasMutatorboolean(): boolean;
  clearMutatorboolean(): MutatorKind;

  getMutatorstring(): MutatorString | undefined;
  setMutatorstring(value?: MutatorString): MutatorKind;
  hasMutatorstring(): boolean;
  clearMutatorstring(): MutatorKind;

  getMutatorfloat(): MutatorFloat | undefined;
  setMutatorfloat(value?: MutatorFloat): MutatorKind;
  hasMutatorfloat(): boolean;
  clearMutatorfloat(): MutatorKind;

  getMutatorint(): MutatorInt | undefined;
  setMutatorint(value?: MutatorInt): MutatorKind;
  hasMutatorint(): boolean;
  clearMutatorint(): MutatorKind;

  getMutatorsparseboolean(): MutatorSparseBoolean | undefined;
  setMutatorsparseboolean(value?: MutatorSparseBoolean): MutatorKind;
  hasMutatorsparseboolean(): boolean;
  clearMutatorsparseboolean(): MutatorKind;

  getMutatorsparseint(): MutatorSparseInt | undefined;
  setMutatorsparseint(value?: MutatorSparseInt): MutatorKind;
  hasMutatorsparseint(): boolean;
  clearMutatorsparseint(): MutatorKind;

  getMutatorsparsefloat(): MutatorSparseFloat | undefined;
  setMutatorsparsefloat(value?: MutatorSparseFloat): MutatorKind;
  hasMutatorsparsefloat(): boolean;
  clearMutatorsparsefloat(): MutatorKind;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutatorKind.AsObject;
  static toObject(includeInstance: boolean, msg: MutatorKind): MutatorKind.AsObject;
  static serializeBinaryToWriter(message: MutatorKind, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutatorKind;
  static deserializeBinaryFromReader(message: MutatorKind, reader: jspb.BinaryReader): MutatorKind;
}

export namespace MutatorKind {
  export type AsObject = {
    mutatorboolean?: MutatorBoolean.AsObject,
    mutatorstring?: MutatorString.AsObject,
    mutatorfloat?: MutatorFloat.AsObject,
    mutatorint?: MutatorInt.AsObject,
    mutatorsparseboolean?: MutatorSparseBoolean.AsObject,
    mutatorsparseint?: MutatorSparseInt.AsObject,
    mutatorsparsefloat?: MutatorSparseFloat.AsObject,
  }
}

export class TeamComposition extends jspb.Message {
  getTeams(): TeamStructure | undefined;
  setTeams(value?: TeamStructure): TeamComposition;
  hasTeams(): boolean;
  clearTeams(): TeamComposition;

  getInternalteamsList(): Array<InternalTeamStructure>;
  setInternalteamsList(value: Array<InternalTeamStructure>): TeamComposition;
  clearInternalteamsList(): TeamComposition;
  addInternalteams(value?: InternalTeamStructure, index?: number): InternalTeamStructure;

  getBalancingmethod(): BalancingMethod;
  setBalancingmethod(value: BalancingMethod): TeamComposition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TeamComposition.AsObject;
  static toObject(includeInstance: boolean, msg: TeamComposition): TeamComposition.AsObject;
  static serializeBinaryToWriter(message: TeamComposition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TeamComposition;
  static deserializeBinaryFromReader(message: TeamComposition, reader: jspb.BinaryReader): TeamComposition;
}

export namespace TeamComposition {
  export type AsObject = {
    teams?: TeamStructure.AsObject,
    internalteamsList: Array<InternalTeamStructure.AsObject>,
    balancingmethod: BalancingMethod,
  }
}

export class Mutator extends jspb.Message {
  getName(): string;
  setName(value: string): Mutator;

  getCategory(): string;
  setCategory(value: string): Mutator;

  getKind(): MutatorKind | undefined;
  setKind(value?: MutatorKind): Mutator;
  hasKind(): boolean;
  clearKind(): Mutator;

  getId(): string;
  setId(value: string): Mutator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Mutator.AsObject;
  static toObject(includeInstance: boolean, msg: Mutator): Mutator.AsObject;
  static serializeBinaryToWriter(message: Mutator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Mutator;
  static deserializeBinaryFromReader(message: Mutator, reader: jspb.BinaryReader): Mutator;
}

export namespace Mutator {
  export type AsObject = {
    name: string,
    category: string,
    kind?: MutatorKind.AsObject,
    id: string,
  }
}

export class Timestamp extends jspb.Message {
  getSeconds(): string;
  setSeconds(value: string): Timestamp;

  getNanos(): number;
  setNanos(value: number): Timestamp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Timestamp.AsObject;
  static toObject(includeInstance: boolean, msg: Timestamp): Timestamp.AsObject;
  static serializeBinaryToWriter(message: Timestamp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Timestamp;
  static deserializeBinaryFromReader(message: Timestamp, reader: jspb.BinaryReader): Timestamp;
}

export namespace Timestamp {
  export type AsObject = {
    seconds: string,
    nanos: number,
  }
}

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

export class GameServerMessage extends jspb.Message {
  getKind(): string;
  setKind(value: string): GameServerMessage;

  getText(): string;
  setText(value: string): GameServerMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameServerMessage.AsObject;
  static toObject(includeInstance: boolean, msg: GameServerMessage): GameServerMessage.AsObject;
  static serializeBinaryToWriter(message: GameServerMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameServerMessage;
  static deserializeBinaryFromReader(message: GameServerMessage, reader: jspb.BinaryReader): GameServerMessage;
}

export namespace GameServerMessage {
  export type AsObject = {
    kind: string,
    text: string,
  }
}

export class GameServerSettings extends jspb.Message {
  getName(): string;
  setName(value: string): GameServerSettings;

  getDescription(): StringValue | undefined;
  setDescription(value?: StringValue): GameServerSettings;
  hasDescription(): boolean;
  clearDescription(): GameServerSettings;

  getGameservermessageList(): Array<GameServerMessage>;
  setGameservermessageList(value: Array<GameServerMessage>): GameServerSettings;
  clearGameservermessageList(): GameServerSettings;
  addGameservermessage(value?: GameServerMessage, index?: number): GameServerMessage;

  getConfigname(): StringValue | undefined;
  setConfigname(value?: StringValue): GameServerSettings;
  hasConfigname(): boolean;
  clearConfigname(): GameServerSettings;

  getConfigdescription(): StringValue | undefined;
  setConfigdescription(value?: StringValue): GameServerSettings;
  hasConfigdescription(): boolean;
  clearConfigdescription(): GameServerSettings;

  getPhantomgamestate(): PhantomGameState;
  setPhantomgamestate(value: PhantomGameState): GameServerSettings;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameServerSettings.AsObject;
  static toObject(includeInstance: boolean, msg: GameServerSettings): GameServerSettings.AsObject;
  static serializeBinaryToWriter(message: GameServerSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameServerSettings;
  static deserializeBinaryFromReader(message: GameServerSettings, reader: jspb.BinaryReader): GameServerSettings;
}

export namespace GameServerSettings {
  export type AsObject = {
    name: string,
    description?: StringValue.AsObject,
    gameservermessageList: Array<GameServerMessage.AsObject>,
    configname?: StringValue.AsObject,
    configdescription?: StringValue.AsObject,
    phantomgamestate: PhantomGameState,
  }
}

export class PlayerInfo extends jspb.Message {
  getNucleusid(): string;
  setNucleusid(value: string): PlayerInfo;

  getPersonaid(): string;
  setPersonaid(value: string): PlayerInfo;

  getPlatformid(): Platform;
  setPlatformid(value: Platform): PlayerInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerInfo): PlayerInfo.AsObject;
  static serializeBinaryToWriter(message: PlayerInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerInfo;
  static deserializeBinaryFromReader(message: PlayerInfo, reader: jspb.BinaryReader): PlayerInfo;
}

export namespace PlayerInfo {
  export type AsObject = {
    nucleusid: string,
    personaid: string,
    platformid: Platform,
  }
}

export class PlatformRestrictions extends jspb.Message {
  getPlatformsList(): Array<Platform>;
  setPlatformsList(value: Array<Platform>): PlatformRestrictions;
  clearPlatformsList(): PlatformRestrictions;
  addPlatforms(value: Platform, index?: number): PlatformRestrictions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlatformRestrictions.AsObject;
  static toObject(includeInstance: boolean, msg: PlatformRestrictions): PlatformRestrictions.AsObject;
  static serializeBinaryToWriter(message: PlatformRestrictions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlatformRestrictions;
  static deserializeBinaryFromReader(message: PlatformRestrictions, reader: jspb.BinaryReader): PlatformRestrictions;
}

export namespace PlatformRestrictions {
  export type AsObject = {
    platformsList: Array<Platform>,
  }
}

export class InputMethodResrictions extends jspb.Message {
  getInputmethodsList(): Array<InputMethods>;
  setInputmethodsList(value: Array<InputMethods>): InputMethodResrictions;
  clearInputmethodsList(): InputMethodResrictions;
  addInputmethods(value: InputMethods, index?: number): InputMethodResrictions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InputMethodResrictions.AsObject;
  static toObject(includeInstance: boolean, msg: InputMethodResrictions): InputMethodResrictions.AsObject;
  static serializeBinaryToWriter(message: InputMethodResrictions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InputMethodResrictions;
  static deserializeBinaryFromReader(message: InputMethodResrictions, reader: jspb.BinaryReader): InputMethodResrictions;
}

export namespace InputMethodResrictions {
  export type AsObject = {
    inputmethodsList: Array<InputMethods>,
  }
}

export class Restrictions extends jspb.Message {
  getPlatformrestrictions(): PlatformRestrictions | undefined;
  setPlatformrestrictions(value?: PlatformRestrictions): Restrictions;
  hasPlatformrestrictions(): boolean;
  clearPlatformrestrictions(): Restrictions;

  getInputmethodresctrictions(): InputMethodResrictions | undefined;
  setInputmethodresctrictions(value?: InputMethodResrictions): Restrictions;
  hasInputmethodresctrictions(): boolean;
  clearInputmethodresctrictions(): Restrictions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Restrictions.AsObject;
  static toObject(includeInstance: boolean, msg: Restrictions): Restrictions.AsObject;
  static serializeBinaryToWriter(message: Restrictions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Restrictions;
  static deserializeBinaryFromReader(message: Restrictions, reader: jspb.BinaryReader): Restrictions;
}

export namespace Restrictions {
  export type AsObject = {
    platformrestrictions?: PlatformRestrictions.AsObject,
    inputmethodresctrictions?: InputMethodResrictions.AsObject,
  }
}

export class Compressed extends jspb.Message {
  getCompiledmodrules(): Uint8Array | string;
  getCompiledmodrules_asU8(): Uint8Array;
  getCompiledmodrules_asB64(): string;
  setCompiledmodrules(value: Uint8Array | string): Compressed;

  getRulesversion(): number;
  setRulesversion(value: number): Compressed;

  getInflatedsize(): number;
  setInflatedsize(value: number): Compressed;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Compressed.AsObject;
  static toObject(includeInstance: boolean, msg: Compressed): Compressed.AsObject;
  static serializeBinaryToWriter(message: Compressed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Compressed;
  static deserializeBinaryFromReader(message: Compressed, reader: jspb.BinaryReader): Compressed;
}

export namespace Compressed {
  export type AsObject = {
    compiledmodrules: Uint8Array | string,
    rulesversion: number,
    inflatedsize: number,
  }
}

export class Uncompressed extends jspb.Message {
  getCompiledmodrules(): Uint8Array | string;
  getCompiledmodrules_asU8(): Uint8Array;
  getCompiledmodrules_asB64(): string;
  setCompiledmodrules(value: Uint8Array | string): Uncompressed;

  getRulesversion(): number;
  setRulesversion(value: number): Uncompressed;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Uncompressed.AsObject;
  static toObject(includeInstance: boolean, msg: Uncompressed): Uncompressed.AsObject;
  static serializeBinaryToWriter(message: Uncompressed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Uncompressed;
  static deserializeBinaryFromReader(message: Uncompressed, reader: jspb.BinaryReader): Uncompressed;
}

export namespace Uncompressed {
  export type AsObject = {
    compiledmodrules: Uint8Array | string,
    rulesversion: number,
  }
}

export class CompiledRules extends jspb.Message {
  getUncompressed(): Uncompressed | undefined;
  setUncompressed(value?: Uncompressed): CompiledRules;
  hasUncompressed(): boolean;
  clearUncompressed(): CompiledRules;

  getCompressed(): Compressed | undefined;
  setCompressed(value?: Compressed): CompiledRules;
  hasCompressed(): boolean;
  clearCompressed(): CompiledRules;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompiledRules.AsObject;
  static toObject(includeInstance: boolean, msg: CompiledRules): CompiledRules.AsObject;
  static serializeBinaryToWriter(message: CompiledRules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompiledRules;
  static deserializeBinaryFromReader(message: CompiledRules, reader: jspb.BinaryReader): CompiledRules;
}

export namespace CompiledRules {
  export type AsObject = {
    uncompressed?: Uncompressed.AsObject,
    compressed?: Compressed.AsObject,
  }
}

export class CompatibleModRules extends jspb.Message {
  getRules(): Uint8Array | string;
  getRules_asU8(): Uint8Array;
  getRules_asB64(): string;
  setRules(value: Uint8Array | string): CompatibleModRules;

  getRulesversion(): number;
  setRulesversion(value: number): CompatibleModRules;

  getCompiled(): CompiledRules | undefined;
  setCompiled(value?: CompiledRules): CompatibleModRules;
  hasCompiled(): boolean;
  clearCompiled(): CompatibleModRules;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompatibleModRules.AsObject;
  static toObject(includeInstance: boolean, msg: CompatibleModRules): CompatibleModRules.AsObject;
  static serializeBinaryToWriter(message: CompatibleModRules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompatibleModRules;
  static deserializeBinaryFromReader(message: CompatibleModRules, reader: jspb.BinaryReader): CompatibleModRules;
}

export namespace CompatibleModRules {
  export type AsObject = {
    rules: Uint8Array | string,
    rulesversion: number,
    compiled?: CompiledRules.AsObject,
  }
}

export class InCompatibleModRules extends jspb.Message {
  getRules(): Uint8Array | string;
  getRules_asU8(): Uint8Array;
  getRules_asB64(): string;
  setRules(value: Uint8Array | string): InCompatibleModRules;

  getRulesversion(): number;
  setRulesversion(value: number): InCompatibleModRules;

  getBlueprintrulesversion(): number;
  setBlueprintrulesversion(value: number): InCompatibleModRules;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InCompatibleModRules.AsObject;
  static toObject(includeInstance: boolean, msg: InCompatibleModRules): InCompatibleModRules.AsObject;
  static serializeBinaryToWriter(message: InCompatibleModRules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InCompatibleModRules;
  static deserializeBinaryFromReader(message: InCompatibleModRules, reader: jspb.BinaryReader): InCompatibleModRules;
}

export namespace InCompatibleModRules {
  export type AsObject = {
    rules: Uint8Array | string,
    rulesversion: number,
    blueprintrulesversion: number,
  }
}

export class OriginalModRules extends jspb.Message {
  getCompatiblerules(): CompatibleModRules | undefined;
  setCompatiblerules(value?: CompatibleModRules): OriginalModRules;
  hasCompatiblerules(): boolean;
  clearCompatiblerules(): OriginalModRules;

  getIncompatiblerules(): InCompatibleModRules | undefined;
  setIncompatiblerules(value?: InCompatibleModRules): OriginalModRules;
  hasIncompatiblerules(): boolean;
  clearIncompatiblerules(): OriginalModRules;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OriginalModRules.AsObject;
  static toObject(includeInstance: boolean, msg: OriginalModRules): OriginalModRules.AsObject;
  static serializeBinaryToWriter(message: OriginalModRules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OriginalModRules;
  static deserializeBinaryFromReader(message: OriginalModRules, reader: jspb.BinaryReader): OriginalModRules;
}

export namespace OriginalModRules {
  export type AsObject = {
    compatiblerules?: CompatibleModRules.AsObject,
    incompatiblerules?: InCompatibleModRules.AsObject,
  }
}

export class AssetCategoryTagBooleanOverride extends jspb.Message {
  getAssetcategorytagsList(): Array<string>;
  setAssetcategorytagsList(value: Array<string>): AssetCategoryTagBooleanOverride;
  clearAssetcategorytagsList(): AssetCategoryTagBooleanOverride;
  addAssetcategorytags(value: string, index?: number): AssetCategoryTagBooleanOverride;

  getValue(): boolean;
  setValue(value: boolean): AssetCategoryTagBooleanOverride;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetCategoryTagBooleanOverride.AsObject;
  static toObject(includeInstance: boolean, msg: AssetCategoryTagBooleanOverride): AssetCategoryTagBooleanOverride.AsObject;
  static serializeBinaryToWriter(message: AssetCategoryTagBooleanOverride, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetCategoryTagBooleanOverride;
  static deserializeBinaryFromReader(message: AssetCategoryTagBooleanOverride, reader: jspb.BinaryReader): AssetCategoryTagBooleanOverride;
}

export namespace AssetCategoryTagBooleanOverride {
  export type AsObject = {
    assetcategorytagsList: Array<string>,
    value: boolean,
  }
}

export class AssetCategoryTagBooleanTeamOverride extends jspb.Message {
  getAssetcategorytagsList(): Array<string>;
  setAssetcategorytagsList(value: Array<string>): AssetCategoryTagBooleanTeamOverride;
  clearAssetcategorytagsList(): AssetCategoryTagBooleanTeamOverride;
  addAssetcategorytags(value: string, index?: number): AssetCategoryTagBooleanTeamOverride;

  getValue(): boolean;
  setValue(value: boolean): AssetCategoryTagBooleanTeamOverride;

  getTeamid(): number;
  setTeamid(value: number): AssetCategoryTagBooleanTeamOverride;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetCategoryTagBooleanTeamOverride.AsObject;
  static toObject(includeInstance: boolean, msg: AssetCategoryTagBooleanTeamOverride): AssetCategoryTagBooleanTeamOverride.AsObject;
  static serializeBinaryToWriter(message: AssetCategoryTagBooleanTeamOverride, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetCategoryTagBooleanTeamOverride;
  static deserializeBinaryFromReader(message: AssetCategoryTagBooleanTeamOverride, reader: jspb.BinaryReader): AssetCategoryTagBooleanTeamOverride;
}

export namespace AssetCategoryTagBooleanTeamOverride {
  export type AsObject = {
    assetcategorytagsList: Array<string>,
    value: boolean,
    teamid: number,
  }
}

export class AssetCategoryBoolean extends jspb.Message {
  getDefaultvalue(): boolean;
  setDefaultvalue(value: boolean): AssetCategoryBoolean;

  getOverrides(): AssetCategoryTagBooleanOverride | undefined;
  setOverrides(value?: AssetCategoryTagBooleanOverride): AssetCategoryBoolean;
  hasOverrides(): boolean;
  clearOverrides(): AssetCategoryBoolean;

  getTeamoverridesList(): Array<AssetCategoryTagBooleanTeamOverride>;
  setTeamoverridesList(value: Array<AssetCategoryTagBooleanTeamOverride>): AssetCategoryBoolean;
  clearTeamoverridesList(): AssetCategoryBoolean;
  addTeamoverrides(value?: AssetCategoryTagBooleanTeamOverride, index?: number): AssetCategoryTagBooleanTeamOverride;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetCategoryBoolean.AsObject;
  static toObject(includeInstance: boolean, msg: AssetCategoryBoolean): AssetCategoryBoolean.AsObject;
  static serializeBinaryToWriter(message: AssetCategoryBoolean, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetCategoryBoolean;
  static deserializeBinaryFromReader(message: AssetCategoryBoolean, reader: jspb.BinaryReader): AssetCategoryBoolean;
}

export namespace AssetCategoryBoolean {
  export type AsObject = {
    defaultvalue: boolean,
    overrides?: AssetCategoryTagBooleanOverride.AsObject,
    teamoverridesList: Array<AssetCategoryTagBooleanTeamOverride.AsObject>,
  }
}

export class AssetCategory extends jspb.Message {
  getTagid(): string;
  setTagid(value: string): AssetCategory;

  getBoolean(): AssetCategoryBoolean | undefined;
  setBoolean(value?: AssetCategoryBoolean): AssetCategory;
  hasBoolean(): boolean;
  clearBoolean(): AssetCategory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetCategory.AsObject;
  static toObject(includeInstance: boolean, msg: AssetCategory): AssetCategory.AsObject;
  static serializeBinaryToWriter(message: AssetCategory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetCategory;
  static deserializeBinaryFromReader(message: AssetCategory, reader: jspb.BinaryReader): AssetCategory;
}

export namespace AssetCategory {
  export type AsObject = {
    tagid: string,
    pb_boolean?: AssetCategoryBoolean.AsObject,
  }
}

export class Playground extends jspb.Message {
  getPlaygroundid(): string;
  setPlaygroundid(value: string): Playground;

  getBlueprinttype(): string;
  setBlueprinttype(value: string): Playground;

  getName(): string;
  setName(value: string): Playground;

  getDescription(): string;
  setDescription(value: string): Playground;

  getMutatorsList(): Array<Mutator>;
  setMutatorsList(value: Array<Mutator>): Playground;
  clearMutatorsList(): Playground;
  addMutators(value?: Mutator, index?: number): Mutator;

  getMaprotation(): MapRotation | undefined;
  setMaprotation(value?: MapRotation): Playground;
  hasMaprotation(): boolean;
  clearMaprotation(): Playground;

  getState(): State;
  setState(value: State): Playground;

  getChecksum(): string;
  setChecksum(value: string): Playground;

  getSecret(): string;
  setSecret(value: string): Playground;

  getCreatedat(): Timestamp | undefined;
  setCreatedat(value?: Timestamp): Playground;
  hasCreatedat(): boolean;
  clearCreatedat(): Playground;

  getUpdatedat(): Timestamp | undefined;
  setUpdatedat(value?: Timestamp): Playground;
  hasUpdatedat(): boolean;
  clearUpdatedat(): Playground;

  getServersettings(): GameServerSettings | undefined;
  setServersettings(value?: GameServerSettings): Playground;
  hasServersettings(): boolean;
  clearServersettings(): Playground;

  getOwner(): PlayerInfo | undefined;
  setOwner(value?: PlayerInfo): Playground;
  hasOwner(): boolean;
  clearOwner(): Playground;

  getRestrictions(): Restrictions | undefined;
  setRestrictions(value?: Restrictions): Playground;
  hasRestrictions(): boolean;
  clearRestrictions(): Playground;

  getModrules(): OriginalModRules | undefined;
  setModrules(value?: OriginalModRules): Playground;
  hasModrules(): boolean;
  clearModrules(): Playground;

  getAssetcategoriesList(): Array<AssetCategory>;
  setAssetcategoriesList(value: Array<AssetCategory>): Playground;
  clearAssetcategoriesList(): Playground;
  addAssetcategories(value?: AssetCategory, index?: number): AssetCategory;

  getTeamcomposition(): TeamComposition | undefined;
  setTeamcomposition(value?: TeamComposition): Playground;
  hasTeamcomposition(): boolean;
  clearTeamcomposition(): Playground;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Playground.AsObject;
  static toObject(includeInstance: boolean, msg: Playground): Playground.AsObject;
  static serializeBinaryToWriter(message: Playground, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Playground;
  static deserializeBinaryFromReader(message: Playground, reader: jspb.BinaryReader): Playground;
}

export namespace Playground {
  export type AsObject = {
    playgroundid: string,
    blueprinttype: string,
    name: string,
    description: string,
    mutatorsList: Array<Mutator.AsObject>,
    maprotation?: MapRotation.AsObject,
    state: State,
    checksum: string,
    secret: string,
    createdat?: Timestamp.AsObject,
    updatedat?: Timestamp.AsObject,
    serversettings?: GameServerSettings.AsObject,
    owner?: PlayerInfo.AsObject,
    restrictions?: Restrictions.AsObject,
    modrules?: OriginalModRules.AsObject,
    assetcategoriesList: Array<AssetCategory.AsObject>,
    teamcomposition?: TeamComposition.AsObject,
  }
}

export class ListPlaygroundsByOwnerRequest extends jspb.Message {
  getBlueprinttype(): string;
  setBlueprinttype(value: string): ListPlaygroundsByOwnerRequest;

  getProtocolversion(): string;
  setProtocolversion(value: string): ListPlaygroundsByOwnerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPlaygroundsByOwnerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPlaygroundsByOwnerRequest): ListPlaygroundsByOwnerRequest.AsObject;
  static serializeBinaryToWriter(message: ListPlaygroundsByOwnerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPlaygroundsByOwnerRequest;
  static deserializeBinaryFromReader(message: ListPlaygroundsByOwnerRequest, reader: jspb.BinaryReader): ListPlaygroundsByOwnerRequest;
}

export namespace ListPlaygroundsByOwnerRequest {
  export type AsObject = {
    blueprinttype: string,
    protocolversion: string,
  }
}

export class GetConstraintsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConstraintsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConstraintsRequest): GetConstraintsRequest.AsObject;
  static serializeBinaryToWriter(message: GetConstraintsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConstraintsRequest;
  static deserializeBinaryFromReader(message: GetConstraintsRequest, reader: jspb.BinaryReader): GetConstraintsRequest;
}

export namespace GetConstraintsRequest {
  export type AsObject = {
  }
}

export class GetBlueprintsByIdRequest extends jspb.Message {
  getBlueprintidsList(): Array<string>;
  setBlueprintidsList(value: Array<string>): GetBlueprintsByIdRequest;
  clearBlueprintidsList(): GetBlueprintsByIdRequest;
  addBlueprintids(value: string, index?: number): GetBlueprintsByIdRequest;

  getIncludefieldsList(): Array<IncludeFields>;
  setIncludefieldsList(value: Array<IncludeFields>): GetBlueprintsByIdRequest;
  clearIncludefieldsList(): GetBlueprintsByIdRequest;
  addIncludefields(value: IncludeFields, index?: number): GetBlueprintsByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlueprintsByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlueprintsByIdRequest): GetBlueprintsByIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetBlueprintsByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlueprintsByIdRequest;
  static deserializeBinaryFromReader(message: GetBlueprintsByIdRequest, reader: jspb.BinaryReader): GetBlueprintsByIdRequest;
}

export namespace GetBlueprintsByIdRequest {
  export type AsObject = {
    blueprintidsList: Array<string>,
    includefieldsList: Array<IncludeFields>,
  }
}

export class GlobalConstraints extends jspb.Message {
  getMaxplaygroundsperplayer(): number;
  setMaxplaygroundsperplayer(value: number): GlobalConstraints;

  getMaxgameserversperplayer(): number;
  setMaxgameserversperplayer(value: number): GlobalConstraints;

  getMaxfollowedhostslistsize(): number;
  setMaxfollowedhostslistsize(value: number): GlobalConstraints;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GlobalConstraints.AsObject;
  static toObject(includeInstance: boolean, msg: GlobalConstraints): GlobalConstraints.AsObject;
  static serializeBinaryToWriter(message: GlobalConstraints, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GlobalConstraints;
  static deserializeBinaryFromReader(message: GlobalConstraints, reader: jspb.BinaryReader): GlobalConstraints;
}

export namespace GlobalConstraints {
  export type AsObject = {
    maxplaygroundsperplayer: number,
    maxgameserversperplayer: number,
    maxfollowedhostslistsize: number,
  }
}

export class IntRange extends jspb.Message {
  getMinvalue(): number;
  setMinvalue(value: number): IntRange;

  getMaxvalue(): number;
  setMaxvalue(value: number): IntRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntRange.AsObject;
  static toObject(includeInstance: boolean, msg: IntRange): IntRange.AsObject;
  static serializeBinaryToWriter(message: IntRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntRange;
  static deserializeBinaryFromReader(message: IntRange, reader: jspb.BinaryReader): IntRange;
}

export namespace IntRange {
  export type AsObject = {
    minvalue: number,
    maxvalue: number,
  }
}

export class AvailableIntValues extends jspb.Message {
  getRange(): IntRange | undefined;
  setRange(value?: IntRange): AvailableIntValues;
  hasRange(): boolean;
  clearRange(): AvailableIntValues;

  getSparsevalues(): SparseIntEntity | undefined;
  setSparsevalues(value?: SparseIntEntity): AvailableIntValues;
  hasSparsevalues(): boolean;
  clearSparsevalues(): AvailableIntValues;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableIntValues.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableIntValues): AvailableIntValues.AsObject;
  static serializeBinaryToWriter(message: AvailableIntValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableIntValues;
  static deserializeBinaryFromReader(message: AvailableIntValues, reader: jspb.BinaryReader): AvailableIntValues;
}

export namespace AvailableIntValues {
  export type AsObject = {
    range?: IntRange.AsObject,
    sparsevalues?: SparseIntEntity.AsObject,
  }
}

export class AvailableIntValue extends jspb.Message {
  getDefaultvalue(): number;
  setDefaultvalue(value: number): AvailableIntValue;

  getAvailablevalues(): AvailableIntValues | undefined;
  setAvailablevalues(value?: AvailableIntValues): AvailableIntValue;
  hasAvailablevalues(): boolean;
  clearAvailablevalues(): AvailableIntValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableIntValue.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableIntValue): AvailableIntValue.AsObject;
  static serializeBinaryToWriter(message: AvailableIntValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableIntValue;
  static deserializeBinaryFromReader(message: AvailableIntValue, reader: jspb.BinaryReader): AvailableIntValue;
}

export namespace AvailableIntValue {
  export type AsObject = {
    defaultvalue: number,
    availablevalues?: AvailableIntValues.AsObject,
  }
}

export class AvailableMutator extends jspb.Message {
  getName(): string;
  setName(value: string): AvailableMutator;

  getCategory(): string;
  setCategory(value: string): AvailableMutator;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): AvailableMutator;
  hasMetadata(): boolean;
  clearMetadata(): AvailableMutator;

  getId(): string;
  setId(value: string): AvailableMutator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableMutator.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableMutator): AvailableMutator.AsObject;
  static serializeBinaryToWriter(message: AvailableMutator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableMutator;
  static deserializeBinaryFromReader(message: AvailableMutator, reader: jspb.BinaryReader): AvailableMutator;
}

export namespace AvailableMutator {
  export type AsObject = {
    name: string,
    category: string,
    metadata?: Metadata.AsObject,
    id: string,
  }
}

export class AvailableMapEntry extends jspb.Message {
  getLevelname(): string;
  setLevelname(value: string): AvailableMapEntry;

  getGamemode(): string;
  setGamemode(value: string): AvailableMapEntry;

  getLevellocation(): string;
  setLevellocation(value: string): AvailableMapEntry;

  getGamesize(): AvailableIntValue | undefined;
  setGamesize(value?: AvailableIntValue): AvailableMapEntry;
  hasGamesize(): boolean;
  clearGamesize(): AvailableMapEntry;

  getRounds(): AvailableIntValue | undefined;
  setRounds(value?: AvailableIntValue): AvailableMapEntry;
  hasRounds(): boolean;
  clearRounds(): AvailableMapEntry;

  getPreroundsize(): AvailableIntValue | undefined;
  setPreroundsize(value?: AvailableIntValue): AvailableMapEntry;
  hasPreroundsize(): boolean;
  clearPreroundsize(): AvailableMapEntry;

  getWarmupsize(): AvailableIntValue | undefined;
  setWarmupsize(value?: AvailableIntValue): AvailableMapEntry;
  hasWarmupsize(): boolean;
  clearWarmupsize(): AvailableMapEntry;

  getAllowedspectators(): AvailableIntValue | undefined;
  setAllowedspectators(value?: AvailableIntValue): AvailableMapEntry;
  hasAllowedspectators(): boolean;
  clearAllowedspectators(): AvailableMapEntry;

  getMutatorsList(): Array<AvailableMutator>;
  setMutatorsList(value: Array<AvailableMutator>): AvailableMapEntry;
  clearMutatorsList(): AvailableMapEntry;
  addMutators(value?: AvailableMutator, index?: number): AvailableMutator;

  getMetadataList(): Array<Metadata>;
  setMetadataList(value: Array<Metadata>): AvailableMapEntry;
  clearMetadataList(): AvailableMapEntry;
  addMetadata(value?: Metadata, index?: number): Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableMapEntry.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableMapEntry): AvailableMapEntry.AsObject;
  static serializeBinaryToWriter(message: AvailableMapEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableMapEntry;
  static deserializeBinaryFromReader(message: AvailableMapEntry, reader: jspb.BinaryReader): AvailableMapEntry;
}

export namespace AvailableMapEntry {
  export type AsObject = {
    levelname: string,
    gamemode: string,
    levellocation: string,
    gamesize?: AvailableIntValue.AsObject,
    rounds?: AvailableIntValue.AsObject,
    preroundsize?: AvailableIntValue.AsObject,
    warmupsize?: AvailableIntValue.AsObject,
    allowedspectators?: AvailableIntValue.AsObject,
    mutatorsList: Array<AvailableMutator.AsObject>,
    metadataList: Array<Metadata.AsObject>,
  }
}

export class AvailableTag extends jspb.Message {
  getId(): string;
  setId(value: string): AvailableTag;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): AvailableTag;
  hasMetadata(): boolean;
  clearMetadata(): AvailableTag;

  getCategory(): Category;
  setCategory(value: Category): AvailableTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableTag.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableTag): AvailableTag.AsObject;
  static serializeBinaryToWriter(message: AvailableTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableTag;
  static deserializeBinaryFromReader(message: AvailableTag, reader: jspb.BinaryReader): AvailableTag;
}

export namespace AvailableTag {
  export type AsObject = {
    id: string,
    metadata?: Metadata.AsObject,
    category: Category,
  }
}

export class AvailableAssetCategoryTag extends jspb.Message {
  getTagid(): string;
  setTagid(value: string): AvailableAssetCategoryTag;

  getName(): string;
  setName(value: string): AvailableAssetCategoryTag;

  getChildrentagsList(): Array<string>;
  setChildrentagsList(value: Array<string>): AvailableAssetCategoryTag;
  clearChildrentagsList(): AvailableAssetCategoryTag;
  addChildrentags(value: string, index?: number): AvailableAssetCategoryTag;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): AvailableAssetCategoryTag;
  hasMetadata(): boolean;
  clearMetadata(): AvailableAssetCategoryTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableAssetCategoryTag.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableAssetCategoryTag): AvailableAssetCategoryTag.AsObject;
  static serializeBinaryToWriter(message: AvailableAssetCategoryTag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableAssetCategoryTag;
  static deserializeBinaryFromReader(message: AvailableAssetCategoryTag, reader: jspb.BinaryReader): AvailableAssetCategoryTag;
}

export namespace AvailableAssetCategoryTag {
  export type AsObject = {
    tagid: string,
    name: string,
    childrentagsList: Array<string>,
    metadata?: Metadata.AsObject,
  }
}

export class AvailableAssetCategories extends jspb.Message {
  getRoottagsList(): Array<AvailableAssetCategoryTag>;
  setRoottagsList(value: Array<AvailableAssetCategoryTag>): AvailableAssetCategories;
  clearRoottagsList(): AvailableAssetCategories;
  addRoottags(value?: AvailableAssetCategoryTag, index?: number): AvailableAssetCategoryTag;

  getTagsList(): Array<AvailableAssetCategoryTag>;
  setTagsList(value: Array<AvailableAssetCategoryTag>): AvailableAssetCategories;
  clearTagsList(): AvailableAssetCategories;
  addTags(value?: AvailableAssetCategoryTag, index?: number): AvailableAssetCategoryTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableAssetCategories.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableAssetCategories): AvailableAssetCategories.AsObject;
  static serializeBinaryToWriter(message: AvailableAssetCategories, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableAssetCategories;
  static deserializeBinaryFromReader(message: AvailableAssetCategories, reader: jspb.BinaryReader): AvailableAssetCategories;
}

export namespace AvailableAssetCategories {
  export type AsObject = {
    roottagsList: Array<AvailableAssetCategoryTag.AsObject>,
    tagsList: Array<AvailableAssetCategoryTag.AsObject>,
  }
}

export class PlaygroundConstraints extends jspb.Message {
  getMaxnamesize(): number;
  setMaxnamesize(value: number): PlaygroundConstraints;

  getMaxdescriptionsize(): number;
  setMaxdescriptionsize(value: number): PlaygroundConstraints;

  getMaxsecretsize(): number;
  setMaxsecretsize(value: number): PlaygroundConstraints;

  getMaxmapsinrotation(): number;
  setMaxmapsinrotation(value: number): PlaygroundConstraints;

  getMaxmutators(): number;
  setMaxmutators(value: number): PlaygroundConstraints;

  getMaxconfignamesize(): number;
  setMaxconfignamesize(value: number): PlaygroundConstraints;

  getMaxconfigdescriptionsize(): number;
  setMaxconfigdescriptionsize(value: number): PlaygroundConstraints;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaygroundConstraints.AsObject;
  static toObject(includeInstance: boolean, msg: PlaygroundConstraints): PlaygroundConstraints.AsObject;
  static serializeBinaryToWriter(message: PlaygroundConstraints, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaygroundConstraints;
  static deserializeBinaryFromReader(message: PlaygroundConstraints, reader: jspb.BinaryReader): PlaygroundConstraints;
}

export namespace PlaygroundConstraints {
  export type AsObject = {
    maxnamesize: number,
    maxdescriptionsize: number,
    maxsecretsize: number,
    maxmapsinrotation: number,
    maxmutators: number,
    maxconfignamesize: number,
    maxconfigdescriptionsize: number,
  }
}

export class ModRulesDefinition extends jspb.Message {
  getRulesversion(): number;
  setRulesversion(value: number): ModRulesDefinition;

  getModbuilder(): Uint8Array | string;
  getModbuilder_asU8(): Uint8Array;
  getModbuilder_asB64(): string;
  setModbuilder(value: Uint8Array | string): ModRulesDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModRulesDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: ModRulesDefinition): ModRulesDefinition.AsObject;
  static serializeBinaryToWriter(message: ModRulesDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModRulesDefinition;
  static deserializeBinaryFromReader(message: ModRulesDefinition, reader: jspb.BinaryReader): ModRulesDefinition;
}

export namespace ModRulesDefinition {
  export type AsObject = {
    rulesversion: number,
    modbuilder: Uint8Array | string,
  }
}

export class AvailableGameData extends jspb.Message {
  getMutatorsList(): Array<AvailableMutator>;
  setMutatorsList(value: Array<AvailableMutator>): AvailableGameData;
  clearMutatorsList(): AvailableGameData;
  addMutators(value?: AvailableMutator, index?: number): AvailableMutator;

  getMapsList(): Array<AvailableMapEntry>;
  setMapsList(value: Array<AvailableMapEntry>): AvailableGameData;
  clearMapsList(): AvailableGameData;
  addMaps(value?: AvailableMapEntry, index?: number): AvailableMapEntry;

  getModrules(): ModRulesDefinition | undefined;
  setModrules(value?: ModRulesDefinition): AvailableGameData;
  hasModrules(): boolean;
  clearModrules(): AvailableGameData;

  getAssetcategories(): AvailableAssetCategories | undefined;
  setAssetcategories(value?: AvailableAssetCategories): AvailableGameData;
  hasAssetcategories(): boolean;
  clearAssetcategories(): AvailableGameData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableGameData.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableGameData): AvailableGameData.AsObject;
  static serializeBinaryToWriter(message: AvailableGameData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableGameData;
  static deserializeBinaryFromReader(message: AvailableGameData, reader: jspb.BinaryReader): AvailableGameData;
}

export namespace AvailableGameData {
  export type AsObject = {
    mutatorsList: Array<AvailableMutator.AsObject>,
    mapsList: Array<AvailableMapEntry.AsObject>,
    modrules?: ModRulesDefinition.AsObject,
    assetcategories?: AvailableAssetCategories.AsObject,
  }
}

export class Blueprint extends jspb.Message {
  getBlueprinttype(): string;
  setBlueprinttype(value: string): Blueprint;

  getName(): string;
  setName(value: string): Blueprint;

  getAvailablegamedata(): AvailableGameData | undefined;
  setAvailablegamedata(value?: AvailableGameData): Blueprint;
  hasAvailablegamedata(): boolean;
  clearAvailablegamedata(): Blueprint;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): Blueprint;
  hasMetadata(): boolean;
  clearMetadata(): Blueprint;

  getCustomdata(): Uint8Array | string;
  getCustomdata_asU8(): Uint8Array;
  getCustomdata_asB64(): string;
  setCustomdata(value: Uint8Array | string): Blueprint;

  getPlaygroundconstraints(): PlaygroundConstraints | undefined;
  setPlaygroundconstraints(value?: PlaygroundConstraints): Blueprint;
  hasPlaygroundconstraints(): boolean;
  clearPlaygroundconstraints(): Blueprint;

  getAvailabletagsList(): Array<AvailableTag>;
  setAvailabletagsList(value: Array<AvailableTag>): Blueprint;
  clearAvailabletagsList(): Blueprint;
  addAvailabletags(value?: AvailableTag, index?: number): AvailableTag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Blueprint.AsObject;
  static toObject(includeInstance: boolean, msg: Blueprint): Blueprint.AsObject;
  static serializeBinaryToWriter(message: Blueprint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Blueprint;
  static deserializeBinaryFromReader(message: Blueprint, reader: jspb.BinaryReader): Blueprint;
}

export namespace Blueprint {
  export type AsObject = {
    blueprinttype: string,
    name: string,
    availablegamedata?: AvailableGameData.AsObject,
    metadata?: Metadata.AsObject,
    customdata: Uint8Array | string,
    playgroundconstraints?: PlaygroundConstraints.AsObject,
    availabletagsList: Array<AvailableTag.AsObject>,
  }
}

export class ShortCode extends jspb.Message {
  getCode(): string;
  setCode(value: string): ShortCode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShortCode.AsObject;
  static toObject(includeInstance: boolean, msg: ShortCode): ShortCode.AsObject;
  static serializeBinaryToWriter(message: ShortCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShortCode;
  static deserializeBinaryFromReader(message: ShortCode, reader: jspb.BinaryReader): ShortCode;
}

export namespace ShortCode {
  export type AsObject = {
    code: string,
  }
}

export class GetProgressionTypesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProgressionTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProgressionTypesRequest): GetProgressionTypesRequest.AsObject;
  static serializeBinaryToWriter(message: GetProgressionTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProgressionTypesRequest;
  static deserializeBinaryFromReader(message: GetProgressionTypesRequest, reader: jspb.BinaryReader): GetProgressionTypesRequest;
}

export namespace GetProgressionTypesRequest {
  export type AsObject = {
  }
}

export class BlueprintInfo extends jspb.Message {
  getBlueprinttype(): string;
  setBlueprinttype(value: string): BlueprintInfo;

  getBlueprintid(): string;
  setBlueprintid(value: string): BlueprintInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlueprintInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BlueprintInfo): BlueprintInfo.AsObject;
  static serializeBinaryToWriter(message: BlueprintInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlueprintInfo;
  static deserializeBinaryFromReader(message: BlueprintInfo, reader: jspb.BinaryReader): BlueprintInfo;
}

export namespace BlueprintInfo {
  export type AsObject = {
    blueprinttype: string,
    blueprintid: string,
  }
}

export class GetProgressionTypesResponse extends jspb.Message {
  getEntriesList(): Array<ProgressionEntry>;
  setEntriesList(value: Array<ProgressionEntry>): GetProgressionTypesResponse;
  clearEntriesList(): GetProgressionTypesResponse;
  addEntries(value?: ProgressionEntry, index?: number): ProgressionEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProgressionTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetProgressionTypesResponse): GetProgressionTypesResponse.AsObject;
  static serializeBinaryToWriter(message: GetProgressionTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProgressionTypesResponse;
  static deserializeBinaryFromReader(message: GetProgressionTypesResponse, reader: jspb.BinaryReader): GetProgressionTypesResponse;
}

export namespace GetProgressionTypesResponse {
  export type AsObject = {
    entriesList: Array<ProgressionEntry.AsObject>,
  }
}

export class GetScheduledBlueprintsRequest extends jspb.Message {
  getProtocolversion(): string;
  setProtocolversion(value: string): GetScheduledBlueprintsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScheduledBlueprintsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetScheduledBlueprintsRequest): GetScheduledBlueprintsRequest.AsObject;
  static serializeBinaryToWriter(message: GetScheduledBlueprintsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScheduledBlueprintsRequest;
  static deserializeBinaryFromReader(message: GetScheduledBlueprintsRequest, reader: jspb.BinaryReader): GetScheduledBlueprintsRequest;
}

export namespace GetScheduledBlueprintsRequest {
  export type AsObject = {
    protocolversion: string,
  }
}

export class GetScheduledBlueprintsResponse extends jspb.Message {
  getBlueprints(): BlueprintInfo | undefined;
  setBlueprints(value?: BlueprintInfo): GetScheduledBlueprintsResponse;
  hasBlueprints(): boolean;
  clearBlueprints(): GetScheduledBlueprintsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScheduledBlueprintsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetScheduledBlueprintsResponse): GetScheduledBlueprintsResponse.AsObject;
  static serializeBinaryToWriter(message: GetScheduledBlueprintsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScheduledBlueprintsResponse;
  static deserializeBinaryFromReader(message: GetScheduledBlueprintsResponse, reader: jspb.BinaryReader): GetScheduledBlueprintsResponse;
}

export namespace GetScheduledBlueprintsResponse {
  export type AsObject = {
    blueprints?: BlueprintInfo.AsObject,
  }
}

export class GetBlueprintsByIdResponse extends jspb.Message {
  getBlueprintList(): Array<Blueprint>;
  setBlueprintList(value: Array<Blueprint>): GetBlueprintsByIdResponse;
  clearBlueprintList(): GetBlueprintsByIdResponse;
  addBlueprint(value?: Blueprint, index?: number): Blueprint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlueprintsByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlueprintsByIdResponse): GetBlueprintsByIdResponse.AsObject;
  static serializeBinaryToWriter(message: GetBlueprintsByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlueprintsByIdResponse;
  static deserializeBinaryFromReader(message: GetBlueprintsByIdResponse, reader: jspb.BinaryReader): GetBlueprintsByIdResponse;
}

export namespace GetBlueprintsByIdResponse {
  export type AsObject = {
    blueprintList: Array<Blueprint.AsObject>,
  }
}

export class GetConstraintsResponse extends jspb.Message {
  getGlobalconstraints(): GlobalConstraints | undefined;
  setGlobalconstraints(value?: GlobalConstraints): GetConstraintsResponse;
  hasGlobalconstraints(): boolean;
  clearGlobalconstraints(): GetConstraintsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConstraintsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetConstraintsResponse): GetConstraintsResponse.AsObject;
  static serializeBinaryToWriter(message: GetConstraintsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConstraintsResponse;
  static deserializeBinaryFromReader(message: GetConstraintsResponse, reader: jspb.BinaryReader): GetConstraintsResponse;
}

export namespace GetConstraintsResponse {
  export type AsObject = {
    globalconstraints?: GlobalConstraints.AsObject,
  }
}

export class ListPlaygroundsByOwnerResponse extends jspb.Message {
  getPlaygroundresponsesList(): Array<PlaygroundResponse>;
  setPlaygroundresponsesList(value: Array<PlaygroundResponse>): ListPlaygroundsByOwnerResponse;
  clearPlaygroundresponsesList(): ListPlaygroundsByOwnerResponse;
  addPlaygroundresponses(value?: PlaygroundResponse, index?: number): PlaygroundResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPlaygroundsByOwnerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPlaygroundsByOwnerResponse): ListPlaygroundsByOwnerResponse.AsObject;
  static serializeBinaryToWriter(message: ListPlaygroundsByOwnerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPlaygroundsByOwnerResponse;
  static deserializeBinaryFromReader(message: ListPlaygroundsByOwnerResponse, reader: jspb.BinaryReader): ListPlaygroundsByOwnerResponse;
}

export namespace ListPlaygroundsByOwnerResponse {
  export type AsObject = {
    playgroundresponsesList: Array<PlaygroundResponse.AsObject>,
  }
}

export class CreatePlaygroundRequest extends jspb.Message {
  getBlueprinttype(): string;
  setBlueprinttype(value: string): CreatePlaygroundRequest;

  getName(): string;
  setName(value: string): CreatePlaygroundRequest;

  getDescription(): StringValue | undefined;
  setDescription(value?: StringValue): CreatePlaygroundRequest;
  hasDescription(): boolean;
  clearDescription(): CreatePlaygroundRequest;

  getMutatorsList(): Array<Mutator>;
  setMutatorsList(value: Array<Mutator>): CreatePlaygroundRequest;
  clearMutatorsList(): CreatePlaygroundRequest;
  addMutators(value?: Mutator, index?: number): Mutator;

  getMaprotation(): MapRotation | undefined;
  setMaprotation(value?: MapRotation): CreatePlaygroundRequest;
  hasMaprotation(): boolean;
  clearMaprotation(): CreatePlaygroundRequest;

  getSecret(): StringValue | undefined;
  setSecret(value?: StringValue): CreatePlaygroundRequest;
  hasSecret(): boolean;
  clearSecret(): CreatePlaygroundRequest;

  getServersettings(): GameServerSettings | undefined;
  setServersettings(value?: GameServerSettings): CreatePlaygroundRequest;
  hasServersettings(): boolean;
  clearServersettings(): CreatePlaygroundRequest;

  getRestrictions(): Restrictions | undefined;
  setRestrictions(value?: Restrictions): CreatePlaygroundRequest;
  hasRestrictions(): boolean;
  clearRestrictions(): CreatePlaygroundRequest;

  getOriginalmodrules(): Uint8Array | string;
  getOriginalmodrules_asU8(): Uint8Array;
  getOriginalmodrules_asB64(): string;
  setOriginalmodrules(value: Uint8Array | string): CreatePlaygroundRequest;

  getAssetcategoriesList(): Array<AssetCategory>;
  setAssetcategoriesList(value: Array<AssetCategory>): CreatePlaygroundRequest;
  clearAssetcategoriesList(): CreatePlaygroundRequest;
  addAssetcategories(value?: AssetCategory, index?: number): AssetCategory;

  getTeamcomposition(): TeamComposition | undefined;
  setTeamcomposition(value?: TeamComposition): CreatePlaygroundRequest;
  hasTeamcomposition(): boolean;
  clearTeamcomposition(): CreatePlaygroundRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePlaygroundRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePlaygroundRequest): CreatePlaygroundRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePlaygroundRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePlaygroundRequest;
  static deserializeBinaryFromReader(message: CreatePlaygroundRequest, reader: jspb.BinaryReader): CreatePlaygroundRequest;
}

export namespace CreatePlaygroundRequest {
  export type AsObject = {
    blueprinttype: string,
    name: string,
    description?: StringValue.AsObject,
    mutatorsList: Array<Mutator.AsObject>,
    maprotation?: MapRotation.AsObject,
    secret?: StringValue.AsObject,
    serversettings?: GameServerSettings.AsObject,
    restrictions?: Restrictions.AsObject,
    originalmodrules: Uint8Array | string,
    assetcategoriesList: Array<AssetCategory.AsObject>,
    teamcomposition?: TeamComposition.AsObject,
  }
}

export class UpdatePlaygroundRequest extends jspb.Message {
  getNewplayground(): Playground | undefined;
  setNewplayground(value?: Playground): UpdatePlaygroundRequest;
  hasNewplayground(): boolean;
  clearNewplayground(): UpdatePlaygroundRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePlaygroundRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePlaygroundRequest): UpdatePlaygroundRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePlaygroundRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePlaygroundRequest;
  static deserializeBinaryFromReader(message: UpdatePlaygroundRequest, reader: jspb.BinaryReader): UpdatePlaygroundRequest;
}

export namespace UpdatePlaygroundRequest {
  export type AsObject = {
    newplayground?: Playground.AsObject,
  }
}

export class DeletePlaygroundRequest extends jspb.Message {
  getPlaygroundid(): string;
  setPlaygroundid(value: string): DeletePlaygroundRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePlaygroundRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePlaygroundRequest): DeletePlaygroundRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePlaygroundRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePlaygroundRequest;
  static deserializeBinaryFromReader(message: DeletePlaygroundRequest, reader: jspb.BinaryReader): DeletePlaygroundRequest;
}

export namespace DeletePlaygroundRequest {
  export type AsObject = {
    playgroundid: string,
  }
}

export class GetPlaygroundRequest extends jspb.Message {
  getPlaygroundid(): string;
  setPlaygroundid(value: string): GetPlaygroundRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPlaygroundRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPlaygroundRequest): GetPlaygroundRequest.AsObject;
  static serializeBinaryToWriter(message: GetPlaygroundRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPlaygroundRequest;
  static deserializeBinaryFromReader(message: GetPlaygroundRequest, reader: jspb.BinaryReader): GetPlaygroundRequest;
}

export namespace GetPlaygroundRequest {
  export type AsObject = {
    playgroundid: string,
  }
}

export class SharePlaygroundRequest extends jspb.Message {
  getPlaygroundid(): string;
  setPlaygroundid(value: string): SharePlaygroundRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SharePlaygroundRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SharePlaygroundRequest): SharePlaygroundRequest.AsObject;
  static serializeBinaryToWriter(message: SharePlaygroundRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SharePlaygroundRequest;
  static deserializeBinaryFromReader(message: SharePlaygroundRequest, reader: jspb.BinaryReader): SharePlaygroundRequest;
}

export namespace SharePlaygroundRequest {
  export type AsObject = {
    playgroundid: string,
  }
}

export class SharePlaygroundResponse extends jspb.Message {
  getShortcode(): ShortCode | undefined;
  setShortcode(value?: ShortCode): SharePlaygroundResponse;
  hasShortcode(): boolean;
  clearShortcode(): SharePlaygroundResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SharePlaygroundResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SharePlaygroundResponse): SharePlaygroundResponse.AsObject;
  static serializeBinaryToWriter(message: SharePlaygroundResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SharePlaygroundResponse;
  static deserializeBinaryFromReader(message: SharePlaygroundResponse, reader: jspb.BinaryReader): SharePlaygroundResponse;
}

export namespace SharePlaygroundResponse {
  export type AsObject = {
    shortcode?: ShortCode.AsObject,
  }
}

export class CreatePlaygroundResponse extends jspb.Message {
  getPlaygroundresponse(): PlaygroundResponse | undefined;
  setPlaygroundresponse(value?: PlaygroundResponse): CreatePlaygroundResponse;
  hasPlaygroundresponse(): boolean;
  clearPlaygroundresponse(): CreatePlaygroundResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePlaygroundResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePlaygroundResponse): CreatePlaygroundResponse.AsObject;
  static serializeBinaryToWriter(message: CreatePlaygroundResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePlaygroundResponse;
  static deserializeBinaryFromReader(message: CreatePlaygroundResponse, reader: jspb.BinaryReader): CreatePlaygroundResponse;
}

export namespace CreatePlaygroundResponse {
  export type AsObject = {
    playgroundresponse?: PlaygroundResponse.AsObject,
  }
}

export class UpdatePlaygroundResponse extends jspb.Message {
  getPlaygroundresponse(): PlaygroundResponse | undefined;
  setPlaygroundresponse(value?: PlaygroundResponse): UpdatePlaygroundResponse;
  hasPlaygroundresponse(): boolean;
  clearPlaygroundresponse(): UpdatePlaygroundResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePlaygroundResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePlaygroundResponse): UpdatePlaygroundResponse.AsObject;
  static serializeBinaryToWriter(message: UpdatePlaygroundResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePlaygroundResponse;
  static deserializeBinaryFromReader(message: UpdatePlaygroundResponse, reader: jspb.BinaryReader): UpdatePlaygroundResponse;
}

export namespace UpdatePlaygroundResponse {
  export type AsObject = {
    playgroundresponse?: PlaygroundResponse.AsObject,
  }
}

export class DeletePlaygroundResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePlaygroundResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePlaygroundResponse): DeletePlaygroundResponse.AsObject;
  static serializeBinaryToWriter(message: DeletePlaygroundResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePlaygroundResponse;
  static deserializeBinaryFromReader(message: DeletePlaygroundResponse, reader: jspb.BinaryReader): DeletePlaygroundResponse;
}

export namespace DeletePlaygroundResponse {
  export type AsObject = {
  }
}

export class PlaygroundInfoResponse extends jspb.Message {
  getPlayground(): PlaygroundResponse | undefined;
  setPlayground(value?: PlaygroundResponse): PlaygroundInfoResponse;
  hasPlayground(): boolean;
  clearPlayground(): PlaygroundInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaygroundInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlaygroundInfoResponse): PlaygroundInfoResponse.AsObject;
  static serializeBinaryToWriter(message: PlaygroundInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaygroundInfoResponse;
  static deserializeBinaryFromReader(message: PlaygroundInfoResponse, reader: jspb.BinaryReader): PlaygroundInfoResponse;
}

export namespace PlaygroundInfoResponse {
  export type AsObject = {
    playground?: PlaygroundResponse.AsObject,
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
export enum InputMethods { 
  ALL = 0,
  KEYBOARD_MOUSE = 1,
  GAME_CONTROLLER = 3,
}
export enum IncludeFields { 
  AVAILABLE_GAME_DATA = 0,
  METADATA = 1,
  CUSTOM_DATA = 2,
  CONSTRAINTS = 3,
  AVAILABLE_TAGS = 4,
}
export enum State { 
  ACTIVE = 0,
  ARCHIVED = 1,
}
export enum Category { 
  CATEGORY_UNKNOWN = 0,
  CATEGORY_MODE = 1,
  CATEGORY_PACKAGE = 2,
  CATEGORY_GENERAL = 3,
}
export enum PhantomGameState { 
  ENABLED = 0,
  DISABLED = 1,
}
export enum CapacityType { 
  AI_BACKFILL = 0,
  AI_STATIC = 1,
}
export enum RotationBehavior { 
  LOOP = 0,
  MATCHMAKE = 1,
  ONE_MAP = 2,
}
export enum RoundBehavior { 
  CONTINUE = 0,
}
export enum BalancingMethod { 
  UNSPECIFIED = 0,
  EVEN_NUMBERS = 1,
  EVEN_PERCENTAGE = 2,
  FILL_IN_TEAM_ORDER = 3,
}
