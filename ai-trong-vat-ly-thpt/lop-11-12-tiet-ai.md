# VẬT LÍ 11 — 12 TIẾT TÍCH HỢP TRÍ TUỆ NHÂN TẠO (AI)
## Đề xuất phân phối và kế hoạch bài dạy

> Chương trình GDPT 2018, dùng được với cả ba bộ sách. Mỗi tiết 45 phút, dạy đúng lúc học bài Vật lí tương ứng; tiến trình theo 4 hoạt động *Mở đầu → Hình thành kiến thức → Luyện tập → Vận dụng*.
>
> Quy tắc an toàn, mẫu “Tuyên bố sử dụng AI”, rubric dự án và phiếu tự đánh giá: xem [`ke-hoach-12-tiet-ai-vat-ly.md`](ke-hoach-12-tiet-ai-vat-ly.md). Những tiết đánh dấu **(★)** đã có kế hoạch chi tiết trong tệp đó; ở đây chỉ tóm tắt.

**Mạch phát triển năng lực AI lớp 11:** dùng AI như gia sư gợi mở → AI phân tích tín hiệu dao động và sóng (âm thanh, địa chấn, hình ảnh) → hiểu phần cứng điện – điện tử làm nên AI (tụ điện nhớ dữ liệu, mạch điện trở tính toán, năng lượng pin).

## BẢNG PHÂN PHỐI

| Tiết | Gắn với bài/chương | Tên tiết | Công cụ | Sản phẩm của HS |
|:-:|---|---|---|---|
| 1 | Mở đầu chương Dao động | AI là gia sư gợi mở, không phải “máy giải bài” | Chatbot (GV điều khiển) | Câu lệnh gia sư gợi mở; so sánh hai cách học |
| 2 ★ | Dao động điều hòa; con lắc đơn | Nhờ AI viết code phân tích dao động – đọc hiểu trước khi tin | phyphox, Colab | Code có chú thích, đồ thị T²–l |
| 3 | Dao động tắt dần | Dự đoán lúc con lắc “dừng”: khớp hàm mũ cho biên độ | phyphox, bảng tính | Đồ thị biên độ – thời gian, hằng số tắt dần |
| 4 | Dao động cưỡng bức, cộng hưởng | AI nghe máy móc “kêu đau”: cộng hưởng và bảo trì dự đoán | phyphox (phổ), Teachable Machine | Mô hình phát hiện rung bất thường |
| 5 | Sóng: mô tả sóng; sóng dọc, sóng ngang | Cảnh báo động đất sớm: sóng P, sóng S và AI | Số liệu địa chấn mẫu | Tính khoảng cách tâm chấn, thời gian cảnh báo |
| 6 ★ | Sóng âm: các đặc trưng của âm | Dạy máy “nghe”: phân loại âm theo độ cao và âm sắc | Teachable Machine (Audio) | Mô hình phân loại âm |
| 7 ★ | Sóng điện từ | Máy tính “nhìn” thế nào? Ánh sáng, cảm biến ảnh, thị giác máy | Teachable Machine (Image) | Báo cáo thiên lệch dữ liệu |
| 8 | Giao thoa sóng | Tai nghe chống ồn: giao thoa triệt tiêu và AI lọc tiếng ồn | 2 loa/điện thoại phát tần số | Vị trí cực đại, cực tiểu; giải thích chống ồn |
| 9 | Điện trường: định luật Coulomb, điện trường | AI vẽ đường sức điện: đúng hay sai? | Chatbot + Colab/PhET Charges and Fields | Bảng kiểm tra đường sức, bài Coulomb |
| 10 | Tụ điện | Mỗi bit nhớ của AI là một tụ điện tí hon | Tụ điện, LED, pin | Bài toán điện tích, năng lượng tụ |
| 11 ★ | Dòng điện – Định luật Ohm | Nơ-ron nhân tạo xây từ định luật Ohm | Mạch điện trở / PhET | Mạch “nơ-ron” AND, OR |
| 12 | Năng lượng điện, công suất điện – Tổng kết | AI trên điện thoại hao pin thế nào? + Báo cáo dự án | Số liệu pin điện thoại | Bài toán điện năng; bài trình bày dự án |

**Dự án xuyên suốt** (giao ở tiết 1, báo cáo ở tiết 12): *“Tín hiệu và AI”* — mỗi nhóm chọn một loại tín hiệu (âm thanh, rung động, ánh sáng, sóng vô tuyến, địa chấn) và một ứng dụng AI xử lí tín hiệu đó (trợ lí giọng nói, cảnh báo động đất, camera, radar…), giải thích bằng kiến thức dao động – sóng – điện.

---

## TIẾT 1 — AI LÀ GIA SƯ GỢI MỞ, KHÔNG PHẢI “MÁY GIẢI BÀI”
*Mở đầu chương Dao động (khái niệm dao động, dao động tuần hoàn)*

