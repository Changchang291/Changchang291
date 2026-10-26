# KẾ HOẠCH BÀI DẠY — VẬT LÍ 12, CHƯƠNG 2: KHÍ LÍ TƯỞNG
## Các tiết bài tập và ôn tập bằng trò chơi tương tác theo nhóm

> Mỗi tiết có một trò chơi riêng, mở bằng trình duyệt trên máy tính nối máy chiếu, không cần cài đặt:
> - **Tiết 1 – Thử thách Boyle–Charles**: `tiet-1.html`
> - **Tiết 2 – Rung chuông Clapeyron**: `tiet-2.html`
> - **Tiết 3 – Đại chiến Khí lí tưởng**: `tiet-3.html`
>
> Mỗi tệp có bảng điểm riêng (điểm tiết này không lẫn sang tiết khác), có sẵn đồng hồ đếm ngược, âm thanh, bảng điểm các đội, vòng quay chọn đội ngẫu nhiên và màn hình vinh danh.
>
> Áp dụng cho chương trình GDPT 2018 (các bộ sách Kết nối tri thức, Chân trời sáng tạo, Cánh diều). Chương 2 gồm: mô hình động học phân tử chất khí; định luật Boyle; định luật Charles; phương trình trạng thái khí lí tưởng; áp suất khí theo mô hình động học phân tử; động năng phân tử khí.

---

## PHẦN CHUNG CHO CẢ BA TIẾT

### 1. Tổ chức lớp
- Chia lớp thành **4–6 đội**, mỗi đội 6–8 học sinh, nên cố định trong cả 3 tiết. Mỗi trò chơi tính điểm riêng; muốn thi đua cả chương, GV ghi lại điểm tổng kết của từng tiết rồi cộng dồn. Tên đội gợi ý: Boyle, Charles, Avogadro, Kelvin, Boltzmann, Clapeyron (đổi được trong tab **Đội chơi**).
- Mỗi đội cử: 1 **đội trưởng** (điều phối, giơ thẻ, chọn ★), 1 **thư kí** (viết bảng con), 1 **người báo cáo** (trình bày lời giải). Luân phiên vai trò qua các tiết.

### 2. Chuẩn bị
| Giáo viên | Mỗi đội |
|---|---|
| Máy tính + máy chiếu (loa nếu có) | 1 bảng con hoặc bảng phụ A3, bút lông |
| Tệp trò chơi của tiết (`tiet-1.html` / `tiet-2.html` / `tiet-3.html`) | 1 bộ thẻ **ĐÚNG/SAI** (2 màu) |
| Phiếu bài tập về nhà (mục cuối) | 1 thẻ **★ Ngôi sao hy vọng** |
| Quà nhỏ hoặc điểm cộng cho đội thắng | Máy tính cầm tay |

### 3. Luật tính điểm thống nhất
- Trả lời đúng: **+10** (câu ngắn), **+20** (bài tính toán, hộp quà).
- **★ Ngôi sao hy vọng**: đội giơ thẻ ★ trước khi mở đáp án. Đúng: **×2 điểm**; sai: **−10**. Mỗi đội dùng tối đa 2 lần mỗi trò.
- Trên ứng dụng: sau khi mở đáp án, bấm tên đội để chuyển trạng thái `✓ đúng → ★ đúng → ★ sai → bỏ chọn`, rồi bấm **Cộng điểm**. Có thể chỉnh nhanh ±5, +10 ở bảng điểm (điểm tinh thần, kỉ luật, trình bày đẹp).
- Phím tắt: `Space` bấm/dừng giờ · `Enter` mở đáp án · `→`/`←` câu sau/trước.

### 4. Quy tắc lớp học khi chơi
- Hết giờ mới giơ bảng; giơ đồng thời.
- Đội trả lời sai được giáo viên hỏi “Vì sao các em chọn như vậy?” → khai thác sai lầm phổ biến (đổi °C sang K, nhầm tỉ lệ thuận/nghịch, quên đổi đơn vị).
- Trừ 5 điểm nếu ồn ào hoặc nhắc bài đội khác; cộng 5 điểm nếu cả đội hợp tác tốt.

---

## TIẾT 1 — BÀI TẬP: MÔ HÌNH ĐỘNG HỌC PHÂN TỬ, ĐỊNH LUẬT BOYLE, ĐỊNH LUẬT CHARLES
*Trò chơi: `tiet-1.html` — Thử thách Boyle–Charles*

### I. Mục tiêu
**1. Kiến thức:** củng cố mô hình động học phân tử chất khí; định luật Boyle (pV = hằng số); định luật Charles (V/T = hằng số); đồ thị đẳng nhiệt, đẳng áp.

**2. Năng lực**
- *Nhận thức vật lí:* nêu, giải thích tính chất chất khí bằng mô hình động học.
- *Vận dụng:* giải bài tập định lượng về đẳng nhiệt, đẳng áp; đổi nhiệt độ T = t + 273.
- *Chung:* hợp tác nhóm, giao tiếp, giải quyết vấn đề.

