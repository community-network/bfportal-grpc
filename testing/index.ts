import { CommunityGamesClient } from '../src/proto/communitygames_grpc_web_pb';
import * as communitygames from '../src/proto/communitygames_pb';
import * as grpcWeb from 'grpc-web';
import { load } from "protobufjs";
global.XMLHttpRequest = require('xhr2');
var fs = require('fs');

const communityGames = new CommunityGamesClient('https://kingston-prod-wgw-envoy.ops.dice.se', null);
var metadata = {
  "x-dice-tenancy": "prod_default-prod_default-kingston-common",
  "x-gateway-session-id": "web-38eb969a-cff6-4c98-befe-b9e610f3df0e",
  "x-grpc-web": "1",
  "x-user-agent": "grpc-web-javascript/0.1"
}


const request = new communitygames.GetPlaygroundRequest();
request.setPlaygroundid("bbe433c0-13fa-11ed-bc32-24a8c2c0764e");
const call = communityGames.getPlayground(request, metadata,
  (_err: grpcWeb.Error, response: communitygames.PlaygroundInfoResponse) => {
    console.log("err:", _err)
    var test = response.getPlayground()?.getOriginalplayground()?.getModrules()?.getCompatiblerules()?.getRules();
    if (test instanceof Uint8Array) {
      console.log(new TextDecoder().decode(test)) // blocky data
    }

    load("proto/communitygames.proto", function(err, root) {
      if (err)
        throw err;
      if (root == undefined) 
        return

      const AwesomeMessage = root.lookupType("web.communitygames.PlaygroundInfoResponse");
      // json variant
      let decoded = AwesomeMessage.decode(response.serializeBinary());
      fs.writeFile("test.json", JSON.stringify(decoded, null, 4), function(err: any) {
        if (err) {
            console.log(err);
        }
      });
    })
});

// const request = new communitygames.ListPlaygroundsByOwnerRequest();
// request.setBlueprinttype("vanilla");
// request.setProtocolversion("84668704");
// const call = communityGames.listPlaygroundsByOwner(request, metadata,
//   (_err: grpcWeb.Error, response: communitygames.ListPlaygroundsByOwnerResponse) => {
//     load("proto/communitygames.proto", function(err, root) {
//       if (err)
//         throw err;
//       if (root == undefined) 
//         return

//       const AwesomeMessage = root.lookupType("web.communitygames.ListPlaygroundsByOwnerResponse");

//       let decoded = AwesomeMessage.decode(response.serializeBinary());
//       fs.writeFile("test.json", JSON.stringify(decoded, null, 4), function(err: any) {
//         if (err) {
//             console.log(err);
//         }
//       });
//     })
// });

// const request = new communitygames.GetScheduledBlueprintsRequest();
// const call = communityGames.getScheduledBlueprints(request, metadata,
//   (_err: grpcWeb.Error, response: communitygames.GetScheduledBlueprintsResponse) => {

//     if (response.getBlueprints()?.getBlueprintid() == undefined)
//       return
    
//     const fields = communitygames.IncludeFields;

//     const request = new communitygames.GetBlueprintsByIdRequest();
//     request.setBlueprintidsList([response.getBlueprints()?.getBlueprintid()!])
//     request.setIncludefieldsList([fields.AVAILABLE_GAME_DATA, fields.METADATA, fields.CUSTOM_DATA, fields.CONSTRAINTS, fields.AVAILABLE_TAGS])
   
//     const call = communityGames.getBlueprintsById(request, metadata,
//       (_err: grpcWeb.Error, response: communitygames.GetBlueprintsByIdResponse) => {
//         load("proto/communitygames.proto", function(err, root) {
//           if (err)
//             throw err;
//           if (root == undefined) 
//             return
    
//           const AwesomeMessage = root.lookupType("web.communitygames.GetBlueprintsByIdResponse");
    
//           let decoded = AwesomeMessage.decode(response.serializeBinary());
//           fs.writeFile("test.json", JSON.stringify(decoded, null, 4), function(err: any) {
//             if (err) {
//                 console.log(err);
//             }
//           });
//         })
//     });
// });

// const request = new communitygames.GetConstraintsRequest();
// const call = communityGames.getConstraints(request, metadata,
//   (_err: grpcWeb.Error, response: communitygames.GetConstraintsResponse) => {
//     load("proto/communitygames.proto", function(err, root) {
//       if (err)
//         throw err;
//       if (root == undefined) 
//         return

//       const AwesomeMessage = root.lookupType("web.communitygames.GetConstraintsResponse");

//       let decoded = AwesomeMessage.decode(response.serializeBinary());
//       fs.writeFile("test.json", JSON.stringify(decoded, null, 4), function(err: any) {
//         if (err) {
//             console.log(err);
//         }
//       });
//     })
// });

// const request = new communitygames.SharePlaygroundRequest();
// request.setPlaygroundid("42924ad0-7d1d-11ec-bd24-e2cf76b022fe")
// const call = communityGames.sharePlayground(request, metadata,
//   (_err: grpcWeb.Error, response: communitygames.SharePlaygroundResponse) => {
//     load("proto/communitygames.proto", function(err, root) {
//       if (err)
//         throw err;
//       if (root == undefined) 
//         return

//       const AwesomeMessage = root.lookupType("web.communitygames.SharePlaygroundResponse");

//       let decoded = AwesomeMessage.decode(response.serializeBinary());
//       fs.writeFile("test.json", JSON.stringify(decoded, null, 4), function(err: any) {
//         if (err) {
//             console.log(err);
//         }
//       });
//     })
// });

