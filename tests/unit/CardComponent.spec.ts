import CardComponent from '@/components/layout/CardComponent.vue';
import { shallowMount, VueWrapper } from '@vue/test-utils';
import { images } from './ImgMock';

describe('CardComponent.vue', () => {

  let wrapper: VueWrapper;

  const img = images[0];

  beforeEach(() => {
    wrapper = shallowMount(CardComponent, {
      props: {
        img,
      },
    });
  });

  it('should render username', () => {

    const username = wrapper.get('#user');

    expect(username.text()).toBe(img.user.username);
  });


  it('should render likes', () => {

    const likes = wrapper.get('#likes');

    expect(likes.text()).toBe(img.likes.toString());
  });

  it('should not render twitter', () => {

    const twitter = wrapper.find('#twitter');

    expect(twitter.exists()).toBeFalsy();
  });

  it('should not render portfolio container', () => {

    const portfolio = wrapper.find('#portfolio');

    expect(portfolio.exists()).toBeFalsy();
  });

  it('should render instagram', () => {

    const ig = wrapper.get('#ig');

    expect(ig.text()).toBe(img.user.instagram_username);
  });

  it('should set received source attribute', () => {

    const image = wrapper.get('#img');

    expect(image.attributes().src).toBe(img.urls.regular);
  });

  it('should construct alt description', () => {

    const image = wrapper.get('#img');
    const alt = `${img.user.username}, photo`;

    expect(image.attributes().alt).toBe(alt);
  });
});
