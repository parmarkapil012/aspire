import { shallowMount } from "@vue/test-utils";
import AspireFinance from "@/components/AspireFinance.vue";

describe("AspireFinance.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(AspireFinance, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
