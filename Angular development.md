# Angular development

## 0. Configure Visual Studio Code to work with Angular

(Specify here what is needed)

## 1. Start a new application (SPA)

* Execute the command ng new name (name will be the name of our application)
  1. Check no to angular routing
  2. Check enter when asks for styles
  3. In order to check everything is okay, execute the command ng serve -o
  
* Now we can start creating new components:
  1. Create a new folder in the app folder called components, and inside of this another one called shared
  2. After this, we are going to use the angular cli to create a new component: ng g c components/shared/navbar (we don't need to specify the app folder)
     * g is for generate
     * c is for component
  3. In this case we want require the navbar.component.css nor navbar.component.spec.ts, so we can delete both
  4. Now we will have to go inside the navbar.component.ts in order to remove this line:  styleUrls: ['./navbar.component.css'], because we don't have now the css file
  5. If we move to app.module.ts we will see that the navbar.component appears automatically in there
  6. Now we are going to add the home component: ng g c components/home (in this case we won't require to be inside of the shared folder)
  
* How do we install 3rd libraries like bootstrap using the cli:

### Option 1

  1. Go to bootstrap documentation and move to the downloads:
     https://getbootstrap.com/docs/4.4/getting-started/download/

  2. Move to index.html and paste this lines:

     ```html
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
     ```

     ```html
     <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
     <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
     ```
### Option 2
  1. Download the full bootstrap library
    2. Create a new folder called libs inside of the assets folder and copy the content
    3. Write this lines inside the index.html

### Option 3

1. run command npm install bootstrap --save
2. run command npm install jquery --save
3. run command npm install popper.js --save
4. Move to angular.json file
   1. Inside the styles line, add:
```js
"node_modules/bootstrap/dist/css/bootstrap.min.css"
```
   2. Inside the scripts line, add:
```js
"node_modules/jquery/dist/jquery.slim.min.js",
"node_modules/popper.js/dist/umd/popper.min.js",   "node_modules/bootstrap/dist/js/bootstrap.min.js"
```
## 2. Configure our navbar

1. Go to the bootstrap documentation and pick any navbar that shows there
2. Customize it as you wise
3. Move to the app.component.html and write this line:
```html
<app-navbar></app-navbar>
```

4. Now add a Jumbotron component from bootstrap into the home.component.html

## 3. Create two new components: search and heroe

1. Create a new component called about: ng g c components/about

2. Create a new component called about: ng g c components/heroes -is

   1. The -is means inline css which doesn't create a css style file

## 4. Use Routes in Angular

1. Create a new file named app.routes.ts inside the app component.
2. Add the following code:
```ts
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(APP_ROUTES);
```

3. Move to app.module.ts
4. Import the new app.routes file
```ts
 import { APP_ROUTING } from './app.routes';
```

5. Add the import into the imports of the NgModule

6. Move to the app.component.html and add this:
```html
<div class="container">
    <router-outlet>
    </router-outlet>
</div>
```

7. In order to move between pages, we have to move to the navbar.component.html, remove the active class and create each li like this one:
```html
<li class="nav-item">
	<a class="nav-link" [routerLink]="['home']">Home</a>
</li>
```
​		This is called routerLink

8. If we want to make the active class in the navebar work, we have to work with the routerLinkActive which works different than the routerLink. We have to use this like this:
```html
<li class="nav-item" routerLinkActive="active">
	<a class="nav-link" [routerLink]="['home']">Home</a>
</li>
```
​		We will need to replicate this line  routerLinkActive="active" in each of the li that we may have

## 5. Add animation to the transition

1. First of all, add this styles into the styles.css file:
```css
.animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

.fast {
    -webkit-animation-duration: 0.4s;
    animation-duration: 0.4s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.fadeIn {
    animation-name: fadeIn;
}
```

2. Move to the about.component.html and add the classes to the html elements in there like this:
```html
<p class="animated fadeIn fast">about works!</p>
```

