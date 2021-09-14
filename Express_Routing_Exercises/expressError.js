class ExpressError extends Error {
  constructor(msg, status) {
    super();
    this.msg = msg;
    this.status = status;
    console.error(this.stack);
  }
}
// stack property s on every error becasue of the super()
module.exports = ExpressError;