### I. Mục tiêu
- **Kiến thức:** nhận biết dao động cơ, dao động tuần hoàn; chu kì, tần số qua ví dụ đời sống.
- **Năng lực số / AI:** viết câu lệnh biến chatbot thành **gia sư gợi mở** (hỏi dẫn dắt, không cho đáp án ngay); so sánh hiệu quả học khi “AI giải hộ” và khi “AI gợi mở”.
- **Năng lực chung:** tự học, tự đánh giá.
- **Phẩm chất:** trung thực, có trách nhiệm với việc học của bản thân.

### II. Thiết bị
- Máy chiếu, chatbot (GV điều khiển); 2 bài tập tương đương về chu kì, tần số; Phiếu học tập 1.

### III. Tiến trình dạy học

| Hoạt động | Mục tiêu – Nội dung | Tổ chức thực hiện | Sản phẩm |
|---|---|---|---|
| **1. Mở đầu** (5′) | Khơi gợi | Hỏi nhanh: *“Hè vừa rồi ai từng chép lời giải AI? Sau đó em có tự làm được bài tương tự không?”* Nhắc lại bộ quy tắc dùng AI của lớp 10. | Chia sẻ của HS |
| **2. Hình thành kiến thức** (12′) | Dao động qua ví dụ | GV chiếu ví dụ: con lắc đồng hồ, dây đàn, tim đập. HS nêu đặc điểm chung → khái niệm dao động, dao động tuần hoàn, chu kì T, tần số f = 1/T. | Ghi chép khái niệm |
| **3. Luyện tập** (18′) | **Thí nghiệm “hai cách học”** | Chia lớp 2 nửa. **Nửa A:** GV hỏi AI “Giải bài 1” → AI cho lời giải đầy đủ, HS đọc. **Nửa B:** GV dùng câu lệnh gia sư gợi mở (mục IV), HS trả lời từng câu hỏi của AI cho đến khi tự giải được. Sau đó cả lớp **tự làm bài 2** (tương đương, không có AI) trong 4 phút → so sánh tỉ lệ làm đúng giữa hai nửa. | Kết quả bài 2 của hai nửa lớp |
| **4. Vận dụng** (10′) | Câu lệnh của em | Mỗi HS viết một câu lệnh gia sư gợi mở cho một chủ đề tự chọn của Vật lí 11, ghi vào vở để dùng khi tự học. GV giao dự án xuyên suốt “Tín hiệu và AI”. | Câu lệnh cá nhân; phiếu đăng kí dự án |

### IV. Học liệu kèm theo
**Câu lệnh gia sư gợi mở:**
> Em là gia sư Vật lí lớp 11. Tôi cần giải bài sau nhưng **đừng cho tôi đáp án hay lời giải**. Hãy hỏi tôi từng câu một để tôi tự tìm ra cách giải; nếu tôi trả lời sai, hãy gợi ý thêm chứ không sửa hộ. Khi tôi giải xong, hãy kiểm tra và hỏi tôi một câu tương tự để luyện thêm. Bài: …

**Bài 1:** Một con lắc thực hiện 30 dao động trong 1 phút. Tính chu kì và tần số. *(ĐS: T = 2 s; f = 0,5 Hz)*
**Bài 2:** Tim một người đập 72 lần mỗi phút. Tính chu kì và tần số nhịp tim. *(ĐS: T ≈ 0,83 s; f = 1,2 Hz)*

**Kết luận cần chốt:** đọc lời giải thấy “dễ hiểu” chưa phải là đã biết làm. AI giúp em học tốt nhất khi **em phải tự suy nghĩ**.

---

## TIẾT 2 ★ — NHỜ AI VIẾT CODE PHÂN TÍCH DAO ĐỘNG – ĐỌC HIỂU TRƯỚC KHI TIN
*Kế hoạch chi tiết: Tiết 6 trong `ke-hoach-12-tiet-ai-vat-ly.md`.*
Tóm tắt: đo chu kì con lắc bằng phyphox → đọc hiểu đoạn mã Python do AI sinh, tìm 2 lỗi cài sẵn (g = 98; dùng độ thay rad) → cả lớp ghép dữ liệu, vẽ T² theo l để suy ra g.

---

## TIẾT 3 — DỰ ĐOÁN LÚC CON LẮC “DỪNG”: KHỚP HÀM MŨ CHO BIÊN ĐỘ
*Gắn với bài Dao động tắt dần*

### I. Mục tiêu
- **Kiến thức:** dao động tắt dần có biên độ giảm dần do lực cản; năng lượng dao động chuyển hóa thành nhiệt; ứng dụng giảm xóc.
- **Năng lực vật lí:** đo biên độ theo thời gian, nhận ra biên độ giảm theo quy luật hàm mũ (giảm cùng một tỉ lệ sau những khoảng thời gian bằng nhau).
- **Năng lực số / AI:** khớp mô hình hàm mũ bằng bảng tính; dùng mô hình để dự đoán; biết so sánh nhiều mô hình (tuyến tính và hàm mũ) để chọn mô hình phù hợp.
- **Phẩm chất:** cẩn thận, trung thực với số liệu.

