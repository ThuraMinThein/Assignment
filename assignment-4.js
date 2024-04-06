const convertTemperature = (dig, unit) => {
  if (unit.toLowerCase() === "c") {
    const far = 1.8 * dig + 32;
    console.log(`${far}°F`);
  } else if (unit.toLowerCase() === "f") {
    const cel = ((dig - 32) * 5) / 9;
    const finalCel = cel.toFixed(4); // to get only 4 digits;
    console.log(`${finalCel}°C`);
  } else {
    console.log("Please provide the possible unit");
  }
};
