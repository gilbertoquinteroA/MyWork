var app = angular.module("myApp",['pascalprecht.translate']);

app.config(["$translateProvider", function($translateProvider){
  
  var en_translations = {
    "presentation" : "Front-end Developer and Web Security ",
    "introduction" : "Hey, I'm a Front-end developer from Mexico. I can help you build your next product that you need"
    +" product also you should know that I design and  make code beautiful,clean and simple for you company." + 
    "simple things, and I love what I do.",
    "about" :  " I'm a Developer nearly 2 years ago, I have done remote work for agencies,"+"consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually improving my chops also I dont a Developer shy I love create new ideas like libraries JS,style CSS3 cool,network program in c and Python and create interested bas for Linux, I love the"+
    "programmation and I hope you like my way I working and also my working and projects.",
    "title_about" : "Hi, I’m Gilbert. Nice to meet you.",
    "spanish" : "spanish",
    "english" : "english",
    "contact" : "contact me",
    "more" :"more",
    "networksocial" : "Follow me on",
    "recente_work" : "My Recent Work",
    "practices_good" : "I am passionate about programming since I was a child and I have a career in computer technology. I am also always taking courses, I am up to date on the latest technologies and I follow the best practices in programming.",
    "total_dedication" : "total dedication",
    "cheap_rates" : "cheap rates",
    "cheap_rates_info" : "My rates are cheap, I try to give the best service at the best possible price since I love the work I do and my goal is to help others with it. Do not hesitate to contact me and ask for a budget for your project.",
    "info_about_my_work" : "Here are a few recent design projects. Want to see more? Email me."

  }
  
  var sp_translations = {
    "presentation" : "Desarrollador Front-end y administracion de seguridad web",
    "introduction" : "Oye, Yo soy un Desarrollador web Front-end de Mexico ,yo te puedo ayudar a cotruir el"+
    "siguiente que necesitas tambine tu deberias saber que yo diseno y creo codigo hermoso,limpio y simple para tu negocio.",
    "about" : "Soy un desarrollador hace casi 2 años, he trabajado de forma remota para agencias, consulté para startups y colaboré con personas talentosas para crear productos digitales tanto para empresas como para consumidores. Estoy tranquilamente seguro, curioso por naturaleza, y mejorando constantemente mis habilidades, además no soy un desarrollador tímido. Me encanta crear nuevas ideas como bibliotecas JS, estilo CSS3 cool, programa de red en c y Python y crear bases interesadas para Linux, me encanta la programación. y espero que les guste mi forma de trabajar y también mi trabajo y proyectos.",
     "title_about"  : "Hola, soy Gilberto. Encantada de conocerte.",
     "english" : "Ingles",
     "contact" : "contactame",
     "more" : "Más",
     "networksocial" : "Sigueme",
     "recente_work" : "Mis recientes trabajos",
     "practices_good" : "Soy un apasionado de la programación desde pequeño y tengo la carrera de ingeniería técnica en informática. Además siempre estoy realizando cursos, estoy al día en las últimas tecnologías y sigo las mejores practicas en programación.",
      "total dedication"  : "dedicación total",
      "cheap_rates" : "tarifas económicas",
      "cheap_rates_info" : "Mis tarifas son económicas, intento dar el mejor servicio al mejor precio posible puesto que me encanta el trabajo que hago y mi meta es poder ayudar a los demás con ello. No dudes en ponerte en contacto conmigo y pedir presupuesto para tu proyecto.",
      "info_about_my_work" : "Aquí hay algunos proyectos de diseño recientes. ¿Quieres ver más? Envíeme un correo electrónico."
      



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
