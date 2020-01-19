
// https://stackoverflow.com/questions/39245488/event-path-undefined-with-firefox-and-vue-js
export const getEventPath = (event: MouseEvent): EventTarget[] =>
  event.composedPath && event.composedPath();

// True when the event has bubbled from a child element of the
// classNamePredicate element
export const eventPathContainsClassName = (
  event: MouseEvent,
  classNamePredicate: string,
): boolean => {
  const path = getEventPath(event);
  const classNames = path
    .map(p => (p as HTMLElement).className)
    .filter(Boolean);
  return classNames.includes(classNamePredicate);
};