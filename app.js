window.fbAsyncInit = function () {
  FB.init({
    appId: "add your app id",
    cookie: true,
    xfbml: true,
    version: "v13.0",
  });

  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
};



(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");



function statusChangeCallback(response) {
  if (response.status === "connected") {
    console.log("loged in");
    testAPI()
  } else {
    console.log("not logged in");
  }
}



function testAPI() {
    FB.api('me?fields=id,name,first_name,email,birthday,last_name', function(response){
        if(response && !response.error){
            console.log(response)
        } else {
            console.log("error")
        }

    })
}



function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}



function logout() {
  FB.logout(function (response) {});
}
