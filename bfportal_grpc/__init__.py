try:
    from bfportal_grpc.proto import (
        authentication_pb2_grpc,
        authentication_pb2,
        communitygames_pb2_grpc,
        communitygames_pb2,
        localization_pb2_grpc,
        localization_pb2,
        reporting_pb2_grpc,
        reporting_pb2
    )
except ImportError:
    print("Please run `poetry run compile-proto` to compile the proto files.")
    pass