// const request = new communitygames.GetProgressionTypesRequest();
// const call = communityGames.getProgressionTypes(request, metadata,
//   (_err: grpcWeb.Error, response: communitygames.GetProgressionTypesResponse) => {
//     load("proto/communitygames.proto", function(err, root) {
//       if (err)
//         throw err;
//       if (root == undefined) 
//         return

//       const AwesomeMessage = root.lookupType("web.communitygames.GetProgressionTypesResponse");

//       let decoded = AwesomeMessage.decode(response.serializeBinary());
//       fs.writeFile("test.json", JSON.stringify(decoded, null, 4), function(err: any) {
//         if (err) {
//             console.log(err);
//         }
//       });
//     })
// });

// const request = new communitygames.DeletePlaygroundRequest();
// request.setPlaygroundid("e2c7d5a0-3772-11ed-87cf-05cba9cc70d6");
// const call = communityGames.deletePlayground(request, metadata,
//   (_err: grpcWeb.Error, response: communitygames.DeletePlaygroundResponse) => {
//     if (_err)
//       return "failed"
// });


















// load("proto/communitygames.proto", function(err, root) {
//   if (err)
//     throw err;
//   if (root == undefined) 
//     return

//   var enc = new TextEncoder();
//   // from copy as fetch in chrome or firefox
//   var encoded = enc.encode("\u0000\u0000\u0000\u0000\u0012\u0007vanilla\u001a\u0004test\"\u0006\n\u0004test*7\n\u0016MaxPlayerCount_PerTeam\u0012\tWA_GM_All\u001a\u0006B\u0004\b \u0010\u0003\"\n297673875127\n5\n\fMP_Discarded\u0012\rConquestSmall\u0018@ \u00012\u000eConquestSmall0@\bH\u0004B\u0006\n\u0004testb\f\n\u0004\b\u0001\u0010 \n\u0004\b\u0002\u0010 ");

//   const AwesomeMessage = root.lookupType("web.communitygames.CreatePlaygroundRequest");

//   var decodedMessage = AwesomeMessage.decode(encoded);
//    fs.writeFile("test.json", JSON.stringify(decodedMessage, null, 4), function(err: any) {
//     if (err) {
//         console.log(err);
//     }
//   });
// })

// load("proto/communitygames.proto", function(err, root) {
//   if (err)
//     throw err;
//   if (root == undefined) 
//     return

//   const AwesomeMessage = root.lookupType("web.communitygames.CreatePlaygroundRequest");

//   var encoded = {
//     "blueprintType": "vanilla",
//     "playgroundName": "testa",
//     "playgroundDescription": {
//         "value": "testa"
//     },
//     "mutators": [
//         {
//             "name": "MaxPlayerCount_PerTeam",
//             "category": "WA_GM_All",
//             "kind": {
//                 "intSparse": {
//                     "defaultValue": 32,
//                     "size": 3
//                 }
//             },
//             "mutatorId": "2976738751"
//         }
//     ],
//     "mapRotation": {
//         "maps": [
//             {
//                 "mapname": "MP_Discarded",
//                 "mode": "ConquestSmall",
//                 "gameSize": 64,
//                 "rounds": 1,
//                 "location": "ConquestSmall0",
//                 "warmUpSize": 8,
//                 "allowedSpectators": 4
//             }
//         ]
//     },
//     "settings": {
//         "name": "testa"
//     },
//     "teamComposition": {
//         "teams": {
//             "teamId": 2,
//             "capacity": 32
//         }
//     }
//   }

//   var encodedMessage = AwesomeMessage.encode(encoded).finish();
//   const request = communitygames.CreatePlaygroundRequest.deserializeBinary(encodedMessage);
//   console.log(request)
  
//   const call = communityGames.createPlayground(request, metadata,
//     (_err: grpcWeb.Error, response: communitygames.CreatePlaygroundResponse) => {
//       console.log(_err)

//       const AwesomeMessage = root.lookupType("web.communitygames.CreatePlaygroundResponse");

//       let decoded = AwesomeMessage.decode(response.serializeBinary());
//       fs.writeFile("test.json", JSON.stringify(decoded, null, 4), function(err: any) {
//         if (err) {
//             console.log(err);
//         }
//       });
//   });
// })








// load("proto/communitygames.proto", function(err, root) {
//   if (err)
//     throw err;
//   if (root == undefined) 
//     return

//   var enc = new TextEncoder();
//   // from copy as fetch in chrome or firefox
//   var encoded = enc.encode("\u0000\u0000\u0000\u00017\u0012´\u0002\n$355a31a0-3778-11ed-a187-5967b3f31df6\u001a\u0007vanilla\"\u0005testa*\u0004test27\n\u0016MaxPlayerCount_PerTeam\u0012\tWA_GM_All\u001a\u0006B\u0004\b \u0010\u0003\"\n2976738751:7\n5\n\fMP_Discarded\u0012\rConquestSmall\u0018@ \u00012\u000eConquestSmall0@\bH\u0004J@8e8764e80b0c1a012c7491b310c5b6c25bb19114e237608b33d876e41f7baab2Z\f\b¾­\u0006\u0010À§¶\u0003b\f\b¾­\u0006\u0010À§¶\u0003j\u0007\n\u0005testar\u000e\b¹À·\n\u0010íæú\u0002\u0018\u0001\u0001\f\n\u0004\b\u0001\u0010 \n\u0004\b\u0002\u0010 ");

//   const AwesomeMessage = root.lookupType("web.communitygames.UpdatePlaygroundRequest");

//   var decodedMessage = AwesomeMessage.decode(encoded);
//   fs.writeFile("test.json", JSON.stringify(decodedMessage, null, 4), function(err: any) {
//     if (err) {
//         console.log(err);
//     }
//   });
// })