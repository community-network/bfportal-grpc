import asyncio
import sonora.aio
from bfportal_grpc import localization_pb2, localization_pb2_grpc

async def test_localization():
    async with sonora.aio.insecure_web_channel(
            f"https://kingston-prod-wgw-envoy.ops.dice.se"
        ) as channel:
            stub = localization_pb2_grpc.ClientLocalizationStub(channel)
            response: localization_pb2.GetTranslationsResponse = await stub.getTranslations(localization_pb2.GetTranslationsRequest(locale="ru-RU"), metadata=(
                ('x-dice-tenancy', 'prod_default-prod_default-kingston-common'),
                ('x-gateway-session-id', 'web-34daba86-0e80-47e4-9a9b-57291a5dc655'),
                ('x-grpc-web', '1'),
                ('x-user-agent', 'grpc-web-javascript/0.1')
            ))
            print(response)
            
if __name__ == "__main__":
    asyncio.run(test_localization())