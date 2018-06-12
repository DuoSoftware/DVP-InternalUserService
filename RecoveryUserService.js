/**
 * Created by Pawan on 6/11/2018.
 */
var logger = require('dvp-common-lite/LogHandler/CommonLogHandler.js').logger;
var messageFormatter = require('dvp-common-lite/CommonMessageGenerator/ClientMessageJsonFormatter.js');
var util = require('util');
var DbConn = require('dvp-dbmodels');

function GetUsers() {


    var company = 1;//parseInt(req.user.company);
    var tenant = 1;//parseInt(req.user.tenant);

    var filterActive = "all";//req.query.active;
    var jsonString;
    var queryString;

    if (filterActive === 'all') {
        queryString = {company_id: company};
    } else if (filterActive === 'false') {
        queryString = {company_id: company, active: false};
    } else {
        queryString = {company_id: company, active: true};
    }


    /* DbConn.IdentityAccount.findAll({
     where:[{active:true},{company_id:1}],
     include:[{
     model:DbConn.Organization,
     where:[{tenantId:tenant}]

     }]
     }).then(function (res) {
     console.log(res);
     }).catch(function (err) {
     console.log(err);
     });*/


    DbConn.Identity.findAll({
        include: [{
            model: DbConn.Organization,
            as: "Organizations",
            where: [{tenantId: 1},{id:1}],
            through: {
                roles:'admin'
            }
        }]

    }).then(function (cmp) {
        console.log(cmp);
    }).error(function (err) {

    });





    /*DbConn.IdentityAccount.findAll({
        include:[{
            model: DbConn.Identity,
            through:{
                attributes:['identity_id']
            }
        }]
    }).then(function (res) {
        console.log(res);
    }).catch(function (err) {
        console.log(err);
    });*/

    /*DbConn.Identity.findAll({

     include:[{
     model:DbConn.Organization,
     where:[{id:company},{tenantId:tenant}],
     required:false

     }]}
     ).then(function (res) {
     console.log(res);
     }).catch(function (err) {
     console.log(err);
     });*/




    /*    DbConn.IdentityAccount.findAll({where:[[{company_id: company}]],
     include:[{model: DbConn.Identity}],
     include:[{ model: DbConn.Organization,
     as:'Organization',
     through:{attributes:['company_id']} // this may not be needed
     }]})
     .then(function (resUsers) {
     if (resUsers && Array.isArray(resUsers) ) {

     /!*var users = userAccounts.map(function (userAccount) {
     if(userAccount.userref) {
     var user = userAccount.userref.toObject();

     user.group = userAccount.group;
     user.Active = userAccount.active;
     user.joined = userAccount.joined;
     user.resourceid = userAccount.resource_id;
     user.veeryaccount = userAccount.veeryaccount;
     user.multi_login = userAccount.multi_login;
     user.allowoutbound = userAccount.allowoutbound;
     user.allowed_file_categories = userAccount.allowed_file_categories;
     user.user_meta = userAccount.user_meta;

     return user;
     }

     });*!/
     jsonString = messageFormatter.FormatMessage(undefined, "Get Users Successful", true, resUsers);

     } else {

     jsonString = messageFormatter.FormatMessage(undefined, "Get Users Failed", false, undefined);

     }
     console.log(jsonString);
     }).catch(function (errUsers) {
     jsonString = messageFormatter.FormatMessage(errUsers, "Get Users Failed", false, undefined);
     console.log(jsonString);
     });*/

    /*
     UserAccount.find(queryString).populate('userref', '-password')
     .exec(function (err, userAccounts) {
     if (err) {

     jsonString = messageFormatter.FormatMessage(err, "Get Users Failed", false, undefined);

     } else {

     if (userAccounts && Array.isArray(userAccounts) ) {

     var users = userAccounts.map(function (userAccount) {
     if(userAccount.userref) {
     var user = userAccount.userref.toObject();

     user.group = userAccount.group;
     user.Active = userAccount.active;
     user.joined = userAccount.joined;
     user.resourceid = userAccount.resource_id;
     user.veeryaccount = userAccount.veeryaccount;
     user.multi_login = userAccount.multi_login;
     user.allowoutbound = userAccount.allowoutbound;
     user.allowed_file_categories = userAccount.allowed_file_categories;
     user.user_meta = userAccount.user_meta;

     return user;
     }

     });
     jsonString = messageFormatter.FormatMessage(err, "Get Users Successful", true, users);

     } else {

     jsonString = messageFormatter.FormatMessage(undefined, "Get Users Failed", false, undefined);

     }
     }

     res.end(jsonString);
     });*/

}
GetUsers();

module.exports.GetUsers = GetUsers;