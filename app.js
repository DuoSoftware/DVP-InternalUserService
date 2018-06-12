/**
 * Created by Pawan on 6/11/2018.
 */
var restify = require('restify');
var messageFormatter = require('dvp-common-lite/CommonMessageGenerator/ClientMessageJsonFormatter.js');
var config = require('config');
var port = config.Host.port || 3000;
var version=config.Host.version;
var hpath=config.Host.hostpath;
var logger = require('dvp-common-lite/LogHandler/CommonLogHandler.js').logger;
var uuid = require('node-uuid');
var jwt = require('restify-jwt');
var secret = require('dvp-common-lite/Authentication/Secret.js');
var authorization = require('dvp-common-lite/Authentication/Authorization.js');


var RestServer = restify.createServer({
    name: "myapp",
    version: '1.0.0'
});

restify.CORS.ALLOW_HEADERS.push('authorization');
RestServer.use(restify.CORS());
RestServer.use(restify.fullResponse());
RestServer.use(jwt({secret: secret.Secret}));
RestServer.listen(port, function () {
    console.log('%s listening at %s', RestServer.name, RestServer.url);

});
RestServer.use(restify.bodyParser());
RestServer.use(restify.acceptParser(RestServer.acceptable));
RestServer.use(restify.queryParser());

var userService = require("./RecoveryUserService.js");



app.get('/DVP/API/:version/Users', jwt({secret: secret.Secret}),authorization({resource:"user", action:"read"}), userService.GetUsers);
app.get('/DVP/API/:version/User/:name', jwt({secret: secret.Secret}),authorization({resource:"user", action:"read"}), userService.GetUser);
app.get('/DVP/API/:version/User/:name/Operations/:Action', jwt({secret: secret.Secret}),authorization({resource:"user", action:"read"}), userService.UserIsAllowToOutbound);
app.get('/DVP/API/:version/UsersByIds', jwt({secret: secret.Secret}),authorization({resource:"user", action:"read"}), userService.GetUsersByIDs);
app.get('/DVP/API/:version/UsersByRole/:role', jwt({secret: secret.Secret}),authorization({resource:"user", action:"read"}), userService.GetUsersByRole);
app.post('/DVP/API/:version/UsersByRoles', jwt({secret: secret.Secret}),authorization({resource:"user", action:"read"}), userService.GetUsersByRoles);

app.get('/DVP/API/:version/User/:name/exsists', jwt({secret: secret.Secret}),authorization({resource:"user", action:"read"}), userService.UserExists);
app.get('/DVP/API/:version/User/:name/invitable', jwt({secret: secret.Secret}),authorization({resource:"user", action:"read"}), userService.UserInvitable);
app.get('/DVP/API/:version/UserAccount/:name/exsists', jwt({secret: secret.Secret}),authorization({resource:"user", action:"read"}), userService.UserAccountExists);


app.delete('/DVP/API/:version/User/:name', jwt({secret: secret.Secret}),authorization({resource:"user", action:"delete"}), userService.DeleteUser);
app.put('/DVP/API/:version/User/ReActivate/:username', jwt({secret: secret.Secret}),authorization({resource:"user", action:"write"}), userService.ReActivateUser);
app.post('/DVP/API/:version/User', jwt({secret: secret.Secret}),authorization({resource:"user", action:"write"}), userService.CreateUser);
app.put('/DVP/API/:version/User/:name', jwt({secret: secret.Secret}),authorization({resource:"user", action:"write"}), userService.UpdateUser);
app.put('/DVP/API/:version/User/FileCategory/:category', jwt({secret: secret.Secret}),authorization({resource:"user", action:"write"}), userService.AddFileCategoryToUser);
app.put('/DVP/API/:version/User/:user/FileCategory/:category', jwt({secret: secret.Secret}),authorization({resource:"userfilecategory", action:"write"}), userService.AddFileCategoryToSpecificUser);
/*app.put('/DVP/API/:version/User/Allow/FileCategories', jwt({secret: secret.Secret}),authorization({resource:"user", action:"write"}), userService.AddFileCategoriesToUser);*/
app.delete('/DVP/API/:version/User/FileCategory/:category', jwt({secret: secret.Secret}),authorization({resource:"userfilecategory", action:"delete"}), userService.RemoveFileCategoryFromUser);
app.delete('/DVP/API/:version/User/:user/FileCategory/:category', jwt({secret: secret.Secret}),authorization({resource:"userfilecategory", action:"delete"}), userService.RemoveFileCategoryFromSpecificUser);
app.get('/DVP/API/:version/FileCategories', jwt({secret: secret.Secret}),authorization({resource:"userfilecategory", action:"read"}), userService.GetFileCategories);

