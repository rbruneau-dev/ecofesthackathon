const FACTORS = {
  car: 0.2176,
  train: 0.00633,
  avion: 0.14158,
  bike: 0,
  'repas-meal': 7.26,
  'repas-veg': 0.51,
  beer: 0.545,
  water: 0.25,
  wine: 0.2825,
};

// const deplacementKeys = ['distance-car', 'distance-common', 'distance-bike'];

// const foodKeys = ['repas-meal', 'repas-veg', 'beer', 'water', 'wine'];

export const computeTotal = (data: any) => {
  const foodValues = data.filter((d: any) => d.type === 'food');
  const transportValues = data.filter((d: any) => d.type === 'transport');
  let totalCo2Food = 0;
  let totalCo2Transport = 0;

  // repas meal
  if (foodValues.length > 0) {
    const repasMeal = foodValues.find((f: any) => f.key === 'repas-meal');
    const repasVeg = foodValues.find((f: any) => f.key === 'repas-veg');
    const beer = foodValues.find((f: any) => f.key === 'beer');
    const water = foodValues.find((f: any) => f.key === 'water');
    const wine = foodValues.find((f: any) => f.key === 'wine');
    totalCo2Food += repasMeal.value * FACTORS['repas-meal'];
    totalCo2Food += repasVeg.value * FACTORS['repas-veg'];
    totalCo2Food += beer.value * FACTORS.beer;
    totalCo2Food += water.value * FACTORS.water;
    totalCo2Food += wine.value * FACTORS.wine;
  }

  // deplacement
  let totalPers = 0;
  let nbJour = 2;
  if (transportValues.length > 0) {
    const total = transportValues.find((f: any) => f.key === 'total');
    const car = transportValues.find((f: any) => f.key === 'distance-car');
    const train = transportValues.find((f: any) => f.key === 'distance-common');
    const bike = transportValues.find((f: any) => f.key === 'distance-bike');
    totalCo2Transport += car.value * FACTORS.car;
    totalCo2Transport += train.value * FACTORS.train;
    totalCo2Transport += bike.value * FACTORS.bike;
    totalPers = total.value;
  }

  let totalCo2 = totalCo2Food + totalCo2Transport;
  return {
    total: totalCo2,
    totalPerDay: Number(totalCo2) / nbJour / totalPers,
    food: totalCo2Food,
    transport: totalCo2Transport,
  };
};
