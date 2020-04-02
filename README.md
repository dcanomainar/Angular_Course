# Angular development

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

## 7. ngFor

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
## 8. NgIf

As we have work with ngFor which allows us to work with loops, we can work with conditions, so we can, for example, show information that we would like to appear, but only if fulfil a determinated condition. So, if we want to use it, then:

1. We will need to use it this way:

   ```html
   <img *ngIf="heroe.casa == 'DC'" class="resizeImage" src="../../../assets/img/DC.jpg" alt="DC">
   <img *ngIf="heroe.casa == 'Marvel'" class="resizeImage" src="../../../assets/img/Marvel.jpg" alt="Marvel">
   ```

   As we can see, we will only show the first element, if 'heroe.casa' equals to 'DC', and we will only show the second element if 'heroe.casa' equals 'Marvel'.

## 9. ActivatedRoute

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

   1. In our service we will create this methdo:

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

## 10. Pipes

Pipes allows us to transform displayed values using templates, so we are able to transform values of type currency, date, decimal, percent, json, or even make other type of transformations like to uppercase, lowecase, etc.

An example of how to transform a date and show only the year can be the following:

   ```html
<small>{{ heroe.aparicion | date:'y' }}</small>
   ```

If we want to transform a string to uppercase, we have to use it this way:

```html
<h1>{{ heroe.nombre | uppercase }}</h1>
```

### uppercase

This pipe allows us to format a string and put it all to upper case.

```
{{ value | uppercase }}
```

### lowercase

This pipe allows us to format a string and put it all to lower case.

```
{{ value | uppercase }}
```

### slice

This pipe allows us to 'slice' a string from the beginning giving a number where will 'slice it'.

```
{{ value | slice:3 }}
```

This pipe can also be used with arrays and obtain the 3 first elements like this:

```
<td>{{ array | slice:0:3 }}</td>
```

Or even slice a ngFor like this:

```
<ul>
	<li *ngFor="let item of array | slice:5:20">{{ item }}</li>
</ul>
```

## 11. Search

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

## X. Auto reload for clients after deploy

https://blog.nodeswat.com/automagic-reload-for-clients-after-deploy-with-angular-4-8440c9fdd96c

1. ng build --prod
2. dist/<<project-name>>/main.somehash.js

## XX. Other commands

ng lint --format=stylish

ng test --watch=false --code-coverage

