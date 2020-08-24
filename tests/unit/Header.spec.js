import { mount } from '@vue/test-utils'

import Header from '@/components/Header.vue'

import EventBus from '@/event-bus'
EventBus.$emit = jest.fn()

describe('Header', () => {
  beforeEach(() => {
    EventBus.$emit.mockClear()
  })

  test('If reset is clicked, emit reset-board on EventBus and trigger $gtag event.', async () => {
    const wrapper = mount(Header, {
      mocks: {
        $gtag: {
          event: (action, label) => action
        }
      }
    })

    await wrapper.vm.$nextTick()

    const button = wrapper.find('button')

    await button.trigger('click')

    await wrapper.vm.$nextTick()

    expect(EventBus.$emit).toHaveBeenCalled()
  })
})
