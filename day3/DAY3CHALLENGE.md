>Create a markdown page that shows the differences in atleast 3 different js libraries
1.1. Display Logos and description in your own words
1.2. Show Code examples
1.3. Best Use Cases - when is it best used
1.4. "Personal" Ratings for each  
>Discuss the differences between a library and a framework
>MOST IMPORTANT = store all the code samples in a single github repository - use a README.md file (use http://dillinger.io/ for ease)

# What is the difference between Frameworks and Libraries?

### Frameworks

Frameworks are application skeletons that sometimes have their own specific syntaxes and quirks, but they already have the common application functionalities expected to perform basic tasks. It is the foundation of the code we're writing — all we have to do is arrange everything to get our project up and running, and then call libraries for more specific tasks and bonus features. 

### Libraries

Libraries are pre-packaged codes that are called by the application to handle different types of data, perform HTML DOM manipulation, react to specific events, etc. Basically, what libraries do is they shorten code time by providing ready-to-implement functions or methods created by awesome devs all over the world so you don't have to write hundreds of lines of code by yourself. This means you don't have to think about every little detail and instead you can focus on creating your next big app or program using the frameworks available.

However, libraries aren't always what you're looking for (or you may not be looking at the right library to do what you want it to do), and sometimes they can break your code — if there's a bug within the library, it might be difficult to locate and fix.

------

#### Okay, libraries sound cool and I think I need to use one. Any suggestions?

#

![Create.js Logo](http://createjs.com/assets/images/svg/createjs-logo-vertical-gray-darker.svg)

#### 1. [Create.js](http://www.createjs.com/)

Create.js is a collection of libraries and tools to build rich interactive web content. The main products of CreateJS are the following:

- **[EaselJS](https://github.com/CreateJS/EaselJS)** *(a library that has tools which make working with the HTML5 Canvas element easier)*
- **[TweenJS](https://github.com/CreateJS/TweenJS)** *(a simple but powerful animation library)*
- **[SoundJS](https://github.com/CreateJS/SoundJS)** *(a library that has a lot of tools to work on audio with)*
- **[PreloadJS](https://github.com/CreateJS/PreloadJS)** *(a library for preloading assets).*

CreateJS is sponsored by Adobe, Microsoft, mozilla, and gskinner.

##### Sounds cool! How do I start?
`<script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>`


------


![EaselJS](http://www.createjs.com/docs/easeljs/assets/docs-icon-EaselJS.png)

EaselJS is a library for building high-performance interactive 2D content in HTML5. It provides a feature-rich display list to allow you to manipulate and animate graphics. It also provides a robust interactive model for mouse and touch interactions. It is used in building games, generative art, ads, data visualization, and other highly graphical experiences.

Below is a quick example of how to use the EaselJS:

    var stage = new createjs.Stage('myCanvas');
    var shape = new createjs.Shape();
    shape.graphics.beginFill('red').drawRect(0, 0, 120, 120);
    stage.addChild(shape);
    stage.update();
    
The example above will simply build a red square `shape` on `stage`, which is a Stage on the HTML canvas `myCanvas`.

#

![TweenJS](http://createjs.com/docs/tweenjs/assets/docs-icon-TweenJS.png)

The TweenJS API makes it easy to create complex tweens by chaining commands.

    var tween = createjs.Tween.get(myTarget)
        .to({x:300},400)
        .set({label:"hello!"})
        .wait(500).to({alpha:0,visible:false},1000)
        .call(onComplete);

The example above will create a new tween instance that:
- tweens the target to an x value of 300 over 400ms
- sets its label to "hello!"
- waits 500 ms
- tweens the target's alpha to 0 over 1s & sets its visible to false
- calls the onComplete function

#

![SoundJS](http://createjs.com/docs/soundjs/assets/docs-icon-SoundJS.png)

SoundJS is a library to make working with audio on the web easier. It provides a consistent API for playing audio in different browsers. A mechanism has been provided for easily tying in audio preloading to PreloadJS.

Below is a simple example:

    createjs.Sound.alternateExtensions = ["mp3"];
    createjs.Sound.on("fileload", this.loadHandler, this);
    createjs.Sound.registerSound("path/to/mySound.ogg", "sound");
    function loadHandler(event) {
        var instance = createjs.Sound.play("sound");
        instance.on("complete", this.handleComplete, this);
        instance.volume = 0.5      }

The example above will install audio playback Plugins, register `mySound.ogg`, and control the volume to play a song on file load.

#

![PreloadJS](http://createjs.com/docs/preloadjs/assets/docs-icon-PreloadJS.png)

PreloadJS is a library to make working with asset preloading easier. It provides a consistent API for loading different file types, automatic detection of XHR (XMLHttpRequest) availability with a fallback to tag-base loading, composite progress events, and a plugin model to assist with preloading in other libraries such as SoundJS.

Below is an example of how PreloadJS is used

    var queue = new createjs.LoadQueue(false);
    queue.on("fileload", handleFileComplete);
    queue.loadFile('image.png');
    function handleFileComplete(event) {
        document.body.appendChild(event.result);    }

The example above will preload `image.png` and then execute appendChild as soon as it is loaded.

##### Summary:
#
> Overall, the Create.JS suite is a powerful library collection that offers a lot of tools that anyone interested in building an interactive program should use.
> I give it :sparkles: :sparkles: :sparkles: :sparkles: :sparkles:


#### 2. React


#### 3. Polymer 

