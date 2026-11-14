import { Hono } from "hono";
import type { AppEnv } from "./types";
import { health } from "./routes/health";

// จุดเริ่มของ API ทั้งหมด
// หน้าเว็บ (public/) ถูกเสิร์ฟโดย Cloudflare ก่อนถึงไฟล์นี้ — ไฟล์นี้รับเฉพาะ /api/...
const app = new Hono<AppEnv>();

// ⬇ ผูก route ของแต่ละเรื่องไว้ที่นี่ (1 เรื่อง = 1 ไฟล์ใน src/routes/)
app.route("/api/health", health);
// app.route("/api/cars", cars);         ← Lab 2
// app.route("/api/bookings", bookings); ← Lab 3
// app.route("/api/auth", auth);         ← Lab 4

// path ที่ไม่มีอยู่จริง → 404 แบบ JSON
app.notFound((c) => c.json({ error: "not found" }, 404));

// error ที่ไม่ได้ดักไว้ → 500 แบบ JSON (รายละเอียดดูได้จาก log ของ wrangler)
app.onError((err, c) => {
  console.error(err);
  return c.json({ error: "internal error" }, 500);
});

export default app;
