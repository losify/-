<template>
  <div class="carousel">
    <div class="carousel-inner" :style="carouselStyle">
      <div 
        v-for="(slide, index) in slides" 
        :key="index"
        class="carousel-item"
      >
        <img :src="slide.image" :alt="slide.title">
        <div class="carousel-caption">
          <h3>{{ slide.title }}</h3>
        </div>
      </div>
    </div>
    
    <button class="carousel-control prev" @click="prev">&#10094;</button>
    <button class="carousel-control next" @click="next">&#10095;</button>
    
    <div class="carousel-indicators">
      <span 
        v-for="(_, index) in slides" 
        :key="index"
        :class="{ active: currentIndex === index }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselComponent',
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      timer: null
    }
  },
  computed: {
    carouselStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`
      }
    }
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length
    },
    prev() {
      this.currentIndex = this.currentIndex === 0 
        ? this.slides.length - 1 
        : this.currentIndex - 1
    },
    goToSlide(index) {
      this.currentIndex = index
    },
    startTimer() {
      this.timer = setInterval(this.next, 5000)
    },
    stopTimer() {
      if (this.timer) {
        clearInterval(this.timer)
      }
    }
  },
  mounted() {
    this.startTimer()
  },
  beforeUnmount() {
    this.stopTimer()
  }
}
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
}

.carousel-item {
  min-width: 100%;
  height: 100%;
  position: relative;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.carousel-caption {
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 5px;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 15px;
  cursor: pointer;
  font-size: 18px;
}

.prev { left: 10px; }
.next { right: 10px; }

.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.carousel-indicators span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
}

.carousel-indicators span.active {
  background: white;
}
</style> 