class BitMap {
  constructor(n) {
      this.nbits = n;
      this.blk = new Array(Math.floor(n / 16) + 1);
      this.blk.fill(0);
  }

  get(k) {
      if( k > this.nbits) return false; 

      let byteIndex = Math.floor(k / 16);
      let bitIndex = k % 16;

      return !((this.blk[byteIndex] & (1 << bitIndex)) === 0);
  }

  set(k) {
      if( k > this.nbits) return; 

      let byteIndex = Math.floor(k / 16);
      let bitIndex = k % 16;

      this.blk[byteIndex] = this.blk[byteIndex] | (1 << bitIndex);

  }
}