app.get('/DVP/API/:version/Myprofile',jwt({secret: secret.Secret}),authorization({resource:"myUserProfile", action:"read"}),userService.GetMyrProfile);
app.get('/DVP/API/:version/Mylocation',jwt({secret: secret.Secret}),authorization({resource:"myUserProfile", action:"write"}),userService.SetMyLocation);
app.get('/DVP/API/:version/Mylanguages',jwt({secret: secret.Secret}),authorization({resource:"myUserProfile", action:"write"}),userService.GetMyLanguages);



app.put('/DVP/API/:version/User/:name/location',jwt({secret: secret.Secret}),authorization({resource:"userProfile", action:"write"}),userService.SetLocation);
app.get('/DVP/API/:version/User/:name/profile', jwt({secret: secret.Secret}),authorization({resource:"userProfile", action:"read"}), userService.GetUserProfile);
app.get('/DVP/API/:version/User/profilebycontact/:category/:contact', jwt({secret: secret.Secret}),authorization({resource:"userProfile", action:"read"}), userService.GetUserProfileByContact);
app.get('/DVP/API/:version/User/profilebyresourceid/:resourceid', jwt({secret: secret.Secret}),authorization({resource:"userProfile", action:"read"}), userService.GetUserProfileByResourceId);
app.get('/DVP/API/:version/User/:name/profile/veeryformat/:contact', jwt({secret: secret.Secret}),authorization({resource:"userProfile", action:"read"}), userService.GetARDSFriendlyContactObject);
app.get('/DVP/API/:version/Myprofile/veeryformat/:contact', jwt({secret: secret.Secret}),authorization({resource:"myUserProfile", action:"read"}), userService.GetMyARDSFriendlyContactObject);


app.put('/DVP/API/:version/User/:name/profile', jwt({secret: secret.Secret}),authorization({resource:"userProfile", action:"write"}), userService.UpdateUserProfile);
app.put('/DVP/API/:version/Myprofile', jwt({secret: secret.Secret}),authorization({resource:"myUserProfile", action:"write"}), userService.UpdateMyUserProfile);
app.put('/DVP/API/:version/Myprofile/Password', jwt({secret: secret.Secret}),authorization({resource:"myUserProfile", action:"write"}), userService.UpdateMyPassword);




app.put('/DVP/API/:version/User/:name/profile/resource/:resourceid', jwt({secret: secret.Secret}),authorization({resource:"userProfile", action:"write"}), userService.SetUserProfileResourceId);


app.put('/DVP/API/:version/User/:name/profile/password', jwt({secret: secret.Secret}),authorization({resource:"userProfile", action:"write"}), userService.UpdateUserProfilePassword);
app.put('/DVP/API/:version/User/:name/profile/email/:email', jwt({secret: secret.Secret}),authorization({resource:"userProfile", action:"write"}), userService.UpdateUserProfileEmail);
app.put('/DVP/API/:version/User/:name/profile/phonen/:number', jwt({secret: secret.Secret}),authorization({resource:"userProfile", action:"write"}), userService.UpdateUserProfilePhone);
app.put('/DVP/API/:version/User/:name/profile/contact/:contact', jwt({secret: secret.Secret}),authorization({resource:"userProfile", action:"write"}), userService.UpdateUserProfileContact);
app.delete('/DVP/API/:version/User/:name/profile/contact/:contact', jwt({secret: secret.Secret}),authorization({resource:"userProfile", action:"delete"}), userService.RemoveUserProfileContact);


app.put('/DVP/API/:version/Myprofile/contact/:contact', jwt({secret: secret.Secret}),authorization({resource:"myUserProfile", action:"write"}), userService.UpdateMyUserProfileContact);
app.delete('/DVP/API/:version/Myprofile/contact/:contact', jwt({secret: secret.Secret}),authorization({resource:"myUserProfile", action:"delete"}), userService.RemoveMyUserProfileContact);



app.get('/DVP/API/:version/Users/:name/Scope',jwt({secret: secret.Secret}), authorization({resource:"userScope", action:"read"}), userService.GetUserScopes);
app.put('/DVP/API/:version/Users/:name/Scope', jwt({secret: secret.Secret}),authorization({resource:"userScope", action:"write"}), userService.AddUserScopes);
app.delete('/DVP/API/:version/User/:username/Scope/:scope', jwt({secret: secret.Secret}),authorization({resource:"userScope", action:"delete"}), userService.RemoveUserScopes);

