const { override, addLessLoader } = require("customize-cra");
const path = require("path");

module.exports = override(addLessLoader());
