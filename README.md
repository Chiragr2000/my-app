ANGULAR: Angular is a framework for building single-page applications.


        Framework: a combination of languages and libraries

            html, css, js, ts, rxjs, zone.js


        SPA: Only one HTML page, 
             view will change based on the user's activity


    SETUP:
    ------
    1) download install node js

       check version: node -v
       check version: npm -v

    2) install angular from npm

        npm install -g @angular/cli@15

        check version:  ng version

    3) create a new project and open it in the browser

        ng new my-app


    PERMISSIONS:
    ------------

        1. open PowerShell as administrator and run

            set-executionPolicy unrestricted

    
    Angular Project Hierarchy:
    -------------------------


    Angular Concepts:
    -----------------


    ROUTING: Helps us to navigate from one view to another view
    --------

    implementation:
    -----------------
        1) Configure routes in app-routing.module.ts
        2) create router outlet in app.component.html





    4 types of routes
    -----------------

    1) General route: 
    -----------------
        {path:'login', component: LoginComponent}

    2) Empty route:
    ----------------
         {path:'', component:LoginComponent}

    3) WildCard route/fallback route:
    -----------------------------------

         {path:'', component:PageNotFoundComonent}


    4) Children route:
    ------------------

         {path:'dashboard', component: DashboardComponent, children:[
            {path:'home', component: HomeComponent},
            {path:'welcome', component: WelcomeComponent},
            {path:'',component:WelcomeComponent}
        ]},


        configure router-outlet in the dashboard right section

===> When to use / or not 
-> when we want to redirect different component on different component page then , we use / 

