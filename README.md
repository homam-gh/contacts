# Contacts Code Challenge

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

## Documentation

This is a code challenge/test for [Eurail](https://www.eurail.com/en), using following technology stack:

    - reactjs
    - typescript
    - vite
    - css modules

#### Things to consider

    - Since this was an SPA(single page application) there is no routing system hence no `react-router-dom` added
    - This is a simple project with no big data mutations necessary so I did not used `Redux` and there is a couple simple contexts
    - For opening contact cards upon clicking the user name I chose a pattern that each name contains its card code and shows it upon clicking, this could be  achieved by another pattern, using a single card item and adding data to it upon clicking any names, with this pattern soe hardships peresnt themselves in styling and positioning so I chose current pattern .

#### Application and Folder Structure

    The application has a simple structure:
    - `index.html` and `main.tsx` are application entry points.
    - then there is `App.tsx` which contains `ErrorBoundary.tsx` and `Layout.tsx`
