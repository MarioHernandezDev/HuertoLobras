// Uso:
//   node scripts/optimize-images.mjs <origen> <destino> [ladoMaximo=1600] [calidad=72]
//     Convierte todos los JPG/PNG/WEBP de <origen> a WEBP ligero en <destino>.
//   node scripts/optimize-images.mjs --inplace <carpeta> [ladoMaximo] [calidad]
//     Re-comprime en sitio (solo toca lo que pesa mucho o es demasiado grande).
import sharp from 'sharp'
import { readdir, stat, rename, mkdir } from 'node:fs/promises'
import { join, extname, basename } from 'node:path'

const args = process.argv.slice(2)
const inplace = args[0] === '--inplace'
if (inplace) args.shift()
const [src, dest, maxArg, qArg] = inplace ? [args[0], args[0], args[1], args[2]] : args
const max = Number(inplace ? args[1] : maxArg) || 1600
const quality = Number(inplace ? args[2] : qArg) || 72

const walk = async (dir) => {
  const out = []
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) out.push(...(await walk(p)))
    else if (/\.(jpe?g|png|webp)$/i.test(e.name)) out.push(p)
  }
  return out
}

for (const file of await walk(src)) {
  const before = (await stat(file)).size
  const img = sharp(file).rotate()
  const meta = await sharp(file).metadata()
  const big = Math.max(meta.width, meta.height) > max
  if (inplace && !big && before < 220 * 1024) continue
  const rel = file.slice(src.length)
  const target = inplace
    ? file
    : join(dest, rel.replace(/\.[^.]+$/, '.webp'))
  await mkdir(join(target, '..'), { recursive: true })
  const tmp = target + '.tmp'
  await img
    .resize({ width: max, height: max, fit: 'inside', withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(tmp)
  await rename(tmp, target)
  console.log(basename(target).padEnd(32), `${(before / 1024) | 0}KB -> ${((await stat(target)).size / 1024) | 0}KB`)
}
