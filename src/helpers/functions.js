const dynamicColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return "rgb(" + r + "," + g + "," + b + ")";
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

export {
  dynamicColor,
  calculateFreeTime
};
