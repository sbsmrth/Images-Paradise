import CardContainerComponent from '@/components/layout/CardContainerComponent.vue';
import { shallowMount } from '@vue/test-utils';
import { images } from './ImgMock';

describe('CardContainerComponent.vue', () => {

  it('should render all cards', () => {

    const wrapper = shallowMount(CardContainerComponent, {
      props: {
        images,
      },
    });

    expect(wrapper.findAll('[data-test="card"]')).toHaveLength(2);
  });
});