app.get('/DVP/API/:version/Users/:name/AppScope',jwt({secret: secret.Secret}), authorization({resource:"userAppScope", action:"read"}), userService.GetAppScopes);
app.get('/DVP/API/:version/MyAppScopes/MyAppScopes/:console',jwt({secret: secret.Secret}), authorization({resource:"myNavigation", action:"read"}), userService.GetMyAppScopesByConsole);
app.get('/DVP/API/:version/MyAppScopes/:consoles',jwt({secret: secret.Secret}), authorization({resource:"myNavigation", action:"read"}), userService.GetMyAppScopesByConsoles);


app.delete('/DVP/API/:version/User/:username/Console/:consoleName/Navigation/:navigation', jwt({secret: secret.Secret}),authorization({resource:"userAppScope", action:"delete"}), userService.RemoveUserAppScopes);
app.put('/DVP/API/:version/User/:username/Console/:consoleName/Navigation', jwt({secret: secret.Secret}),authorization({resource:"userAppScope", action:"write"}), userService.AddUserAppScopes);
app.delete('/DVP/API/:version/User/:username/Console/:consoleName', jwt({secret: secret.Secret}),authorization({resource:"userAppScope", action:"delete"}), userService.RemoveConsoleFromUser);
app.put('/DVP/API/:version/User/:username/Console/:consoleName', jwt({secret: secret.Secret}),authorization({resource:"userAppScope", action:"write"}), userService.AssignConsoleToUser);

app.get('/DVP/API/:version/Users/:name/UserMeta', jwt({secret: secret.Secret}),authorization({resource:"userMeta", action:"read"}), userService.GetUserMeta);
app.put('/DVP/API/:version/Users/:name/UserMeta', jwt({secret: secret.Secret}),authorization({resource:"myUserProfile", action:"write"}), userService.UpdateUserMetadata);
app.delete('/DVP/API/:version/Users/:name/UserMeta/:usermeta', jwt({secret: secret.Secret}),authorization({resource:"userMeta", action:"delete"}), userService.RemoveUserMetadata);

app.get('/DVP/API/:version/Users/:name/AppMeta', jwt({secret: secret.Secret}),authorization({resource:"userAppMeta", action:"read"}), userService.GetAppMeta);
app.put('/DVP/API/:version/Users/:name/AppMeta', jwt({secret: secret.Secret}),authorization({resource:"userAppMeta", action:"write"}), userService.UpdateAppMetadata);
app.delete('/DVP/API/:version/Users/:name/AppMeta/:appmeta', jwt({secret: secret.Secret}),authorization({resource:"userAppMeta", action:"delete"}), userService.RemoveAppMetadata);

app.put('/DVP/API/:version/MyAppMeta', jwt({secret: secret.Secret}),authorization({resource:"myUserProfile", action:"write"}), userService.UpdateMyAppMetadata);
app.get('/DVP/API/:version/MyAppMeta', jwt({secret: secret.Secret}),authorization({resource:"myUserProfile", action:"read"}), userService.GetMyAppMetadata);


app.post('/DVP/API/:version/UserGroup',jwt({secret: secret.Secret}), authorization({resource:"userGroup", action:"write"}), userGroupService.CreateUserGroup);
app.get('/DVP/API/:version/UserGroups',jwt({secret: secret.Secret}), authorization({resource:"userGroup", action:"read"}), userGroupService.GetGroupsAndUsers);
app.get('/DVP/API/:version/UserGroup/:id',jwt({secret: secret.Secret}), authorization({resource:"userGroup", action:"read"}), userGroupService.GetUserGroup);
app.get('/DVP/API/:version/UserGroup/:id/members',jwt({secret: secret.Secret}), authorization({resource:"userGroup", action:"read"}), userGroupService.GetGroupMembers);
app.get('/DVP/API/:version/UserGroupByName/:name',jwt({secret: secret.Secret}), authorization({resource:"userGroup", action:"read"}), userGroupService.GetUserGroupByName);
app.delete('/DVP/API/:version/UserGroup/:id',jwt({secret: secret.Secret}), authorization({resource:"userGroup", action:"delete"}), userGroupService.DeleteUserGroup);
app.put('/DVP/API/:version/UserGroup/:id',jwt({secret: secret.Secret}), authorization({resource:"userGroup", action:"write"}), userGroupService.UpdateUserGroup);
app.put('/DVP/API/:version/UserGroup/:id/User/:user',jwt({secret: secret.Secret}), authorization({resource:"userGroup", action:"write"}), userGroupService.UpdateUserGroupMembers);
app.delete('/DVP/API/:version/UserGroup/:id/User/:user',jwt({secret: secret.Secret}), authorization({resource:"userGroup", action:"delete"}), userGroupService.RemoveUserGroupMembers);
app.post('/DVP/API/:version/UserGroup/User/:user',jwt({secret: secret.Secret}), authorization({resource:"userGroup", action:"get"}), userGroupService.FindUserGroupsByMember);

