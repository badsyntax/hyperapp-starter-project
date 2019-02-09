import { h, app } from 'hyperapp';
import classNames from 'classnames/bind';

import STYLES from './index.css';

const c = classNames.bind(STYLES);

const state = {
  title: 'Hyperapp starter project',
  showMessage: false
};

const actions = {
  toggleMessage: () => state => ({
    showMessage: !state.showMessage
  })
};

const view = (state, actions) => {
  return (
    <div class={c('Container')}>
      <h1 className={c('Container__heading')}>{state.title}</h1>
      <button onclick={actions.toggleMessage}>Toggle message</button>
      {state.showMessage && <p>Here is a message!</p>}
    </div>
  );
};

app(state, actions, view, document.body);
