// Smoke test = ทดสอบแบบ "เรียก API จริง แล้วเช็กผล" ตาม acceptance criteria ใน SPEC.md
//
// ใช้ได้ทั้งในเครื่องและบนคลาวด์ด้วยไฟล์เดียวกัน:
//   npm run smoke                                         ← ทดสอบ http://localhost:8787 (ต้องรัน npm run dev ไว้)
//   BASE_URL=https://car-booking-xxx.workers.dev npm run smoke   ← ทดสอบ production
//
// วิธีเพิ่มเคส: เพิ่ม test("ชื่อเคส", async () => { ... }) ด้านล่าง 1 เคสต่อ 1 acceptance criterion

const BASE = (process.env.BASE_URL || "http://localhost:8787").replace(/\/$/, "");
const tests = [];
const test = (name, fn) => tests.push({ name, fn });

// ตัวช่วยเรียก API — จำ cookie ไว้ให้เหมือนเบราว์เซอร์ (ใช้ตอนมีระบบล็อกอิน)
function client() {
  let cookie = "";
  return async function api(method, path, body) {
    const res = await fetch(BASE + path, {
      method,
      headers: {
        "content-type": "application/json",
        ...(cookie ? { cookie } : {}),
      },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    const setCookie = res.headers.get("set-cookie");
    if (setCookie) cookie = setCookie.split(";")[0];
    let data = null;
    try { data = await res.json(); } catch { /* ไม่ใช่ JSON */ }
    return { status: res.status, data };
  };
}

function expect(cond, message) {
  if (!cond) throw new Error(message);
}

// ───────────────────────── เคสทดสอบ ─────────────────────────

test("GET /api/health ตอบ ok: true", async () => {
  const api = client();
  const r = await api("GET", "/api/health");
  expect(r.status === 200, `status ควรเป็น 200 แต่ได้ ${r.status}`);
  expect(r.data?.ok === true, "ควรได้ ok: true");
});

// ⬇ เพิ่มเคสของ Lab 2–4 ต่อจากตรงนี้

// ───────────────────────── ตัวรัน ─────────────────────────

let failed = 0;
console.log(`Smoke test → ${BASE}\n`);
for (const t of tests) {
  try {
    await t.fn();
    console.log(`  ✅ ${t.name}`);
  } catch (err) {
    failed++;
    console.log(`  ❌ ${t.name}\n     → ${err.message}`);
  }
}
console.log(`\n${tests.length - failed}/${tests.length} ผ่าน`);
process.exit(failed ? 1 : 0);
