export function filesize(size) {
  const i = Math.floor(Math.log(size) / Math.log(1024));
  return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    ' ' +
    ['B', 'kB', 'MB', 'GB', 'TB'][i]
  );
}

export function formatDate(datetime) {
  let data = new Date(datetime),
    d = data.getDate().toString(),
    m = (data.getMonth() + 1).toString(),
    dd = d.length == 1 ? '0' + d : d,
    mm = m.length == 1 ? '0' + m : m,
    yy = data.getFullYear();
  return dd + '/' + mm + '/' + yy;
}
