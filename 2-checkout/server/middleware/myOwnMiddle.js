module.exports = (req, res, next) => {
  const name = 'MIDDLEWARE'
  console.log(`SEE, I ADDED MY OWN ${name}!`);
  next();
}