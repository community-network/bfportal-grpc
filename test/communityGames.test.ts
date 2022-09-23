import { CommunityGamesClient, communitygames } from '../src/index';
global.XMLHttpRequest = require('xhr2');
import { load } from "protobufjs";
import { sessionId, testPlayground } from './config';

const metadata = {
  'x-dice-tenancy': 'prod_default-prod_default-kingston-common',
  'x-gateway-session-id': sessionId,
  'x-grpc-web': '1',
  'x-user-agent': 'grpc-web-javascript/0.1',
}
const communityGames = new CommunityGamesClient('https://kingston-prod-wgw-envoy.ops.dice.se', null);

test('getPlayground', async () => {
    const request = new communitygames.GetPlaygroundRequest();
    request.setPlaygroundid(testPlayground);
    const response = await communityGames.getPlayground(request, metadata);
    const modRules = response.getPlayground()?.getOriginalplayground()?.getModrules()?.getCompatiblerules()?.getRules();
    if (modRules instanceof Uint8Array) {
      // console.log(new TextDecoder().decode(modRules))
    }
    const playgroundName = response.getPlayground()?.getOriginalplayground()?.getName();
    expect(typeof playgroundName).toBe("string");
});

test('listPlaygroundsByOwner', async () => {
    const request = new communitygames.ListPlaygroundsByOwnerRequest();
    request.setBlueprinttype("vanilla");
    request.setProtocolversion("84668704");
    const response = await communityGames.listPlaygroundsByOwner(request, metadata);
    const playgroundName = response.getPlaygroundresponsesList()?.[0].getOriginalplayground()?.getName();
    expect(typeof playgroundName).toBe("string");
    
    const root = await load("proto/communitygames.proto");
    const AwesomeMessage = root.lookupType("web.communitygames.ListPlaygroundsByOwnerResponse");
    let decoded = AwesomeMessage.decode(response.serializeBinary());
    // console.log(JSON.stringify(decoded, null, 4))
});

test('listPlaygroundsByOwner', async () => {
    const scheduledBlueprintsRequest = new communitygames.GetScheduledBlueprintsRequest();
    const scheduledBlueprintsResponse = await communityGames.getScheduledBlueprints(scheduledBlueprintsRequest, metadata)
    expect(typeof scheduledBlueprintsResponse.getBlueprints()?.getBlueprintid()).toBe("string");
    const fields = communitygames.IncludeFields;
    const blueprintRequest = new communitygames.GetBlueprintsByIdRequest();
    blueprintRequest.setBlueprintidsList([scheduledBlueprintsResponse.getBlueprints()?.getBlueprintid()!])
    blueprintRequest.setIncludefieldsList([fields.AVAILABLE_GAME_DATA, fields.METADATA, fields.CUSTOM_DATA, fields.CONSTRAINTS, fields.AVAILABLE_TAGS])
    const blueprintResponse = await communityGames.getBlueprintsById(blueprintRequest, metadata);
    const blueprintName = blueprintResponse.getBlueprintList()?.[0].getName();
    expect(typeof blueprintName).toBe("string");
});

test('GetConstraintsRequest', async () => {
    const request = new communitygames.GetConstraintsRequest();
    const response = await communityGames.getConstraints(request, metadata);
    expect(typeof response.getGlobalconstraints()?.getMaxgameserversperplayer()).toBe("number");
});

test('SharePlaygroundRequest', async () => {
    const request = new communitygames.SharePlaygroundRequest();
    request.setPlaygroundid(testPlayground)
    const response = await communityGames.sharePlayground(request, metadata);
    expect(typeof response.getShortcode()?.getCode()).toBe("string");
});

test('GetProgressionTypesRequest', async () => {
    const request = new communitygames.GetProgressionTypesRequest();
    const response = await communityGames.getProgressionTypes(request, metadata);
    expect(typeof response.getEntriesList()?.[0].getProgressionmode()).toBe("string");
});