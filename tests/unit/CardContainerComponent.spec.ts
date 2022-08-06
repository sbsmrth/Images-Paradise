import CardContainerComponent from '@/components/layout/CardContainerComponent.vue';
import { mount } from '@vue/test-utils';
import { images } from './ImgMock';

describe('CardContainerComponent.vue', () => {

  it('should render all cards', () => {

    const wrapper = mount(CardContainerComponent, {
      props: {
        images,
      },
    });

    expect(wrapper.findAll('[data-test="card"]')).toHaveLength(2);
  });
});
