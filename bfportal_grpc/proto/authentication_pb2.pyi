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

class Reason(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    NONE: _ClassVar[Reason]
    PLAYER: _ClassVar[Reason]
    SYNC: _ClassVar[Reason]

class UserBits(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    USER_BIT_UNSPECIFIED: _ClassVar[UserBits]
    USER_BIT_ACCEPTED_TOS: _ClassVar[UserBits]
    USER_BIT_ENABLE_USERSHARING: _ClassVar[UserBits]
    USER_BIT_ENABLE_CRASHREPORTS: _ClassVar[UserBits]
    USER_BIT_COMPLETED_TUTORIAL: _ClassVar[UserBits]
    USER_BIT_CLIENT_ENABLE_USAGESHARING: _ClassVar[UserBits]
UNKNOWN: Platform
PC: Platform
PS4: Platform
XBOXONE: Platform
PS5: Platform
XBSX: Platform
COMMON: Platform
NONE: Reason
PLAYER: Reason
SYNC: Reason
USER_BIT_UNSPECIFIED: UserBits
USER_BIT_ACCEPTED_TOS: UserBits
USER_BIT_ENABLE_USERSHARING: UserBits
USER_BIT_ENABLE_CRASHREPORTS: UserBits
USER_BIT_COMPLETED_TUTORIAL: UserBits
USER_BIT_CLIENT_ENABLE_USAGESHARING: UserBits

class PlayerInfo(_message.Message):
    __slots__ = ["nucleusId", "personaId", "platformId"]
    NUCLEUSID_FIELD_NUMBER: _ClassVar[int]
    PERSONAID_FIELD_NUMBER: _ClassVar[int]
    PLATFORMID_FIELD_NUMBER: _ClassVar[int]
    nucleusId: int
    personaId: int
    platformId: int
    def __init__(self, nucleusId: _Optional[int] = ..., personaId: _Optional[int] = ..., platformId: _Optional[int] = ...) -> None: ...

class AuthRequest(_message.Message):
    __slots__ = ["authCode", "redirectUri", "product", "firstPartyId", "platform"]
    AUTHCODE_FIELD_NUMBER: _ClassVar[int]
    REDIRECTURI_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_FIELD_NUMBER: _ClassVar[int]
    FIRSTPARTYID_FIELD_NUMBER: _ClassVar[int]
    PLATFORM_FIELD_NUMBER: _ClassVar[int]
    authCode: str
    redirectUri: str
    product: str
    firstPartyId: str
    platform: Platform
    def __init__(self, authCode: _Optional[str] = ..., redirectUri: _Optional[str] = ..., product: _Optional[str] = ..., firstPartyId: _Optional[str] = ..., platform: _Optional[_Union[Platform, str]] = ...) -> None: ...

class Duration(_message.Message):
    __slots__ = ["seconds", "nanos"]
    SECONDS_FIELD_NUMBER: _ClassVar[int]
    NANOS_FIELD_NUMBER: _ClassVar[int]
    seconds: int
    nanos: int
    def __init__(self, seconds: _Optional[int] = ..., nanos: _Optional[int] = ...) -> None: ...

class TimeTravel(_message.Message):
    __slots__ = ["offset"]
    OFFSET_FIELD_NUMBER: _ClassVar[int]
    offset: Duration
    def __init__(self, offset: _Optional[_Union[Duration, _Mapping]] = ...) -> None: ...

class ProtocolVersionOverride(_message.Message):
    __slots__ = ["original", "overridden", "reason"]
    ORIGINAL_FIELD_NUMBER: _ClassVar[int]
    OVERRIDDEN_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    original: str
    overridden: str
    reason: Reason
    def __init__(self, original: _Optional[str] = ..., overridden: _Optional[str] = ..., reason: _Optional[_Union[Reason, str]] = ...) -> None: ...

class Empty(_message.Message):
    __slots__ = []
    def __init__(self) -> None: ...

class AuthResponse(_message.Message):
    __slots__ = ["sessionId", "player", "userBits", "timeTravel", "protocolVersionOverride"]
    SESSIONID_FIELD_NUMBER: _ClassVar[int]
    PLAYER_FIELD_NUMBER: _ClassVar[int]
    USERBITS_FIELD_NUMBER: _ClassVar[int]
    TIMETRAVEL_FIELD_NUMBER: _ClassVar[int]
    PROTOCOLVERSIONOVERRIDE_FIELD_NUMBER: _ClassVar[int]
    sessionId: str
    player: PlayerInfo
    userBits: _containers.RepeatedScalarFieldContainer[UserBits]
    timeTravel: TimeTravel
    protocolVersionOverride: ProtocolVersionOverride
    def __init__(self, sessionId: _Optional[str] = ..., player: _Optional[_Union[PlayerInfo, _Mapping]] = ..., userBits: _Optional[_Iterable[_Union[UserBits, str]]] = ..., timeTravel: _Optional[_Union[TimeTravel, _Mapping]] = ..., protocolVersionOverride: _Optional[_Union[ProtocolVersionOverride, _Mapping]] = ...) -> None: ...
