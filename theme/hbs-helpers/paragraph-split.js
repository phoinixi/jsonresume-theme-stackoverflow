const { SafeString } = require('handlebars');
const markdown = require('markdown-it')();

const paragraphSplit = (text) => {
  if (text == null) {
    return new SafeString('');
  }

  // markdown-it already wraps content in appropriate block elements (<p>, <ul>, etc.)
  const output = markdown.render(text).trim();
  return new SafeString(output);
};

module.exports = { paragraphSplit };
