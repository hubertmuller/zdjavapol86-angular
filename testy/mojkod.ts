class Kot {
  private komunikat = 'miau';
  miau(): void {
    console.log('kot robi:' + this.komunikat);
  }
}

function a(): void {
  let x: number;
  x = 6;
  x++;
  console.log(x + 'aoao');
}

let kotek = new Kot();
kotek.miau();

a();
