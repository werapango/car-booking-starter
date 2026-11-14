import { Hono } from "hono";
import type { AppEnv } from "../types";

// GET /api/health → ใช้เช็กว่าเซิร์ฟเวอร์ทำงาน (ทั้งในเครื่องและบนคลาวด์)
export const health = new Hono<AppEnv>();

health.get("/", (c) =>
  c.json({ ok: true, service: "car-booking", time: new Date().toISOString() })
);
