# atomic-drupal
Atomic Design Meet Drupal 8 Theming

## Step 1 - Design
Design was created in illustrator and uploaded as a pdf for reference in the **design** directory.

## Step 2 - Add Pattern Lab
https://github.com/pattern-lab/patternlab-php

Generate Pattern Lab for the first time:

* Open `core/scripts/`
* Double-click `generateSite.command`

or open terminal and run the following command from your pattern lab root

`php core/builder.php -g`

## Step 3 - Configure Gulp
https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md

### Install npm

Follow the instructions on the [Gulp Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) GitHub.

If npm already installed globally remove it `npm rm --global gulp`
you may have to use `sudo npm rm --global gulp` if permission issues arise.

Now install npm `npm install --global gulp-cli` also may
have to `sudo npm install --global gulp-cli`

### Generate a package.json file

From your project directory type `npm init` to create a package.json file.
Answer the questions in your command line.

See npm documentation on [package.json handling](https://docs.npmjs.com/files/package.json) and [using a package.json](https://docs.npmjs.com/getting-started/using-a-package.json)

* Name: atomic-drupal 
* Version: `1.0.0` (Just hit 'enter' and it should default to 1.0.0)
* Description: `Manage NPM packages for atomic-drupal pattern lab.`
* Entry Point: `index.js` (Just hit 'enter' and it should default to index.js)
* Test Command: (Just hit 'enter' and it will generate an empty test script)
* Git Repository: `https://github.com/ninjazero/atomic-drupal`
* Keywords: `pattern-lab, drupal, atomic-design`
* Author: `Anthony Horn`
* License: `MIT`

### Install Gulp in your project devDependancies 

Now run `npm install gulp --save-dev`

Notice that Gulp was added to the devDependancies variable in your
package.json file `"devDependencies": {"gulp": "^3.9.1"},`

### Create a gulpfile.js in Your Project Root

```
var gulp = require('gulp');
 
 gulp.task('default', function() {
   // place code for your default task here
 });
```

### Run Gulp

`gulp`

This will run our one empty task and should look something like this 
in your command line:

```
ahorn atomic-drupal (gulp-config) $ gulp
[10:26:49] Using gulpfile /Applications/MAMP/htdocs/atomic-drupal/gulpfile.js
[10:26:49] Starting 'default'...
[10:26:49] Finished 'default' after 60 μs
ahorn atomic-drupal (gulp-config) $ 
```



