const getHMFromMins = (time: number): string => {
  const hours = Math.floor(time / 60);
  const minutes = Math.floor(time - (hours * 60));

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}


export default getHMFromMins