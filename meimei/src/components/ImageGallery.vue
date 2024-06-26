<template>
  <div class="gallery">
    <!-- Gallery Photos -->
    <div class="gallery-section">
      
      <div class="gallery-images">
        <div v-for="(photo, index) in galleryPhotos" :key="'photo-' + index" class="gallery-item">
          <img :src="photo.url" :alt="photo.alt" @click="openLightbox(index, 'photo')" class="gallery-image">
        </div>
      </div>
    </div>

    <!-- Gallery Videos -->
    <div class="gallery-section">
      
      <div class="gallery-videos">
        <div v-for="(video, index) in galleryVideos" :key="'video-' + index" class="gallery-item">
          <!-- Example: Using iframe for YouTube videos -->
          <iframe width="100%" height="auto" :src="video.url" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>

    <!-- Lightbox component -->
    <LightBox :items="lightboxItems" :type="currentItemType" :index="lightboxIndex" v-if="showLightbox" @close="closeLightbox"></LightBox>
  </div>
</template>

<script>
import LightBox from './Lightbox.vue';

export default {
  name: 'MediaGallery',
  components: {
    LightBox,
  },
  data() {
    return {
      galleryPhotos: [
        { url: require('@/assets/images/restoran1.jpg'), alt: 'Restaurant 1' },
        { url: require('@/assets/images/restoran2.jpg'), alt: 'Restaurant 2' },
        { url: require('@/assets/images/restoran3.jpg'), alt: 'Restaurant 3' },
        { url: require('@/assets/images/restoran4.jpg'), alt: 'Restaurant 4' },
      ],
      galleryVideos: [
        { url: require('@/assets/video1.mp4'), type: 'video' },
        { url: require('@/assets/video2.mp4'), type: 'video' },
        { url: require('@/assets/video3.mp4'), type: 'video' },
        { url: require('@/assets/video4.mp4'), type: 'video' },
      ],
      showLightbox: false,
      lightboxIndex: 0,
      currentItemType: '', // To differentiate between photo and video in Lightbox
    };
  },
  computed: {
    lightboxItems() {
      if (this.currentItemType === 'photo') {
        return this.galleryPhotos;
      } else if (this.currentItemType === 'video') {
        return this.galleryVideos;
      }
      return [];
    }
  },
  methods: {
    openLightbox(index, type) {
      this.lightboxIndex = index;
      this.currentItemType = type;
      this.showLightbox = true;
    },

    closeLightbox() {
      this.showLightbox = false;
    }
  }
};
</script>

<style scoped>
.gallery {
  padding: 20px;
}

.gallery-section {
  margin-bottom: 30px;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.gallery-images,
.gallery-videos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.gallery-item {
  cursor: pointer;
  overflow: hidden;
  height: 250px; /* Set height as needed */
  position: relative;
}

.gallery-image {
  width: 100%;
  height: 100%; /* Ensure the image fills the container */
  object-fit: cover; /* Maintain aspect ratio and cover the container */
  transition: transform 0.3s ease;
}

.gallery-image:hover {
  transform: scale(1.1);
}

.gallery-videos iframe {
  width: 100%;
  height: 100%; /* Adjust as needed */
}
</style>
