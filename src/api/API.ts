import data from "./mock";
// получаем моковые данные
// принимаем параметром подроут
export default {
  get(url: string, params: any) {
    return new Promise((res, rej) => {
      if (url.includes("/api/v1/menu")) {
        console.log(123);
        if (params.kind == "food") {
          let a = data;
          res({ ok: true, data: data.slice(1, 3) });
        }
        if (params.kind == "coffee") {
          res({ ok: true, data: data.slice(7, 12) });
        }
        if (params.kind == "beverages") {
          res({ ok: true, data: data.slice(4, 17) });
        }
        if (params.kind == "appetizer") {
          res({ ok: true, data: data.slice(7, 18) });
        }
        if (params.kind == "coffee") {
          res({ ok: true, data: data.slice(1, 14) });
        }
        if (params.kind == "bread") {
          res({ ok: true, data: data.slice(3, 13) });
        }
        if (params.kind == "snack") {
          res({ ok: true, data: data.slice(4, 10) });
        }
        if (params.kind == "all") {
          res({ ok: true, data: data });
        }
      }
    });
  },
};
