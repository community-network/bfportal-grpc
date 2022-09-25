import asyncio
import aiohttp
import urllib.parse

class Cookie:
    sid: str
    remid: str
    
    def __init__(self, sid: str, remid: str):
        self.sid = sid
        self.remid = remid

async def getBf2042GatewaySession(cookie: Cookie) -> str:
    async with aiohttp.ClientSession() as session:
        url = "https://accounts.ea.com/connect/auth?client_id=KINGSTON_COMP_APP&locale=en_US&redirect_uri=https%3A%2F%2Fportal.battlefield.com%2F&response_type=code"
        headers = {
            "Cookie": f"sid={cookie.sid}; remid={cookie.remid};"
        }
        async with session.get(url=url, headers=headers, allow_redirects=False) as r:
            redirect = r.headers["Location"]
            access_code = urllib.parse.urlparse(
                redirect).query.split("=")[1]
            return access_code

if __name__ == "__main__":
    asyncio.run(getBf2042GatewaySession())