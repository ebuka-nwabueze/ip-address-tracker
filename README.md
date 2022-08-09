# Frontend Mentor - IP address tracker

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

Mobile

![](./public/design/expense-mobile.png)

Desktop

![](./public/design/expense-desktop.png)

### Links

- Live Site URL: [Tip Calculator](https://master--effulgent-daifuku-376ef4.netlify.app/)

## Built with

- Typescript
- React
- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

- The demarcation seen in between the map info is placed with the ::after pseudo class. Firstly each flex item(top__details-info-box) is postioned relative. Next, the pseudo class is placed in absolute from the flex item with a border leaving out the first child element.

```css
  .top__details-info-box{
    text-align: left;
    position: relative;
  }
  .top__details-info-box:not(:first-child):after{
    content: "";
    border: 0.3px solid var(--ash);
    height:40px;
    position: absolute;
    left: -20px;
    top: 8px;
  }
```

- 

```css

```

- 
```html

```
```js

```


- 
```ts

```

## Author

- Website - [Ebuka Nwabueze](https://www.ebukanwabueze.com)
- Frontend Mentor - [@ebuka-nwabueze](https://www.frontendmentor.io/profile/ebuka-nwabueze)
- Twitter - [@ebukaGN](https://www.twitter.com/ebukaGN)
