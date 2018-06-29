var app = angular.module("myApp",['pascalprecht.translate']);

app.config(["$translateProvider", function($translateProvider){
  
  var en_translations = {
    "presentation" : "Front-end Developer and Web Security ",
    "introduction" : "Hey, I'm a Front-end developer from Mexico. I can help you build your next product that you need"
    +" product also you should know that I design and  make code beautiful,clean and simple for you company." + 
    "simple things, and I love what I do."
  }
  
  var sp_translations = {
    "presentation" : "Desarrollador Front-end y administracion de seguridad web",
    "introduction" : "Oye, Yo soy un Desarrollador web Front-end de Mexico ,yo te puedo ayudar a cotruir el"+
    "siguiente que necesitas tambine tu deberias saber que yo diseno y creo codigo hermoso,limpio y simple para tu negocio."
      }


  


  /*  

  */
  $translateProvider.translations('en',en_translations);
  
  $translateProvider.translations('sp',sp_translations);
  
  $translateProvider.preferredLanguage('en');
  
}]);



app.controller("translateController" ,["$scope","$translate",function($scope,$translate){
  $scope.changeLanguage = function(lang){
   $translate.use(lang); 
  }
}]);
