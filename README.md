# Angular development

# Table of contents

## 0. Prerequirements

### 0.1.  Visual Studio Code

(Stuff to be written)

### 0.2. Create a new Angular application

In order to create a new Angular application, we will require to use the cmd (if we are in windows) or the bash (if we are in linux). If you are using Mac, I don't know how it works, so check it out in internet.
After you open your command line prompt, you will need to move to the folder you are interested on to create the project and write the following command:

```
ng new name
```
Where name will be the name that you will give to your project.

After this, you will be asked if you want to use routing. We won't need it this way, so you will have to specify that no.

Finally you will be asked which type of css will we use. We will require the default, so just press enter, and that's it. We will have in a few minutes a new Angular project created with the basics.

### 0.3. Deploy angular application locally

(Stuff to be written)

### 0.4. Build application

(Stuff to be written)

### 0.5. Work with Firebase

(Stuff to be written)

npm install -g firebase-tools

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

## 3. Create components

### 3.0. Overview

We can create components using this command:

```
ng generate component components/user -is -it
```

or

```
ng g c components/user -is -it --skipTests
```

As we can see:

* g is for generate
* c is for component
* is is for inline style
* it is for inline template
* skipTests is for avoid the creation of a file for testing this component

If we want to avoid creating a new folder inside the new component's destiny folder, then we need to work this way:

```
ng g c components/user/newUser -is -it --flat
```

* flat is the new parameter that we are going to need to use

### 3.1. Create two new components: search and heroe

1. Create a new component called about: ng g c components/about

2. Create a new component called about: ng g c components/heroes -is

   1. The -is means inline css which doesn't create a css style file

### 3.2. Life cycle of a component

We have different methods:

* ngOnInit: this triggers when component is initializating (after the 'ngOnChanges').
* ngOnChanges: this triggers when data of properties of our component changes in some way.
* ngDoCheck: this triggers when executes a review of the detection of changes of the cycle (whenever a change happends).
* ngAfterContentInit: this triggers after insert any content.
* ngAfterContentChecked: this triggers after having reviewd the inserted content.
* ngAfterViewInit: this triggers after each component has been initialized (even child components).
* ngAfterViewChecked: this triggers after each of the components has been reviewed (even child components).
* ngOnDestroy: this triggers when we destroy the component or move to another view.

