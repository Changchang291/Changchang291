const fs = require('fs');
const D = require('docx');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, AlignmentType, BorderStyle, TabStopType, PageBreak, ShadingType, Footer, PageNumber, VerticalAlign } = D;
const html = fs.readFileSync(process.argv[2], 'utf8');
const src = html.slice(html.indexOf('const EXAMS = ['), html.indexOf('\n  ];', html.indexOf('const EXAMS = [')) + 4);
const EXAMS = eval(src.replace('const EXAMS =', '(') + ')');
// Cùng thuật toán trộn đáp án với trang web
const perm = EXAMS.map((ex, ei) => {
  let s = (ei * 7919 + 12345) >>> 0;
  const rnd = () => { s = (s + 0x6D2B79F5) >>> 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const mix = arr => { for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; };
  const pos = mix([0,0,0,1,1,1,2,2,2,3,3,3]);
  return ex.p1.map((q, qi) => { const others = mix([0,1,2,3].filter(i => i !== q.a)); return [0,1,2,3].map(d => d === pos[qi] ? q.a : others.shift()); });
});
const keyOf = (ei, qi) => perm[ei][qi].indexOf(EXAMS[ei].p1[qi].a);
const L4 = 'ABCD', LV = { NB: 'Nhận biết', TH: 'Thông hiểu', VD: 'Vận dụng', VDC: 'Vận dụng cao' };
const fmt = x => String(Math.round(x * 100) / 100).replace('.', ',');

const FONT = 'Times New Roman';
const W = 11906 - 2 * 1134; // A4, lề 2 cm
const T = (text, o = {}) => new TextRun({ text, font: FONT, size: 24, ...o });
const P = (runs, o = {}) => new Paragraph({ children: Array.isArray(runs) ? runs : [T(runs)], spacing: { after: 40, line: 262 }, ...o });
const noB = { top: { style: BorderStyle.NONE, size: 0 }, bottom: { style: BorderStyle.NONE, size: 0 }, left: { style: BorderStyle.NONE, size: 0 }, right: { style: BorderStyle.NONE, size: 0 } };
const thin = { style: BorderStyle.SINGLE, size: 4, color: '000000' };
const allB = { top: thin, bottom: thin, left: thin, right: thin };

function header(ei, kind) {
  const c = (w, ps) => new TableCell({ width: { size: w, type: WidthType.DXA }, borders: noB, children: ps });
  const ctr = (runs) => P(runs, { alignment: AlignmentType.CENTER, spacing: { after: 20 } });
  const w1 = Math.round(W * 0.4), w2 = W - w1;
  return [new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [w1, w2], borders: { insideHorizontal: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE } }, rows: [new TableRow({ children: [
    c(w1, [ctr([T('TEAM VẬT LÝ KỲ ANH', { bold: true })]), ctr([T('ĐỀ ÔN LUYỆN', { italics: true })]), ctr([T(`${kind} ĐỀ SỐ ${ei + 1}`, { bold: true })])]),
    c(w2, [ctr([T('ĐỀ KIỂM TRA CHỦ ĐỀ GIAO THOA SÓNG', { bold: true })]), ctr([T('Môn: Vật lí 11 – Kết nối tri thức')]), ctr([T('Thời gian làm bài: 45 phút, không kể thời gian phát đề', { italics: true })])])
  ] })] }),
  P([T('')], { border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: '000000', space: 1 } }, spacing: { after: 120 } })];
}
const part = (title, note) => P([T(title, { bold: true }), T(' ' + note, { italics: true })], { spacing: { before: 160, after: 80 } });

