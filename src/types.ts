// ชนิดข้อมูลของ "สิ่งที่ Cloudflare ส่งมาให้ Worker" (bindings)
// DB จะมีจริงหลัง Lab 2 (wrangler d1 create ... --binding DB)
export type Bindings = {
  DB: D1Database;
};

// ค่าที่ middleware ฝากไว้ใน context ให้ route อื่นใช้ (Lab 4: ผู้ใช้ที่ล็อกอินอยู่)
export type Variables = {
  userId?: number;
  username?: string;
};

export type AppEnv = { Bindings: Bindings; Variables: Variables };
