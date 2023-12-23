self.addEventListener('install', event => {
    console.log('Service worker installing...');
    // Your install logic here
  });
  
  self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
    // Your fetch handling logic here
  });