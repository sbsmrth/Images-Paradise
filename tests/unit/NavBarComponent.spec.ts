import NavBarComponent from '@/components/ui/NavBarComponent.vue';
import store from '@/store';
import { shallowMount, VueWrapper, RouterLinkStub } from '@vue/test-utils';

describe('NavBarComponent.vue', () => {

  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = shallowMount(NavBarComponent, {
      global: {
        provide: {
          'scroll': 75,
          store: store,
        },
        stubs: {
          'router-link': RouterLinkStub,
        },
      },
    });
  });

  it('should change fa-xmark class', async () => {

    const faIcon = wrapper.get('[data-test="fa-menu"]');

    expect(faIcon.classes()).toHaveLength(3);

    const button = wrapper.get('[data-test="btn-menu"]');

    await button.trigger('click');

    expect(faIcon.classes()).toContain('fa-xmark');
  });

  it('should change active modifier', async () => {

    const list = wrapper.get('[data-test="items-list"]');

    expect(list.classes()).toHaveLength(1);

    expect(list.classes()[0]).toBe('nav__items');

    const button = wrapper.get('[data-test="btn-menu"]');

    await button.trigger('click');

    expect(list.classes()).toHaveLength(2);

    expect(list.classes()).toContain('nav__items--active');
  });
});
