export const getTypeFile = file => {
  const fileArr = file.split('.')
  return fileArr[fileArr.length - 1]
}
