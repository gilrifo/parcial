import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.miempresa.ecommerce',  
  appName: 'E-Commerce App',         
  webDir: 'www',                     
  server: {
    androidScheme: 'https'         
  }
};

export default config;
