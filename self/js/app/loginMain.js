require.config({
    baseUrl:'../js'    ,
    waitSeconds:20,
    paths:{
        'jquery':'lib/jquery-1.11.0',
         'fun_ajax':'lib/fun_ajax',
         'base64':'lib/jquery.base64',
         'login_register':'lib/login_register',
         'cookies':'lib/jquery.cookies',
         'login': 'app/login'
    }
});

require([
    'jquery',
    'fun_ajax',
    'login',
    'login_register',
    'base64',
    'cookies',
    'login'
    ],function($){


})
    