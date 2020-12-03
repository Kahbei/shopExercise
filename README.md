# ShopExercise

Little school project in order to use angular

### Hydrate your DB :

Go in `src/app/components/header/headear.component.html` and uncomment this line :

```html
<form class="form-inline my-2 my-lg-0" action="/api/hydrate" method="post">
  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
    Hydrate DB
  </button>
</form>
```

Then push this button to hydrate your local DB and comment this line in order to hide the button.