### II. Thiết bị
- Con lắc lò xo hoặc con lắc đơn có gắn tấm bìa cản không khí; điện thoại phyphox (hoặc thước + quay video). Máy tính có bảng tính; Phiếu học tập 3.

### III. Tiến trình dạy học

| Hoạt động | Mục tiêu – Nội dung | Tổ chức thực hiện | Sản phẩm |
|---|---|---|---|
| **1. Mở đầu** (5′) | Khơi gợi | Lắc nhẹ một chiếc xe đồ chơi có lò xo giảm xóc và một lò xo trần: *“Vì sao ô tô qua ổ gà không nảy lên nảy xuống mãi?”* | — |
| **2. Hình thành kiến thức** (12′) | Dao động tắt dần | Nhóm cho con lắc dao động, ghi biên độ sau mỗi 5 s (hoặc phyphox). GV hướng dẫn: tính tỉ số hai biên độ liên tiếp → gần như **không đổi** → đặc trưng của hàm mũ A = A₀·e^(−t/τ). Giải thích: năng lượng mất dần do ma sát, lực cản. | Bảng biên độ – thời gian |
| **3. Luyện tập** (18′) | “Thi đấu mô hình” | Nhập dữ liệu vào bảng tính, thêm **2 đường xu hướng**: tuyến tính và hàm mũ; so sánh R² và hình dạng. Dùng mô hình hàm mũ dự đoán: (1) biên độ sau 60 s; (2) thời điểm biên độ < 1 cm. Mô hình tuyến tính dự đoán gì? (biên độ âm → vô lí). | Phiếu 3 |
| **4. Vận dụng** (10′) | Giảm xóc và tòa nhà | Thảo luận: giảm xóc xe máy, bộ giảm chấn trong tòa nhà cao tầng chống gió và động đất. Liên hệ AI: hệ thống treo thông minh của một số ô tô dùng cảm biến và thuật toán để điều chỉnh độ cứng giảm xóc theo mặt đường. | Câu trả lời thảo luận |

### IV. Học liệu kèm theo
**Số liệu mẫu**

| t (s) | 0 | 5 | 10 | 15 | 20 |
|---|---|---|---|---|---|
| A (cm) | 10,0 | 8,2 | 6,7 | 5,5 | 4,5 |

*Đáp án:* tỉ số A_(n+1)/A_n ≈ 0,82; τ = 5 / ln(1/0,82) ≈ 25 s. Mô hình A ≈ 10·e^(−t/25). Sau 60 s: A ≈ 0,9 cm. Biên độ < 1 cm khi t > 25·ln10 ≈ 58 s. Mô hình tuyến tính (giảm ≈ 0,28 cm/s) dự đoán biên độ bằng 0 lúc t ≈ 36 s và **âm** sau đó → không phù hợp.

**Bài học về AI:** cùng một bộ dữ liệu có thể khớp nhiều mô hình; chọn mô hình dựa vào **hiểu biết vật lí** và kiểm tra dự đoán có hợp lí không.

---

## TIẾT 4 — AI NGHE MÁY MÓC “KÊU ĐAU”: CỘNG HƯỞNG VÀ BẢO TRÌ DỰ ĐOÁN
*Gắn với bài Dao động cưỡng bức; Hiện tượng cộng hưởng*

### I. Mục tiêu
- **Kiến thức:** dao động cưỡng bức có tần số bằng tần số lực cưỡng bức; cộng hưởng xảy ra khi tần số lực cưỡng bức bằng tần số riêng, biên độ cực đại; tác hại và ứng dụng.
- **Năng lực vật lí:** quan sát cộng hưởng bằng con lắc Barton (hoặc mô phỏng); đọc phổ tần số rung động.
- **Năng lực số / AI:** hiểu **bảo trì dự đoán**: AI học “âm thanh/rung động bình thường” của máy và cảnh báo khi xuất hiện bất thường; huấn luyện mô hình phân biệt trạng thái máy.
- **Phẩm chất:** ý thức an toàn lao động, bảo vệ thiết bị.

### II. Thiết bị
- Con lắc Barton (nhiều con lắc dài khác nhau treo chung một dây) hoặc mô phỏng cộng hưởng.
- Quạt điện có nhiều tốc độ; điện thoại phyphox (*Phổ âm thanh* hoặc *Gia tốc kế – phổ*); máy tính có Teachable Machine (Audio). Phiếu học tập 4.

### III. Tiến trình dạy học

