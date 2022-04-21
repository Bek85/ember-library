import { helper } from '@ember/component/helper';

export default helper(function incByOne(positional) {
  let [n] = positional;
  return Number.parseInt(n + 1);
});
