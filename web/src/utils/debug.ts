export class Debug {
  static async delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