| Hoạt động | Mục tiêu – Nội dung | Tổ chức thực hiện | Sản phẩm |
|---|---|---|---|
| **1. Mở đầu** (5′) | Khơi gợi | Chiếu ảnh/clip sập cầu Tacoma (1940). *“Vì sao gió không quá mạnh mà cây cầu lại dao động dữ dội?”* | — |
| **2. Hình thành kiến thức** (12′) | Cộng hưởng | Thí nghiệm con lắc Barton: con lắc dẫn dao động → con lắc có cùng chiều dài dao động mạnh nhất. Chốt điều kiện cộng hưởng f = f₀. Liên hệ: máy quay với tần số đúng bằng tần số riêng của khung máy → rung mạnh, hỏng hóc. | Ghi chép điều kiện cộng hưởng |
| **3. Luyện tập** (18′) | Nghe máy bằng AI | (1) Đặt điện thoại cạnh quạt, xem phổ âm ở từng tốc độ → nhận ra đỉnh tần số thay đổi. (2) Teachable Machine: lớp **Nền**, **Quạt số 1**, **Quạt số 3** (mỗi lớp ≥ 10 mẫu) → Train → kiểm thử. (3) GV đặt câu hỏi: nếu chỉ có dữ liệu “quạt bình thường”, làm sao AI phát hiện “bất thường”? → Ý tưởng **phát hiện dị thường**: âm thanh khác xa mọi mẫu bình thường đã học. | Mô hình chạy được; Phiếu 4 |
| **4. Vận dụng** (10′) | Ứng dụng | Bài toán (mục IV). Thảo luận: ứng dụng ở nhà máy, động cơ máy bay, tua-bin gió, cầu lớn (cảm biến rung gắn trên cầu). Lợi ích: sửa trước khi hỏng, tiết kiệm, an toàn. | Lời giải bài toán |

### IV. Học liệu kèm theo
**Bài toán:**
1. Động cơ quay 1200 vòng/phút. Tính tần số lực cưỡng bức do động cơ tạo ra khi cánh quạt bị lệch tâm. *(ĐS: f = 20 Hz)*
2. Khung đỡ động cơ có tần số riêng 25 Hz. Khi khởi động, tốc độ quay tăng dần từ 0 đến 1200 vòng/phút. Khung có bị cộng hưởng không? Nếu tăng lên 1800 vòng/phút thì sao? *(ĐS: 1200 vòng/phút → 20 Hz, chưa cộng hưởng; khi tăng lên 1800 vòng/phút = 30 Hz, tốc độ quay **đi qua** 1500 vòng/phút = 25 Hz → cộng hưởng tạm thời, cần cho đi qua nhanh hoặc thêm giảm chấn)*

**Phiếu học tập 4**

| Trạng thái quạt | Đỉnh tần số chính trên phổ (Hz) | Mô hình dự đoán | Độ tin cậy (%) |
|---|---|---|---|
| Tắt (nền) | | | |
| Số 1 | | | |
| Số 3 | | | |

---

## TIẾT 5 — CẢNH BÁO ĐỘNG ĐẤT SỚM: SÓNG P, SÓNG S VÀ AI
*Gắn với bài Mô tả sóng; Sóng dọc và sóng ngang*

### I. Mục tiêu
- **Kiến thức:** phân biệt sóng dọc và sóng ngang; tốc độ truyền sóng v = s/t; sóng địa chấn P (dọc, nhanh) và S (ngang, chậm, gây hại nhiều hơn).
- **Năng lực vật lí:** tính khoảng cách tâm chấn từ hiệu thời gian đến của sóng P và S; tính thời gian cảnh báo.
- **Năng lực số / AI:** hiểu hệ thống cảnh báo sớm: cảm biến phát hiện sóng P → AI phân biệt động đất với rung do xe cộ → gửi cảnh báo trước khi sóng S đến; hiểu sự đánh đổi giữa **tốc độ cảnh báo** và **độ chính xác**.
- **Phẩm chất:** ý thức phòng tránh thiên tai.

### II. Thiết bị
- Lò xo mềm dài (slinky) để minh họa sóng dọc, sóng ngang; ảnh địa chấn đồ mẫu; Phiếu học tập 5; máy tính cầm tay.

### III. Tiến trình dạy học

