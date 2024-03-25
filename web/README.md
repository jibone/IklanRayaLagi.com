Projek ini dibangunkan dengan kerangka [Next.js](https://nextjs.org) yang pada mulanya di-bootstrap dari [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Buat masa ini, projek ini rasanya tidak akan dapat berfungsi dengan sepenuhnya jika local environment tiada kunci kata rahsia seperti `POSTGRES_HOST`, `POSTGRES_USER`, `POSTGRES_PASSWORD`. Semasa men-devolope di lokal, disambungnya terus ke Vercel Postgres. Ini untuk memudahkan proses menaikmuatkan data. Tak perlu CMS, hanya guna [Drizzle Studio](https://orm.drizzle.team/drizzle-studio/overview).

Ini bukan satu setup yang ideal. Mana mungkin disambungnya terus dari lokal ke database production? Ini melangga tabii segala _best practice_ yang selalu dicanang software engineer berpengalaman. Mungkin bila ada masa sikit boleh di-setup-kan Docker dan local Postgres dengan seed data bagi peng-develop-an local. Bolehlah cuba di lokal nanti.

## Command dan fungsinya.

Berikut adalah senarai scripts command di `package.json` dan fungsinya.

```bash
npm run dev
```

Memulakan local development server bagi Next.js. Akan recompile bila ada sebarang perubahan code yang di-save. Reloading code secara panas.

```bash
npm run build
```

Build project untuk production dengan segala optiminasi code yang perlu dioptiminasikan.

```bash
npm run start
```

Memulakan server Next.js untuk serving production code. Aplikasi harus di-compile dengan command `npm run build` terlebih dahulu.

```bash
npm run lint
```

Memulakan process linting kepada codebase. Kalau ada apa-apa yang tak kena, kebiasaannya akan keluar bila run command ini.

```bash
npm run test
```

Memulakan test runner jest. Menguji kesemua code dengan ujian berunit.

```bash
npm run test:watch
```

Sama seperti di atas, cuma command ini akan lebih peka pada perubahan file. Dia ada file save, dia run.

```bash
npm run db:generate
```

Akan men-generate-kan migration file berdasarkan schema yang kita tulis.

```bash
npm run db:introspect
```

Akan periksa database yang sedia ada kalau ada perubahan schema, akan men-generate-kan file schema sebagaimana yang ada di database.

```bash
npm run db:push
```

Tolak schema local ke database terus.

```bash
npm run db:drop
```

Jangan. Bahaya. Men-rollback migration yang baru dibuat. Kalau tersilap migrate, baru guna. Telajak perahu boleh diundur, telajak _drop database_ buruk padahnya.

```bash
npm run db:up
```

Pastikan database berada pada migrasi yang terkini.

```bash
npm run db:check
```

Periksa konsistensi migrasi.

```bash
npm run db:studio
```

Mulakan server Drizzle Studio. Guna untuk update data secara direct.
