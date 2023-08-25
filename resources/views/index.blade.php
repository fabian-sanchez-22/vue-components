<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>

<body>
    <div id="app">
        <ul>
            <li @click="selectedcomponent='Example'">App</li>
            <li @click="selectedcomponent='Pokemon'">Pokemon</li>
        </ul>

        <component :is="selectedcomponent"></component>
    </div>

</body>

</html>
@vite('resources/js/app.js')
