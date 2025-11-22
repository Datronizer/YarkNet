const AU_IN_KM = 149597870.7;

///#region Conversions
export function kmToAu(km: number): number {
  return km / AU_IN_KM;
}

export function auToKm(au: number): number {
  return au * AU_IN_KM;
}

export function radToDeg(rad: number): number {
  return (rad * 180) / Math.PI;
}

export function degToRad(deg: number): number {
  return (deg * Math.PI) / 180;
}
///#endregion


//#region Orbital Mechanics
export function orbitalPeriodSemiMajorAxis(periodDays: number): number {
  // Using Kepler's Third Law: P^2 = a^3 (for objects orbiting the Sun, in AU and years)
  const periodYears = periodDays / 365.25;
  const semiMajorAxisAu = Math.cbrt(periodYears * periodYears);
  return semiMajorAxisAu;
}
//#endregion