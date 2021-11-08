/* eslint-disable */
let document;

if (typeof window !== 'undefined') {
  document = window.document;
} else {
  document = {
    querySelector: function (selector: string) {},
  };
}

export default document;