| Hoạt động | Mục tiêu – Nội dung | Tổ chức thực hiện | Sản phẩm |
|---|---|---|---|
| **1. Mở đầu** (5′) | Khơi gợi | Kể: ở một số nước, điện thoại có thể báo “Động đất! Còn 10 giây” trước khi đất rung mạnh. *“Làm sao biết trước được?”* | — |
| **2. Hình thành kiến thức** (12′) | Sóng dọc – sóng ngang | Dùng slinky: đẩy kéo dọc trục (sóng dọc), lắc ngang (sóng ngang). GV giới thiệu sóng P (dọc, ≈ 6 km/s trong vỏ Trái Đất) và sóng S (ngang, ≈ 3,5 km/s). Cùng xuất phát từ tâm chấn → P đến trước, S đến sau và gây rung lắc mạnh. | Bảng so sánh P – S |
| **3. Luyện tập** (18′) | Tính toán cảnh báo | Nhóm đọc địa chấn đồ mẫu, xác định hiệu thời gian Δt giữa P và S → tính khoảng cách d. Tính thời gian cảnh báo cho thành phố cách tâm chấn 100 km (Phiếu 5). | Phiếu 5 |
| **4. Vận dụng** (10′) | AI trong cảnh báo | Thảo luận: cảm biến cũng rung khi xe tải đi qua, khi có người nhảy → nếu cảnh báo nhầm nhiều, người dân sẽ không tin nữa; nếu chờ chắc chắn mới cảnh báo thì hết thời gian. AI học từ hàng nghìn địa chấn đồ để nhận ra dạng sóng P **chỉ trong vài giây đầu**. HS nêu việc cần làm trong 10 giây khi nhận cảnh báo. | Kết luận nhóm |

### IV. Học liệu kèm theo
**Phiếu học tập 5** (v_P = 6 km/s; v_S = 3,5 km/s)
1. Trạm đo thấy sóng S đến sau sóng P 10 s. Tính khoảng cách từ trạm đến tâm chấn.
   *ĐS: Δt = d/v_S − d/v_P → d = Δt / (1/3,5 − 1/6) ≈ 10 / 0,119 ≈ 84 km.*
2. Một trạm đặt gần tâm chấn phát hiện sóng P ngay khi động đất xảy ra; hệ thống AI cần 4 s để xác nhận và gửi cảnh báo. Thành phố cách tâm chấn 100 km có bao nhiêu giây chuẩn bị trước khi sóng S đến?
   *ĐS: sóng S đến sau 100/3,5 ≈ 28,6 s; cảnh báo đến lúc 4 s → còn khoảng 24,6 s.*
3. Thành phố cách tâm chấn 10 km có được cảnh báo kịp không? *(ĐS: sóng S đến sau ≈ 2,9 s < 4 s → không kịp; vùng gần tâm chấn là “vùng mù” của cảnh báo sớm)*

---

## TIẾT 6 ★ — DẠY MÁY “NGHE”: PHÂN LOẠI ÂM THEO ĐỘ CAO VÀ ÂM SẮC
*Kế hoạch chi tiết: Tiết 7 trong `ke-hoach-12-tiet-ai-vat-ly.md`.*
Tóm tắt: âm 440 Hz – 880 Hz (độ cao), cùng nốt trên sáo và đàn (âm sắc, họa âm) → Teachable Machine biến âm thành ảnh phổ và học phân loại → thử “đánh lừa” mô hình.

## TIẾT 7 ★ — MÁY TÍNH “NHÌN” THẾ NÀO? ÁNH SÁNG, CẢM BIẾN ẢNH VÀ THỊ GIÁC MÁY
*Kế hoạch chi tiết: Tiết 8 trong `ke-hoach-12-tiet-ai-vat-ly.md`.*
Tóm tắt: nhìn tia hồng ngoại của điều khiển TV qua camera → thang sóng điện từ, ảnh số RGB → huấn luyện mô hình nhận dạng ảnh rồi đổi ánh sáng để thấy **thiên lệch dữ liệu**.

---

## TIẾT 8 — TAI NGHE CHỐNG ỒN: GIAO THOA TRIỆT TIÊU VÀ AI LỌC TIẾNG ỒN
*Gắn với bài Giao thoa sóng*

### I. Mục tiêu
- **Kiến thức:** điều kiện giao thoa (hai nguồn kết hợp); tại điểm hai sóng cùng pha – biên độ cực đại, ngược pha – cực tiểu; khoảng cách giữa hai cực tiểu liền kề trên đường nối hai nguồn bằng λ/2.
- **Năng lực vật lí:** quan sát giao thoa sóng âm bằng hai loa; ước lượng bước sóng.
- **Năng lực số / AI:** giải thích chống ồn chủ động (tạo sóng ngược pha); phân biệt chống ồn chủ động với **AI lọc tiếng ồn** trong cuộc gọi (AI học để tách giọng nói khỏi tiếng ồn).
- **Phẩm chất:** bảo vệ thính giác (không nghe quá to, quá lâu).

### II. Thiết bị
- 2 loa nhỏ nối cùng một nguồn phát (máy tính/điện thoại phát âm 1000 Hz qua bộ chia), hoặc mô phỏng PhET *Wave Interference*; thước dây; Phiếu học tập 8.
- **Lưu ý:** để âm lượng vừa phải; HS dùng một tai bịt tai kia để nghe rõ cực đại, cực tiểu.

### III. Tiến trình dạy học

