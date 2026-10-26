import fs from 'fs';
import vm from 'vm';

const order = [
  'sewer',
  'injection-wells',
  'shk-mohammed-palace',
  'shk-khalid-palace',
  'tower-404',
  'shk-tamim-palace',
  'shk-jassim-palace',
  'aspire',
  'majles-mosque',
  'diriyah',
  'qrcs',
  'residential',
  'private-villa',
  'aamal-ceo-office-tamim',
  'sh-thani-office-city-tower',
  'al-faisal-tower',
  'najada-gold-souq',
  'lekhwiya',
];

const path = new URL('../projects.js', import.meta.url);
const raw = fs.readFileSync(path, 'utf8');
const header = raw.split('window.PORTFOLIO_PROJECTS')[0];
const sandbox = { window: {} };
vm.runInNewContext(raw, sandbox);
const byId = Object.fromEntries(sandbox.window.PORTFOLIO_PROJECTS.map((p) => [p.id, p]));

function toJs(value, indent = '') {
  if (value === null) return 'null';
  if (typeof value === 'string') return JSON.stringify(value);
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (Array.isArray(value)) {
    if (!value.length) return '[]';
    const inner = value
      .map((item) => `${indent}  ${toJs(item, indent + '  ')}`)
      .join(',\n');
    return `[\n${inner}\n${indent}]`;
  }
  const entries = Object.entries(value);
  const inner = entries
    .map(([k, v]) => {
      const key = /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(k) ? k : JSON.stringify(k);
      return `${indent}  ${key}: ${toJs(v, indent + '  ')}`;
    })
    .join(',\n');
  return `{\n${inner}\n${indent}}`;
}

const sorted = order.map((id, i) => {
  const p = byId[id];
  if (!p) throw new Error(`missing project id: ${id}`);
  return {
    ...p,
    sortOrder: i + 1,
    number: String(i + 1).padStart(2, '0'),
  };
});

fs.writeFileSync(path, `${header}window.PORTFOLIO_PROJECTS = ${toJs(sorted)};\n`);
console.log(sorted.map((p) => `${p.number} ${p.id}`).join('\n'));
