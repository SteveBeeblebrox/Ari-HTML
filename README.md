# Ari-HTML
HTML conditionals, loops, and variables
## Tags
### `ari-if`
#### Attributes
+ This element includes the [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes).
+ `case` (String)
+ `then` (CSSStyleDeclaration)
+ `else` (CSSStyleDeclaration)
+ `updateonresize` (Boolean)
### `ari-var`
#### Attributes
+ This element includes the [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes).
+ `src` (String)
### `ari-with`
#### Attributes
+ This element includes the [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes).
+ `src` (String)
## Conditional Statements
### If Statements
```html
<ari-if case="Math.random() > 0.5" then="color: red" else="color: blue">
  <h1>Hello World</h1>
</ari-if>
```
## Variables
### Single JavaScript Variable
```html
<ari-var src="time"></ari-var>
<script>
    setInterval(() => time = new Date().toLocaleTimeString(), 1000);
</script>
```

### Multiple JavaScript Variables
```html
<ari-with src="message">
  <h1>Title: <ari-var src="header"></ari-var></h1>
  <p>Contents: <ari-var src="body"></ari-var></p>
</ari-with>
<script>
  message = {
      header: 'Hello',
      body: 'Wow!'
  }
  message.header = 'Hello World';  
</script>
```
