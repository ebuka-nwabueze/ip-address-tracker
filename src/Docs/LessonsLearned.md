# Lessons Learned

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

- When using the geolocation API, if you pass a wrong url parameter e.g API key or IP address during the get request. You return  the infomation of the current client.

```css

```

- The Map info section 

```html

```
```js

```


- 
```ts

```