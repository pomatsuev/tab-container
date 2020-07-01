# Tab container &middot; [![npm version](https://badge.fury.io/js/%40inneisystem%2Ftab-container.svg)](https://badge.fury.io/js/%40inneisystem%2Ftab-container) [![GitHub license](https://img.shields.io/github/license/pomatsuev/tab-container)](https://github.com/pomatsuev/tab-container/blob/master/license.md)

Simple React Component. Wrapper that create tab control element from child components

## Installation

```bash
npm instal @inneisystem/tab-container
```

or

```bash
yarn add @inneisystem/tab-container
```

## Props

| prop            | description                                                                        |
| --------------- | ---------------------------------------------------------------------------------- |
| `names`         | `array - array of names for tabs`                                                  |
| `btnClassName`  | `string - add class to tabs list element`                                          |
| `bodyClassName` | `string - add class to content element`                                            |
| `onTabClick`    | `function - callback called each click on tab`                                     |
| `onTabChange`   | `function - callback called only when tab will be changed`                         |
| `style`         | `object { button, buttons, content, container } - contains styles of all elements` |

## Example

```jsx
import { TabContainer } from '@inneisystem/tab-container';
import '@inneisystem/tab-container/style.css';

function App() {
  return (
    <TabContainer names={['first', 'second', 'third']}>
      <h1>FIRST TAB</h1>
      <div>SECOND TAB</div>
      <p>THRID TAB</p>
    </TabContainer>
  );
}

ReactDOM.render(<App />, document.getElementById('container'));
```

You can add **_caption_** prop in child element this will make tab with this name, but if don't passed **_names_** prop in TabContainer

### example with typescript:

```jsx
...

const Div: React.FC<{ caption?: string }> = ({ children }) => {
  return <div>{children}</div>;
};

const App: React.FC = (props) => {
  return (
    <TabContainer>
      <Div caption="first">FIRST TAB</Div>
      <Div caption="second">SECOND TAB</Div>
      <Div caption="thrid">THRID TAB</Div>
    </TabContainer>
  );
}

...
```

You can styling this in your css [Sandbox Example](https://codesandbox.io/s/tab-container-o6rnq)

```html
<div class="tab-container">
  <div class="tab-container__buttons">
    <div class="tab-container__button tab-container__button_active">FIRST CAPTION</div>
    <div class="tab-container__button ">SECOND CAPTION</div>
  </div>
  <div class="tab-container__content"><div>FIRST TAB</div></div>
</div>
```

## License

Pomatsuev Stanislav [ISC licensed](./license.md).
