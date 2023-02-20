<script lang="ts">
  import { fade } from "svelte/transition";
  let clickStatus = false;
  let email = "";
  function validateEmail(email: string) {
    var emailRegEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegEx.test(String(email).toLowerCase());
  }
  function handleSubmission(event: MouseEvent) {
    event.preventDefault();
    clickStatus = true;

    if (isValidEmail) {
      // Send data somewhere
      alert("submitted");
    }
  }
  $: isValidEmail = validateEmail(email);
</script>

<svelte:head>
  <title>Frontend Mentor | Base Apparel coming soon page</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<main class="flex justify-between">
  <div class="lg:px-44">
    <header class="py-10 pl-8 lg:pl-0 lg:py-16">
      <img src="images/logo.svg" alt="Base Apparel Logo" />
    </header>

    <img class="w-full lg:hidden" src="images/hero-mobile.jpg" alt="" />

    <div
      class="pb-20 text-center lg:pb-0 font-josefin bg-bagcol lg:bg-transparent lg:text-left"
    >
      <h2 class="text-4xl lg:text-6xl tracking-[12px] uppercase pt-14 mb-4">
        <span class="block font-thin text-desRed">We're</span>
        <span class="font-semibold text-darkRed">coming<br />soon</span>
      </h2>

      <p class="px-4 mb-6 text-desRed lg:px-0 lg:mb-8">
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>

      <form novalidate id="emailForm" class="relative px-4 lg:pl-0 group">
        <div class="relative">
          <input
            type="email"
            id="emailInput"
            class="border w-full rounded-full  border-desRed outline-none placeholder:text-desRed py-3.5 pl-6 text-darkRed bg-transparent"
            class:border-softRed="{clickStatus && !isValidEmail}"
            class:border-2="{clickStatus && !isValidEmail}"
            placeholder="Email Address"
            bind:value="{email}"
            required
          />

          <button
            type="submit"
            class="absolute right-0 p-[1.05rem] px-10 rounded-full bg-grad duration-200 transform hover:scale-110 hover:shadow-lg hover:shadow-desRed"
            on:click="{handleSubmission}"
            >{#if clickStatus && !isValidEmail}
              <img
                id="iconError"
                src="images/icon-error.svg"
                class="absolute left-0 -ml-10"
                alt=""
                in:fade
                out:fade
              />
            {/if}
            <img src="images/icon-arrow.svg" alt="" />
          </button>
        </div>
        {#if clickStatus && !isValidEmail}
          <p
            id="msgError"
            class="my-1 ml-6 text-left text-softRed"
            in:fade
            out:fade
          >
            <small>Please provide a valid email</small>
          </p>
        {/if}
      </form>
    </div>
  </div>

  <img class="hidden h-screen lg:block" src="images/hero-desktop.jpg" alt="" />
</main>

<style>
  main {
    background-image: url("/bg-pattern-desktop.svg"),
      linear-gradient(135deg, #fff, #fff5f5);
  }
</style>
