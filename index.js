var BfPortal = module.exports = null;
BfPortal.authentication = require("./src/proto/authentication_pb");
BfPortal.ClientAuthenticationClient = require("./src/proto/authentication_grpc_web_pb");
BfPortal.communitygames = require("./src/proto/communitygames_pb");
BfPortal.CommunityGamesClient = require("./src/proto/communitygames_grpc_web_pb");
BfPortal.localization = require("./src/proto/localization_pb")
BfPortal.ClientLocalizationClient = require("./src/proto/localization_grpc_web_pb");;
BfPortal.reporting = require("./src/proto/reporting_pb");
BfPortal.WebReportingClient = require("./src/proto/reporting_grpc_web_pb");