For more information about this, visit [Lifecycle hooks](https://angular.io/guide/lifecycle-hooks).

## 4. Use Routes in Angular

### 4.0. Simple routing

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

    export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
    ```

3. Move to app.module.ts and import the new app.routes file

   ```ts
    import { APP_ROUTING } from './app.routes';
   ```

   You will need to add the APP_ROUTING into the @NgModule imports like this:

   ```ts
   @NgModule({
     declarations: [
   	{{whatever}}
     ],
     imports: [
       {{whatever}}
       APP_ROUTING
     ],
     providers: [
         {{whatever}}
     ],
     bootstrap: [AppComponent]
   })  
   ```

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
	This is called routerLink

8. If we want to make the active class in the navebar work, we have to work with the routerLinkActive which works different than the routerLink. We have to use this like this:
    ```html
    <li class="nav-item" routerLinkActive="active">
        <a class="nav-link" [routerLink]="['home']">Home</a>
    </li>
    ```
    We will need to replicate this line  routerLinkActive="active" in each of the li that we may have

9. If we want to pass a value in the url, we will need to add it in the app.routes.ts like this (with an a tag):

    ```ts
    { path: 'heroe/:id', component: HeroeComponent }
    ```

    And in the html of our component, we will use for example this kind of link:

    ```html
    <a [routerLink]="['/heroe', i]" class="btn btn-outline-primary btn-block">See more...</a>
    ```

    To use the i, we will require to change the ngFor and add this let i = index:

    ```html
    <div class="card" *ngFor="let heroe of heroes; let i = index">
    </div>
    ```

10. If we want to pass a value in the url, we will need to add it in the app.routes.ts like this (with a button tag and using functions):

    1. First of all, we will implement our button tag using a (click)="function(parameter)":

        ```html
        <button (click)="seeHeroe(i)" type="button" class="bnt btn-outline-primary btn-block">See more...</button>
        ```

    2. Now, in our component.ts, we will import our router:

        ```ts
        import { Router } from '@angular/router';
        ```

        And we will inject it in our constructor:

        ```ts
        constructor(private router: Router) {}
        ```

        So now we can use it in our function like this:

        ```ts
        seeHeroe(idx: number) {
            this.router.navigate(['/heroe', idx]);
        }
        ```

### 4.1. Sub routing

If we want to work with sub routes in our application, we need to move first to our app.routes.ts and inside any route, we will need to work with a new attribute called children like this:

```typescript
const APP_ROUTES: Routes = [
    { 
        path: 'user/:id',
        component: UserComponent,
        children: [
           { path: 'new', component: NewUserComponent },
           { path: 'edit', component: EditUserComponent },
           { path: 'detail', component: DetailUserComponent },
           { path: '**', pathMatch: 'full', redirectTo: 'new'},
        ]
    }
];
```

If we want to simplify this, we can even create a 'user.routes.ts' with this content:

```typescript
import { Routes } from '@angular/router';
import { NewUserComponent } from './new-user.component';
import { EditUserComponent } from './edit-user.component';
import { DetailUserComponent } from './detail-user.component';

export const USER_ROUTES: Routes = [
    { path: 'new', component: NewUserComponent },
    { path: 'edit', component: EditUserComponent },
    { path: 'detail', component: DetailUserComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'new'},
];
```

And then, in our 'app.routes.ts', we will import our 'USER_ROUTES' and use it in the children attribute of the path 'user': 

```typescript
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { USER_ROUTES } from './components/user/user.routes';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { 
        path: 'user/:id',
        component: UserComponent,
        children: USER_ROUTES
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
```

Finally, if we want to obtain any parameter from our parent route, we will require to import the ActivatedRoute, and subscribe to it. Example:

```typescript
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class NewUserComponent implements OnInit {
  constructor(private router: ActivatedRoute) {
    this.router.parent.params.subscribe(params => {
      console.log('Child route');
      console.log(params);
    });
  }
}
```

The most peculiar thing of this, is that the router includes the parent: 'this.router.PARENT.params.subscribe'...

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

## 6. Services

In order to obtain information from a rest api using http requests, we will require to implement services:

1. We will create a services folder inside the app folder
2. We will create a new file named 'name.service.ts', where name will be the 'name' of our service
3. We will write this code:
    ```ts
    import { Injectable } from '@angular/core';

    @Injectable()
    export class NameService {
        constructor() {
            console.log('Service ready');
        }
    }
    ```
4. Now we will move to the app.module.ts and we will import it and add it into the providers array which is inside of the NgModule
5. Now we will move to our component.ts and we will import the service and add the HeroeService into the constructor of the component like this:
    ```ts
    constructor(private _heroesService: HeroesService) {}
    ```

6. We need now a method capable of returning the required information that we may need. If we don't have any rest api created yet, we can work with static info, like an array and in this method just return it like this:
    ```ts
    getHeroes() {
        return this._heroes;
    }
    ```

7. Now that we have a method, we can use it in our component. So we move into the heroes.component.ts and we are going to create a new list of the type of data that we are going to return (or just use any) and inside of the ngOnInit we are going to obtain this data from our service:
    ```ts
    heroes: any[] = [];

    ngOnInit() {
        this.heroes = this._heroesService.getHeroes();
    }
    ```

8. As I said before, we should work with the type of data specified instead of using any, so we are going to create an interface with the type of data that we require and we are going to replace the any for this interface. This interface well be created inside the name.service.ts:
    ```ts
    export interface Heroe {
        nombre: string;
        bio: string;
        img: string;
        aparicion: string;
        casa: string;
    }
    ```

	It is very important that we use the word export so we can use it outside of this file.

## 7. Directives

### 7.1 ngFor

If we want to load dynamically a lot of information without having to write them statically, we will need the ngFor directive. To use it, we have to move into any html where we would like to implement it and add the following things:

1. First of all, we will implement the bucle in the part that we want like this, using the array that we declared previously:

   ```html
   <div class="card" *ngFor="let heroe of heroes">
   </div>
   ```

2. Secondly, we need to use the properties inside of the variable heroe. Examples:

    ```html 
    <img class="card-img-top" src="{{ heroe.img }}" alt="{{ heroe.nombre }}">
    <h5 class="card-title">{{ heroe.nombre }}</h5>
    <p class="card-text">{{ heroe.bio }}</p>
    <p class="card-text"><small class="text-muted">{{ heroe.aparicion }}</small></p>
    ```
### 7.2. NgIf

As we have work with ngFor which allows us to work with loops, we can work with conditions, so we can, for example, show information that we would like to appear, but only if fulfil a determinated condition. So, if we want to use it, then:

1. We will need to use it this way:

   ```html
   <img *ngIf="heroe.casa == 'DC'" class="resizeImage" src="../../../assets/img/DC.jpg" alt="DC">
   <img *ngIf="heroe.casa == 'Marvel'" class="resizeImage" src="../../../assets/img/Marvel.jpg" alt="Marvel">
   ```

   As we can see, we will only show the first element, if 'heroe.casa' equals to 'DC', and we will only show the second element if 'heroe.casa' equals 'Marvel'.

### 7.3. NgStyle

This directive allows us to update the style for an html component dinamically. If we want to use this, then we need to create a new component with the it and is parameter:

   ```
ng g c components/ngStyle -it -is
   ```

This will creates us something like this:

   ```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p>
      Hola mundo... esta es una etiqueta
    </p>
  `,
  styles: []
})
export class NgStyleComponent {
  constructor() { }
}
   ```

Now we can start to work with ngStyle in two different ways:

1. simple

   ```ts
   <p [ngStyle]="{ 'font-size': '15px' }">
   	Hola mundo... esta es una etiqueta
   </p>
   ```
2. advance, which allows us to change the size, for example by creating a new variable named size and with two buttons that allows us to add 1 or subtract 1
   ```ts
   <p [style.fontSize.px]="size">
         Hola mundo... esta es una etiqueta
   </p>
   ```
### 7.4. NgClass

This allows us to add and remove css classes on an HTML element. Example of this:

``` html
<button type="button" class="btn btn-danger" (click)="danger = !danger" [ngClass]="{ 'btn-danger': danger, 'btn-info': !danger }">Danger</button>
```

Here we can see a button which has a property called 'ngClass' which whenever the danger (of type boolean) property changes between true and false, it sets or remove one or another class (btn-danger and btn-info)

### 7.5. NgSwitch

This directive works like a normal switch, and in this example we are going to create a new component and in it we are going to create a new variable named alert of type string and with its value set to info, so now in the html we will use this like this:

```html
<div [ngSwitch]="alert">
    <div *ngSwitchCase="'success'">
    Success
    </div>
    <div *ngSwitchCase="'info'">
    Info
    </div>
    <div *ngSwitchCase="'warning'">
    Warning
    </div>
    <div *ngSwitchDefault>
    Danger
    </div>
</div>
```

So in this case we will only see the Info value.

### 7.6. Custom Directives

If we want to create a custom directive. For this example, we are going to create a directive capable of 'highlight' any element by changing its background. So we need to execute the following command:

   ``` 
ng g d directives/highlight
   ```

Which will create a new component of type directive with this style:

```typescript
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor() { }
}
```

Now we will call import the 'ElementRef', and inject it in the constructor. After this, we will call this property and change the backgroundColor property:

```typescript
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'yellow';
  }
}
```

Finally, we will need to call the property in our html element:

```html
<p appHighlight>Test</p>
```

Now, if we want to pass any value to the directive, like for example, we want to pass the color instead of use always yellow, then we will need to change our html element:

```html
<p [appHighlight]="'orange'">Test</p>
```

And after this, we will need to import 'Input' in our directive, create a new variable that will intercept this value that we are passing (in this case, the variable 'appHighlight'):

```typescript
import { Input } from '@angular/core';

@Input("appHighlight") newColour: string;
```

## 8. ActivatedRoute

If we want to obtain the parameter from the url, we will require to work with the ActivatedRoute.

1. First of all, we will import the ActivatedRoute in the component.ts that we are interested on:

   ```ts
   import { ActivatedRoute } from '@angular/router';
   ```

2. Now we need to inject it in our constructor and we need to listen to the parameters that we are going to recieve. So we need to subscribe to this Observable:

   ```ts
   constructor(private activatedRoute: ActivatedRoute) {
       this.activatedRoute.params.subscribe(params => {
         console.log(params);
       });
   }
   ```

3. If now we want to obtain some information using this property that we obtained from our parameters, then we will require to implement a new function in our service and inject this service in our constructor so we can use it in this component:

   1. In our service we will create this method:

      ```ts
      getHeroe(idx: string) {
          return this._heroes[idx];
      }
      ```

   2. In our component we will implement this elements:

      ```ts
      import { HeroesService, Heroe } from '../../services/heroes.service';
      
      heroe: any =  {};
      
      constructor(private activatedRoute: ActivatedRoute, private _heroeService: HeroesService) {
          this.activatedRoute.params.subscribe(params => {
              this.heroe = this._heroeService.getHeroe(params['id']);
          });
      }
      ```

   Now we will need to use this information that we obtained and print this information in our html (or whatever that we need to do with it).

## 9. Pipes

Pipes allows us to transform displayed values using templates, so we are able to transform values of type currency, date, decimal, percent, json, or even make other type of transformations like to uppercase, lowecase, etc.

An example of how to transform a date and show only the year can be the following:

   ```html
<small>{{ heroe.aparicion | date:'y' }}</small>
   ```

If we want to transform a string to uppercase, we have to use it this way:

```html
<h1>{{ heroe.nombre | uppercase }}</h1>
```

If we want to transform a string to lowercase, we have to use it this way:

```html
<h1>{{ heroe.nombre | lowercase }}</h1>
```

### 9.1. Slice

If we want to catch a fragment of a string or an array, we have to use it this way:

This way we obtain the first three elements: 

```html
<h1>{{ heroe.nombre | slice:3 }}</h1>
```

This way we obtain the elements between the position zero and position three: 

```html
<h1>{{ heroe.nombre | slice:0:3 }}</h1>
```

### 9.2. Decimal

If we want to convert an element to a number type with just 3 decimals, then we will do it like this:

```html
<td>{{ pi | number }}</td>
```

If we want to obtain only the integer part, then we will have to put:

```html
<td>{{ pi | number:'1.0-0' }}</td>
```

If we want to obtain three integer positions:

```html
<td>{{ pi | number:'3.0-0' }}</td>
```

If we want to obtain all integer numbers and only two decimals:

```html
<td>{{ pi | number:'.0-2' }}</td>
```

### 9.3. Percentage

If we want to convert an element to percentage, we will have to put it like this:

```html
<td>{{ percentage | percent }}</td>
```

And if we want to show one decimal, then we will have to put it like this;

```html
<td>{{ percentage | percent:'2.0-2' }}</td>
```

### 9.4. Currency

If we want to convert an element to a type currency, then:

```html
<td>{{ salary | currency }}</td>
```

If we want to work with other type of currencies, then we will have to work with the standard [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217):

```html
<td>{{ salary | currency:'EUR' }}</td>
```

If we want it without decimals, then we will have to work with more than one argument like this:

```html
<td>{{ salary | currency:'EUR':'symbol-narrow':'.0-0' }}</td>
```

### 9.5. Json

If we want to parse json code and see its content, then:

```html
<td>{{ heroe | json }}</td>
```

If we are working with bootstrap, we can use the tag pre wich allows us to see it with a better format.

### 9.6. Async

This pipe doesn't work with arguments, but we have an expression.
If we want to work with it, we will have to construct a promise or an observable and we will obtain the data from any http response:

```html
<td>{{ promise | async  }}</td>
```

### 9.7. Date

If we want to parse a date, then we will have to work like this:

```html
<td>{{ birthday: date }}</td>
```
This way we will obtain a short date.

We have a lot of configurations, like medium wich will format our date like 'MMM d, y, hh:mm:ss a':

```html
<td>{{ birthday: date:medium }}</td>
```

we have as well the type short, wich will format our date like 
'M/d/yy, hh:mm a':

```html
<td>{{ birthday: date:short }}</td>
```

And of course, if we want to work with a custom date, we can use it like this:

```html
<td>{{ birthday: date:'MMMM - dd' }}</td>
```

### 9.8. Custom pipes 

If we want to create a new pipe, we will have to execute the following command:

```
ng g p pipes/nameOfOurPipe
```

For example, we are going to create a new custom pipe for capitalize a string, so first of all, we are going to execute the command:

```
ng g p pipes/capitalized
```

An example of what a custom pipe could be is this:

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalized'
})
export class CapitalizedPipe implements PipeTransform {

