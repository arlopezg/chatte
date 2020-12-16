export const setPageTitle = (title = "Meet with Friends") => {
  if (!document) {
    // No DOM Available
    return;
  }

  document.title = `${title} | Chatte`;
};
