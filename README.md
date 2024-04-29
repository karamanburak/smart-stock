# stock-management-app

 [SmartStock Live](https://smartstock-management.vercel.app/)

## Description
📦 This comprehensive reacts project aims to create a stock store application. The user can register to the store, log in, add the desired product to their inventory, buy or sell it, and keep track of the most current status of it instantly from the dashboard. The user can choose to use the application in dark mode or light mode. 


## Project Skeleton

```
- SmartStock Management App (folder)
|
|
SOLUTION
├── public
|    ├── assets
├── src
|    ├── apiCall
|    │   └── apiCall.js
|    ├── app
|    │   └── store.jsx
|    ├── assets
|    ├── components
|    ├── app
|    │   └── store.jsx
|    ├── assets
|    │   └── [images]
|    ├── components
|    │   ├── Cards
|    │   │   ├── BrandCard.jsx
|    │   │   └── FirmCard.jsx
|    │   ├── Commons
|    │   │   ├── AuthHeader.jsx
|    │   │   ├── AuthImage.jsx
|    │   │   ├── DataTable.jsx
|    │   │   ├── MyButton.jsx
|    │   │   ├── MyTextfield.jsx
|    │   │   ├── PageHeader.jsx
|    │   │   ├── SelectControl.jsx
|    │   │   └── StockModal.jsx
|    │   ├── Dashboard
|    │   │   ├── Charts.jsx
|    │   │   └── KpiCards.jsx
|    │   ├── Forms
|    │   │   ├── BrandForm.jsx
|    │   │   ├── FirmForm.jsx
|    │   │   ├── LoginForm.jsx
|    │   │   ├── ProductForm.jsx
|    │   │   ├── PurchaseForm.jsx
|    │   │   ├── RegisterForm.jsx
|    │   │   └── SaleForm.jsx
|    │   ├── Modals
|    │   │   ├── BrandModal.jsx
|    │   │   ├── FirmModal.jsx
|    │   │   ├── ProductModal.jsx
|    │   │   ├── PurchaseModal.jsx
|    │   │   └── SaleModal.jsx
|    │   ├── Navigatons
|    │   │   ├── MenuListItems.jsx
|    │   │   └── WeatherCard.jsx
|    │   ├── Start
|    │   │   ├── Footer.jsx
|    │   │   └── StartNavbar.jsx
|    │   ├── Tables
|    │   │   ├── ProductTable.jsx
|    │   │   ├── PurchaseTable.jsx
|    │   │   └── SaleTable.jsx
|    ├── features
|    │   ├── authSlice.jsx
|    │   └── stockSlice.jsx
|    ├── helper
|    │   ├── FormFields.js
|    │   └── ToastNotify.jsj
|    ├── hooks
|    │   ├── useAuthCall.jsx
|    │   ├── useAxios.jsx
|    │   └── useStockCalls.jsx
|    ├── pages
|    │   ├── About.jsx
|    │   ├── Brands.jsx
|    │   ├── Dashboard.jsx
|    │   ├── Firms.jsx
|    │   ├── Home.jsx
|    │   ├── Imprint.jsx
|    │   ├── Login.jsx
|    │   ├── Products.jsx
|    │   ├── Purchases.jsx
|    │   ├── Register.jsx
|    │   ├── Sales.jsx
|    │   └── StartPage.jsx
|    ├── router
|    |   ├── AppRouter.jsx
|    |   └── PrivateRouter.jsx
|    ├── styles
|    │   ├── globalStyle.js
|    |   └── theme.js
|    ├── App.jsx
|    ├── frontend.env
|    ├── index.css
|    └── main.jsx
├── .gitignore
├── index.html
├── LICENSE
├── package.json
├── pnpm-lock-yaml
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vercel.json
└── vite.config.js

```

## Outcome

![SmartStock](https://github.com/karamanburak/stock-management-app/assets/150926922/d3e7ce1f-0638-423d-aca6-84c01f621ddd)

### Installed Packages

- MUI and MUI icons
- axios
- redux/redux toolkit
- react-toastify
- react-router-dom
- mui x data grid


# Redux Persist

```
import { createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage 
for web

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

```

1. Use the `persistStore` function to create `persistor`;

```
import { persistStore } from 'redux-persist';

const persistor = persistStore(store);

```

```jsx
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./app/store";
// ... normal setup, create store and persistor, import components etc.

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
};
```
## Router Structure 

```jsx
<Router>
  <Routes>
    <Route path="/" element={<StartPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/about" element={<About />} />
    <Route path="/imprint" element={<Imprint />} />
    <Route path="/stock" element={<PrivateRouter />}>
      <Route path="" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="/stock/purchases" element={<Purchases />} />
        <Route path="/stock/sales" element={<Sales />} />
        <Route path="/stock/products" element={<Products />} />
        <Route path="/stock/firms" element={<Firms />} />
        <Route path="/stock/brands" element={<Brands />} />
      </Route>
    </Route>
  </Routes>
</Router>
```


## Axios Instance ve Interceptors


```
import axios from 'axios';

const instance = axios.create({
  baseURL: '<https://example.com/api>',
  headers: {'Authorization': `Token ${token}`}
});

```

## Postman Documentation

[View Postman Documentation](https://documenter.getpostman.com/view/32987022/2sA3BuXVAD)
