import { shallowMount } from '@vue/test-utils';
import LoginComp from '@/components/LoginComp.vue';

describe('LoginComp.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(LoginComp, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
