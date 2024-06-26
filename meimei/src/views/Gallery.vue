<template>
    <div class="gallery">
      <ImageGallery />
    </div>
  </template>
  
  <script>
  
  import ImageGallery from '@/components/ImageGallery.vue'
  
  export default {
    name: 'Gallery_view',
    components: {
      ImageGallery
    }
  }
  </script>
  
  <style scoped>
  .gallery {
    padding: 20px;
  }
  </style>
  