**3. Phẩm chất:** trung thực khi thi đua, trách nhiệm với nhóm, chăm chỉ.

### II. Tiến trình (45 phút)

| Thời gian | Hoạt động | Trò chơi trên ứng dụng | Hoạt động của GV | Hoạt động của HS |
|---|---|---|---|---|
| 5′ | **Khởi động** | *Đúng hay Sai?* (10 nhận định, 10 giây/câu) | Đọc nhận định, bấm giờ, mở đáp án, chấm các đội giơ đúng | Thảo luận nhanh, giơ thẻ Đ/S |
| 15′ | **Củng cố lí thuyết + bài tập ngắn** | *Mảnh ghép bí ẩn* (6 mảnh che đồ thị p–V; từ khóa **ĐẲNG NHIỆT**) | Dùng 🎲 Chọn đội để chọn đội chọn mảnh; mở mảnh khi có đội đúng | Đội được chọn trả lời trước; sai thì đội khác giành quyền. Đội nào đoán đúng từ khóa được thưởng (càng ít mảnh mở, thưởng càng cao) |
| 20′ | **Luyện tập bài toán** | *Thử thách tính toán* (4 bài, 2 phút/bài) | Chiếu đề, cho gợi ý nếu cần, mở lời giải từng bước, gọi 1 đội lên trình bày | Giải trên bảng phụ, giơ khi hết giờ; đội làm đúng và nhanh nhất có thể dùng ★ |
| 5′ | **Tổng kết** | *Tổng kết & trao danh hiệu* | Nhận xét, chốt lỗi sai, giao bài về nhà | Tự đánh giá, ghi bài tập |

### III. Nội dung trọng tâm cần chốt sau mỗi trò
- p và V tỉ lệ **nghịch** (T không đổi); V và **T** tỉ lệ thuận (p không đổi) — không phải t (°C).
- Luôn đổi °C sang K trước khi dùng định luật Charles.
- Đơn vị thể tích/áp suất hai vế chỉ cần **cùng loại**, không bắt buộc đổi sang SI khi lập tỉ số.

---

## TIẾT 2 — BÀI TẬP: PHƯƠNG TRÌNH TRẠNG THÁI, ÁP SUẤT VÀ ĐỘNG NĂNG PHÂN TỬ KHÍ
*Trò chơi: `tiet-2.html` — Rung chuông Clapeyron*

### I. Mục tiêu
**1. Kiến thức:** phương trình trạng thái p₁V₁/T₁ = p₂V₂/T₂; phương trình Clapeyron pV = nRT; p = ⅓μm·v̄²; E_đ = 3/2·kT; v_rms = √(3RT/M).

**2. Năng lực**
- Vận dụng phương trình trạng thái, Clapeyron giải bài tập nhiều bước.
- Tính động năng tịnh tiến trung bình, tốc độ căn quân phương, mật độ phân tử.
- Giải thích hiện tượng thực tế (lốp xe, nồi áp suất).

**3. Phẩm chất:** tinh thần đồng đội, tự tin trình bày.

### II. Tiến trình (45 phút)

| Thời gian | Hoạt động | Trò chơi trên ứng dụng | Hoạt động của GV | Hoạt động của HS |
|---|---|---|---|---|
| 15′ | **Rung chuông vàng** | 10 câu trắc nghiệm, 20 giây/câu | Bấm giờ, mở đáp án, chấm ✓/★ cho từng đội, giải thích ngắn | Thư kí ghi A/B/C/D lên bảng con; hết giờ giơ đồng loạt |
| 10′ | **Mảnh ghép bí ẩn** | 6 mảnh che hình phân tử khí; từ khóa **BOLTZMANN** | Như tiết 1 | Trả lời câu hỏi ngắn, đoán tên nhà khoa học |
| 15′ | **Tiếp sức tính toán** | 5 bài, 2,5 phút/bài | Quy định: mỗi thành viên chỉ viết **một bước** rồi chuyển bút | Phân công: đổi đơn vị → viết công thức → thay số → kết quả |
| 5′ | **Tổng kết** | *Tổng kết & trao danh hiệu* | Nhận xét, giao bài về nhà | Ghi nhớ, tự đánh giá |

### III. Nội dung trọng tâm cần chốt
- pV/T = hằng số chỉ đúng khi **lượng khí không đổi**.
- Trong pV = nRT dùng đơn vị SI: p (Pa), V (m³), T (K).
- E_đ chỉ phụ thuộc T, không phụ thuộc loại khí; v_rms phụ thuộc cả T và M (đổi M sang kg/mol).

---

## TIẾT 3 — ÔN TẬP CHƯƠNG 2: KHÍ LÍ TƯỞNG
*Trò chơi: `tiet-3.html` — Đại chiến Khí lí tưởng*

### I. Mục tiêu
**1. Kiến thức:** hệ thống hóa toàn chương: mô hình động học phân tử, ba đẳng quá trình, phương trình trạng thái, Clapeyron, áp suất và động năng phân tử.

**2. Năng lực:** tổng hợp kiến thức, giải thích hiện tượng thực tế, tự đánh giá trước kiểm tra.

