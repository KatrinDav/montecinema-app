import { shallowMount} from '@vue/test-utils'
import HomePage from '@/pages/HomePage.vue'
import BaseButton from '@/components/BaseButton.vue'

const createComponent = () => shallowMount(HomePage);
const findDescription = (wrapper) => wrapper.find(".title p");

describe('HomePage.vue', () => {
  it('shows description', () => {
    const wrapper = createComponent();
    expect(findDescription(wrapper).text()).toMatch("Best movies, best experiences");
  });
  it('renders a BaseButton component', () => {
    const wrapper = createComponent();
    expect(wrapper.findComponent(BaseButton).exists()).toBe(true)
  })
  
})
