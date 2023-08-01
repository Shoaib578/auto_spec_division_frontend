import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";

import url from "./url";
export default component$(() => {


  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
       
      <link rel="stylesheet" href={`${url}css/bootstrap.min.css`}/>
      
      <link rel="stylesheet" href={`${url}/css/style.css`}/>
     
      <link rel="stylesheet" href={`${url}/css/responsive.css`}/>
      
      <link rel="icon" href={`${url}/images/logo.png`} type="image/png" />
      <title>Auto Spec Division</title>
    
      <link rel="stylesheet" href={`${url}/css/jquery.mCustomScrollbar.min.css`}/>
     
      <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen"/>
        <ServiceWorkerRegister />
      </head>
      <body lang="en">
      <div class="loader_bg">
         <div class="loader"><img src={`${url}/images/loading.gif`} alt="#" /></div>
      </div>
        <RouterOutlet />

     
      <script src={`${url}/js/jquery.min.js`}></script>
      <script src={`${url}/js/popper.min.js`}></script>
      <script src={`${url}/js/bootstrap.bundle.min.js`}></script>
      <script src={`${url}/js/jquery-3.0.0.min.js`}></script>
    
      <script src={`${url}/js/jquery.mCustomScrollbar.concat.min.js`}></script>
      <script src={`${url}/js/custom.js`}></script>
      
      </body>
    </QwikCityProvider>
  );
});
