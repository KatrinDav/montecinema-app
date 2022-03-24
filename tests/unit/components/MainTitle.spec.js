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
        expect(wrapper.props().text).toContain("Hello World!")
        expect(wrapper.props().subText).toContain("Something went wrong...")

    })
})
