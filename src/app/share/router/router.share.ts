
/**
 * this function is used to get the segment of the current route of nextjs,
 * is only tested in layout components of nextjs
 * @param children - the children of the layout component of nextjs
 * @returns the segment of the current route of nextjs
 * @example
 * // returns 'profile'
 * // if the current route is '/settings/profile'
 * // and the layout component is:
 * export default function LayoutSettings({
 *    children,
 * }: {
 *   children: React.ReactNode
 * }) {
 *  const segment = getSegment(children);
 *  // segment = 'profile'
 *  // render the image of the profile
 * return (
 * <>
 *  <figure>
 *    <img src={`/images/${segment}.png`} />
 *  </figure>
 * {children}
 * </>
 * );
 * }
 * 
 * 
 */
export const getSegment = (children: React.ReactNode) => { 
    return children 
      ? (children['props' as keyof typeof children]['childProp'] as { current: object[], segment: string })?.segment ?? '' 
      : '';
  }

