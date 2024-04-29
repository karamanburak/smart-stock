# stock-management-app

 [SmartStock Live](https://smartstock-management.vercel.app/)

## Description
📦 This comprehensive reacts project aims to create a stock store application. The user can register to the store, log in, add the desired product to their inventory, buy or sell it, and keep track of the most current status of it instantly from the dashboard. The user can choose to use the application in dark mode or light mode. 


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


### Axios Instance ve Interceptors


```
import axios from 'axios';

const instance = axios.create({
  baseURL: '<https://example.com/api>',
  headers: {'Authorization': `Token ${token}`}
});

```