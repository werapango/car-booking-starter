# AGENTS.md — คู่มือประจำโปรเจกต์สำหรับ AI agent

> ไฟล์นี้ถูกอ่านเป็น context แรกทุกครั้งที่เปิด session ใหม่
> เขียนสิ่งที่ "ต้องบอก agent ทุกครั้ง" ไว้ที่นี่ แทนการพิมพ์ซ้ำในทุก prompt

## โปรเจกต์นี้คืออะไร
ระบบจองรถของหน่วยงาน — รายละเอียดความต้องการทั้งหมดอยู่ใน `SPEC.md`
งานที่ต้องทำแตกไว้แล้วใน `TASKS.md` (WBS)

## Stack
- Cloudflare Workers + Hono (TypeScript) — API อยู่ใน `src/`
- หน้าเว็บ: HTML + CSS + JavaScript ธรรมดา ไม่ใช้ framework — อยู่ใน `public/`
- ฐานข้อมูล: Cloudflare D1 (SQLite) binding ชื่อ `DB` — schema อยู่ใน `migrations/`
- ทดสอบ: `scripts/smoke.mjs` (เรียก API จริงแล้วเช็กผล)

## โครงไฟล์
```
src/index.ts          จุดรวม route ทั้งหมด
src/routes/<เรื่อง>.ts  1 เรื่อง = 1 ไฟล์ (health, cars, bookings, auth)
src/types.ts          ชนิดของ bindings และตัวแปรใน context
public/index.html     หน้าเว็บ
migrations/NNNN_*.sql การเปลี่ยน schema แต่ละครั้ง (เรียงตามเลข)
scripts/smoke.mjs     smoke test
SPEC.md / TASKS.md    ความต้องการ / รายการงาน
skills/               ขั้นตอนมาตรฐานสำหรับงานที่ทำซ้ำ
```

## กติกาการทำงาน (สำคัญ)
1. **ทำทีละ 1 task จาก TASKS.md** ตามที่ผู้ใช้สั่งเท่านั้น ห้ามทำ task อื่นล่วงหน้า
2. **ห้ามรันคำสั่งเหล่านี้เอง:** `wrangler` ทุกคำสั่ง, `npm install`, `git` — ให้เขียนคำสั่งที่ผู้ใช้ต้องรันไว้ท้ายคำตอบ ผู้ใช้จะรันเองแล้วแปะผลกลับมาถ้ามีปัญหา
3. อ่านเฉพาะไฟล์ที่เกี่ยวกับ task — ห้ามอ่าน `node_modules/`, `.wrangler/`, `package-lock.json`
4. จบ task ทุกครั้ง ให้ตอบสั้น ๆ 3 ส่วน: **ไฟล์ที่แก้**, **คำสั่งที่ผู้ใช้ต้องรัน**, **วิธีทดสอบ** และเปลี่ยนสถานะ task ใน TASKS.md เป็น `[x]`
5. ห้ามเพิ่ม dependency ใหม่ โดยไม่ถามก่อน

## กติกาของโค้ด
- ตอบและเขียนคอมเมนต์เป็นภาษาไทย
- SQL ทุกคำสั่งต้องเป็น prepared statement (`.prepare(...).bind(...)`) ห้ามต่อ string
- เปลี่ยน schema = สร้างไฟล์ migration ใหม่เท่านั้น **ห้ามแก้ไฟล์ migration ที่มีอยู่แล้ว**
- เวลาในระบบเก็บเป็นข้อความ `YYYY-MM-DDTHH:MM` (เวลาท้องถิ่น ไม่มี timezone) ทั้งระบบ
- API ตอบ JSON เสมอ — error ใช้รูปแบบ `{ "error": "ข้อความภาษาไทย" }` พร้อม status code ที่ถูกต้อง (400, 401, 404, 409)
- ทุก endpoint ใหม่ต้องมีเคสใน `scripts/smoke.mjs` อย่างน้อย 1 เคส

## Skills (ขั้นตอนมาตรฐาน)
ก่อนทำงานประเภทต่อไปนี้ ให้อ่านไฟล์ skill ที่ระบุและทำตามขั้นตอนในนั้น:

| งาน | อ่านไฟล์ |
|---|---|
| _(Lab 3: เพิ่มแถวของ skill ที่คุณเขียน)_ | |

## ข้อมูลที่ผู้เรียนเติมเอง
- ชื่อ Worker ของฉัน: `[ ]`
- URL production: `[ ]`
