let appMode = process.env.REACT_APP_APP_MODE
let prodURL = process.env.REACT_APP_PROD_URL
let devURL = process.env.REACT_APP_DEV_URL

let URL = appMode === 'production' ? prodURL : devURL

let pathApiObj = {
  BASE_URL: URL,

  //authentication
  LOGIN: 'auth/adminlogin',
  SIGNUP: 'auth/signup',

  Namegame: 'game-display/list',
  AllNamegame: 'all/list',

  ContactUs: 'contact-us/list',



  //changepassward
  // Changepassward: 'auth/change-password',


  //roles
  // ADD_ROLES: 'admin/roles/add',
  // ROLE_LIST: 'admin/roles/list',
  // ROLE_DROP_DOWN: 'admin/roles/drop-down',
  // UPDATE_ROLE: 'admin/roles/update/customers',
  // ROLE_DETAILS: 'admin/roles/detail',
  // ROLE_UPDATE: 'admin/roles/update',
  // ROLE_DELETE: 'admin/roles/delete',
  // ROLE_CHANGESTATUS: 'admin/roles/changestatus',

  //users
  // USERS_LIST: 'admin/users/list',
  // USERS_DROP_DOWN: 'admin/users/drop-down',
  // USERS_ADD: 'admin/users/add',
  // USERS_DETAILS: 'admin/users/detail',
  // USERS_DELETE: 'admin/users/delete',
  // USERS_SUSPEND: 'admin/users/suspend',
  // USERS_UPDATE: 'admin/users/update',

  //subscriptions

  //debt
}
export default pathApiObj
