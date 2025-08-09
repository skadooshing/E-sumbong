import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'appreport',
  webDir: 'www',
  server: {
    androidScheme: 'http',  
    cleartext: true
  },
  plugins: {
    Camera: {
      permissions: ['CAMERA']
    },
    Geolocation: {
      permissions: ['ACCESS_FINE_LOCATION']
    }
  }
};

export default config;

