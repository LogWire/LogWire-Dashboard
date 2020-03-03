const AuthService = {
  isAuthenticated: false,
  token: "",
  refreshTimeout: null,
  authenticate(token, timeoutValue) 
  {
    AuthService.isAuthenticated = true;
    AuthService.token = token;
    AuthService.refreshTimeout = setTimeout(Refresh, timeoutValue);
  },
  logout(){
    AuthService.isAuthenticated = false;
    if(typeof AuthService.refreshTimeout != null) AuthService.refreshTimeout.clearTimeout();
    AuthService.token = "";
  }
}

export const Refresh = function (){
  console.log("Refresh");
  fetch(process.env.REACT_APP_LW_API + '/auth/refresh', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'include' 
  }).then(results => {
      return results.json();
  }).then(data => {
      console.log(data);
      if(typeof data.accessToken !== 'undefined'){
          AuthService.authenticate(data.accessToken, data.tokenExpires);
      } else {
        AuthService.isAuthenticated = false;
      }
  })
}

export const CheckLogin = function (props){
  console.log("Refresh");
  fetch(process.env.REACT_APP_LW_API + '/auth/refresh', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'include' 
  }).then(results => {
      return results.json();
  }).then(data => {
      console.log(data);
      if(typeof data.accessToken !== 'undefined'){
          AuthService.authenticate(data.accessToken, data.tokenExpires);
          props.history.push('/');
      } else {
        AuthService.isAuthenticated = false;
      }
  })
}

export const isAuthenticated = function (){
  return AuthService.isAuthenticated;
}

export const Logout = function (props){
  AuthService.logout();
  props.history.push('/login');
}

export const Authenticate = function (event, component, props) {
  event.preventDefault();
  component.setState({loggingIn: true});
  fetch(process.env.REACT_APP_LW_API + '/auth/login', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'username': component.state.username,
        'password': component.state.password
      },
      credentials: 'include' 
  }).then(results => {
      return results.json();
  }).then(data => {
      if(typeof data.accessToken === 'undefined'){
          console.log("error");
          component.setState({loggingIn: false});
          component.setState({errorMessage: "Unable To Login - Bad Username or Password"});
      } else {
          AuthService.authenticate(data.accessToken, data.tokenExpires);
          props.history.push('/');
      }
  }).catch(error => {
    component.setState({loggingIn: false});
    component.setState({errorMessage: "Unable To Login - Can not communicate with api server"});
  });
}