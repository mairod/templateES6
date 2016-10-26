```
      ______                     __      __          ___________ _____
     /_  __/__  ____ ___  ____  / /___ _/ /____     / ____/ ___// ___/
      / / / _ \/ __ `__ \/ __ \/ / __ `/ __/ _ \   / __/  \__ \/ __ \
     / / /  __/ / / / / / /_/ / / /_/ / /_/  __/  / /___ ___/ / /_/ /
    /_/  \___/_/ /_/ /_/ .___/_/\__,_/\__/\___/  /_____//____/\____/
                      /_/

```

##To start :

1. Clone the project
2. Run ```npm install```
3. Run ```npm start```
4. Go to ```localhost:8080``` on your browser.

##To build :

Run ```npm run build```

##Tools :

## Storage

There is a singleton for storing data and recovering it anywhere.

Simply use :

```
import * as tools from './lib/tools.class.js'

var storage = new tools.Storage
```

## Framerate Visualizer

There is a FPS light weight homemade visualizer very simple to use.


![alt tag](http://www.zupimages.net/up/16/43/w3co.png)


```
import * as tools from './lib/tools.class.js'

var frameRateUI = new tools.FrameRateUI
```

and in your ```requestAnimationFrame()``` call :

```
frameRateUI.update()
```

## AudioAnalyzer

The AudioAnalyzer is here to help you to build some cools animations from a sound. You will be able to create some controls points based on a frequecy for animated your elements


![alt tag](http://zupimages.net/up/16/43/0zoj.png)


```
import * as tools from './lib/tools.class.js'

var audioAnalyzer = new tools.AudioAnalyzer({
        url: url,
        samplingFrequency: 256,
        playerUI: true,
        autoplay: true,
        debug: true,
    })

audioAnalyzer.addControlPoint({
      bufferPosition : //your frequency number between 0 and the buffer size
})

```


The AudioAnalyzer has some helpful methods :

```
audioAnalyzer.hide()
audioAnalyzer.show()
audioAnalyzer.play()
audioAnalyzer.update()
```

All the controls are stored in the array :

```
audioAnalyzer.controls
```

Each control as a method for changing is frequency :

```
audioAnalyzer.controls[index].shift( //your new frequency number between 0 and the buffer size )
```


And don't forget in your ```requestAnimationFrame()``` to call :

```
audioAnalyzer.update()
```
