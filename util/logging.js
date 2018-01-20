const TAB_SPACING = 2;

export function prettyPrint(obj) {
  return JSON.stringify(obj, null, TAB_SPACING);
}
