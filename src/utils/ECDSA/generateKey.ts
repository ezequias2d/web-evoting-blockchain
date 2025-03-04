function generateKey() {
  window.crypto.subtle
    .generateKey(
      {
        name: 'ECDSA',
        namedCurve: 'P-256', // can be "P-256", "P-384", or "P-521"
      },
      false, // whether the key is extractable (i.e. can be used in exportKey)
      ['sign', 'verify'], // can be any combination of "sign" and "verify"
    )
    .then(function (key) {
      // returns a keypair object
      console.log(key)
      console.log(key.publicKey)
      console.log(key.privateKey)
    })
    .catch(function (err) {
      console.error(err)
    })
}

export { generateKey }
