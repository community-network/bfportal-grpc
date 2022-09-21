const authentication = require("./src/proto/authentication_pb");
const ClientAuthenticationClient = require("./src/proto/authentication_grpc_web_pb");
const communitygames = require("./src/proto/communitygames_pb");
const CommunityGamesClient = require("./src/proto/communitygames_grpc_web_pb");
const localization = require("./src/proto/localization_pb")
const ClientLocalizationClient = require("./src/proto/localization_grpc_web_pb");;
const reporting = require("./src/proto/reporting_pb");
const WebReportingClient = require("./src/proto/reporting_grpc_web_pb");

var BfPortal = module.exports = {
    ClientAuthenticationClient,
    CommunityGamesClient,
    ClientLocalizationClient,
    WebReportingClient
};
BfPortal.authentication = authentication;
BfPortal.communitygames = communitygames;
BfPortal.localization = localization;
BfPortal.reporting = reporting;
export default BfPortal;