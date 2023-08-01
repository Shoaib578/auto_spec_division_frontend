import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AboutContainer } from "~/components/about_container";
import { Footer } from "~/components/footer";
import { LandingPageBanner } from "~/components/landing_page_banner";
import { WhatweDo } from "~/components/what_we_do";


export default component$(() => {
  return (
    <>
    <LandingPageBanner />
    <AboutContainer />
    <WhatweDo />
    <br />
    <br />

    
    </>
  );
});

export const head: DocumentHead = {
  title:"Home",
  
  meta: [
    {
      name: "Landing Page",
      content: "",
      
    },
  ],
};
