const dynamicColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

const calculateFreeTime = tasks => {
  const totalMinutesInDay = 60 * 24;

  const totalCurrentTime = tasks.reduce((sum, task) => {
    return sum + task.current;
  }, 0);
  const totalIdealTime = tasks.reduce((sum, task) => {
    return sum + task.ideal;
  }, 0);

  return {
    current: totalMinutesInDay - totalCurrentTime,
    ideal: totalMinutesInDay - totalIdealTime
  }
}

// https://stackoverflow.com/a/2117523
const uuidv4 = () => {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}

export {
  dynamicColor,
  calculateFreeTime,
  uuidv4
};