  transform(value: string, all: boolean = true): string {
    value = value.toLocaleLowerCase();
    let names = value.split(' ');

    if(all) {
      names = names.map(name => {
        return name[0].toUpperCase() + name.substr(1);
      });
    }
    else {
      names[0] = names[0][0].toUpperCase() + names[0].substr(1);
    }

    return names.join(' ');
  }
}
```

What this does is transform the entry name and transform each of the words (if 'all' equals true) to upper case and only the first letter of the first word (if 'all' equals false) to upper case.

### 9.9. DomSanitizer

Now let's see something very useful. Imagine you want to add any external link into your application, like a video from youtube and you just copy the iframe with the src like this:

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/PM0HqmptYlY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```
As you can see, this iframe contains a src which contains an external url. If we just put it in our page, this will work fine, but we will recieve an alert saying that it is insecure. What we can do is move it to a new variable located in our .component.ts like 'videoUrl', but when we do this, our video won't be visible. This happends because we need to "sanitize it".

In order to make this, we will create a new custom pipe with something like this:

```typescript
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {
  constructor(private domSanitaizer: DomSanitizer) {
  }

  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    return this.domSanitaizer.bypassSecurityTrustResourceUrl(value);
  }
}
```

And if we want to use it, we will have to change our url like this:

```html
<iframe width="560" height="315" [src]="videoUrl | domseguro" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

### 9.10 Map

If we want to filter the data that we return to the component when we are calling to an external service, we can use the function 'map' to take the part that we are interested most in. For example, imagine we want to obtain the token when we call to our back service for make a login in our application:

```typescript
return this.http.post(
	`${this.url}signUp?key=${this.apiKey}`,
	authData
).pipe(
	map(resp => {
		this.saveToken(resp['idToken']);
		return resp;
	})
);
```

the first value from the post would be the url and the next one the data that we are sending (user and password in this case). After calling the post, we call the pipe function and pass a map function as an argument which only takes from the respones the 'idToken' and send it to a function that will save it in the local storage.

For this, we need to import this:

```typescript
import { map } from 'rxjs/operators';
```

*[There is more information about this in the point 12]*

## 10. Search

If we want to implement a way to make a search in Angular, we can use, for example, an input of type text and a button in this way:

1. First of all, we may need to implement an input and a button in this way:

```html
<input class="form-control mr-sm-2" type="text" placeholder="Search (keyup.enter)="searchHeroe(searchText.value)" #searchText />

