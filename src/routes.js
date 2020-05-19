import { pathToRegexp } from 'path-to-regexp';

/**
 * ====================
 *  DEFINE ROUTES HERE
 * ====================
 */
const routes = [
  '/',
  '/posts',
  '/posts/:slug',
];

/**
 * Transforms url string - returns href, as for next.js Link
 *
 * @param {string} url
 * @returns {object} href, as
 */
export const matchRoutes = (routeList, url) => {
  const routeMatches = routeList
    .map((route) => {
      const keys = [];
      const regexp = pathToRegexp(route, keys);
      const matches = regexp.exec(url);

      // bail out if no matches
      if (!matches || (matches && matches.length < 1)) return false;

      // first match is always original path
      const [path] = matches;
      let href = route;

      // replace express style route vars with next.js pattern
      keys.forEach((key) => {
        href = href.replace(/:.*?(?=\/|$)/, `[${key.name}]`);
      });

      // always return href. Only return as if it's
      // different than href
      return {
        href,
        ...(href !== path ? { as: path } : {}),
      };
    })
    .filter(Boolean)[0];

  // if nothing matches return the original url string
  if (!routeMatches) return { href: url };

  return routeMatches;
};

export const getRouteProps = url => matchRoutes(routes, url);

export default routes;
