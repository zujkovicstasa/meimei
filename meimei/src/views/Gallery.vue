<template>
    <div class="gallery">
      <VideoGallery />
      <ImageGallery />
    </div>
  </template>
  
  <script>
  import VideoGallery from '@/components/VideoGallery.vue'
  import ImageGallery from '@/components/ImageGallery.vue'
  
  export default {
    name: 'Gallery_view',
    components: {
      VideoGallery,
      ImageGallery
    }
  }
  </script>
  
  <style scoped>
  .gallery {
    padding: 20px;
  }
  </style>
  