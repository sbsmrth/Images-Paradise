import PaginationComponent from '@/components/pag/PaginationComponent.vue';
import { shallowMount, VueWrapper } from '@vue/test-utils';

describe('PaginationComponent.vue', () => {

  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = shallowMount(PaginationComponent);
  });

  it('should emit modified event', async () => {

    await wrapper.get('[data-test="inc"]').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('modified');
  });

  it('should emit the correct value', async () => {

    await wrapper.get('[data-test="inc"]').trigger('click');

    const value = wrapper.emitted('modified') as Array<Array<number>>;

    expect(value[0][0]).toBe(2);
  });
});