<button (click)="searchHeroe(searchText.value)" class="btn btn-outline-primary my-2 my-sm-0" type="button">Search</button>
```

As we can see, we have implemented a (keyup.enter)="function(value)" which will be the event that will executes when we press the enter key and will take the #searchText. It's very important that we add this tag, because without it, we won't be able to obtain the value of the input and send it to the function.
In the button, we have implemented a (click) function, which, as we can see, works equally as the input.

2. After this we need to implement the function that will be able to return us the list of elements that have a coincidence with the value we introduced in the input text. A possible aproach can be this one:

   ```ts
   searchHeroe(value: string) {
       const heroesFound: Heroe[] = [];
       value = value.toLowerCase();
   
       for (const heroe of this._heroes) {
           if (heroe.nombre.toLowerCase().indexOf(value) >= 0) {
               heroesFound.push(heroe);
           }
       }
   
       return heroesFound;
   }
   ```

After this point, we may want to redirect to another component after making click on the button and pass this text that we want to search. If we want to do that, then we will need to repeat the same steps wa have done in the Routes and ActivatedRoute.

## 11. Add other languages to our application

First of all, If we want to work with a specific language in our application, then we will have to install this:

1. Execute this command in the console: ng add @angular/localize
2. Add this lines in the app.module.ts:
   import { registerLocaleData } from '@angular/common';
   import localEs from '@angular/common/locales/es';
   import localFr from '@angular/common/locales/fr';
3. Create a new function:
   registerLocaleData(localEs, 'es-ES');
   registerLocaleData(localFr);
4. Add to our providers:

```javascript
providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-ES'
    }
]
```

In our pipe we can use them like this:
```html
<td>{{ birthday | date:'MMMM - dd':'':'es-ES' }}</td>
```
```html
<td>{{ birthday | date:'MMMM - dd':'':'fr' }}</td>
```

We can even create a new variable called language of type string and setted by default to 'es-ES', and change our language by clicking a button:
```html
<tr>
    <td>{{ birthday }}</td>
    <td>
    	date:'MMMM - dd':'':'{{ language }}'
        <br>
        <button (click)="language = 'es-ES'" class="mr1 btn btn-primary">Spanish</button>
        <button (click)="language = 'fr'" class="mr1 btn btn-secondary">French</button>
        <button (click)="language = 'en'" class="mr1 btn btn-success">English</button>
    </td>
    <td>{{ fecha | date:'MMMM - dd':'':language }}</td>
