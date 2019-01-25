const numToColor = (player) => {
  if (!(typeof player === 'object')) {
    throw new Error('player should be an object');
  }

  const { health } = player;
  if (Number.isNaN(Number(health))) {
    throw new Error('health property should be a number');
  }

  const { name } = player;
  if (!(typeof name === 'string')) {
    throw new Error('there should be a valid name property');
  }

  if (health < 0) {
    throw new Error('health should be a non-negative number');
  }

  if (health < 15) {
    return 'critical';
  }

  if (health <= 50) {
    return 'wounded';
  }

  return 'healthy';
};

export default numToColor;
