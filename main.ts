// Game Entry Scaffolding for gta6-01
import * as fs from 'node:fs';
import * as path from 'node:path';

export function runGameBuild(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
  fs.mkdirSync(outDir, { recursive: true });
  
  // Deploy dossier.json and authentic game media to output
  const dossierSrc = path.join(process.cwd(), 'dossier.json');
  if (fs.existsSync(dossierSrc)) {
    fs.copyFileSync(dossierSrc, path.join(outDir, 'dossier.json'));
  }
  
  const coverSrc = path.join(process.cwd(), 'cover.png');
  if (fs.existsSync(coverSrc)) {
    fs.copyFileSync(coverSrc, path.join(outDir, 'cover.png'));
  }
}

runGameBuild();
