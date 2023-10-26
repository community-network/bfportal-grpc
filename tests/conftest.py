import os
import pytest
import sonora.aio
from dotenv import load_dotenv

load_dotenv()

# todo: create a model playground object and use that


@pytest.fixture()
def gateway_session_id() -> str:
    _ = os.getenv("GATEWAY_SESSION_ID", None)
    if _ is None:
        pytest.fail("GATEWAY_SESSION_ID env variable needs to be set.")
    return _


@pytest.fixture()
def request_metadata(gateway_session_id):
    return (
        ("x-dice-tenancy", "prod_default-prod_default-kingston-common"),
        ("x-gateway-session-id", gateway_session_id),
        ("x-grpc-web", "1"),
        ("x-user-agent", "grpc-web-javascript/0.1"),
    )


@pytest.fixture()
def playground_id() -> str:
    return "a56cf4d0-c713-11ec-b056-e3dbf89f52ce"


@pytest.fixture
async def web_channel() -> "sonora.aio.WebChannel":
    async with sonora.aio.insecure_web_channel(
        f"https://kingston-prod-wgw-envoy.ops.dice.se"
    ) as channel:
        yield channel
