<template>
    <div class="lightbox" @click.self="closeLightbox">
      <div class="lightbox-content">
        <img v-if="currentItemType === 'photo'" :src="currentItem.url" :alt="currentItem.alt" class="lightbox-media">
        <video v-else-if="currentItemType === 'video'" :src="currentItem.url" class="lightbox-media" controls></video>
        <button @click="closeLightbox" class="close-button">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LightBox',
    props: {
      items: {
        type: Array,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      index: {
        type: Number,
        required: true
      }
    },
    computed: {
      currentItem() {
        return this.items[this.index] || { url: '', alt: '' };
      },
      currentItemType() {
        return this.type;
      }
    },
    methods: {
      closeLightbox() {
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style scoped>
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999; /* Ensure it overlays other content */
  }
  
  .lightbox-content {
    position: relative;
    text-align: center;
  }
  
  .lightbox-media {
    max-width: 90%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 5px;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 1.2rem;
  }
  </style>
  