function optsBlock(texts) {
  const lab = texts.map((t, i) => [T(L4[i] + '. ', { bold: true }), T(t)]);
  const max = Math.max(...texts.map(t => t.length));
  const ind = { left: 284 };
  if (max <= 16) { // 4 phương án trên một dòng
    const q = W / 4;
    return [P(lab.flatMap((r, i) => i ? [T('\t'), ...r] : r), { tabStops: [1, 2, 3].map(k => ({ type: TabStopType.LEFT, position: Math.round(q * k) })), indent: ind })];
  }
  if (max <= 42) { // 2 phương án mỗi dòng
    const ts = [{ type: TabStopType.LEFT, position: Math.round(W / 2) }];
    return [P([...lab[0], T('\t'), ...lab[1]], { tabStops: ts, indent: ind }), P([...lab[2], T('\t'), ...lab[3]], { tabStops: ts, indent: ind })];
  }
  return lab.map(r => P(r, { indent: { left: 284, hanging: 0 } }));
}

function examDoc() {
  const kids = [];
  EXAMS.forEach((ex, ei) => {
    if (ei) kids.push(new Paragraph({ children: [new PageBreak()] }));
    kids.push(...header(ei, ''));
    kids.push(P([T('Họ và tên: ……………………………………………………… Lớp: ……………')], { spacing: { after: 120 } }));
    kids.push(part('PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn.', '(3,0 điểm) Thí sinh trả lời từ câu 1 đến câu 12. Mỗi câu hỏi thí sinh chỉ chọn một phương án.'));
    ex.p1.forEach((q, qi) => {
      kids.push(P([T(`Câu ${qi + 1}. `, { bold: true }), T(q.q)], { keepNext: true }));
      kids.push(...optsBlock(perm[ei][qi].map(oi => q.o[oi])));
    });
    kids.push(part('PHẦN II. Câu trắc nghiệm đúng sai.', '(2,0 điểm) Thí sinh trả lời câu 1 và câu 2. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai.'));
    ex.p2.forEach((q, ci) => {
      kids.push(P([T(`Câu ${ci + 1}. `, { bold: true }), T(q.q)], { keepNext: true }));
      q.s.forEach((it, ii) => kids.push(P([T(`${'abcd'[ii]}) `, { bold: true }), T(it[0])], { indent: { left: 284 } })));
    });
    kids.push(part('PHẦN III. Câu trắc nghiệm trả lời ngắn.', '(2,0 điểm) Thí sinh trả lời từ câu 1 đến câu 4.'));
    ex.p3.forEach((q, qi) => kids.push(P([T(`Câu ${qi + 1}. `, { bold: true }), T(q.q)])));
    kids.push(part('PHẦN IV. Tự luận.', '(3,0 điểm)'));
    ex.p4.forEach((q, ci) => {
      kids.push(P([T(`Câu ${ci + 1} (1,5 điểm). `, { bold: true }), T(q.q)], { keepNext: true }));
      q.parts.forEach((pt, pi) => kids.push(P([T(`${'ab'[pi]}) `, { bold: true }), T(pt[0])], { indent: { left: 284 } })));
    });
    kids.push(P([T('—— HẾT ——', { bold: true })], { alignment: AlignmentType.CENTER, spacing: { before: 240 } }));
    kids.push(P([T('Thí sinh không được sử dụng tài liệu. Cán bộ coi thi không giải thích gì thêm.', { italics: true, size: 22 })], { alignment: AlignmentType.CENTER }));
  });
  return kids;
}

function grid(rows, widths, shadeFirst = true) {
  const tot = widths.reduce((a, b) => a + b, 0);
  return new Table({ width: { size: tot, type: WidthType.DXA }, columnWidths: widths, alignment: AlignmentType.CENTER, rows: rows.map((r, ri) => new TableRow({ children: r.map((cell, ci) => new TableCell({
    width: { size: widths[ci], type: WidthType.DXA }, borders: allB, verticalAlign: VerticalAlign.CENTER,
    shading: shadeFirst && (ri === 0 || ci === 0) ? { type: ShadingType.CLEAR, color: 'auto', fill: 'E8F1F2' } : undefined,
    margins: { top: 40, bottom: 40, left: 60, right: 60 },
    children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [T(String(cell), { bold: ri === 0 || ci === 0, size: 22 })] })] })) })) });
}