| Hoạt động | Mục tiêu – Nội dung | Tổ chức thực hiện | Sản phẩm |
|---|---|---|---|
| **1. Mở đầu** (5′) | Khơi gợi | *“Tai nghe chống ồn làm tiếng ồn biến mất bằng cách… phát thêm âm thanh. Vô lí không?”* | Dự đoán của HS |
| **2. Hình thành kiến thức** (12′) | Giao thoa sóng âm | Đặt 2 loa cách nhau 1 m, phát 1000 Hz. HS đi chậm dọc đoạn nối hai loa (hoặc song song phía trước) → nghe chỗ to, chỗ nhỏ xen kẽ. Đánh dấu các vị trí âm nhỏ nhất, đo khoảng cách. GV chốt điều kiện cực đại, cực tiểu; triệt tiêu khi hai sóng **ngược pha**. | Vị trí cực tiểu, ước lượng λ |
| **3. Luyện tập** (16′) | Chống ồn chủ động | GV giải thích sơ đồ tai nghe: micro thu tiếng ồn → mạch xử lí tạo sóng **ngược pha** → loa phát → giao thoa triệt tiêu tại tai. Nhóm giải bài tập (mục IV), giải thích vì sao chống ồn chủ động hiệu quả với âm trầm (tiếng động cơ) hơn âm cao (tiếng nói chuyện). | Phiếu 8 |
| **4. Vận dụng** (12′) | AI lọc tiếng ồn | GV trình diễn: gọi điện/ghi âm có bật và tắt chức năng lọc tiếng ồn bằng AI (nếu có ứng dụng). Giải thích: AI **không tạo sóng ngược pha** mà học từ hàng nghìn giờ âm thanh để nhận ra đâu là giọng người, rồi giữ giọng – bỏ phần còn lại. Thảo luận: AI có thể vô tình làm méo giọng nói hoặc bỏ mất tiếng còi cảnh báo → khi đi đường không nên dùng chống ồn. | Bảng so sánh hai công nghệ |

### IV. Học liệu kèm theo
**Phiếu học tập 8** (tốc độ âm trong không khí v = 340 m/s)
1. Hai loa phát âm 1000 Hz cùng pha. Tính bước sóng; khoảng cách giữa hai vị trí âm nhỏ nhất liền kề trên đoạn nối hai loa. *(ĐS: λ = 0,34 m; λ/2 = 0,17 m)*
2. Tai nghe chống ồn cần phát sóng ngược pha với tiếng ồn tại màng nhĩ. Nếu sóng ngược pha bị lệch vị trí 1 cm, hãy tính độ lệch này bằng bao nhiêu phần bước sóng với âm 100 Hz và âm 3000 Hz. Âm nào bị khử tốt hơn? *(ĐS: λ₁₀₀ = 3,4 m → 1 cm ≈ 0,3% λ; λ₃₀₀₀ ≈ 11,3 cm → 1 cm ≈ 9% λ. Âm trầm 100 Hz bị khử tốt hơn)*

---

## TIẾT 9 — AI VẼ ĐƯỜNG SỨC ĐIỆN: ĐÚNG HAY SAI?
*Gắn với bài Định luật Coulomb; Điện trường*

### I. Mục tiêu
- **Kiến thức:** F = k|q₁q₂|/r²; cường độ điện trường E = F/q; tính chất đường sức điện (đi ra từ điện tích dương, đi vào điện tích âm, không cắt nhau, nơi dày điện trường mạnh).
- **Năng lực vật lí:** tổng hợp lực, tổng hợp điện trường bằng vectơ; đánh giá hình vẽ đường sức.
- **Năng lực số / AI:** dùng chatbot sinh mã hoặc hình minh họa đường sức; **kiểm tra hình ảnh do AI tạo ra** theo tiêu chí vật lí; phát hiện lỗi trong lời giải bài toán vectơ của AI.
- **Phẩm chất:** cẩn thận, phản biện.

### II. Thiết bị
- Mô phỏng PhET *Charges and Fields*; GV chuẩn bị trước 3 hình đường sức (1 đúng, 2 sai) – có thể dùng hình do AI vẽ; Phiếu học tập 9.

### III. Tiến trình dạy học

| Hoạt động | Mục tiêu – Nội dung | Tổ chức thực hiện | Sản phẩm |
|---|---|---|---|
| **1. Mở đầu** (5′) | Khơi gợi | Chiếu một hình “đường sức điện của hai điện tích dương” do AI tạo, rất đẹp nhưng có đường sức cắt nhau. *“Hình này có đúng không?”* | — |
| **2. Hình thành kiến thức** (12′) | Ôn Coulomb, điện trường | Ôn công thức, cách tổng hợp vectơ. Dùng PhET đặt 1, rồi 2 điện tích, quan sát vectơ điện trường. Lập **bảng kiểm tra 4 tiêu chí** của đường sức. | Bảng kiểm tra |
| **3. Luyện tập** (18′) | Kiểm định hình và lời giải AI | (1) Nhóm chấm 3 hình đường sức theo bảng kiểm tra. (2) Giải bài toán (mục IV) và tìm lỗi trong lời giải AI có lỗi cài sẵn. | Phiếu 9 |
| **4. Vận dụng** (10′) | Câu lệnh tốt hơn | Nhóm viết câu lệnh yêu cầu AI vẽ lại đường sức của một lưỡng cực điện (+q và −q), nêu rõ 4 tiêu chí. GV chạy thử 1 câu lệnh, cả lớp đánh giá. Liên hệ: máy in laser, lọc bụi tĩnh điện, màn hình cảm ứng. | Câu lệnh của nhóm |