**3. Phẩm chất:** tinh thần thi đua lành mạnh, tôn trọng bạn bè.

### II. Tiến trình (45 phút)

| Thời gian | Hoạt động | Trò chơi trên ứng dụng | Hoạt động của GV | Hoạt động của HS |
|---|---|---|---|---|
| 12′ | **Ô chữ Khí lí tưởng** | 6 hàng ngang, từ khóa dọc **ÁP SUẤT** | Các đội lần lượt chọn hàng; bấm 🔔 khi có đội xin đoán từ khóa | Trả lời hàng ngang (20 giây); đoán từ khóa sớm được thưởng cao |
| 15′ | **Hộp quà bí mật** | 12 hộp: 8 câu hỏi + 4 sự kiện may mắn (vị trí xáo trộn mỗi lần chơi) | Ứng dụng tự đánh dấu đội **Đến lượt**; đọc câu hỏi, chấm điểm; áp dụng sự kiện | Đội đến lượt chọn hộp và trả lời; sai thì đội khác giành quyền |
| 13′ | **Rung chuông vàng tổng hợp** | 10 câu bao quát chương | Như tiết 2 | Như tiết 2 |
| 5′ | **Vinh danh & tổng kết chương** | *Tổng kết & trao danh hiệu* (bục vinh quang, pháo hoa) | Trao danh hiệu “Nhà vô địch Khí lí tưởng”, chốt sơ đồ tư duy chương | Hoàn thiện sơ đồ tư duy vào vở |

### III. Sơ đồ tư duy chốt chương (GV vẽ lên bảng khi tổng kết)
```
                         KHÍ LÍ TƯỞNG
     ┌──────────────────────┼─────────────────────────┐
 Mô hình động học      Các đẳng quá trình          Động học phân tử
 - chất điểm           - Đẳng nhiệt: pV = const     - p = ⅓ μ m v̄²
 - hỗn loạn            - Đẳng áp:   V/T = const     - E_đ = 3/2 kT
 - va chạm đàn hồi     - Đẳng tích: p/T = const     - v_rms = √(3RT/M)
                       Trạng thái: pV/T = const
                       Clapeyron:  pV = nRT
```

---

## PHỤ LỤC 1 — BÀI TẬP VỀ NHÀ

**Sau tiết 1**
1. Nén đẳng nhiệt 10 lít khí từ áp suất 1 atm đến 4 atm. Tính thể tích khí sau khi nén. *(ĐS: 2,5 lít)*
2. Một lượng khí ở 0 °C có thể tích 5 lít. Đun nóng đẳng áp đến 273 °C. Tính thể tích khí. *(ĐS: 10 lít)*
3. Giải thích vì sao khi bóp mạnh quả bóng bay thì bóng dễ bị vỡ.

**Sau tiết 2**
1. Một bình kín chứa khí ở 27 °C, áp suất 1,5 atm. Nung nóng đến 177 °C. Tính áp suất khí. *(ĐS: 2,25 atm)*
2. Tính khối lượng khí N₂ trong bình 16,62 lít ở 27 °C, áp suất 1,5·10⁵ Pa (M = 28 g/mol). *(ĐS: n ≈ 1 mol; m ≈ 28 g)*
3. Ở nhiệt độ nào thì động năng tịnh tiến trung bình của phân tử khí bằng 1,035·10⁻²⁰ J? *(ĐS: 500 K)*

**Sau tiết 3:** hoàn thiện sơ đồ tư duy chương 2 và làm phần bài tập cuối chương trong sách giáo khoa.

## PHỤ LỤC 2 — PHIẾU TỰ ĐÁNH GIÁ CỦA ĐỘI (cuối mỗi tiết)

| Tiêu chí | Tốt | Đạt | Cần cố gắng |
|---|:-:|:-:|:-:|
| Mọi thành viên đều tham gia | ☐ | ☐ | ☐ |
| Trả lời đúng, có giải thích | ☐ | ☐ | ☐ |
| Trình bày lời giải rõ ràng, đúng đơn vị | ☐ | ☐ | ☐ |
| Giữ trật tự, tôn trọng đội bạn | ☐ | ☐ | ☐ |

**Điều đội em hiểu rõ nhất hôm nay:** ………………………………………
**Điều đội em còn lúng túng:** ………………………………………

## PHỤ LỤC 3 — CHỈNH SỬA CÂU HỎI
Câu hỏi của mỗi tiết nằm ở đầu phần `<script>` trong tệp của tiết đó (`tiet-1.html`, `tiet-2.html`, `tiet-3.html`), trong hai khối `LESSONS` (tiến trình tiết học) và `GAMES` (câu hỏi từng trò). Mở tệp bằng trình soạn thảo văn bản (Notepad, VS Code), sửa câu hỏi, đáp án theo cùng định dạng rồi lưu lại. Ví dụ một câu trắc nghiệm:

```js
{ q: 'Nội dung câu hỏi', opts: ['Phương án A', 'Phương án B', 'Phương án C', 'Phương án D'], a: 2, why: 'Giải thích (a = 2 nghĩa là đáp án C)' }
```
