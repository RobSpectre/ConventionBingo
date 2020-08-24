import { mount } from '@vue/test-utils'

import Board from '@/components/Board.vue'

import EventBus from '@/event-bus'

describe('Board', () => {
  test('If square is clicked, square is marked as selected and changes color to green.', async () => {
    const wrapper = mount(Board, {
      mocks: {
        $gtag: {
          event: (action, label) => action
        }
      }
    })

    await wrapper.vm.$nextTick()

    let square = wrapper.find('a')

    await square.trigger('click')

    await wrapper.vm.$nextTick()

    square = wrapper.find('#square-1')

    expect(square.classes()).toContain('bg-green')
    expect(wrapper.vm.board[0].selected).toEqual(true)
  })
  test('If reset-board event is received, reset board.', async () => {
    const wrapper = mount(Board)

    await wrapper.vm.$nextTick()

    const initialState = wrapper.vm.board

    EventBus.$emit('reset-board')

    await wrapper.vm.$nextTick()

    const finalState = wrapper.vm.board

    expect(finalState).not.toEqual(initialState)
  })
})
