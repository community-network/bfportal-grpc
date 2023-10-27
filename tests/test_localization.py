from bfportal_grpc import localization_pb2, localization_pb2_grpc


async def test_localization(request_metadata, web_channel):
    stub = localization_pb2_grpc.ClientLocalizationStub(web_channel)
    response: localization_pb2.GetTranslationsResponse = await stub.getTranslations(
        localization_pb2.GetTranslationsRequest(locale="en-US"),
        metadata=request_metadata,
    )

    assert response is not None
