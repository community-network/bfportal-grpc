const authentication = require("./proto/authentication_pb");
const ClientAuthenticationClient = require("./proto/authentication_grpc_web_pb");
const communitygames = require("./proto/communitygames_pb");
const CommunityGamesClient = require("./proto/communitygames_grpc_web_pb");
const localization = require("./proto/localization_pb")
const ClientLocalizationClient = require("./proto/localization_grpc_web_pb");;
const reporting = require("./proto/reporting_pb");
const WebReportingClient = require("./proto/reporting_grpc_web_pb");

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