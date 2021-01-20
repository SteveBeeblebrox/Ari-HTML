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
### JavaScript Link
```html
<ari-var src="time"></ari-var>
<script>
    setInterval(() => time = new Date().toLocaleTimeString(), 1000);
</script>
```
