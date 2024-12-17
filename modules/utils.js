const getPath = (req) => `${req.protocol}://${req.get('host')}/`;

module.exports = {
  getPath
};