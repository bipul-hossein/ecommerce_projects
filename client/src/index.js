import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthProvider from "./contexts/AuthProvider";
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductsProvider from "./contexts/ProductsProvider";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ProductsProvider>      
          <Toaster/>
            <App />
        </ProductsProvider>
      </AuthProvider>
      <ToastContainer />
    </QueryClientProvider>
  </React.StrictMode>
);
reportWebVitals();
