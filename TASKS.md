# TASKS — Work Breakdown Structure (WBS)

> แตกงานจาก SPEC.md เป็น task เล็ก ๆ ที่ **1 task = 1 prompt ให้ agent**
>
> task ที่ดี:
> - เสร็จได้ใน 1 prompt (แก้ 1–3 ไฟล์)
> - ตรวจได้ — ผูกกับ acceptance criteria (AC) ใน SPEC.md
> - รู้ว่าต้องทำอะไรก่อน (depends on)
>
> สั่ง agent ทีละ task: `ทำ task T2.1 ใน TASKS.md`

## Epic 0: โครงโปรเจกต์
- [x] **T0.1** โครง Worker + Hono + หน้าเว็บ + `/api/health` — _ทำแล้วใน starter_ — AC-0.1

## Epic 1: [ จัดการรถ ]  (Lab 2)
- [ ] **T1.1** [ ] — ไฟล์: [ ] — depends: – — AC: [ ]
- [ ] **T1.2** [ ]

## Epic 2: [ จองรถ ]  (Lab 3)
- [ ] **T2.1** [ ]

## Epic 3: [ ล็อกอิน ]  (Lab 4)
- [ ] **T3.1** [ ]

## ผู้ใช้ (คน) ทำเอง — ไม่ใช่งานของ agent
- [ ] รัน migration (`npx wrangler d1 migrations apply ...`)
- [ ] รัน smoke test และทดสอบในเบราว์เซอร์
- [ ] commit + deploy
