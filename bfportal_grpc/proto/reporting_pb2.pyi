from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Category(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = []
    UNKNOWN_CATEGORY: _ClassVar[Category]
    CHEATING: _ClassVar[Category]
    HARASSMENT: _ClassVar[Category]
    SPAM: _ClassVar[Category]
    PLAGIARISM: _ClassVar[Category]
    HATE_SPEECH: _ClassVar[Category]
    SEXUALLY_EXPLICIT: _ClassVar[Category]
    CHILD_SOLICITATION: _ClassVar[Category]
    TERRORIST_THREAT: _ClassVar[Category]
    CLIENT_HACK: _ClassVar[Category]
    SUICIDE_THREAT: _ClassVar[Category]
    DOXING: _ClassVar[Category]
    ADVERTISING: _ClassVar[Category]
    INAPPROPRIATE: _ClassVar[Category]
    VIOLENT: _ClassVar[Category]
    OFFENSIVE: _ClassVar[Category]
    OFFENSIVE_CHAT: _ClassVar[Category]
    OFFENSIVE_NAME: _ClassVar[Category]
UNKNOWN_CATEGORY: Category
CHEATING: Category
HARASSMENT: Category
SPAM: Category
PLAGIARISM: Category
HATE_SPEECH: Category
SEXUALLY_EXPLICIT: Category
CHILD_SOLICITATION: Category
TERRORIST_THREAT: Category
CLIENT_HACK: Category
SUICIDE_THREAT: Category
DOXING: Category
ADVERTISING: Category
INAPPROPRIATE: Category
VIOLENT: Category
OFFENSIVE: Category
OFFENSIVE_CHAT: Category
OFFENSIVE_NAME: Category

class StringValue(_message.Message):
    __slots__ = ["value"]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    value: str
    def __init__(self, value: _Optional[str] = ...) -> None: ...

class ReportPlaygroundRequest(_message.Message):
    __slots__ = ["protocolVersion", "playgroundId", "category", "requesterEmail", "subject"]
    PROTOCOLVERSION_FIELD_NUMBER: _ClassVar[int]
    PLAYGROUNDID_FIELD_NUMBER: _ClassVar[int]
    CATEGORY_FIELD_NUMBER: _ClassVar[int]
    REQUESTEREMAIL_FIELD_NUMBER: _ClassVar[int]
    SUBJECT_FIELD_NUMBER: _ClassVar[int]
    protocolVersion: str
    playgroundId: str
    category: Category
    requesterEmail: StringValue
    subject: StringValue
    def __init__(self, protocolVersion: _Optional[str] = ..., playgroundId: _Optional[str] = ..., category: _Optional[_Union[Category, str]] = ..., requesterEmail: _Optional[_Union[StringValue, _Mapping]] = ..., subject: _Optional[_Union[StringValue, _Mapping]] = ...) -> None: ...

class ReportPlaygroundResponse(_message.Message):
    __slots__ = ["petitionId"]
    PETITIONID_FIELD_NUMBER: _ClassVar[int]
    petitionId: str
    def __init__(self, petitionId: _Optional[str] = ...) -> None: ...