</tr>
```

## 12. Work with HTTP Requests

### 12.0. Configuration

First of all, we will need to import the following module in our app.module.ts and add it into our 'imports' part:

```typescript
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 12.1. Get Call

After this we will need to add the HttpClient in our constructor of the component where we will use it and we will be ready to work with it:

```typescript
constructor(private http: HttpClient) {
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe(resp => {
        console.log(resp);
      });
  }
```

This implementation is not the best way to do it. If we want to work with it better, we have to create a new service and import there the 'HttpClient' class. After this, we just have to call the service in our component and inject it in our constructor.

### 12.2. Map Operator

The map operators is a more better way to work with http responses, which allows us to filter them and receive in our components the information we require. In other words, it allows us to filter it.

If we want to work with map so we can use 'observables', we need to import from this library:

```typescript
import { map } from 'rxjs/operators';
```

And after this, we need to work with this new feature and use pipe as well, like this:

```typescript
return this.http.get(url, { headers })
           .pipe(map((resp: any) => resp.albums.items));
```

What this does is help us to return the data we are interested on and not all of it.

### 12.3. Automatic authentication with Tokens.

Now if we want to work with tokens, then we need first to create a back capable of return a token whenever the login was correct (passing a user and a password for example). After this, when the back returns to us a token, we need to store it somewhere:

