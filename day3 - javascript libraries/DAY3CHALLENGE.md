The challenge for the day was:

1. Discuss the differences between a library and a framework

2. Create a markdown page that shows the differences in at least 3 different JS libraries with personal ratings for each

3. MOST IMPORTANT = store all the code samples in a single github repository - use a README.md file (use http://dillinger.io/ for ease)

-----------------------

-----------------------

# What is the difference between Frameworks and Libraries?

## Frameworks

Frameworks are application skeletons that sometimes have their own specific syntaxes and quirks, but they already have the common application functionalities expected to perform basic tasks. It is the foundation of the code we're writing — all we have to do is arrange everything to get our project up and running, and then call libraries for more specific tasks and bonus features.

<br/>

## Libraries

Libraries are pre-packaged codes that are called by the application to handle different types of data, perform HTML DOM manipulation, react to specific events, etc. Basically, what libraries do is they shorten code time by providing ready-to-implement functions or methods created by awesome devs all over the world so you don't have to write dozens of lines of code by yourself. This means you don't have to think about every little detail and instead you can focus on creating your next big app or program using the frameworks available.

However, libraries aren't always what you're looking for (or you may not be looking at the right library to do what you want it to do), and sometimes they can break your code — if there's a bug within the library, it might be difficult to locate and fix.

<br/>
<br/>

<h3 align="center"> Okay, libraries sound cool and I think I need to use one. Any suggestions? </h3>

<br/>

<h3 align = "center"><a href = "http://www.createjs.com/"> <img height="400px" src="http://createjs.com/assets/images/svg/createjs-logo-vertical-gray-darker.svg"> </a> </h3>

Create.js is a collection of libraries and tools to build rich interactive web content. The products of CreateJS are the following:

- **[EaselJS](https://github.com/CreateJS/EaselJS)** - *a library that can make working with the HTML5 Canvas element easier*
- **[TweenJS](https://github.com/CreateJS/TweenJS)** - *a simple but powerful animation library*
- **[SoundJS](https://github.com/CreateJS/SoundJS)** - *a library that has a lot of tools to work on audio with*
- **[PreloadJS](https://github.com/CreateJS/PreloadJS)** - *a library for preloading assets*

CreateJS is also sponsored by Adobe, Microsoft, mozilla, and gskinner.

### Got it. How do I start?

    <script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>

<br/>
------
<h3 align = "center"><a href = "https://github.com/CreateJS/EaselJS"> <img height = "100px" src = "http://www.createjs.com/docs/easeljs/assets/docs-icon-EaselJS.png"> </a> </h3>

EaselJS is a library for building interactive 2D content in HTML5. It provides a feature-rich display list to allow you to manipulate and animate graphics. It also provides a robust interactive model for mouse and touch interactions. It is used in building games, generative art, ads, data visualization, and other highly graphical experiences.

Below is a quick example of how to use the EaselJS:

    var stage = new createjs.Stage('myCanvas');
    var shape = new createjs.Shape();
    shape.graphics.beginFill('red').drawRect(0, 0, 120, 120);
    stage.addChild(shape);
    stage.update();

The example above will simply build a red square `shape` on `stage`, which is a Stage on the HTML canvas `myCanvas`.


<h3 align = "center"><a href = "https://github.com/CreateJS/TweenJS"> <img height = "100px" src = "http://createjs.com/docs/tweenjs/assets/docs-icon-TweenJS.png"> </a> </h3>

The TweenJS API makes it easy to create complex tweens by chaining commands.

    var tween = createjs.Tween.get(myTarget)
        .to({x:300},400)
        .set({label:"hello!"})
        .wait(500).to({visible:false},1000)
        .call(onComplete);

The example above will create a new tween instance that:
- tweens the target to an x value of 300 over 400ms
- sets its label to "hello!"
- waits 500 ms before setting its visible to false in a second
- calls the onComplete function

<h3 align = "center"><a href = "https://github.com/CreateJS/SoundJS"> <img height = "100px" src = "http://createjs.com/docs/soundjs/assets/docs-icon-SoundJS.png"> </a> </h3>

SoundJS is a library to make working with audio on the web easier. It provides a consistent API for playing audio in different browsers. A mechanism has been provided for easily tying in audio preloading to PreloadJS.

Below is a simple example:

    createjs.Sound.alternateExtensions = ["mp3"];
    createjs.Sound.on("fileload", this.loadHandler, this);
    createjs.Sound.registerSound("path/to/mySound.ogg", "sound");
    function loadHandler(event) {
        var instance = createjs.Sound.play("sound");
        instance.on("complete", this.handleComplete, this);
        instance.volume = 0.5
        }

The example above will install audio playback Plugins, register `mySound.ogg`, and control the volume to play it on file load.

<h3 align = "center"><a href = "https://github.com/CreateJS/PreloadJS"> <img height = "100px" src = "http://createjs.com/docs/preloadjs/assets/docs-icon-PreloadJS.png"> </a> </h3>

PreloadJS is a library to make working with asset preloading easier. It provides a consistent API for loading different file types, automatic detection of XHR (XMLHttpRequest) availability with a fallback to tag-base loading, composite progress events, and a plugin model to assist with preloading in other libraries such as SoundJS.

Below is an example of how PreloadJS is used

    var queue = new createjs.LoadQueue(false);
    queue.on("fileload", handleFileComplete);
    queue.loadFile('image.png');
    function handleFileComplete(event) {
        document.body.appendChild(event.result);    }

The example above will preload `image.png` and then execute appendChild as soon as it is loaded.

----

## **RATING** :sparkles: :sparkles: :sparkles: :sparkles: :boom:
Overall, the Create.JS suite is a powerful library collection that offers a lot of tools that anyone interested in building an interactive program should use. I'd give it full **five** :sparkles:, but as a beginner to JavaScript (and code in general), the code is quite intimidating.

<br/>
<br/>
<br/>

<h3 align = "center"><a href = "http://leafletjs.com/index.html"> <img height = "200px" src = "http://leafletjs.com/docs/images/logo.png"> </a> </h3>

Leaflet is a JavaScript library for mobile-friendly interactive maps with all the mapping features most developers ever need. It is light-weight and has great documentation, plus it works efficiently across all major platforms. If you check out the API, there are also a lot of plugins, tutorials, and easy-to-read source code.

### Got it. How do I start?

1. Include Leaflet CSS file in the head section of your document:

        <link rel = "stylesheet" href = "https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
        integrity = "sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ=="
        crossorigin = ""/>

2.  Include Leaflet JavaScript file after Leaflet’s CSS:

        <script src = "https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"
        integrity = "sha512-lInM/apFSqyy1o6s89K4iQUKg6ppXEgsVxT35HbzUupEVRh2Eu9Wdl4tHj7dZO0s1uvplcYGmt3498TtHq+log=="
        crossorigin = ""></script>

3. Put a div element with a certain id where you want your map to be:

        <div id="mapid"></div>

4. Make sure the map container has a defined height, for example by setting it in CSS:

        #mapid { height: 180px; }

Now you’re ready to initialize the map and do stuff with it.

### How do I initialize the map then?

1. The first step is to initialize the map and set its view to the coordinates (latitude, longitude) and then the zoom level.

        var mymap = L.map('mapid').setView([lat, long], zoomlevel);

2. Next we need to add a tile layer to add to our map. [MapBox](https://www.mapbox.com/) is a popular location data platform for mobile and web applications that can help you add location features like maps, search, and navigation, so we're using their MapBox Streets tile layer. Creating a tile layer usually involves setting the URL template for the tile images, the attribution text and the maximum zoom level of the layer.

            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'your.mapbox.access.token'
            }).addTo(mymap);

3. Make sure all the code is called after the div and leaflet.js inclusion.

### That's it! Now we can customize our map!

#### **Markers, circles, and polygons**

Below is an example of how to add a marker:

    var marker = L.marker([51.5, -0.09]).addTo(mymap);

Adding a circle is the same (except for specifying the radius in meters as a second argument), but lets you control how it looks by passing options as the last argument when creating the object:

    var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
    }).addTo(mymap);

Adding a polygon is as easy:

    var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ]).addTo(mymap);

