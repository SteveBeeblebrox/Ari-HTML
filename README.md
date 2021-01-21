# Ari-HTML
HTML conditionals, loops, and variables
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
