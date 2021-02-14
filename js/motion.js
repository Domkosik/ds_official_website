window.addEventListener('DOMContentLoaded', () => {
    const circle = new CircularProgressBar('pie');

    setInterval(() => {
      const options = {
        index: 1,
        percent: 70
      }
      circle.animationTo(options);
    }, 2500);

    setInterval(() => {
      const options = {
        index: 2,
        percent: 60
      }
      circle.animationTo(options);
    }, 2500);

    setInterval(() => {
      const options = {
        index: 3,
        percent: 35
      }
      circle.animationTo(options);
    }, 2500);

  });