### IV. Học liệu kèm theo
**Bài toán:** Hai điện tích q₁ = q₂ = +2 µC đặt tại A, B cách nhau 30 cm trong không khí (k = 9·10⁹ N·m²/C²).
a) Tính lực tương tác giữa q₁ và q₂. *(ĐS: F = 9·10⁹·(2·10⁻⁶)²/0,3² = 0,4 N, lực đẩy)*
b) Tính cường độ điện trường tổng hợp tại trung điểm M của AB. *(ĐS: hai vectơ cùng độ lớn, ngược chiều → E_M = 0)*

**Lời giải AI có lỗi cài sẵn (câu b):**
> “E₁ = E₂ = k·q/r² = 9·10⁹·2·10⁻⁶/0,15² = 8·10⁵ V/m. Vậy E_M = E₁ + E₂ = 1,6·10⁶ V/m.”
>
> *Lỗi:* cộng độ lớn mà không xét hướng; hai vectơ ngược chiều nên E_M = 0. (Giá trị E₁ = E₂ = 8·10⁵ V/m là đúng.)

---

## TIẾT 10 — MỖI BIT NHỚ CỦA AI LÀ MỘT TỤ ĐIỆN TÍ HON
*Gắn với bài Tụ điện (điện dung, năng lượng tụ điện)*

### I. Mục tiêu
- **Kiến thức:** C = Q/U; năng lượng tụ điện W = ½CU² = ½QU; tụ điện tích và phóng điện.
- **Năng lực vật lí:** quan sát nạp – xả tụ điện; tính điện tích, năng lượng; ước lượng số electron.
- **Năng lực số / AI:** hiểu bộ nhớ máy tính (DRAM) lưu mỗi bit bằng một tụ điện rất nhỏ (có điện tích ↔ bit 1); mô hình AI cần bộ nhớ rất lớn; màn hình cảm ứng điện dung nhận biết ngón tay.
- **Phẩm chất:** an toàn điện (tụ đã nạp có thể gây giật/nổ nếu dùng sai).

### II. Thiết bị
- Mỗi nhóm: tụ hóa 1000 µF (điện áp định mức ≥ 10 V, **đúng cực**), pin 4,5 V hoặc nguồn 5 V, đèn LED + điện trở 220 Ω, dây nối, công tắc. Phiếu học tập 10.

### III. Tiến trình dạy học

| Hoạt động | Mục tiêu – Nội dung | Tổ chức thực hiện | Sản phẩm |
|---|---|---|---|
| **1. Mở đầu** (5′) | Khơi gợi | *“Một mô hình AI có hàng tỉ tham số. Khi chạy, các con số ấy nằm ở đâu trong máy tính?”* → Trong bộ nhớ, mà mỗi ô nhớ là một tụ điện. | — |
| **2. Hình thành kiến thức** (12′) | Nạp – xả tụ | Nhóm nạp tụ bằng pin vài giây → tháo pin → nối tụ với LED: LED sáng rồi tắt dần (tụ phóng điện). Ôn C = Q/U, W = ½CU². GV liên hệ: ô nhớ DRAM — tụ có điện tích ↔ “1”, không có ↔ “0”; điện tích **rò dần** như LED tắt dần → máy tính phải “làm tươi” bộ nhớ khoảng vài chục mili giây một lần. | Quan sát LED; công thức |
| **3. Luyện tập** (18′) | Bài toán từ tụ to đến tụ tí hon | Giải Phiếu 10. | Phiếu 10 |
| **4. Vận dụng** (10′) | Màn hình cảm ứng | GV giải thích màn hình cảm ứng điện dung: lưới điện cực tạo các tụ điện; ngón tay (dẫn điện) làm thay đổi điện dung tại chỗ chạm → bộ xử lí xác định vị trí. HS thử chạm màn hình bằng bút chì gỗ, găng tay, ngón tay → giải thích. Mở rộng: điện thoại dùng thuật toán (có AI) để phân biệt chạm cố ý với lòng bàn tay vô tình chạm. | Giải thích hiện tượng |

