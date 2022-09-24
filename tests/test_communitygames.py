import asyncio
import sonora.aio
from bfportal_grpc_python.proto import communitygames_pb2, communitygames_pb2_grpc

async def test__playground():
    async with sonora.aio.insecure_web_channel(
        f"https://kingston-prod-wgw-envoy.ops.dice.se"
    ) as channel:
        stub = communitygames_pb2_grpc.CommunityGamesStub(channel)
        response: communitygames_pb2.PlaygroundInfoResponse = await stub.getPlayground(communitygames_pb2.GetPlaygroundRequest(playgroundId="10992a10-461a-11ec-8de0-d9f491f92236"), metadata=(
            ('x-dice-tenancy', 'prod_default-prod_default-kingston-common'),
            ('x-gateway-session-id', 'web-c6b312c9-2520-4fde-958d-60ae71840a65'),
            ('x-grpc-web', '1'),
            ('x-user-agent', 'grpc-web-javascript/0.1')
        ))
        assert isinstance(response.playground.originalPlayground.name, str)
            
if __name__ == "__main__":
    asyncio.run(test__playground())