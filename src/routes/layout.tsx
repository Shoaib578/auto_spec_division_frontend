import { component$, Slot, useSignal, useStore, useStyles$, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import { AdminHeader } from "~/components/admin_header";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";

export default component$(() => {
  const location = useLocation()
  const state = useStore({
    admin:true
  })
  useVisibleTask$(()=>{
    const storage = localStorage.getItem('admin')
    if(storage){
      state.admin = true
    }

  })

  return (
    <>

      

      {state.admin && location.url.pathname.includes('admin')?<AdminHeader />:<Header />}
      <main>
        <Slot />
      </main>
      <br />
      <br />
      <br />
      <br />

     {!location.url.pathname.includes('admin')?<Footer />:null}

    </>
  );
});
