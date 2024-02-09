<template>
     <transition
      name = "expand"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
     >
      <div 
        v-if="active"
        class="tag-dropdown-items"
        >
        <slot/>
      </div>
    </transition>
  </template>
  
  <script>
    export default {
      name: 'TagDropdownContent',
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
          }
        }
      }
  </script>
  <style>
  .tag-dropdown-items {
      margin-top: 5px;
      margin-left: 2px;
      position: absolute;
      z-index: 5;
      align-items: center;
      color: black;
      background-color: white;
      font-family: 'Gotham';
      border: 1px solid rgba(0, 0, 0, .2);
      border-radius: 12px;
      width: 400px;
      transform-origin: top;
      overflow: hidden;
    }
    .expand-enter-active, .expand-leave-active {
      transition: height .2s ease-in-out;
      overflow: hidden;
    }
  </style>
  