export function handleToggleBookmarks(
  bookmarks: string[],
  id: string,
): string[] {
  // convert to Set so its easier to work with
  const _bookmarks = new Set(bookmarks);
  _bookmarks.has(id) ? _bookmarks.delete(id) : _bookmarks.add(id);

  return Array.from(_bookmarks);
}
