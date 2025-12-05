export const pad = (value: number) => value.toString().padStart(2, "0");

export const computeTimeDiff = (lastOnline: number | null) => {
  if (!lastOnline) return "00:00:00";
  const diffMs = Date.now() - lastOnline * 1000;
  const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
  const hours = pad(Math.floor(totalSeconds / 3600));
  const minutes = pad(Math.floor((totalSeconds % 3600) / 60));
  const seconds = pad(totalSeconds % 60);
  return `${hours}:${minutes}:${seconds}`;
};
