<!DOCTYPE html>
<html ng-app="app">
    <head>
        <title>Стишок дружок</title>

        <link href='https://fonts.googleapis.com/css?family=Kurale&subset=latin,cyrillic' rel='stylesheet' type='text/css'>

        <link href="{{ asset('bower_components/bootstrap/dist/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css">
        <link href="{{ asset('dist/css/style.min.css') }}" rel="stylesheet" type="text/css">

        <script type="text/javascript" src="{{ asset('bower_components/angular/angular.min.js') }}"></script>
        <script type="text/javascript" src="{{ asset('bower_components/angular-route/angular-route.min.js') }}"></script>
        <script type="text/javascript" src="{{ asset('bower_components/angular-bootstrap/ui-bootstrap.min.js') }}"></script>
        <script type="text/javascript" src="{{ asset('bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js') }}"></script>
        <script type="text/javascript" src="{{ asset('dist/js/app.min.js') }}"></script>

    </head>
    <body ng-controller="appCtrl as appCtrl">

      <header ng-controller="headerCtrl as headerCtrl">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="logo">
                Cтишочек - дружочек
              </div>
            </div>
            <div class="col-md-4">
              <div class="search text-center">
                <input type="text" name="search" placeholder="Поиск.." ng-model="search">
              </div>
            </div>
            <div class="col-md-4 text-right">
              <div class="auth">
                <a href="" ng-click="headerCtrl.openAuth()">Вход</a> /
                <a href="" ng-click="headerCtrl.openRegister()">Создать</a>
              </div>
            </div>
          </div>
        </div>
      </header>

        <div ng-view></div>

    </body>
</html>