function keyDoc() {
  const kids = [];
  EXAMS.forEach((ex, ei) => {
    if (ei) kids.push(new Paragraph({ children: [new PageBreak()] }));
    kids.push(...header(ei, 'ĐÁP ÁN'));
    kids.push(P([T('ĐÁP ÁN VÀ HƯỚNG DẪN CHẤM', { bold: true, size: 26 })], { alignment: AlignmentType.CENTER, spacing: { after: 120 } }));
    kids.push(part('PHẦN I.', '(Mỗi câu đúng 0,25 điểm)'));
    const cw = [1100, ...Array(12).fill(Math.floor((W - 1100) / 12))];
    kids.push(grid([['Câu', ...ex.p1.map((_, i) => i + 1)], ['Đáp án', ...ex.p1.map((_, i) => L4[keyOf(ei, i)])]], cw));
    kids.push(part('PHẦN II.', '(Đúng 1 ý: 0,1đ; 2 ý: 0,25đ; 3 ý: 0,5đ; 4 ý: 1,0đ)'));
    kids.push(grid([['Câu', 'a)', 'b)', 'c)', 'd)'], ...ex.p2.map((q, ci) => [`Câu ${ci + 1}`, ...q.s.map(it => it[1] ? 'Đúng' : 'Sai')])], [1600, 1500, 1500, 1500, 1500]));
    ex.p2.forEach((q, ci) => {
      kids.push(P([T(`Câu ${ci + 1}:`, { bold: true })], { spacing: { before: 80 } }));
      q.s.forEach((it, ii) => kids.push(P([T(`${'abcd'[ii]}) ${it[1] ? 'Đúng' : 'Sai'}. `, { bold: true }), T(it[3]), T(`  [${LV[it[2]]}]`, { italics: true, size: 20 })], { indent: { left: 284 } })));
    });
    kids.push(part('PHẦN III.', '(Mỗi câu đúng 0,5 điểm)'));
    kids.push(grid([['Câu', '1', '2', '3', '4'], ['Đáp số', ...ex.p3.map(q => fmt(q.ans))]], [1600, 1500, 1500, 1500, 1500]));
    ex.p3.forEach((q, qi) => kids.push(P([T(`Câu ${qi + 1}: ${fmt(q.ans)} ${q.unit}. `, { bold: true }), T(q.sol), T(`  [${LV[q.lv]}]`, { italics: true, size: 20 })], { indent: { left: 284 }, spacing: { before: 40, after: 40 } })));
    kids.push(part('PHẦN IV.', '(3,0 điểm – mỗi ý 0,75 điểm)'));
    ex.p4.forEach((q, ci) => {
      kids.push(P([T(`Câu ${ci + 1}:`, { bold: true })], { spacing: { before: 80 } }));
      q.parts.forEach((pt, pi) => kids.push(P([T(`${'ab'[pi]}) `, { bold: true }), T(pt[2]), T(`  [${LV[pt[1]]}]`, { italics: true, size: 20 })], { indent: { left: 284 } })));
    });
    kids.push(P([T('Học sinh giải cách khác đúng vẫn cho điểm tối đa.', { italics: true })], { spacing: { before: 120 } }));
  });
  return kids;
}

const footer = new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [T('Team Vật lý Kỳ Anh – Trang ', { size: 20 }), new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 20 })] })] });
const mk = kids => new Document({ creator: 'Team Vật lý Kỳ Anh', styles: { default: { document: { run: { font: FONT, size: 24 } } } },
  sections: [{ properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 } } }, footers: { default: footer }, children: kids }] });
const out = process.argv[3];
Promise.all([Packer.toBuffer(mk(examDoc())), Packer.toBuffer(mk(keyDoc()))]).then(([a, b]) => {
  fs.writeFileSync(out + '/De-kiem-tra-Giao-thoa-song.docx', a);
  fs.writeFileSync(out + '/Dap-an-De-kiem-tra-Giao-thoa-song.docx', b);
  console.log('ok', EXAMS.length, EXAMS.map((_, e) => EXAMS[e].p1.map((_, i) => L4[keyOf(e, i)]).join('')).join(' '));
});
