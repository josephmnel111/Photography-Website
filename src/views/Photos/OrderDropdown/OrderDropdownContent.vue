<template>
  <transition 
    name = "expand"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
  <div 
    v-if="active"
    class="order-dropdown-items"
    >
    <slot/>
  </div>
</transition>
</template>

<script>


  export default {
    name: 'OrderDropdownContent',
    inject: ['sharedState'],
    computed: {
      active () {
        return this.sharedState.active
      }
    },
    methods: {
      close(e){
        if (!this.$el.contains(e.target)) {
          this.sharedState.active = false
        }
      },
      enter(el) {
        el.style.height = 'auto'
        const height = getComputedStyle(el).height
        el.style.height = 0

        getComputedStyle(el)

        setTimeout(() => {
          el.style.height = height
        });
      }, 
      afterEnter(el) {
        document.addEventListener('click', this.close)
        el.style.height = 'auto'
      },
      leave(el) {
        el.style.height = getComputedStyle(el).height
        getComputedStyle(el)

        setTimeout(() => {
          el.style.height = 0
        });
        document.removeEventListener('click', this.close)
      },
    }
  }
</script>
<style>
  .order-dropdown-items {
    margin-top: .5%;
    z-index: 5;
    position: absolute;
    display: flex;
    flex-direction: column;
    color: black;
    font-family: 'Gotham';
    background-color: white;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 8px;
    overflow: hidden;
    transform-origin: top;
    width: 13vw;
  }
  .expand-enter-active, .expand-leave-active {
    transition: height .2s ease-in-out;
    overflow: hidden;
  }
</style>
