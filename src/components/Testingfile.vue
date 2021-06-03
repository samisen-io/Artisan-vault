<template>
  <div>
    <button @click="geturl()">Try it</button>
    <p id="demo"></p>
    <br />
    <ShareNetwork
      network="facebook"
      url="https://news.vuejs.org/issues/180"
      title="Say hi to Vite! A brand
      new, extremely fast development setup for Vue."
      description="This week,
      I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new
      development setup created by Evan You."
      quote="The hot reload is so fast
      it\'s near instant. - Evan You"
      hashtags="vuejs,vite"
    >
      Share on Facebook
    </ShareNetwork>
    <ShareNetwork
      @click="url"
      network="whatsapp"
      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
      description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
      quote="The hot reload is so fast it\'s near instant. - Evan You"
      hashtags="vuejs,vite"
    >
      Share on whatsapp
    </ShareNetwork>
    <ShareNetwork
      network="twitter"
      :url="url"
      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
      description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
      quote="The hot reload is so fast it\'s near instant. - Evan You"
      hashtags="vuejs,vite"
    >
      Share on twitter
    </ShareNetwork>
  </div>
</template>

<script>
export default {
   methods:{
    geturl(){
      var x = document.URL;
  document.getElementById("demo").innerHTML = x;
    }
  }
};
</script>

<style>
</style>