app.put('/DVP/API/:version/UserGroup/:id/Supervisor/:user',jwt({secret: secret.Secret}), authorization({resource:"userGroup", action:"write"}), userGroupService.UpdateUserGroupSupervisors);
app.get('/DVP/API/:version/UserGroup/:id/Supervisors',jwt({secret: secret.Secret}), authorization({resource:"userGroup", action:"write"}), userGroupService.GetUserGroupSupervisors);

app.post('/DVP/API/:version/CustomerTag',jwt({secret: secret.Secret}), authorization({resource:"tag", action:"write"}), userService.CreateUserTag);
app.get('/DVP/API/:version/CustomerTags',jwt({secret: secret.Secret}), authorization({resource:"tag", action:"read"}), userService.GetUserTags);
app.get('/DVP/API/:version/CustomerTag/:tag',jwt({secret: secret.Secret}), authorization({resource:"tag", action:"write"}), userService.GetUserTag);
app.delete('/DVP/API/:version/CustomerTag/:tag',jwt({secret: secret.Secret}), authorization({resource:"tag", action:"write"}), userService.RemoveUserTag);


app.get('/DVP/API/:version/Tenant/Monitoring/superUsers', jwt({secret: secret.Secret}),authorization({resource:"tenant", action:"read"}), userService.GetSuperUsers);


app.post('/DVP/API/:version/BusinessUnit', jwt({secret: secret.Secret}),authorization({resource:"user", action:"write"}), businessUnitService.AddBusinessUnit);
app.put('/DVP/API/:version/BusinessUnit/:unitname', jwt({secret: secret.Secret}),authorization({resource:"user", action:"write"}), businessUnitService.UpdateBusinessUnit);
app.put('/DVP/API/:version/BusinessUnit/:unitname/Groups', jwt({secret: secret.Secret}),authorization({resource:"user", action:"write"}), businessUnitService.UpdateBusinessUnitUserGroups);
app.get('/DVP/API/:version/BusinessUnits', jwt({secret: secret.Secret}),authorization({resource:"user", action:"read"}), businessUnitService.GetBusinessUnits);
app.get('/DVP/API/:version/BusinessUnitsWithGroups', jwt({secret: secret.Secret}),authorization({resource:"user", action:"read"}), businessUnitService.GetBusinessUnitsWithGroups);
app.get('/DVP/API/:version/BusinessUnit/:unitName', jwt({secret: secret.Secret}),authorization({resource:"user", action:"read"}), businessUnitService.GetBusinessUnit);

app.get('/DVP/API/:version/Supervisor/:sid/Groups', jwt({secret: secret.Secret}),authorization({resource:"userGroup", action:"read"}), userGroupService.GetSupervisorUserGroups);
app.put('/DVP/API/:version/BusinessUnit/:name/Head/:hid', jwt({secret: secret.Secret}),authorization({resource:"userGroup", action:"write"}), businessUnitService.AddHeadToBusinessUnits);
app.delete('/DVP/API/:version/BusinessUnit/:name/Head/:hid', jwt({secret: secret.Secret}),authorization({resource:"userGroup", action:"write"}), businessUnitService.RemoveHeadToBusinessUnits);
app.put('/DVP/API/:version/BusinessUnit/:name/Heads', jwt({secret: secret.Secret}),authorization({resource:"userGroup", action:"write"}), businessUnitService.AddHeadsToBusinessUnit);
app.get('/DVP/API/:version/Supervisor/:sid/BusinessUnits', jwt({secret: secret.Secret}),authorization({resource:"userGroup", action:"read"}), businessUnitService.GetSupervisorBusinessUnits);
app.get('/DVP/API/:version/BusinessUnit/:name/Users', jwt({secret: secret.Secret}),authorization({resource:"userGroup", action:"read"}), businessUnitService.GetUsersOfBusinessUnits);
app.get('/DVP/API/:version/MyBusinessUnit', jwt({secret: secret.Secret}),authorization({resource:"userGroup", action:"read"}), businessUnitService.GetMyBusinessUnit);
