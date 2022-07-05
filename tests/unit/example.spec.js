import { shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';

import CounterComp from '../../src/components/CounterComp.vue';

describe('CounterComp.vue', () => {
  const wrapper = shallowMount(CounterComp, { Vuetify });
  const btn = wrapper.find('v-btn');

  it('Sets the counter right', () => {
    wrapper.setData({ counter: 9 });
    expect(wrapper.vm.counter).toBe(9);
  });

  it('The button should be blue when the counter is less than 10.', () => {
    for (let i = 0; i < 10; i++) {
      wrapper.setData({ counter: i });
      let color = btn.attributes().color;
      expect(color).toBe('primary');
    }
  });

  it('The button should be green when the counter is more than 10', async () => {
    [10, 75, 136, 1489].forEach(async (counter) => {
      await wrapper.setData({ counter });
      let color = btn.attributes().color;

      expect(color).toBe('success');
    });
  });

  it('The counter is increased on click', async () => {
    wrapper.setData({ counter: 0 });
    await btn.trigger('click');

    expect(wrapper.vm.counter).toBe(1);
  });
});