### IV. Học liệu kèm theo
**Phiếu học tập 10**
1. Tụ 1000 µF nạp đến 4,5 V. Tính điện tích và năng lượng của tụ. *(ĐS: Q = 4,5·10⁻³ C; W = ½·10⁻³·4,5² ≈ 1,0·10⁻² J)*
2. Một ô nhớ DRAM có điện dung khoảng 20 fF (1 fF = 10⁻¹⁵ F), nạp đến 1 V. Tính điện tích và số electron tương ứng (e = 1,6·10⁻¹⁹ C). *(ĐS: Q = 2·10⁻¹⁴ C; N = Q/e ≈ 1,25·10⁵ electron)*
3. Một mô hình AI có 7 tỉ tham số, mỗi tham số lưu bằng 16 bit. Cần bao nhiêu ô nhớ (tụ điện) để chứa mô hình? Đổi ra gigabyte (1 byte = 8 bit; 1 GB = 10⁹ byte). *(ĐS: 1,12·10¹¹ ô nhớ; 14 GB)*

---

## TIẾT 11 ★ — NƠ-RON NHÂN TẠO XÂY TỪ ĐỊNH LUẬT OHM
*Kế hoạch chi tiết: Tiết 9 trong `ke-hoach-12-tiet-ai-vat-ly.md`.*
Tóm tắt: mô hình nơ-ron (tổng có trọng số + ngưỡng) → mạch hai nguồn qua điện trở vào một nút: I = G₁U₁ + G₂U₂ (trọng số = độ dẫn điện) → lập bảng AND, OR → thử thách XOR dẫn đến mạng nhiều lớp.

---

## TIẾT 12 — AI TRÊN ĐIỆN THOẠI HAO PIN THẾ NÀO? + BÁO CÁO DỰ ÁN
*Gắn với bài Năng lượng điện, công suất điện; tổng kết chủ đề lớp 11*

### I. Mục tiêu
- **Kiến thức:** điện năng A = UIt; công suất P = UI; dung lượng pin (mAh) và năng lượng pin (Wh).
- **Năng lực vật lí:** tính năng lượng pin, thời gian sử dụng; so sánh công suất tiêu thụ.
- **Năng lực số / AI:** phân biệt AI chạy **trên thiết bị** và AI chạy **trên máy chủ**; đánh giá ưu – nhược điểm (pin, tốc độ, quyền riêng tư); trình bày dự án có tuyên bố sử dụng AI.
- **Phẩm chất:** tiết kiệm năng lượng, trung thực.

### II. Thiết bị
- Thông số pin của vài mẫu điện thoại (GV chuẩn bị); sản phẩm dự án các nhóm; phiếu đánh giá chéo theo rubric (Phụ lục 1 tệp chung).

### III. Tiến trình dạy học

| Hoạt động | Mục tiêu – Nội dung | Tổ chức thực hiện | Sản phẩm |
|---|---|---|---|
| **1. Mở đầu** (3′) | Khơi gợi | *“Dùng tính năng AI (dịch giọng nói, chỉnh ảnh) điện thoại nóng lên và tụt pin nhanh. Vì sao?”* | — |
| **2. Hình thành kiến thức** (8′) | Năng lượng pin | Ôn A = UIt, P = UI. Đổi mAh → Wh: E = U·Q (Q tính bằng Ah). Chip xử lí AI tính toán nhiều → công suất lớn → điện năng chuyển thành nhiệt (máy nóng). | Công thức |
| **3. Luyện tập** (9′) | Bài toán | Giải bài tập (mục IV); so sánh AI trên thiết bị và AI trên máy chủ. | Lời giải |
| **4. Vận dụng – Báo cáo dự án “Tín hiệu và AI”** (25′) | Tổng kết | 5–6 nhóm trình bày, mỗi nhóm 3 phút + 1 phút hỏi đáp; chấm chéo theo rubric. GV tổng kết chủ đề lớp 11: *Dao động – Sóng – Điện* đều là nền tảng của cảm biến và phần cứng AI. HS điền phiếu tự đánh giá năng lực sử dụng AI. | Bài trình bày, phiếu chấm |

### IV. Học liệu kèm theo
**Bài tập**
1. Pin điện thoại 5000 mAh, điện áp 3,85 V. Tính năng lượng pin theo Wh và theo J. *(ĐS: 19,25 Wh ≈ 6,9·10⁴ J)*
2. Khi dùng bình thường điện thoại tiêu thụ trung bình 1,5 W; khi chạy liên tục một tính năng AI trên thiết bị, công suất tăng thêm 3 W. Tính thời gian dùng hết pin trong hai trường hợp. *(ĐS: ≈ 12,8 h và ≈ 4,3 h)*
3. Nêu một lợi ích về **quyền riêng tư** khi AI chạy trên thiết bị thay vì gửi dữ liệu lên máy chủ, và một lợi ích khi chạy trên máy chủ. *(Gợi ý: dữ liệu không rời khỏi máy; máy chủ mạnh hơn, không tốn pin điện thoại)*
