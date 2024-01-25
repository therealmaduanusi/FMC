# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](desktop-design-completed.jpg)
![](mobile-design.jpg)


Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.


### Links

- Solution URL: [FCM Solution](https://your-solution-url.com](https://www.frontendmentor.io/solutions/tip-calculator-using-js-and-scss-Dla7v6B1YE))
- Live Site URL: [Tip calculator](https://tip-calculator-main-app1.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [SASS/SCSS](https://sass-lang.com/guide/) - CSS Preprocessor


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
  <div class="tip-percentage-container">
    <p>Select Tip %</p>
    <div class="percentage-grid">
      <button class="btn-tip-percent">5%</button>
      <button class="btn-tip-percent">10%</button>
      <button class="btn-tip-percent">15%</button>
      <button class="btn-tip-percent">25%</button>
      <button class="btn-tip-percent">50%</button>
      <input type="text" id="custom-input" class="custom-input btn-tip-percent" placeholder="Custom">
    </div>
  </div>
```
```scss
@media (max-width: 374px) {
    .percentage-grid{
        grid-template-columns: repeat(2, 1fr);
    }
}
```
```js
  dollarPerson.innerText = `${tipAmount.toFixed(2)}`;
  dollarValue.innerText = `${totalAmount.toFixed(2)}`;
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.



### Useful resources

- [SASS/SCSS](https://sass-lang.com/guide/) - SASS documentation.
- [TUTORIAL](https://www.w3schools.com/sass/) - SASS/SCSS tutorial.



## Author

- Frontend Mentor - [@therealmaduanusi](https://www.frontendmentor.io/profile/therealmaduanusi)
- Twitter - [@madu_anusi](https://twitter.com/madu_anusi)


## Acknowledgments

Thank you FMC


