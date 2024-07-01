<template>
    <div class="map-container">
      <iframe
        :src="mapSrc"
        class="map-iframe"
        frameborder="0"
        scrolling="no"
        name="mapIframe"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen="true">
      </iframe>
    </div>
</template>
  
  <script>
  export default {
    name: "Map_view",
    data() {
      return {
        mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.634021174827!2d20.4478387124098!3d44.808646670950225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aaad413277b%3A0x93d284bebad38a70!2sHercegova%C4%8Dka%2017%2C%20Beograd%2011000!5e0!3m2!1sen!2srs!4v1719768409867!5m2!1sen!2srs"  
    };
    }
  };
  </script>
  
  <style scoped>
  .map-container {
    text-align: center;
    margin: 20px auto;
  }
  
  .map-iframe {
    width: 100%;
    height: 400px;
    border: 0;
    outline: none !important;
  }
  </style>
  