import { render, screen } from '@testing-library/react';
import App from './App';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Trains from '../src/container/Trains';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Main', () => {
    it('render activity data', async () => {
        const fakeTrain = {
            'subscriberCount': 'Train',
            'title': 'title',
            'id': 1,
        };

        jest.spyOn(global, 'fetch').mockImplementation(() => 
            Promise.resolve({
                json: () => Promise.resolve(fakeTrain)
            })
        );

        await act(async () => {
            render(<Trains />, container);
        });

        expect(container.querySelector('[data-test="train-subscriberCount"]').textContent).toBe('Train');
        expect(container.querySelector('[data-test="train-title"]').textContent).toBe('title');
        expect(container.querySelector('[data-test="train-id"]').textContent).toBe('1');
  

        // remove the mock to ensure tests are completely isolated
        global.fetch.mockRestore();
    });
});