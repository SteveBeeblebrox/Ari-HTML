# Ari-HTML
HTML support for conditional and scoped CSS
## Tags
### `ari-if`
#### Attributes
+ This element includes the [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes).
+ `case` (String)
+ `then` (CSSStyleDeclaration)
+ `else` (CSSStyleDeclaration)
+ `updateonresize` (Boolean)
+ `active` (Read-only Boolean)
#### Usage
+ This element will have different CSS styles depending on the result of evaluating the `case` attribute.
+ If the result is true then the element's style is that of the `then` attribute; otherwise, its style is that of the `else`  attribute.
+ The element checks its condition when it is first loaded, when its `update` method is called, or when the page is resized if the `updateonresize` attribute is set.
+ When the `case` is true, the element gains the `active` attribute which can be used with CSS selectors for more complex styling.
#### Example
```html
<ari-if case="Math.random() > 0.5" then="color: red" else="color: blue">
  <h1>Hello World</h1>
</ari-if>
```
### `ari-scope`
#### Attributes
+ This element includes the [global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes).
#### Usage
+ This element provides a simple way to scope CSS styles to part of a document.
+ Any `style` tags inside of this element will not affect any part of the document outside of this element.
+ Note that use of `querySelector`, `querySelectorAll`, and `closest` are also scoped.
#### Example
```html
<h1>Hello World</h1>
  <ari-scope>
    <style>
      h1 {
        color: red;
        text-decoration: underline;
      }
    </style>
  <h1>Hello WOrld with scoped styles</h1>
</ari-scope>
```
