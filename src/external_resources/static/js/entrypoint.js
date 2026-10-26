function ExternalResourcesXBlock(runtime, element, data) {
  (async () => {
    const { url, ...blockData } = data;
    const { renderBlock } = await import(url);
    renderBlock(runtime, element, blockData);
  })();
}
