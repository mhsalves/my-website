import nanoid from 'nanoid';

/*
 * This function may return a generate a unique key prefix.
*/
function keyPrefixGenerator() {
  return nanoid(10);
}

/*
 * This function may return the pattern to mount a string which will a key.
 *
 * `keyPrefix` need be a key prefix generated.
 * `sufix` meed be a string to represent a item or component.
*/
function keyMount(keyPrefix, sufix) {
  return `${keyPrefix}-${sufix}`;
}

export { keyPrefixGenerator, keyMount };
