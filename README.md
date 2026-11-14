# car-booking-starter

โครงเริ่มต้นของ lab "ระบบจองรถ" — Cloudflare Workers + Hono + D1

## เริ่มใช้งาน

```bash
npm create cloudflare@latest car-booking -- --template=werapango/car-booking-starter --no-deploy --no-git
cd car-booking
npm run dev            # เปิด http://localhost:8787
```

## คำสั่งที่ใช้บ่อย

| คำสั่ง | ทำอะไร |
|---|---|
| `npm run dev` | รันในเครื่อง (local) ที่ http://localhost:8787 |
| `npm run smoke` | รัน smoke test กับ local (ต้องเปิด dev ไว้) |
| `BASE_URL=https://... npm run smoke` | รัน smoke test กับ production |
| `npx wrangler d1 create car-booking-db --binding DB` | สร้างฐานข้อมูลบนคลาวด์ + เพิ่ม binding ใน wrangler.jsonc |
| `npx wrangler d1 migrations create car-booking-db <ชื่อ>` | สร้างไฟล์ migration เปล่า |
| `npx wrangler d1 migrations apply car-booking-db --local` | ใช้ migration กับฐานข้อมูลในเครื่อง |
| `npx wrangler d1 migrations apply car-booking-db --remote` | ใช้ migration กับฐานข้อมูลบนคลาวด์ |
| `npx wrangler deploy` | อัปโหลดขึ้น Cloudflare |
| `npx wrangler tail` | ดู log ของ production แบบสด |

ไฟล์สำคัญ: `AGENTS.md` (กติกาให้ agent), `SPEC.md` (ความต้องการ), `TASKS.md` (WBS), `skills/` (ขั้นตอนมาตรฐาน)
