<template>
  <div>
    <h1 class="md:text-3xl text-2xl font-semibold">
      <slot>
        Page you were looking for
        <span class="highlight">wasn't found</span>
      </slot>
    </h1>
    <p>
      It seems that you got lost... Go back to the homepage, or contact me on
      <NuxtLink
        to="https://twitter.com/Lexpeartha"
        target="_blank"
        class="highlight"
      >
        Twitter
      </NuxtLink>
      if you think there should be a page here!
    </p>
    <AppButton type="cta" @click="$router.push('/')">
      Go to the homepage
    </AppButton>
  </div>
</template>