#### 12.3.1 LocalStorage

We can use the local storage of the web browser to store this information that we may require at some point if we want to avoid to store the user and password as this information may be too sensitive and may.

In order to store it, we will do it as follows:

```typescript
localStorage.setItem('token', idToken);
```

In order to retrieve the token, we will do it as follows:

```typescript
localStorage.getItem('token');
```

## 13. Authentication

### 13.1. Authentication with Auth0

Follow the instructions that use in its page:

https://auth0.com/

https://manage.auth0.com/dashboard/eu/dev-96kp59za/

### 13.2 Add an Authentication Guard

If we want to generate a service capable of protect our routes, we can generate a guard using this command:

```
ng g g guards/auth
```

where the first g stands for generate and the second g stands for guard, and will create something like this:

```typescript
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
```

So now, we could use it in order to protect our URLs when, for example, we don't have a token in our local storage, because it has been deleted. So, we could create in our authentication service a method like this:

```typescript
authenticated(): boolean {
    return this.userToken.length > 2;
}
```

Now change our CanActivate method from the guard like this:

```typescript
canActivate(): boolean {
    if(this.auth.authenticated()) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
    }
}
```

And finally, add this to our routing module, in the specified route that we want to protect:

```typescript
{ path: 'home'    , component: HomeComponent, canActivate: [AuthGuard] }
```

### 13.3. Logout

In order to perform a logout, we could just remove from our localStorage the token. We can also validate if our token is still valid by evaluating if our date is grater than the valid date.

## 14. Forms

### 14.0.  Requirements

If we want to work with forms, we will need first to import the 'FormsModule' in the app.module.ts like this:

```typescript
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
  ],
  providers: []
})
```

### 14.1. ngModel

So, the first directive we are going to work with when we need to interact with a form is the ngModel. This directive will capture the value that we have in a variable created inside the component and will show the content if it's filled.

``` html
<span *ngIf="f.submitted && f.controls['email'].errors"
	 class="text-danger">Email is required</span>
<input type="text" 
       name="email" 
       [(ngModel)]="user.email"
       required
       email
       placeholder="Email">
```

### 14.2. ngSubmit

If we want to send this information when clicking a button, then we will require to add a ngSubmit directive in our form like this:

```html
<form (ngSubmit)="onSubmit()"></form>
```

Or we can use it this way:

```html
<form (ngSubmit)="onSubmit(f)"
	 #f="ngForm"></form>
```

If we want to pass an argument to the function.

And after this, we will need to create this function in our component.ts


## X. Auto reload for clients after deploy

https://blog.nodeswat.com/automagic-reload-for-clients-after-deploy-with-angular-4-8440c9fdd96c

1. ng build --prod
2. dist/<<project-name>>/main.somehash.js

## XX. Other commands

ng lint --format=stylish

ng test --watch=false --code-coverage
