# Contacts Code Challenge

## Documentation

This is a code challenge/test for [Eurail](https://www.eurail.com/en), using following technology stack:

    - reactjs
    - typescript
    - vite
    - css modules

## Scripts: Install/Run/Build

#### Project setup

```
npm install
```

#### Compiles and hot-reloads for development

```
npm run dev
```

#### Compiles and minifies for production

```
npm run build
```

## Next steps

    1. adding dictionaries for `i18next`
    2. adding unit tests
    3. imporoving accessibility support
    4. removing toastify and adding a custom one from scratch
    5. complete documentation

#### Things to consider

    - Since this was an SPA(single page application) there is no routing system hence no `react-router-dom` added
    - This is a simple project with no big data mutations necessary so I did not used `Redux` and there is a couple simple contexts
    - For opening contact cards upon clicking the user name I chose a pattern that each name contains its card code and shows it upon clicking, this could be  achieved by another pattern, using a single card item and adding data to it upon clicking any names, with this pattern soe hardships peresnt themselves in styling and positioning so I chose current pattern .

#### Application and Folder Structure

    EURAIL -TEST/
        ├── Public
        └── src/
            ├── assets/
            │   └── styles
            ├── components/
            │   ├── contacts
            │   └── tabs
            ├── context
            ├── interfaces
            ├── services
            ├── shared
            └── utils


    The application has a simple structure:
    - `index.html` and `main.tsx` are application entry points.
    - then there is `App.tsx` which contains `ErrorBoundary.tsx` and `Layout.tsx`
    - components folder houses `layout`, `loader` and `header` components
        - there is two subfolders for contact part of the page and tabs
    - context contains two contexts
        - one for gettign and emotting the list of contacts
        - another for setting the active tab to be shown by application, despite design that disables the letters woth no contacts under them, I generate the tabs from contacts so if for example if there is no contact under `x` there would be no `x` on tabs.
    - interfaces has the main interface for contact broke down to smaller interfaces and only the ones that would be used directly on components are exported to keep working tree clean
    - in the services there is a single file wrapping `axios` to be used in application. only `get` method is availble since I only needed that one.
    - in shared we have `ErrorBoundry`, `icons` which contains all the Icons I used in app, and the config for toastify.
    - in utils we have two files that each contains pure functions that simplifies testing process and make them reusable.
