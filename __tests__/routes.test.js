import { matchRoutes } from '../src/routes';

/**
 *
 * Create new route list & routing function for testing starter
 * ---
 * Routes & routing function are exported from routes.js & can
 * be imported for more accurate testing on a per project basis.
 * To do this import the var/function, delete
 * testRoutes/testRouteProps below, & update test cases.
 *
 */
const testRoutes = [
  '/',
  '/blog',
  '/blog/',
  '/blog/:category/:tag',
  '/blog/:page(\\d+)',
  '/blog/:slug',
];

const testRouteProps = url => matchRoutes(testRoutes, url);

test('index route', () => {
  expect(testRouteProps('/')).toEqual({ href: '/' });
});

test('blog route', () => {
  expect(testRouteProps('/blog')).toEqual({ href: '/blog' });
});

test('blog pagination route', () => {
  expect(testRouteProps('/blog/2')).toEqual({ href: '/blog/[page]', as: '/blog/2' });
});

test('dynamic blog route', () => {
  expect(testRouteProps('/blog/post-1')).toEqual({ href: '/blog/[slug]', as: '/blog/post-1' });
});

test('multiple variable dynamic blog route', () => {
  expect(testRouteProps('/blog/dev/react')).toEqual({ href: '/blog/[category]/[tag]', as: '/blog/dev/react' });
});

test('non-matching route', () => {
  expect(testRouteProps('/this-route-does-not-exist')).toEqual({ href: '/this-route-does-not-exist' });
});
