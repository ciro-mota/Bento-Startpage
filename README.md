
<div align="center">
<h1>Fork - Bento: 🍱 A Clean and Simple Startpage</h1>
</div>

A Fork from [Bento of MiguelRAvila](https://github.com/MiguelRAvila/Bento) project, thank you.

## Disclaimer

The changes here in this project were made in an empirical way, based for my use. They probably have better ways to make the as I did, but it escapes my knowledge I have on the.

## Features:

-   **Greetings** are easy to change and modify.
-   **Variables** for custom colors and font sizes in the `css` code.
-   **Icons** all icons are from Feather Icons (Some others I made them with the Feather icons as a base).
-   **Modular** javascript files for an easy read.

## Modifications

- Change number of borkmarks blocks.
- The accent color of the buttons has been modified to match the Yaru Deepblue theme.
- Clock removed.
- Translate Greetings for Portuguese Brazil.
- Swap of Unpkg icons for Font Awesome.
- Quote messages API from [forismatic](http://forismatic.com/en/api/) [code](https://codepen.io/catapixel/pen/LpVEgy).
- Usage the Reddit API for random background wallpapers. Small copy of the [Wittmannen homepage-v1](https://github.com/Wittmannen/homepage-v1) project.
- Removing parts of the code not used by me.

## Usage

#### As Home Page:
1. Fork this repo.
2. Enable the Github Pages service `Settings > GitHub Pages > Source [master branch] > Save`.
3. Set it as Home Page:
    - Click the menu button. and select Options. Preferences.
    - Click the Home panel.
    - Click the menu next to Homepage and new windows and choose to show custom URLs and add your `Github Pages link`.
    - Or `git clone` and use locally `index.html` file.

#### As New Tab:
1. You can use different Add-ons/Extensions for it
  - If you use Firefox: [Custom New Tab Page](https://addons.mozilla.org/en-US/firefox/addon/custom-new-tab-page/?src=search).
  - If you use Chromium (Brave, Vivaldi, Chrome): [Custom New Tab URL](https://chrome.google.com/webstore/detail/custom-new-tab-url/mmjbdbjnoablegbkcklggeknkfcjkjia).

## Customization

### Links:

You can change the links (and the icons too) in the HTML Code:

```html
<a href="https://github.com/" target="blank" class="qlink__link qlink__link-1">
    <i class="fab fa-github fa-5x"></i>
</a>
```

Change the link in the `href` property with the link you want. (The `target="blank"` makes the link to open a new tab with the link you choose).
The Fork Project uses [Font Awesome](https://fontawesome.com/) for the icons, and you can change them in the `class=""` property with the name of the icon and size.

### Colors:
In the CSS code you can always change the variables colors:

![](assets/code.png)

### Weather:

In line 16 of the `weather.js` file, insert your API from OpenWeatherMap.   
In line 24 and 25 of the `weather.js`, change your cordinate location.

### Weather Info:

For setting up the Weather widget you're going to need an API Key in: `https://openweathermap.org/`. Once you have your Key you'll need to set yourlatitude and longitude, you can use: `https://www.latlong.net/` to get them. Once you have the data, you'll need to set them in the `weather.js` in the **js** folder. The code is

> If you don't like to have your API Key public, you can make the repo into a private one. You can still use the Github Pages service.

### Weather Icons:

![](assets/previewico.png)

The icons by themselves have now 4 different color schemes:

-   **Nord** Using the Nord Color Scheme and easy-to-eyes colors
-   **OneDark** (Default one) Using the One Dark Pro color scheme
-   **Dark** For White theme only users that want a minimalist look
-   **White** For Dark theme only users that want a minimalist look

You set the icon theme changing this two lines of code in the `weather.js` files:

-   If you want the Dark icon theme, change the `OneDark` to `Dark`
-   If you want the White icon theme, change the `OneDark` to `White`
-   If you want the Nord icon theme, change the `OneDark` to `Nord`

For example if I'd like to use the `Dark` icon theme:

```js
function displayWeather() {
    iconElement.innerHTML = `<img src="icons/OneDark/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span class="darkfg">${tempUnit}</span>`;
    descElement.innerHTML = weather.description;
}

//Change it to:
function displayWeather() {
    iconElement.innerHTML = `<img src="icons/Dark/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span class="darkfg">${tempUnit}</span>`;
    descElement.innerHTML = weather.description;
}
```

### Greetings:

In line 5 until 9 of the `greeting.js` translate messages for your language. You can put your name and change the greetings.

```js
var name = 'John Doe';
var lateTxt = 'Go to Sleep! ';
var morningTxt = 'Good morning! ';
var afterTxt = 'Good afternoon ';
var evenTxt = 'Good evening ';
```

It'll change in order of the hour.

## Final appearance 

![](assets/preview.png)