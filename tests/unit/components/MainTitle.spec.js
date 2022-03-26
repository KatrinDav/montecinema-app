import { mount } from "@vue/test-utils";
import MainTitle from '@/components/MainTitle.vue';

describe("MainTitle.vue", () => {
    it("render props when passed", () => {
        const wrapper = mount(MainTitle, {
            propsData: {
                text: "Hello World!",
                subText: "Something went wrong..."
            }
        });

      expect(wrapper.find("h1").text()).toMatch("Hello World!")
      expect(wrapper.find("h1 span").text()).toMatch("Something went wrong...")

    })
})
