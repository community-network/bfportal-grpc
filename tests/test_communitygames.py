import pytest
from bfportal_grpc import communitygames_pb2
from bfportal_grpc.proto.communitygames_pb2_grpc import CommunityGamesStub


@pytest.fixture
def stub(web_channel) -> CommunityGamesStub:
    yield CommunityGamesStub(web_channel)


async def test_get_playground(playground_id, request_metadata, stub):
    response: communitygames_pb2.PlaygroundInfoResponse = await stub.getPlayground(
        communitygames_pb2.GetPlaygroundRequest(playgroundId=playground_id),
        metadata=request_metadata,
    )
    playground = response.playground.validatedPlayground

    assert playground is not None
    assert playground.playgroundId == playground_id
    assert playground.name == "Portal Helper Discord Bot's Api test field"
