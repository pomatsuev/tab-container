import { TabContainer } from '../src/components/TabContainer';
import { shallow, ShallowWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

let renderResult: ShallowWrapper;

describe('Testing TabContainer component', () => {
  beforeEach(() => {
    renderResult = shallow(
      <TabContainer>
        <div>1</div>
        <h1>2</h1>
      </TabContainer>
    );
  });
  it('Component will equal snapshot', () => {
    expect(toJson(renderResult)).toMatchSnapshot();
  });
  it('Default names for buttons if props "names" are not passed', () => {
    expect(renderResult.find('.tab-container__button').at(0).text()).toBe('default 1');
    expect(renderResult.find('.tab-container__button').at(1).text()).toBe('default 2');
  });
  it('will be rendered first component', () => {
    expect(renderResult.find('.tab-containre__content > div').length).toBe(1);
    expect(renderResult.find('.tab-containre__content > div').text()).toBe('1');
  });
  it('second element will not rendered', () => {
    expect(renderResult.find('h1').length).toBe(0);
  });
  it('first button will have active class', () => {
    expect(
      renderResult.find('.tab-container__button').at(0).hasClass('tab-container__button_active')
    ).toBe(true);
  });

  describe('Click testing', () => {
    beforeEach(() => {
      renderResult.find('.tab-container__button').at(1).simulate('click');
    });
    it('if click on button components are will be changed', () => {
      expect(renderResult.find('h1').length).toBe(1);
    });
    it("if click on button this button's class will be changed", () => {
      expect(
        renderResult.find('.tab-container__button').at(1).hasClass('tab-container__button_active')
      ).toBe(true);
    });
  });
});

describe('Testing with props', () => {
  it('if passed names prop, default button names are changed', () => {
    renderResult = shallow(
      <TabContainer names={['one', 'two']}>
        <h1>1</h1>
        <h2>2</h2>
      </TabContainer>
    );
    expect(renderResult.find('.tab-container__button').at(0).text()).toBe('one');
  });
  it('if names prop length are not equal children components count then button are has default names', () => {
    renderResult = shallow(
      <TabContainer names={['one']}>
        <h1>1</h1>
        <h2>2</h2>
      </TabContainer>
    );
    expect(renderResult.find('.tab-container__button').at(0).text()).toBe('default 1');
  });

  it('if component has prop "caption", his button take this props value for self name', () => {
    const CaptionComponent: React.FC<{ caption?: string }> = ({ children }) => <h1>{children}</h1>;
    renderResult = shallow(
      <TabContainer>
        <CaptionComponent caption="has cation">1</CaptionComponent>
        <h2>2</h2>
      </TabContainer>
    );
    expect(renderResult.find('.tab-container__button').at(0).text()).toBe('has cation');
    expect(renderResult.find('.tab-container__button').at(1).text()).toBe('default 1');
  });
});