#### **Popups**

Popups are usually used when you want to attach some information to a particular object on a map. Leaflet has a very handy shortcut for this:

    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    circle.bindPopup("I am a circle.");
    polygon.bindPopup("I am a polygon.");

The bindPopup method attaches a popup with the specified HTML content to your marker so the popup appears when you click on the object, and the openPopup method (for markers only) immediately opens the attached popup.

You can also use popups as layers (when you need something more than attaching a popup to an object):

    var popup = L.popup()
        .setLatLng([51.5, -0.09])
        .setContent("I am a standalone popup.")
        .openOn(mymap);

Here we use openOn instead of addTo because it handles automatic closing of a previously opened popup when opening a new one which is good for usability.

#### **Events**

Every time something happens in Leaflet, e.g. user clicks on a marker or map zoom changes, the corresponding object sends an event which you can subscribe to with a function.

Each object has its own set of events. The first argument of the listener function is an event object — it contains useful information about the event that happened. The example below tells us that when a user clicks on the map, a popup shows us the coordinates of the click.

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(mymap);
    }

    mymap.on('click', onMapClick);

----

## **RATING** :sparkles: :sparkles: :sparkles: :sparkles: :sparkles:
I gave Leaflet complete sparkles because I think it's easy to use and lightweight, has the most basic functionalities, and performs really well with MapBox.
<br/>
<br/>
<br/>

<h3 align = "center"><a href = ""> <img height = "200px" src = ""> </a> </h3>
