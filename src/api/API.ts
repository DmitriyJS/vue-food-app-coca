import data from "./mock";

export default {
  get(url: string) {
    return new Promise((res, rej) => {
      if (url == "/food") {
        res({ ok: true, data });
      }
      // if (err) {
      //     res({ok:false})
      // }
    });
  },
};
