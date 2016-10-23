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

There is a singleton for storing data and recovering it anywhere.

Simply use :

```
import * as tools from './lib/tools.class.js'

var storage = new tools.Storage
```
