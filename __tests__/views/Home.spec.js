import Home from 'Views/Home.vue';
import { shallowMount } from '@vue/test-utils';

let wrapper;

beforeEach(() => {
    wrapper = shallowMount(Home);
});

afterEach(() => {
    wrapper.destroy();
});

describe('Home.vue', () => {
    test('should render correct contents', () => {
        expect(wrapper.html()).toContain('KRYPTONITE');
        expect(wrapper.html()).toContain(
            'LIVE STREAM THE CRYPTOCURRENCIES MARKET',
        );
    });
});
