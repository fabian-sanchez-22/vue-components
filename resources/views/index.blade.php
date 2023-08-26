<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>

<body>
    <div id="app">
        <router-link to="/example">App</router-link>
        <router-link to="/pokemon">Pokemon</router-link>
        <router-view></router-view>
    </div>

</body>

</html>
@vite('resources/js/app.js')
