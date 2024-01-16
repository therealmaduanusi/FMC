# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](desktop-design./screenshot.jpg)
![](mobile-design./screenshot.jpg)
![](active-states./screenshot.jpg)




### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [faq-accordion-main2](https://faq-accordion-main2.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [SASS/SCSS](https://www.w3schools.com/sass/) - CSS Preprocessor
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

Learnt about the toggle state in JS

To see how you can add code snippets, see below:

```html
<main class="container">
  <div class="faq-header">
    <img src="/assets/images/icon-star.svg" alt="icon-star">
    <h1>FAQs</h1>
  </div>
  <div class="accordion-container">
    <div class="accordion-item">
      <button id="accordion-btn" class="accordion-btn">
        What is Frontend Mentor, and how will it help me?
        <div class="icons">
          <img class="plus-icon btn-icon" src="/assets/images/icon-plus.svg" alt="icon-plus">
          <img class="minus-icon btn-icon" src="/assets/images/icon-minus.svg" alt="icon-minus">
        </div>
      </button>
      <div class="accordion-description">
        <p>
          Frontend Mentor offers realistic coding challenges to help developers improve their 
          frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
          all levels and ideal for portfolio building.
        </p>
      </div>
    </div>
</main>
```
```scss
@import 'fonts';
@import 'colors';
.accordion-item:not(:last-child){
  border-bottom: 2px solid $primary-color-lightPink;
}
```
```js
  this.classList.toggle('active')

```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


### Continued development

Focusing more on DOM optimization 



### Useful resources

- [edsHTML youtube channel](https://youtu.be/HJuD66J7uCE?si=ZIpWj_a7wJs-0SjX) - This helped me for the toggle state reason. I really liked this pattern and will use it going forward.
- [w3schoolcom sass tutorial](https://www.w3schools.com/sass/) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.



## Author

- Website - [Victor Maduanusi](https://victormaduanusi.netlify.app/)
- Frontend Mentor - [@therealmaduanusi](https://www.frontendmentor.io/profile/therealmaduanusi)
- Twitter - [@madu_anusi](https://www.twitter.com/madu_anusi)


## Acknowledgments

I would like to thank edsHTML for creating such video and also FMC on the challenge they created


