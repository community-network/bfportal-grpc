from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Platform(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    UNKNOWN: _ClassVar[Platform]
    PC: _ClassVar[Platform]
    PS4: _ClassVar[Platform]
    XBOXONE: _ClassVar[Platform]
    PS5: _ClassVar[Platform]
    XBSX: _ClassVar[Platform]
    COMMON: _ClassVar[Platform]

class InputMethods(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    ALL: _ClassVar[InputMethods]
    KEYBOARD_MOUSE: _ClassVar[InputMethods]
    GAME_CONTROLLER: _ClassVar[InputMethods]

class IncludeFields(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    AVAILABLE_GAME_DATA: _ClassVar[IncludeFields]
    METADATA: _ClassVar[IncludeFields]
    CUSTOM_DATA: _ClassVar[IncludeFields]
    CONSTRAINTS: _ClassVar[IncludeFields]
    AVAILABLE_TAGS: _ClassVar[IncludeFields]

class State(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    ACTIVE: _ClassVar[State]
    ARCHIVED: _ClassVar[State]

class Category(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    CATEGORY_UNKNOWN: _ClassVar[Category]
    CATEGORY_MODE: _ClassVar[Category]
    CATEGORY_PACKAGE: _ClassVar[Category]
    CATEGORY_GENERAL: _ClassVar[Category]

class PhantomGameState(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    ENABLED: _ClassVar[PhantomGameState]
    DISABLED: _ClassVar[PhantomGameState]

class CapacityType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    AI_BACKFILL: _ClassVar[CapacityType]
    AI_STATIC: _ClassVar[CapacityType]

class RotationBehavior(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    LOOP: _ClassVar[RotationBehavior]
    MATCHMAKE: _ClassVar[RotationBehavior]
    ONE_MAP: _ClassVar[RotationBehavior]

class RoundBehavior(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    CONTINUE: _ClassVar[RoundBehavior]

class BalancingMethod(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    UNSPECIFIED: _ClassVar[BalancingMethod]
    EVEN_NUMBERS: _ClassVar[BalancingMethod]
    EVEN_PERCENTAGE: _ClassVar[BalancingMethod]
    FILL_IN_TEAM_ORDER: _ClassVar[BalancingMethod]
UNKNOWN: Platform
PC: Platform
PS4: Platform
XBOXONE: Platform
PS5: Platform
XBSX: Platform
COMMON: Platform
ALL: InputMethods
KEYBOARD_MOUSE: InputMethods
GAME_CONTROLLER: InputMethods
AVAILABLE_GAME_DATA: IncludeFields
METADATA: IncludeFields
CUSTOM_DATA: IncludeFields
CONSTRAINTS: IncludeFields
AVAILABLE_TAGS: IncludeFields
ACTIVE: State
ARCHIVED: State
CATEGORY_UNKNOWN: Category
CATEGORY_MODE: Category
CATEGORY_PACKAGE: Category
CATEGORY_GENERAL: Category
ENABLED: PhantomGameState
DISABLED: PhantomGameState
AI_BACKFILL: CapacityType
AI_STATIC: CapacityType
LOOP: RotationBehavior
MATCHMAKE: RotationBehavior
ONE_MAP: RotationBehavior
CONTINUE: RoundBehavior
UNSPECIFIED: BalancingMethod
EVEN_NUMBERS: BalancingMethod
EVEN_PERCENTAGE: BalancingMethod
FILL_IN_TEAM_ORDER: BalancingMethod

class ProgressionEntry(_message.Message):
    __slots__ = ["progressionMode", "progressibles"]
    PROGRESSIONMODE_FIELD_NUMBER: _ClassVar[int]
    PROGRESSIBLES_FIELD_NUMBER: _ClassVar[int]
    progressionMode: str
    progressibles: _containers.RepeatedCompositeFieldContainer[Mutator]
    def __init__(self, progressionMode: _Optional[str] = ..., progressibles: _Optional[_Iterable[_Union[Mutator, _Mapping]]] = ...) -> None: ...

class TranslationMetadata(_message.Message):
    __slots__ = ["kind", "translationId"]
    KIND_FIELD_NUMBER: _ClassVar[int]
    TRANSLATIONID_FIELD_NUMBER: _ClassVar[int]
    kind: str
    translationId: str
    def __init__(self, kind: _Optional[str] = ..., translationId: _Optional[str] = ...) -> None: ...

class ResourceLocation(_message.Message):
    __slots__ = ["ref", "url"]
    REF_FIELD_NUMBER: _ClassVar[int]
    URL_FIELD_NUMBER: _ClassVar[int]
    ref: str
    url: str
    def __init__(self, ref: _Optional[str] = ..., url: _Optional[str] = ...) -> None: ...

class Resource(_message.Message):
    __slots__ = ["location", "kind"]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    KIND_FIELD_NUMBER: _ClassVar[int]
    location: ResourceLocation
    kind: str
    def __init__(self, location: _Optional[_Union[ResourceLocation, _Mapping]] = ..., kind: _Optional[str] = ...) -> None: ...

class Metadata(_message.Message):
    __slots__ = ["translations", "resources"]
    TRANSLATIONS_FIELD_NUMBER: _ClassVar[int]
    RESOURCES_FIELD_NUMBER: _ClassVar[int]
    translations: _containers.RepeatedCompositeFieldContainer[TranslationMetadata]
    resources: _containers.RepeatedCompositeFieldContainer[Resource]
    def __init__(self, translations: _Optional[_Iterable[_Union[TranslationMetadata, _Mapping]]] = ..., resources: _Optional[_Iterable[_Union[Resource, _Mapping]]] = ...) -> None: ...

class Tag(_message.Message):
    __slots__ = ["id", "sortOrder", "metadata"]
    ID_FIELD_NUMBER: _ClassVar[int]
    SORTORDER_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    id: str
    sortOrder: int
    metadata: Metadata
    def __init__(self, id: _Optional[str] = ..., sortOrder: _Optional[int] = ..., metadata: _Optional[_Union[Metadata, _Mapping]] = ...) -> None: ...

class ProgressionMode(_message.Message):
    __slots__ = ["value"]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    value: str
    def __init__(self, value: _Optional[str] = ...) -> None: ...

class PlaygroundResponse(_message.Message):
    __slots__ = ["originalPlayground", "validatedPlayground", "tag", "progressionMode"]
    ORIGINALPLAYGROUND_FIELD_NUMBER: _ClassVar[int]
    VALIDATEDPLAYGROUND_FIELD_NUMBER: _ClassVar[int]
    TAG_FIELD_NUMBER: _ClassVar[int]
    PROGRESSIONMODE_FIELD_NUMBER: _ClassVar[int]
    originalPlayground: Playground
    validatedPlayground: Playground
    tag: _containers.RepeatedCompositeFieldContainer[Tag]
    progressionMode: ProgressionMode
    def __init__(self, originalPlayground: _Optional[_Union[Playground, _Mapping]] = ..., validatedPlayground: _Optional[_Union[Playground, _Mapping]] = ..., tag: _Optional[_Iterable[_Union[Tag, _Mapping]]] = ..., progressionMode: _Optional[_Union[ProgressionMode, _Mapping]] = ...) -> None: ...

class MapInfo(_message.Message):
    __slots__ = ["mapname", "mode", "gameSize", "rounds", "mutators", "location", "preRoundSize", "warmUpSize", "allowedSpectators"]
    MAPNAME_FIELD_NUMBER: _ClassVar[int]
    MODE_FIELD_NUMBER: _ClassVar[int]
    GAMESIZE_FIELD_NUMBER: _ClassVar[int]
    ROUNDS_FIELD_NUMBER: _ClassVar[int]
    MUTATORS_FIELD_NUMBER: _ClassVar[int]
    LOCATION_FIELD_NUMBER: _ClassVar[int]
    PREROUNDSIZE_FIELD_NUMBER: _ClassVar[int]
    WARMUPSIZE_FIELD_NUMBER: _ClassVar[int]
    ALLOWEDSPECTATORS_FIELD_NUMBER: _ClassVar[int]
    mapname: str
    mode: str
    gameSize: int
    rounds: int
    mutators: Mutator
    location: str
    preRoundSize: int
    warmUpSize: int
    allowedSpectators: int
    def __init__(self, mapname: _Optional[str] = ..., mode: _Optional[str] = ..., gameSize: _Optional[int] = ..., rounds: _Optional[int] = ..., mutators: _Optional[_Union[Mutator, _Mapping]] = ..., location: _Optional[str] = ..., preRoundSize: _Optional[int] = ..., warmUpSize: _Optional[int] = ..., allowedSpectators: _Optional[int] = ...) -> None: ...

class MapRotation(_message.Message):
    __slots__ = ["maps", "rotationBehavior", "roundBehavior"]
    MAPS_FIELD_NUMBER: _ClassVar[int]
    ROTATIONBEHAVIOR_FIELD_NUMBER: _ClassVar[int]
    ROUNDBEHAVIOR_FIELD_NUMBER: _ClassVar[int]
    maps: _containers.RepeatedCompositeFieldContainer[MapInfo]
    rotationBehavior: RotationBehavior
    roundBehavior: RoundBehavior
    def __init__(self, maps: _Optional[_Iterable[_Union[MapInfo, _Mapping]]] = ..., rotationBehavior: _Optional[_Union[RotationBehavior, str]] = ..., roundBehavior: _Optional[_Union[RoundBehavior, str]] = ...) -> None: ...

class TeamStructure(_message.Message):
    __slots__ = ["teamId", "capacity"]
    TEAMID_FIELD_NUMBER: _ClassVar[int]
    CAPACITY_FIELD_NUMBER: _ClassVar[int]
    teamId: int
    capacity: int
    def __init__(self, teamId: _Optional[int] = ..., capacity: _Optional[int] = ...) -> None: ...

class InternalTeamStructure(_message.Message):
    __slots__ = ["teamId", "capacity", "capacityType"]
    TEAMID_FIELD_NUMBER: _ClassVar[int]
    CAPACITY_FIELD_NUMBER: _ClassVar[int]
    CAPACITYTYPE_FIELD_NUMBER: _ClassVar[int]
    teamId: int
    capacity: int
    capacityType: CapacityType
    def __init__(self, teamId: _Optional[int] = ..., capacity: _Optional[int] = ..., capacityType: _Optional[_Union[CapacityType, str]] = ...) -> None: ...

class MutatorSparseFloatEntry(_message.Message):
    __slots__ = ["index", "value"]
    INDEX_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    index: int
    value: float
    def __init__(self, index: _Optional[int] = ..., value: _Optional[float] = ...) -> None: ...

class MutatorSparseFloat(_message.Message):
    __slots__ = ["defaultValue", "size", "sparseValues"]
    DEFAULTVALUE_FIELD_NUMBER: _ClassVar[int]
    SIZE_FIELD_NUMBER: _ClassVar[int]
    SPARSEVALUES_FIELD_NUMBER: _ClassVar[int]
    defaultValue: float
    size: int
    sparseValues: _containers.RepeatedCompositeFieldContainer[MutatorSparseFloatEntry]
    def __init__(self, defaultValue: _Optional[float] = ..., size: _Optional[int] = ..., sparseValues: _Optional[_Iterable[_Union[MutatorSparseFloatEntry, _Mapping]]] = ...) -> None: ...

class MutatorFloat(_message.Message):
    __slots__ = ["value"]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    value: float
    def __init__(self, value: _Optional[float] = ...) -> None: ...

class MutatorBoolean(_message.Message):
    __slots__ = ["boolValue"]
    BOOLVALUE_FIELD_NUMBER: _ClassVar[int]
    boolValue: bool
    def __init__(self, boolValue: bool = ...) -> None: ...

class MutatorString(_message.Message):
    __slots__ = ["stringValue"]
    STRINGVALUE_FIELD_NUMBER: _ClassVar[int]
    stringValue: str
    def __init__(self, stringValue: _Optional[str] = ...) -> None: ...

class MutatorInt(_message.Message):
    __slots__ = ["value"]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    value: int
    def __init__(self, value: _Optional[int] = ...) -> None: ...

class MutatorSparseBooleanEntry(_message.Message):
    __slots__ = ["index", "value"]
    INDEX_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    index: int
    value: bool
    def __init__(self, index: _Optional[int] = ..., value: bool = ...) -> None: ...

class MutatorSparseBoolean(_message.Message):
    __slots__ = ["defaultValue", "size", "sparseValues"]
    DEFAULTVALUE_FIELD_NUMBER: _ClassVar[int]
    SIZE_FIELD_NUMBER: _ClassVar[int]
    SPARSEVALUES_FIELD_NUMBER: _ClassVar[int]
    defaultValue: bool
    size: int
    sparseValues: _containers.RepeatedCompositeFieldContainer[MutatorSparseBooleanEntry]
    def __init__(self, defaultValue: bool = ..., size: _Optional[int] = ..., sparseValues: _Optional[_Iterable[_Union[MutatorSparseBooleanEntry, _Mapping]]] = ...) -> None: ...

class SparseIntEntity(_message.Message):
    __slots__ = ["values"]
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedScalarFieldContainer[int]
    def __init__(self, values: _Optional[_Iterable[int]] = ...) -> None: ...

class MutatorSparseIntEntry(_message.Message):
    __slots__ = ["index", "value"]
    INDEX_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    index: int
    value: int
    def __init__(self, index: _Optional[int] = ..., value: _Optional[int] = ...) -> None: ...

class MutatorSparseInt(_message.Message):
    __slots__ = ["defaultValue", "size", "sparseValues"]
    DEFAULTVALUE_FIELD_NUMBER: _ClassVar[int]
    SIZE_FIELD_NUMBER: _ClassVar[int]
    SPARSEVALUES_FIELD_NUMBER: _ClassVar[int]
    defaultValue: int
    size: int
    sparseValues: MutatorSparseIntEntry
    def __init__(self, defaultValue: _Optional[int] = ..., size: _Optional[int] = ..., sparseValues: _Optional[_Union[MutatorSparseIntEntry, _Mapping]] = ...) -> None: ...

class MutatorKind(_message.Message):
    __slots__ = ["mutatorBoolean", "mutatorString", "mutatorFloat", "mutatorInt", "mutatorSparseBoolean", "mutatorSparseInt", "mutatorSparseFloat"]
    MUTATORBOOLEAN_FIELD_NUMBER: _ClassVar[int]
    MUTATORSTRING_FIELD_NUMBER: _ClassVar[int]
    MUTATORFLOAT_FIELD_NUMBER: _ClassVar[int]
    MUTATORINT_FIELD_NUMBER: _ClassVar[int]
    MUTATORSPARSEBOOLEAN_FIELD_NUMBER: _ClassVar[int]
    MUTATORSPARSEINT_FIELD_NUMBER: _ClassVar[int]
    MUTATORSPARSEFLOAT_FIELD_NUMBER: _ClassVar[int]
    mutatorBoolean: MutatorBoolean
    mutatorString: MutatorString
    mutatorFloat: MutatorFloat
    mutatorInt: MutatorInt
    mutatorSparseBoolean: MutatorSparseBoolean
    mutatorSparseInt: MutatorSparseInt
    mutatorSparseFloat: MutatorSparseFloat
    def __init__(self, mutatorBoolean: _Optional[_Union[MutatorBoolean, _Mapping]] = ..., mutatorString: _Optional[_Union[MutatorString, _Mapping]] = ..., mutatorFloat: _Optional[_Union[MutatorFloat, _Mapping]] = ..., mutatorInt: _Optional[_Union[MutatorInt, _Mapping]] = ..., mutatorSparseBoolean: _Optional[_Union[MutatorSparseBoolean, _Mapping]] = ..., mutatorSparseInt: _Optional[_Union[MutatorSparseInt, _Mapping]] = ..., mutatorSparseFloat: _Optional[_Union[MutatorSparseFloat, _Mapping]] = ...) -> None: ...

class TeamComposition(_message.Message):
    __slots__ = ["teams", "internalTeams", "balancingMethod"]
    TEAMS_FIELD_NUMBER: _ClassVar[int]
    INTERNALTEAMS_FIELD_NUMBER: _ClassVar[int]
    BALANCINGMETHOD_FIELD_NUMBER: _ClassVar[int]
    teams: TeamStructure
    internalTeams: _containers.RepeatedCompositeFieldContainer[InternalTeamStructure]
    balancingMethod: BalancingMethod
    def __init__(self, teams: _Optional[_Union[TeamStructure, _Mapping]] = ..., internalTeams: _Optional[_Iterable[_Union[InternalTeamStructure, _Mapping]]] = ..., balancingMethod: _Optional[_Union[BalancingMethod, str]] = ...) -> None: ...

class Mutator(_message.Message):
    __slots__ = ["name", "category", "kind", "id"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    CATEGORY_FIELD_NUMBER: _ClassVar[int]
    KIND_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    name: str
    category: str
    kind: MutatorKind
    id: str
    def __init__(self, name: _Optional[str] = ..., category: _Optional[str] = ..., kind: _Optional[_Union[MutatorKind, _Mapping]] = ..., id: _Optional[str] = ...) -> None: ...

class Timestamp(_message.Message):
    __slots__ = ["seconds", "nanos"]
    SECONDS_FIELD_NUMBER: _ClassVar[int]
    NANOS_FIELD_NUMBER: _ClassVar[int]
    seconds: int
    nanos: int
    def __init__(self, seconds: _Optional[int] = ..., nanos: _Optional[int] = ...) -> None: ...

class StringValue(_message.Message):
    __slots__ = ["value"]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    value: str
    def __init__(self, value: _Optional[str] = ...) -> None: ...

class GameServerMessage(_message.Message):
    __slots__ = ["kind", "text"]
    KIND_FIELD_NUMBER: _ClassVar[int]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    kind: str
    text: str
    def __init__(self, kind: _Optional[str] = ..., text: _Optional[str] = ...) -> None: ...

class GameServerSettings(_message.Message):
    __slots__ = ["name", "description", "gameServerMessage", "configName", "ConfigDescription", "phantomGameState"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    GAMESERVERMESSAGE_FIELD_NUMBER: _ClassVar[int]
    CONFIGNAME_FIELD_NUMBER: _ClassVar[int]
    CONFIGDESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    PHANTOMGAMESTATE_FIELD_NUMBER: _ClassVar[int]
    name: str
    description: StringValue
    gameServerMessage: _containers.RepeatedCompositeFieldContainer[GameServerMessage]
    configName: StringValue
    ConfigDescription: StringValue
    phantomGameState: PhantomGameState
    def __init__(self, name: _Optional[str] = ..., description: _Optional[_Union[StringValue, _Mapping]] = ..., gameServerMessage: _Optional[_Iterable[_Union[GameServerMessage, _Mapping]]] = ..., configName: _Optional[_Union[StringValue, _Mapping]] = ..., ConfigDescription: _Optional[_Union[StringValue, _Mapping]] = ..., phantomGameState: _Optional[_Union[PhantomGameState, str]] = ...) -> None: ...

class PlayerInfo(_message.Message):
    __slots__ = ["nucleusId", "personaId", "platformId"]
    NUCLEUSID_FIELD_NUMBER: _ClassVar[int]
    PERSONAID_FIELD_NUMBER: _ClassVar[int]
    PLATFORMID_FIELD_NUMBER: _ClassVar[int]
    nucleusId: int
    personaId: int
    platformId: Platform
    def __init__(self, nucleusId: _Optional[int] = ..., personaId: _Optional[int] = ..., platformId: _Optional[_Union[Platform, str]] = ...) -> None: ...

class PlatformRestrictions(_message.Message):
    __slots__ = ["platforms"]
    PLATFORMS_FIELD_NUMBER: _ClassVar[int]
    platforms: _containers.RepeatedScalarFieldContainer[Platform]
    def __init__(self, platforms: _Optional[_Iterable[_Union[Platform, str]]] = ...) -> None: ...

class InputMethodResrictions(_message.Message):
    __slots__ = ["inputMethods"]
    INPUTMETHODS_FIELD_NUMBER: _ClassVar[int]
    inputMethods: _containers.RepeatedScalarFieldContainer[InputMethods]
    def __init__(self, inputMethods: _Optional[_Iterable[_Union[InputMethods, str]]] = ...) -> None: ...

class Restrictions(_message.Message):
    __slots__ = ["platformRestrictions", "inputMethodResctrictions"]
    PLATFORMRESTRICTIONS_FIELD_NUMBER: _ClassVar[int]
    INPUTMETHODRESCTRICTIONS_FIELD_NUMBER: _ClassVar[int]
    platformRestrictions: PlatformRestrictions
    inputMethodResctrictions: InputMethodResrictions
    def __init__(self, platformRestrictions: _Optional[_Union[PlatformRestrictions, _Mapping]] = ..., inputMethodResctrictions: _Optional[_Union[InputMethodResrictions, _Mapping]] = ...) -> None: ...

class Compressed(_message.Message):
    __slots__ = ["compiledModRules", "rulesVersion", "inflatedSize"]
    COMPILEDMODRULES_FIELD_NUMBER: _ClassVar[int]
    RULESVERSION_FIELD_NUMBER: _ClassVar[int]
    INFLATEDSIZE_FIELD_NUMBER: _ClassVar[int]
    compiledModRules: bytes
    rulesVersion: int
    inflatedSize: int
    def __init__(self, compiledModRules: _Optional[bytes] = ..., rulesVersion: _Optional[int] = ..., inflatedSize: _Optional[int] = ...) -> None: ...

class Uncompressed(_message.Message):
    __slots__ = ["compiledModRules", "rulesVersion"]
    COMPILEDMODRULES_FIELD_NUMBER: _ClassVar[int]
    RULESVERSION_FIELD_NUMBER: _ClassVar[int]
    compiledModRules: bytes
    rulesVersion: int
    def __init__(self, compiledModRules: _Optional[bytes] = ..., rulesVersion: _Optional[int] = ...) -> None: ...

class CompiledRules(_message.Message):
    __slots__ = ["uncompressed", "compressed"]
    UNCOMPRESSED_FIELD_NUMBER: _ClassVar[int]
    COMPRESSED_FIELD_NUMBER: _ClassVar[int]
    uncompressed: Uncompressed
    compressed: Compressed
    def __init__(self, uncompressed: _Optional[_Union[Uncompressed, _Mapping]] = ..., compressed: _Optional[_Union[Compressed, _Mapping]] = ...) -> None: ...

class CompatibleModRules(_message.Message):
    __slots__ = ["rules", "rulesVersion", "compiled"]
    RULES_FIELD_NUMBER: _ClassVar[int]
    RULESVERSION_FIELD_NUMBER: _ClassVar[int]
    COMPILED_FIELD_NUMBER: _ClassVar[int]
    rules: bytes
    rulesVersion: int
    compiled: CompiledRules
    def __init__(self, rules: _Optional[bytes] = ..., rulesVersion: _Optional[int] = ..., compiled: _Optional[_Union[CompiledRules, _Mapping]] = ...) -> None: ...

class InCompatibleModRules(_message.Message):
    __slots__ = ["rules", "rulesVersion", "blueprintRulesVersion"]
    RULES_FIELD_NUMBER: _ClassVar[int]
    RULESVERSION_FIELD_NUMBER: _ClassVar[int]
    BLUEPRINTRULESVERSION_FIELD_NUMBER: _ClassVar[int]
    rules: bytes
    rulesVersion: int
    blueprintRulesVersion: int
    def __init__(self, rules: _Optional[bytes] = ..., rulesVersion: _Optional[int] = ..., blueprintRulesVersion: _Optional[int] = ...) -> None: ...

class OriginalModRules(_message.Message):
    __slots__ = ["compatibleRules", "incompatibleRules"]
    COMPATIBLERULES_FIELD_NUMBER: _ClassVar[int]
    INCOMPATIBLERULES_FIELD_NUMBER: _ClassVar[int]
    compatibleRules: CompatibleModRules
    incompatibleRules: InCompatibleModRules
    def __init__(self, compatibleRules: _Optional[_Union[CompatibleModRules, _Mapping]] = ..., incompatibleRules: _Optional[_Union[InCompatibleModRules, _Mapping]] = ...) -> None: ...

class AssetCategoryTagBooleanOverride(_message.Message):
    __slots__ = ["assetCategoryTags", "value"]
    ASSETCATEGORYTAGS_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    assetCategoryTags: _containers.RepeatedScalarFieldContainer[str]
    value: bool
    def __init__(self, assetCategoryTags: _Optional[_Iterable[str]] = ..., value: bool = ...) -> None: ...

class AssetCategoryTagBooleanTeamOverride(_message.Message):
    __slots__ = ["assetCategoryTags", "value", "teamId"]
    ASSETCATEGORYTAGS_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    TEAMID_FIELD_NUMBER: _ClassVar[int]
    assetCategoryTags: _containers.RepeatedScalarFieldContainer[str]
    value: bool
    teamId: int
    def __init__(self, assetCategoryTags: _Optional[_Iterable[str]] = ..., value: bool = ..., teamId: _Optional[int] = ...) -> None: ...

class AssetCategoryBoolean(_message.Message):
    __slots__ = ["defaultValue", "overrides", "teamOverrides"]
    DEFAULTVALUE_FIELD_NUMBER: _ClassVar[int]
    OVERRIDES_FIELD_NUMBER: _ClassVar[int]
    TEAMOVERRIDES_FIELD_NUMBER: _ClassVar[int]
    defaultValue: bool
    overrides: AssetCategoryTagBooleanOverride
    teamOverrides: _containers.RepeatedCompositeFieldContainer[AssetCategoryTagBooleanTeamOverride]
    def __init__(self, defaultValue: bool = ..., overrides: _Optional[_Union[AssetCategoryTagBooleanOverride, _Mapping]] = ..., teamOverrides: _Optional[_Iterable[_Union[AssetCategoryTagBooleanTeamOverride, _Mapping]]] = ...) -> None: ...

class AssetCategory(_message.Message):
    __slots__ = ["tagId", "boolean"]
    TAGID_FIELD_NUMBER: _ClassVar[int]
    BOOLEAN_FIELD_NUMBER: _ClassVar[int]
    tagId: str
    boolean: AssetCategoryBoolean
    def __init__(self, tagId: _Optional[str] = ..., boolean: _Optional[_Union[AssetCategoryBoolean, _Mapping]] = ...) -> None: ...

class Playground(_message.Message):
    __slots__ = ["playgroundId", "blueprintType", "name", "description", "mutators", "mapRotation", "state", "checksum", "secret", "createdAt", "updatedAt", "serverSettings", "owner", "restrictions", "modRules", "assetCategories", "teamComposition"]
    PLAYGROUNDID_FIELD_NUMBER: _ClassVar[int]
    BLUEPRINTTYPE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    MUTATORS_FIELD_NUMBER: _ClassVar[int]
    MAPROTATION_FIELD_NUMBER: _ClassVar[int]
    STATE_FIELD_NUMBER: _ClassVar[int]
    CHECKSUM_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    CREATEDAT_FIELD_NUMBER: _ClassVar[int]
    UPDATEDAT_FIELD_NUMBER: _ClassVar[int]
    SERVERSETTINGS_FIELD_NUMBER: _ClassVar[int]
    OWNER_FIELD_NUMBER: _ClassVar[int]
    RESTRICTIONS_FIELD_NUMBER: _ClassVar[int]
    MODRULES_FIELD_NUMBER: _ClassVar[int]
    ASSETCATEGORIES_FIELD_NUMBER: _ClassVar[int]
    TEAMCOMPOSITION_FIELD_NUMBER: _ClassVar[int]
    playgroundId: str
    blueprintType: str
    name: str
    description: str
    mutators: _containers.RepeatedCompositeFieldContainer[Mutator]
    mapRotation: MapRotation
    state: State
    checksum: str
    secret: str
    createdAt: Timestamp
    updatedAt: Timestamp
    serverSettings: GameServerSettings
    owner: PlayerInfo
    restrictions: Restrictions
    modRules: OriginalModRules
    assetCategories: _containers.RepeatedCompositeFieldContainer[AssetCategory]
    teamComposition: TeamComposition
    def __init__(self, playgroundId: _Optional[str] = ..., blueprintType: _Optional[str] = ..., name: _Optional[str] = ..., description: _Optional[str] = ..., mutators: _Optional[_Iterable[_Union[Mutator, _Mapping]]] = ..., mapRotation: _Optional[_Union[MapRotation, _Mapping]] = ..., state: _Optional[_Union[State, str]] = ..., checksum: _Optional[str] = ..., secret: _Optional[str] = ..., createdAt: _Optional[_Union[Timestamp, _Mapping]] = ..., updatedAt: _Optional[_Union[Timestamp, _Mapping]] = ..., serverSettings: _Optional[_Union[GameServerSettings, _Mapping]] = ..., owner: _Optional[_Union[PlayerInfo, _Mapping]] = ..., restrictions: _Optional[_Union[Restrictions, _Mapping]] = ..., modRules: _Optional[_Union[OriginalModRules, _Mapping]] = ..., assetCategories: _Optional[_Iterable[_Union[AssetCategory, _Mapping]]] = ..., teamComposition: _Optional[_Union[TeamComposition, _Mapping]] = ...) -> None: ...

class ListPlaygroundsByOwnerRequest(_message.Message):
    __slots__ = ["blueprintType"]
    BLUEPRINTTYPE_FIELD_NUMBER: _ClassVar[int]
    blueprintType: str
    def __init__(self, blueprintType: _Optional[str] = ...) -> None: ...

class GetConstraintsRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetBlueprintsByIdRequest(_message.Message):
    __slots__ = ["blueprintIds", "includeFields"]
    BLUEPRINTIDS_FIELD_NUMBER: _ClassVar[int]
    INCLUDEFIELDS_FIELD_NUMBER: _ClassVar[int]
    blueprintIds: _containers.RepeatedScalarFieldContainer[str]
    includeFields: _containers.RepeatedScalarFieldContainer[IncludeFields]
    def __init__(self, blueprintIds: _Optional[_Iterable[str]] = ..., includeFields: _Optional[_Iterable[_Union[IncludeFields, str]]] = ...) -> None: ...

class GlobalConstraints(_message.Message):
    __slots__ = ["maxPlaygroundsPerPlayer", "maxGameServersPerPlayer", "maxFollowedHostsListSize"]
    MAXPLAYGROUNDSPERPLAYER_FIELD_NUMBER: _ClassVar[int]
    MAXGAMESERVERSPERPLAYER_FIELD_NUMBER: _ClassVar[int]
    MAXFOLLOWEDHOSTSLISTSIZE_FIELD_NUMBER: _ClassVar[int]
    maxPlaygroundsPerPlayer: int
    maxGameServersPerPlayer: int
    maxFollowedHostsListSize: int
    def __init__(self, maxPlaygroundsPerPlayer: _Optional[int] = ..., maxGameServersPerPlayer: _Optional[int] = ..., maxFollowedHostsListSize: _Optional[int] = ...) -> None: ...

class IntRange(_message.Message):
    __slots__ = ["minValue", "maxValue"]
    MINVALUE_FIELD_NUMBER: _ClassVar[int]
    MAXVALUE_FIELD_NUMBER: _ClassVar[int]
    minValue: int
    maxValue: int
    def __init__(self, minValue: _Optional[int] = ..., maxValue: _Optional[int] = ...) -> None: ...

class AvailableIntValues(_message.Message):
    __slots__ = ["range", "sparseValues"]
    RANGE_FIELD_NUMBER: _ClassVar[int]
    SPARSEVALUES_FIELD_NUMBER: _ClassVar[int]
    range: IntRange
    sparseValues: SparseIntEntity
    def __init__(self, range: _Optional[_Union[IntRange, _Mapping]] = ..., sparseValues: _Optional[_Union[SparseIntEntity, _Mapping]] = ...) -> None: ...

class AvailableIntValue(_message.Message):
    __slots__ = ["defaultValue", "availableValues"]
    DEFAULTVALUE_FIELD_NUMBER: _ClassVar[int]
    AVAILABLEVALUES_FIELD_NUMBER: _ClassVar[int]
    defaultValue: int
    availableValues: AvailableIntValues
    def __init__(self, defaultValue: _Optional[int] = ..., availableValues: _Optional[_Union[AvailableIntValues, _Mapping]] = ...) -> None: ...

class SparseFloatValues(_message.Message):
    __slots__ = ["values"]
    VALUES_FIELD_NUMBER: _ClassVar[int]
    values: _containers.RepeatedScalarFieldContainer[float]
    def __init__(self, values: _Optional[_Iterable[float]] = ...) -> None: ...

class FloatRange(_message.Message):
    __slots__ = ["minValue", "maxValue"]
    MINVALUE_FIELD_NUMBER: _ClassVar[int]
    MAXVALUE_FIELD_NUMBER: _ClassVar[int]
    minValue: float
    maxValue: float
    def __init__(self, minValue: _Optional[float] = ..., maxValue: _Optional[float] = ...) -> None: ...

class AvailableFloatValues(_message.Message):
    __slots__ = ["range", "sparseValues"]
    RANGE_FIELD_NUMBER: _ClassVar[int]
    SPARSEVALUES_FIELD_NUMBER: _ClassVar[int]
    range: FloatRange
    sparseValues: SparseFloatValues
    def __init__(self, range: _Optional[_Union[FloatRange, _Mapping]] = ..., sparseValues: _Optional[_Union[SparseFloatValues, _Mapping]] = ...) -> None: ...

class AvailableMutatorFloatValues(_message.Message):
    __slots__ = ["mutator", "availableValues"]
    MUTATOR_FIELD_NUMBER: _ClassVar[int]
    AVAILABLEVALUES_FIELD_NUMBER: _ClassVar[int]
    mutator: MutatorFloat
    availableValues: AvailableFloatValues
    def __init__(self, mutator: _Optional[_Union[MutatorFloat, _Mapping]] = ..., availableValues: _Optional[_Union[AvailableFloatValues, _Mapping]] = ...) -> None: ...

class AvailableMutatorIntValues(_message.Message):
    __slots__ = ["mutator", "availableValues"]
    MUTATOR_FIELD_NUMBER: _ClassVar[int]
    AVAILABLEVALUES_FIELD_NUMBER: _ClassVar[int]
    mutator: MutatorInt
    availableValues: AvailableIntValues
    def __init__(self, mutator: _Optional[_Union[MutatorInt, _Mapping]] = ..., availableValues: _Optional[_Union[AvailableIntValues, _Mapping]] = ...) -> None: ...

class AvailableMutatorSparseIntValues(_message.Message):
    __slots__ = ["mutator", "availableValues"]
    MUTATOR_FIELD_NUMBER: _ClassVar[int]
    AVAILABLEVALUES_FIELD_NUMBER: _ClassVar[int]
    mutator: MutatorSparseInt
    availableValues: AvailableIntValues
    def __init__(self, mutator: _Optional[_Union[MutatorSparseInt, _Mapping]] = ..., availableValues: _Optional[_Union[AvailableIntValues, _Mapping]] = ...) -> None: ...

class AvailableMutatorSparseFloatValues(_message.Message):
    __slots__ = ["mutator", "availableValues"]
    MUTATOR_FIELD_NUMBER: _ClassVar[int]
    AVAILABLEVALUES_FIELD_NUMBER: _ClassVar[int]
    mutator: MutatorSparseFloat
    availableValues: AvailableFloatValues
    def __init__(self, mutator: _Optional[_Union[MutatorSparseFloat, _Mapping]] = ..., availableValues: _Optional[_Union[AvailableFloatValues, _Mapping]] = ...) -> None: ...

class AvailableMutatorKind(_message.Message):
    __slots__ = ["mutatorBoolean", "mutatorString", "mutatorFloatValues", "mutatorIntValues", "mutatorSparseBoolean", "mutatorSparseIntValues", "mutatorSparseFloatValues"]
    MUTATORBOOLEAN_FIELD_NUMBER: _ClassVar[int]
    MUTATORSTRING_FIELD_NUMBER: _ClassVar[int]
    MUTATORFLOATVALUES_FIELD_NUMBER: _ClassVar[int]
    MUTATORINTVALUES_FIELD_NUMBER: _ClassVar[int]
    MUTATORSPARSEBOOLEAN_FIELD_NUMBER: _ClassVar[int]
    MUTATORSPARSEINTVALUES_FIELD_NUMBER: _ClassVar[int]
    MUTATORSPARSEFLOATVALUES_FIELD_NUMBER: _ClassVar[int]
    mutatorBoolean: MutatorBoolean
    mutatorString: MutatorString
    mutatorFloatValues: AvailableMutatorFloatValues
    mutatorIntValues: AvailableMutatorIntValues
    mutatorSparseBoolean: MutatorSparseBoolean
    mutatorSparseIntValues: AvailableMutatorSparseIntValues
    mutatorSparseFloatValues: AvailableMutatorSparseFloatValues
    def __init__(self, mutatorBoolean: _Optional[_Union[MutatorBoolean, _Mapping]] = ..., mutatorString: _Optional[_Union[MutatorString, _Mapping]] = ..., mutatorFloatValues: _Optional[_Union[AvailableMutatorFloatValues, _Mapping]] = ..., mutatorIntValues: _Optional[_Union[AvailableMutatorIntValues, _Mapping]] = ..., mutatorSparseBoolean: _Optional[_Union[MutatorSparseBoolean, _Mapping]] = ..., mutatorSparseIntValues: _Optional[_Union[AvailableMutatorSparseIntValues, _Mapping]] = ..., mutatorSparseFloatValues: _Optional[_Union[AvailableMutatorSparseFloatValues, _Mapping]] = ...) -> None: ...

class AvailableMutator(_message.Message):
    __slots__ = ["name", "category", "kind", "metadata", "id"]
    NAME_FIELD_NUMBER: _ClassVar[int]
    CATEGORY_FIELD_NUMBER: _ClassVar[int]
    KIND_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    name: str
    category: str
    kind: AvailableMutatorKind
    metadata: Metadata
    id: str
    def __init__(self, name: _Optional[str] = ..., category: _Optional[str] = ..., kind: _Optional[_Union[AvailableMutatorKind, _Mapping]] = ..., metadata: _Optional[_Union[Metadata, _Mapping]] = ..., id: _Optional[str] = ...) -> None: ...

class AvailableMapEntry(_message.Message):
    __slots__ = ["levelName", "gameMode", "levelLocation", "gameSize", "rounds", "preRoundSize", "warmUpSize", "allowedSpectators", "mutators", "metadata"]
    LEVELNAME_FIELD_NUMBER: _ClassVar[int]
    GAMEMODE_FIELD_NUMBER: _ClassVar[int]
    LEVELLOCATION_FIELD_NUMBER: _ClassVar[int]
    GAMESIZE_FIELD_NUMBER: _ClassVar[int]
    ROUNDS_FIELD_NUMBER: _ClassVar[int]
    PREROUNDSIZE_FIELD_NUMBER: _ClassVar[int]
    WARMUPSIZE_FIELD_NUMBER: _ClassVar[int]
    ALLOWEDSPECTATORS_FIELD_NUMBER: _ClassVar[int]
    MUTATORS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    levelName: str
    gameMode: str
    levelLocation: str
    gameSize: AvailableIntValue
    rounds: AvailableIntValue
    preRoundSize: AvailableIntValue
    warmUpSize: AvailableIntValue
    allowedSpectators: AvailableIntValue
    mutators: _containers.RepeatedCompositeFieldContainer[AvailableMutator]
    metadata: _containers.RepeatedCompositeFieldContainer[Metadata]
    def __init__(self, levelName: _Optional[str] = ..., gameMode: _Optional[str] = ..., levelLocation: _Optional[str] = ..., gameSize: _Optional[_Union[AvailableIntValue, _Mapping]] = ..., rounds: _Optional[_Union[AvailableIntValue, _Mapping]] = ..., preRoundSize: _Optional[_Union[AvailableIntValue, _Mapping]] = ..., warmUpSize: _Optional[_Union[AvailableIntValue, _Mapping]] = ..., allowedSpectators: _Optional[_Union[AvailableIntValue, _Mapping]] = ..., mutators: _Optional[_Iterable[_Union[AvailableMutator, _Mapping]]] = ..., metadata: _Optional[_Iterable[_Union[Metadata, _Mapping]]] = ...) -> None: ...

class AvailableTag(_message.Message):
    __slots__ = ["id", "metadata", "category"]
    ID_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    CATEGORY_FIELD_NUMBER: _ClassVar[int]
    id: str
    metadata: Metadata
    category: Category
    def __init__(self, id: _Optional[str] = ..., metadata: _Optional[_Union[Metadata, _Mapping]] = ..., category: _Optional[_Union[Category, str]] = ...) -> None: ...

class AvailableAssetCategoryTag(_message.Message):
    __slots__ = ["tagId", "name", "childrenTags", "metadata"]
    TAGID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    CHILDRENTAGS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    tagId: str
    name: str
    childrenTags: _containers.RepeatedScalarFieldContainer[str]
    metadata: Metadata
    def __init__(self, tagId: _Optional[str] = ..., name: _Optional[str] = ..., childrenTags: _Optional[_Iterable[str]] = ..., metadata: _Optional[_Union[Metadata, _Mapping]] = ...) -> None: ...

class AvailableAssetCategories(_message.Message):
    __slots__ = ["rootTags", "tags"]
    ROOTTAGS_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    rootTags: _containers.RepeatedCompositeFieldContainer[AvailableAssetCategoryTag]
    tags: _containers.RepeatedCompositeFieldContainer[AvailableAssetCategoryTag]
    def __init__(self, rootTags: _Optional[_Iterable[_Union[AvailableAssetCategoryTag, _Mapping]]] = ..., tags: _Optional[_Iterable[_Union[AvailableAssetCategoryTag, _Mapping]]] = ...) -> None: ...

class PlaygroundConstraints(_message.Message):
    __slots__ = ["maxNameSize", "maxDescriptionSize", "maxSecretSize", "maxMapsInRotation", "maxMutators", "maxConfigNameSize", "maxConfigDescriptionSize"]
    MAXNAMESIZE_FIELD_NUMBER: _ClassVar[int]
    MAXDESCRIPTIONSIZE_FIELD_NUMBER: _ClassVar[int]
    MAXSECRETSIZE_FIELD_NUMBER: _ClassVar[int]
    MAXMAPSINROTATION_FIELD_NUMBER: _ClassVar[int]
    MAXMUTATORS_FIELD_NUMBER: _ClassVar[int]
    MAXCONFIGNAMESIZE_FIELD_NUMBER: _ClassVar[int]
    MAXCONFIGDESCRIPTIONSIZE_FIELD_NUMBER: _ClassVar[int]
    maxNameSize: int
    maxDescriptionSize: int
    maxSecretSize: int
    maxMapsInRotation: int
    maxMutators: int
    maxConfigNameSize: int
    maxConfigDescriptionSize: int
    def __init__(self, maxNameSize: _Optional[int] = ..., maxDescriptionSize: _Optional[int] = ..., maxSecretSize: _Optional[int] = ..., maxMapsInRotation: _Optional[int] = ..., maxMutators: _Optional[int] = ..., maxConfigNameSize: _Optional[int] = ..., maxConfigDescriptionSize: _Optional[int] = ...) -> None: ...

class ModRulesDefinition(_message.Message):
    __slots__ = ["rulesVersion", "modBuilder"]
    RULESVERSION_FIELD_NUMBER: _ClassVar[int]
    MODBUILDER_FIELD_NUMBER: _ClassVar[int]
    rulesVersion: int
    modBuilder: bytes
    def __init__(self, rulesVersion: _Optional[int] = ..., modBuilder: _Optional[bytes] = ...) -> None: ...

class AvailableGameData(_message.Message):
    __slots__ = ["mutators", "maps", "modRules", "assetCategories"]
    MUTATORS_FIELD_NUMBER: _ClassVar[int]
    MAPS_FIELD_NUMBER: _ClassVar[int]
    MODRULES_FIELD_NUMBER: _ClassVar[int]
    ASSETCATEGORIES_FIELD_NUMBER: _ClassVar[int]
    mutators: _containers.RepeatedCompositeFieldContainer[AvailableMutator]
    maps: _containers.RepeatedCompositeFieldContainer[AvailableMapEntry]
    modRules: ModRulesDefinition
    assetCategories: AvailableAssetCategories
    def __init__(self, mutators: _Optional[_Iterable[_Union[AvailableMutator, _Mapping]]] = ..., maps: _Optional[_Iterable[_Union[AvailableMapEntry, _Mapping]]] = ..., modRules: _Optional[_Union[ModRulesDefinition, _Mapping]] = ..., assetCategories: _Optional[_Union[AvailableAssetCategories, _Mapping]] = ...) -> None: ...

class Blueprint(_message.Message):
    __slots__ = ["blueprintType", "name", "availableGameData", "metadata", "customData", "playgroundConstraints", "availableTags"]
    BLUEPRINTTYPE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    AVAILABLEGAMEDATA_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    CUSTOMDATA_FIELD_NUMBER: _ClassVar[int]
    PLAYGROUNDCONSTRAINTS_FIELD_NUMBER: _ClassVar[int]
    AVAILABLETAGS_FIELD_NUMBER: _ClassVar[int]
    blueprintType: str
    name: str
    availableGameData: AvailableGameData
    metadata: Metadata
    customData: bytes
    playgroundConstraints: PlaygroundConstraints
    availableTags: _containers.RepeatedCompositeFieldContainer[AvailableTag]
    def __init__(self, blueprintType: _Optional[str] = ..., name: _Optional[str] = ..., availableGameData: _Optional[_Union[AvailableGameData, _Mapping]] = ..., metadata: _Optional[_Union[Metadata, _Mapping]] = ..., customData: _Optional[bytes] = ..., playgroundConstraints: _Optional[_Union[PlaygroundConstraints, _Mapping]] = ..., availableTags: _Optional[_Iterable[_Union[AvailableTag, _Mapping]]] = ...) -> None: ...

class ShortCode(_message.Message):
    __slots__ = ["code"]
    CODE_FIELD_NUMBER: _ClassVar[int]
    code: str
    def __init__(self, code: _Optional[str] = ...) -> None: ...

class GetProgressionTypesRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class BlueprintInfo(_message.Message):
    __slots__ = ["blueprintType", "blueprintId"]
    BLUEPRINTTYPE_FIELD_NUMBER: _ClassVar[int]
    BLUEPRINTID_FIELD_NUMBER: _ClassVar[int]
    blueprintType: str
    blueprintId: str
    def __init__(self, blueprintType: _Optional[str] = ..., blueprintId: _Optional[str] = ...) -> None: ...

class GetProgressionTypesResponse(_message.Message):
    __slots__ = ["entries"]
    ENTRIES_FIELD_NUMBER: _ClassVar[int]
    entries: _containers.RepeatedCompositeFieldContainer[ProgressionEntry]
    def __init__(self, entries: _Optional[_Iterable[_Union[ProgressionEntry, _Mapping]]] = ...) -> None: ...

class GetScheduledBlueprintsRequest(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class GetScheduledBlueprintsResponse(_message.Message):
    __slots__ = ["blueprints"]
    BLUEPRINTS_FIELD_NUMBER: _ClassVar[int]
    blueprints: BlueprintInfo
    def __init__(self, blueprints: _Optional[_Union[BlueprintInfo, _Mapping]] = ...) -> None: ...

class GetBlueprintsByIdResponse(_message.Message):
    __slots__ = ["blueprint"]
    BLUEPRINT_FIELD_NUMBER: _ClassVar[int]
    blueprint: _containers.RepeatedCompositeFieldContainer[Blueprint]
    def __init__(self, blueprint: _Optional[_Iterable[_Union[Blueprint, _Mapping]]] = ...) -> None: ...

class GetConstraintsResponse(_message.Message):
    __slots__ = ["globalConstraints"]
    GLOBALCONSTRAINTS_FIELD_NUMBER: _ClassVar[int]
    globalConstraints: GlobalConstraints
    def __init__(self, globalConstraints: _Optional[_Union[GlobalConstraints, _Mapping]] = ...) -> None: ...

class ListPlaygroundsByOwnerResponse(_message.Message):
    __slots__ = ["playgroundResponses"]
    PLAYGROUNDRESPONSES_FIELD_NUMBER: _ClassVar[int]
    playgroundResponses: _containers.RepeatedCompositeFieldContainer[PlaygroundResponse]
    def __init__(self, playgroundResponses: _Optional[_Iterable[_Union[PlaygroundResponse, _Mapping]]] = ...) -> None: ...

class CreatePlaygroundRequest(_message.Message):
    __slots__ = ["blueprintType", "name", "description", "mutators", "mapRotation", "secret", "serverSettings", "restrictions", "originalModRules", "assetCategories", "teamComposition"]
    BLUEPRINTTYPE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    MUTATORS_FIELD_NUMBER: _ClassVar[int]
    MAPROTATION_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    SERVERSETTINGS_FIELD_NUMBER: _ClassVar[int]
    RESTRICTIONS_FIELD_NUMBER: _ClassVar[int]
    ORIGINALMODRULES_FIELD_NUMBER: _ClassVar[int]
    ASSETCATEGORIES_FIELD_NUMBER: _ClassVar[int]
    TEAMCOMPOSITION_FIELD_NUMBER: _ClassVar[int]
    blueprintType: str
    name: str
    description: StringValue
    mutators: _containers.RepeatedCompositeFieldContainer[Mutator]
    mapRotation: MapRotation
    secret: StringValue
    serverSettings: GameServerSettings
    restrictions: Restrictions
    originalModRules: bytes
    assetCategories: _containers.RepeatedCompositeFieldContainer[AssetCategory]
    teamComposition: TeamComposition
    def __init__(self, blueprintType: _Optional[str] = ..., name: _Optional[str] = ..., description: _Optional[_Union[StringValue, _Mapping]] = ..., mutators: _Optional[_Iterable[_Union[Mutator, _Mapping]]] = ..., mapRotation: _Optional[_Union[MapRotation, _Mapping]] = ..., secret: _Optional[_Union[StringValue, _Mapping]] = ..., serverSettings: _Optional[_Union[GameServerSettings, _Mapping]] = ..., restrictions: _Optional[_Union[Restrictions, _Mapping]] = ..., originalModRules: _Optional[bytes] = ..., assetCategories: _Optional[_Iterable[_Union[AssetCategory, _Mapping]]] = ..., teamComposition: _Optional[_Union[TeamComposition, _Mapping]] = ...) -> None: ...

class UpdatePlaygroundRequest(_message.Message):
    __slots__ = ["newPlayground"]
    NEWPLAYGROUND_FIELD_NUMBER: _ClassVar[int]
    newPlayground: Playground
    def __init__(self, newPlayground: _Optional[_Union[Playground, _Mapping]] = ...) -> None: ...

class DeletePlaygroundRequest(_message.Message):
    __slots__ = ["playgroundId"]
    PLAYGROUNDID_FIELD_NUMBER: _ClassVar[int]
    playgroundId: str
    def __init__(self, playgroundId: _Optional[str] = ...) -> None: ...

class GetPlaygroundRequest(_message.Message):
    __slots__ = ["playgroundId"]
    PLAYGROUNDID_FIELD_NUMBER: _ClassVar[int]
    playgroundId: str
    def __init__(self, playgroundId: _Optional[str] = ...) -> None: ...

class SharePlaygroundRequest(_message.Message):
    __slots__ = ["playgroundId"]
    PLAYGROUNDID_FIELD_NUMBER: _ClassVar[int]
    playgroundId: str
    def __init__(self, playgroundId: _Optional[str] = ...) -> None: ...

class SharePlaygroundResponse(_message.Message):
    __slots__ = ["shortCode"]
    SHORTCODE_FIELD_NUMBER: _ClassVar[int]
    shortCode: ShortCode
    def __init__(self, shortCode: _Optional[_Union[ShortCode, _Mapping]] = ...) -> None: ...

class CreatePlaygroundResponse(_message.Message):
    __slots__ = ["playgroundResponse"]
    PLAYGROUNDRESPONSE_FIELD_NUMBER: _ClassVar[int]
    playgroundResponse: PlaygroundResponse
    def __init__(self, playgroundResponse: _Optional[_Union[PlaygroundResponse, _Mapping]] = ...) -> None: ...

class UpdatePlaygroundResponse(_message.Message):
    __slots__ = ["playgroundResponse"]
    PLAYGROUNDRESPONSE_FIELD_NUMBER: _ClassVar[int]
    playgroundResponse: PlaygroundResponse
    def __init__(self, playgroundResponse: _Optional[_Union[PlaygroundResponse, _Mapping]] = ...) -> None: ...

class DeletePlaygroundResponse(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class PlaygroundInfoResponse(_message.Message):
    __slots__ = ["playground"]
    PLAYGROUND_FIELD_NUMBER: _ClassVar[int]
    playground: PlaygroundResponse
    def __init__(self, playground: _Optional[_Union[PlaygroundResponse, _Mapping]] = ...) -> None: ...
