export const getContentBlock = (contentBlocks, key) => {
  return contentBlocks.find(ctx => ctx.key === key)
}
