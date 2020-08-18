<template>
  <div class="md:flex md:items-center md:justify-between bg-green px-4 py-12
    rounded-t-lg">
    <div class="flex-1 min-w-0">
      <h2 class="text-2xl font-bold leading-7 text-white sm:text-3xl sm:leading-9 sm:truncate">
        Convention Bingo
      </h2>
    </div>
    <div class="mt-4 flex md:mt-0 md:ml-4">
      <span class="ml-3 shadow-sm rounded-md">
        <button type="button" class="inline-flex items-center px-4 py-2 border
          border-transparent text-sm leading-5 font-medium rounded-md
          text-white bg-blue hover:bg-orange focus:outline-none
          focus:shadow-outline-orange focus:border-orange
          active:bg-orange transition duration-150 ease-in-out uppercase"
          @click="resetBoard()">
          Reset
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import EventBus from '@/event-bus'

export default {
  name: 'Header',
  methods: {
    resetBoard () {
      console.log('Reset board pressed.')
      EventBus.$emit('reset-board', {})
    }
  }
}
</script>
