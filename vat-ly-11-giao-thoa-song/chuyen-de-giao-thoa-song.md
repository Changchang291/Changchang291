# CHUYÊN ĐỀ: GIAO THOA SÓNG – VẬT LÍ 11
*(Chương II: Sóng – Chương trình GDPT 2018)*

**Yêu cầu cần đạt:**
- Thực hiện (hoặc mô tả) được thí nghiệm chứng minh sự giao thoa hai sóng kết hợp (sóng nước, ánh sáng).
- Phân tích được kết quả thí nghiệm, nêu được điều kiện để quan sát được hệ vân giao thoa.
- Vận dụng được biểu thức $i = \dfrac{\lambda D}{a}$ cho giao thoa ánh sáng qua hai khe hẹp.
- Vận dụng các điều kiện cực đại, cực tiểu để giải bài toán giao thoa sóng mặt nước.

---

## PHẦN A. KIẾN THỨC TRỌNG TÂM

### I. Hiện tượng giao thoa – Điều kiện giao thoa
- **Giao thoa sóng:** là hiện tượng hai sóng **kết hợp** gặp nhau, tạo nên những điểm cố định có dao động **tăng cường** (cực đại) và những điểm cố định có dao động **triệt tiêu/yếu** (cực tiểu), xen kẽ nhau thành một hệ vân ổn định.
- **Nguồn kết hợp:** hai nguồn dao động **cùng phương, cùng tần số** và có **hiệu số pha không đổi theo thời gian**. Sóng do chúng phát ra gọi là sóng kết hợp.
- Giao thoa là hiện tượng **đặc trưng của sóng**: quá trình nào gây ra được giao thoa thì quá trình đó có bản chất sóng.

### II. Giao thoa sóng trên mặt nước (hai nguồn $S_1, S_2$)
Gọi $d_1 = MS_1$, $d_2 = MS_2$, $\Delta d = d_2 - d_1$ (hiệu đường đi), $\lambda = \dfrac{v}{f} = vT$.

**1. Hai nguồn cùng pha** ($u_1 = u_2 = A\cos\omega t$)

Phương trình sóng tổng hợp tại M:
$$u_M = 2A\cos\left(\frac{\pi(d_2-d_1)}{\lambda}\right)\cos\left(\omega t - \frac{\pi(d_1+d_2)}{\lambda}\right)$$
Biên độ tại M: $A_M = 2A\left|\cos\dfrac{\pi\,\Delta d}{\lambda}\right|$

| | Điều kiện | Biên độ |
|---|---|---|
| **Cực đại** | $d_2 - d_1 = k\lambda$ ($k = 0, \pm1, \pm2,\dots$) | $A_{max} = 2A$ |
| **Cực tiểu** | $d_2 - d_1 = \left(k + \tfrac12\right)\lambda$ | $A_{min} = 0$ |

- Đường trung trực của $S_1S_2$ ($k = 0$) là **vân cực đại trung tâm**.
- Các vân cực đại, cực tiểu là họ **đường hypebol** nhận $S_1, S_2$ làm tiêu điểm.
- Trên đoạn $S_1S_2$: khoảng cách giữa **hai cực đại (hoặc hai cực tiểu) liên tiếp là $\dfrac{\lambda}{2}$**; giữa một cực đại và cực tiểu liền kề là $\dfrac{\lambda}{4}$.

**2. Hai nguồn ngược pha** – đổi vai trò:
- Cực đại: $d_2 - d_1 = \left(k+\tfrac12\right)\lambda$; Cực tiểu: $d_2 - d_1 = k\lambda$.
- Đường trung trực của $S_1S_2$ là **vân cực tiểu**.

**3. Đếm số cực đại, cực tiểu trên đoạn $S_1S_2$ (không tính hai nguồn)**

| | Cùng pha | Ngược pha |
|---|---|---|
| Số cực đại | $-\dfrac{S_1S_2}{\lambda} < k < \dfrac{S_1S_2}{\lambda}$ | $-\dfrac{S_1S_2}{\lambda} - \dfrac12 < k < \dfrac{S_1S_2}{\lambda} - \dfrac12$ |
| Số cực tiểu | $-\dfrac{S_1S_2}{\lambda} - \dfrac12 < k < \dfrac{S_1S_2}{\lambda} - \dfrac12$ | $-\dfrac{S_1S_2}{\lambda} < k < \dfrac{S_1S_2}{\lambda}$ |

**4. Đếm trên đoạn MN bất kì** (hai nguồn cùng pha): tính $\Delta d_M = MS_2 - MS_1$, $\Delta d_N = NS_2 - NS_1$ rồi giải
$\Delta d_M \le k\lambda \le \Delta d_N$ (cực đại) hoặc $\Delta d_M \le (k+0{,}5)\lambda \le \Delta d_N$ (cực tiểu).

### III. Giao thoa ánh sáng – Thí nghiệm Y-âng (Young)
- **Bố trí:** nguồn đơn sắc bước sóng $\lambda$ chiếu vào hai khe hẹp $S_1, S_2$ cách nhau $a$; màn quan sát cách mặt phẳng hai khe $D$ ($D \gg a$).
- **Kết quả:** trên màn có các vạch sáng, tối xen kẽ, cách đều nhau → chứng tỏ **ánh sáng có tính chất sóng**.
- Hiệu đường đi tại điểm có tọa độ $x$: $\delta = d_2 - d_1 = \dfrac{ax}{D}$.

| Đại lượng | Công thức |
|---|---|
| Khoảng vân | $i = \dfrac{\lambda D}{a}$ |
| Vị trí vân sáng bậc $k$ | $x_s = k\,i$ ($k = 0, \pm1, \pm2,\dots$) |
| Vị trí vân tối thứ $(k+1)$ | $x_t = \left(k + \tfrac12\right) i$ |
| Đo bước sóng | $\lambda = \dfrac{a\,i}{D}$ |

- Vân trung tâm ($x = 0$) là **vân sáng bậc 0**.
- Vân tối thứ $n$ (tính từ vân trung tâm): $x = (n - 0{,}5)\,i$.
- Khoảng cách giữa $n$ vân sáng liên tiếp: $(n-1)\,i$.
- **Nhận biết loại vân tại M:** lập tỉ số $\dfrac{x_M}{i}$: là số nguyên → vân sáng; là số bán nguyên ($\dots{,}5$) → vân tối.
- **Ánh sáng trắng:** vân trung tâm màu trắng, hai bên là các dải màu cầu vồng, **tím ở trong, đỏ ở ngoài**.
- **Mở rộng:** làm thí nghiệm trong môi trường chiết suất $n$: $\lambda' = \dfrac{\lambda}{n}$, $i' = \dfrac{i}{n}$.

> **Lưu ý đơn vị:** nếu $\lambda$ (µm), $D$ (m), $a$ (mm) thì $i$ tính ra **mm**.

---

## PHẦN B. PHÂN DẠNG BÀI TẬP VÀ VÍ DỤ MINH HỌA

### Dạng 1. Xác định tính chất (cực đại/cực tiểu) của một điểm – Tìm $\lambda$, $v$, $f$
**Phương pháp:** Tính $\lambda = v/f$ rồi lập tỉ số $\dfrac{d_2 - d_1}{\lambda}$:
- nguyên $= k$ → cực đại bậc $|k|$ (nguồn cùng pha);
- bán nguyên → cực tiểu.
- Nếu đề cho “giữa M và trung trực có $n$ dãy cực đại khác” và M là cực đại → M thuộc $k = n+1$; nếu M là cực tiểu → $k + 0{,}5 = n + 0{,}5$.

**Ví dụ 1.** Hai nguồn kết hợp cùng pha $S_1, S_2$ trên mặt nước dao động với $f = 20$ Hz, tốc độ truyền sóng $v = 40$ cm/s. Điểm M cách hai nguồn $d_1 = 10$ cm, $d_2 = 14$ cm; điểm N cách hai nguồn $d_1 = 8$ cm, $d_2 = 11$ cm. M, N dao động thế nào?

*Giải:* $\lambda = v/f = 2$ cm.
- M: $\Delta d = 4 = 2\lambda$ → M là **cực đại bậc 2**.
- N: $\Delta d = 3 = 1{,}5\lambda = (1 + 0{,}5)\lambda$ → N là **cực tiểu** (dãy cực tiểu thứ 2 kể từ trung trực).

**Ví dụ 2.** Hai nguồn cùng pha dao động với $f = 16$ Hz. Tại M cách hai nguồn 30 cm và 25,5 cm sóng có biên độ cực đại; giữa M và đường trung trực của $S_1S_2$ có hai dãy cực đại khác. Tính tốc độ truyền sóng.

*Giải:* Giữa M và trung trực có 2 dãy cực đại → M thuộc dãy $k = 3$.
$|d_1 - d_2| = 4{,}5 = 3\lambda$ → $\lambda = 1{,}5$ cm → $v = \lambda f = 24$ cm/s.

### Dạng 2. Đếm số cực đại, cực tiểu trên đoạn nối hai nguồn
**Ví dụ 3.** Hai nguồn $S_1S_2 = 10$ cm dao động cùng pha, $f = 50$ Hz, $v = 80$ cm/s. Tìm số cực đại, cực tiểu trên đoạn $S_1S_2$.

*Giải:* $\lambda = 1{,}6$ cm; $\dfrac{S_1S_2}{\lambda} = 6{,}25$.
- Cực đại: $-6{,}25 < k < 6{,}25$ → $k = -6,\dots,6$ → **13 cực đại**.
- Cực tiểu: $-6{,}25 < k + 0{,}5 < 6{,}25$ → $-6{,}75 < k < 5{,}75$ → $k = -6,\dots,5$ → **12 cực tiểu**.

**Ví dụ 4.** Giữ nguyên số liệu Ví dụ 3 nhưng hai nguồn dao động **ngược pha**.

*Giải:* đổi vai trò → **12 cực đại, 13 cực tiểu** (trung điểm $S_1S_2$ là cực tiểu).

### Dạng 3. Đếm số cực đại, cực tiểu trên đoạn MN bất kì
**Ví dụ 5.** Hai nguồn cùng pha đặt tại A, B cách nhau 20 cm, bước sóng $\lambda = 3$ cm. ABCD là hình vuông trên mặt nước. Tìm số điểm dao động cực đại trên đoạn CD.

*Giải:* $AC = BD = 20\sqrt2 \approx 28{,}28$ cm. Đặt $\Delta d = d_B - d_A$.
- Tại D: $\Delta d_D = BD - AD = 28{,}28 - 20 = 8{,}28$ cm.
- Tại C: $\Delta d_C = BC - AC = 20 - 28{,}28 = -8{,}28$ cm.

$-8{,}28 \le 3k \le 8{,}28$ → $-2{,}76 \le k \le 2{,}76$ → $k = -2,\dots,2$ → **5 cực đại** trên CD.

### Dạng 4. Biên độ dao động tổng hợp tại một điểm (nâng cao)
**Ví dụ 6.** Hai nguồn cùng pha, cùng biên độ $A = 2$ cm, $\lambda = 4$ cm. Tìm biên độ dao động tại M có $d_2 - d_1 = 5$ cm.

*Giải:* $A_M = 2A\left|\cos\dfrac{\pi\Delta d}{\lambda}\right| = 4\left|\cos\dfrac{5\pi}{4}\right| = 2\sqrt2 \approx 2{,}83$ cm.

### Dạng 5. Giao thoa Y-âng: khoảng vân, vị trí vân, khoảng cách giữa các vân
**Ví dụ 7.** Thí nghiệm Y-âng: $a = 1$ mm, $D = 2$ m, $\lambda = 0{,}6$ µm.
a) Tính khoảng vân.
b) Xác định vị trí vân sáng bậc 3 và vân tối thứ 5.
c) Tính khoảng cách giữa vân sáng bậc 2 và vân tối thứ 4 (ở cùng phía; ở khác phía so với vân trung tâm).
d) Tại M, N cách vân trung tâm 3 mm và 4,8 mm là vân gì?

*Giải:*
a) $i = \dfrac{0{,}6\cdot 2}{1} = 1{,}2$ mm.
b) $x_{s3} = 3i = 3{,}6$ mm; vân tối thứ 5: $x = 4{,}5i = 5{,}4$ mm.
c) $x_{s2} = 2{,}4$ mm; $x_{t4} = 3{,}5i = 4{,}2$ mm. Cùng phía: $4{,}2 - 2{,}4 = 1{,}8$ mm; khác phía: $4{,}2 + 2{,}4 = 6{,}6$ mm.
d) $\dfrac{x_M}{i} = 2{,}5$ → M là **vân tối thứ 3**; $\dfrac{x_N}{i} = 4$ → N là **vân sáng bậc 4**.

### Dạng 6. Đo bước sóng ánh sáng
**Ví dụ 8.** Thí nghiệm Y-âng với $a = 0{,}5$ mm, $D = 1{,}5$ m. Khoảng cách giữa 6 vân sáng liên tiếp là 9 mm. Tính bước sóng.

*Giải:* $5i = 9$ mm → $i = 1{,}8$ mm → $\lambda = \dfrac{ai}{D} = \dfrac{0{,}5\cdot 10^{-3}\cdot 1{,}8\cdot10^{-3}}{1{,}5} = 0{,}6\cdot10^{-6}$ m $= 0{,}6$ µm.

### Dạng 7. Số vân sáng, vân tối trên bề rộng trường giao thoa
**Phương pháp:** Trường giao thoa rộng L, đối xứng qua vân trung tâm. Tính $\dfrac{L}{2i} = n + p$ ($n$ là phần nguyên, $p$ là phần thập phân).
- Số vân sáng: $N_s = 2n + 1$.
- Số vân tối: $N_t = 2n$ nếu $p < 0{,}5$; $N_t = 2n + 2$ nếu $p \ge 0{,}5$.

**Ví dụ 9.** Với $i = 1{,}2$ mm, bề rộng trường giao thoa $L = 13$ mm. Tìm số vân sáng, vân tối.

*Giải:* $\dfrac{L}{2i} = 5{,}417$ → $n = 5$, $p = 0{,}417 < 0{,}5$ → **11 vân sáng, 10 vân tối**.

### Dạng 8. Thay đổi các thông số $D$, $a$, $\lambda$
**Phương pháp:** $i \sim \lambda D / a$; lập tỉ số trước và sau thay đổi.

**Ví dụ 10.** Tại điểm M trên màn là vân sáng bậc 5. Dịch màn ra xa hai khe thêm 0,6 m thì M là vân tối thứ 4. Tính D ban đầu.

*Giải:* $x_M = 5\dfrac{\lambda D}{a} = 3{,}5\dfrac{\lambda(D + 0{,}6)}{a}$ → $5D = 3{,}5D + 2{,}1$ → $D = 1{,}4$ m.

### Dạng 9. Giao thoa hai bức xạ – vân trùng (nâng cao)
**Ví dụ 11.** Chiếu đồng thời $\lambda_1 = 0{,}6$ µm và $\lambda_2 = 0{,}4$ µm, $a = 1$ mm, $D = 2$ m. Tìm vị trí vân sáng trùng nhau gần vân trung tâm nhất.

*Giải:* $k_1\lambda_1 = k_2\lambda_2$ → $\dfrac{k_1}{k_2} = \dfrac{2}{3}$ → $k_1 = 2$: $x = 2i_1 = 2\cdot 1{,}2 = 2{,}4$ mm.

---

## PHẦN C. BÀI TẬP LUYỆN TẬP

### PHẦN I. TRẮC NGHIỆM NHIỀU LỰA CHỌN
*(Mỗi câu chỉ chọn một phương án)*

**Câu 1.** Hai nguồn kết hợp là hai nguồn dao động
A. cùng biên độ. B. cùng tần số và có hiệu số pha không đổi theo thời gian.
C. cùng pha ban đầu và khác tần số. D. cùng biên độ, khác tần số.

**Câu 2.** Trong giao thoa sóng nước với hai nguồn cùng pha, điểm dao động với biên độ cực đại có hiệu đường đi bằng
A. $(k + 0{,}5)\lambda$. B. $k\lambda$. C. $k\lambda/2$. D. $(2k+1)\lambda/4$.

**Câu 3.** Trên đoạn thẳng nối hai nguồn kết hợp, khoảng cách giữa hai cực đại liên tiếp bằng
A. $\lambda/4$. B. $\lambda$. C. $\lambda/2$. D. $2\lambda$.

**Câu 4.** Hai nguồn sóng nước dao động cùng pha. Đường trung trực của đoạn nối hai nguồn là
A. vân cực đại. B. vân cực tiểu. C. không dao động. D. lúc cực đại, lúc cực tiểu.

**Câu 5.** Hai nguồn sóng nước ngược pha. Đường trung trực của đoạn nối hai nguồn là
A. vân cực đại. B. vân cực tiểu. C. đường dao động với biên độ $A$. D. vân cực đại bậc 1.

**Câu 6.** Trong giao thoa sóng nước, $f = 10$ Hz, khoảng cách giữa hai cực tiểu liên tiếp trên đoạn $S_1S_2$ là 1,5 cm. Tốc độ truyền sóng là
A. 15 cm/s. B. 30 cm/s. C. 45 cm/s. D. 60 cm/s.

**Câu 7.** Hai nguồn cùng pha, $\lambda = 2$ cm. Điểm M có $d_1 = 12$ cm, $d_2 = 17$ cm dao động với biên độ
A. cực đại bậc 2. B. cực đại bậc 3. C. cực tiểu. D. bằng biên độ một nguồn.

**Câu 8.** Hai nguồn cùng pha cách nhau 12 cm, bước sóng 2,5 cm. Số điểm dao động cực đại trên đoạn nối hai nguồn là
A. 7. B. 8. C. 9. D. 10.

**Câu 9.** Hai nguồn cùng pha, $f = 20$ Hz. Tại M có $d_1 = 16$ cm, $d_2 = 22$ cm sóng có biên độ cực đại; giữa M và trung trực có 2 dãy cực đại khác. Tốc độ truyền sóng là
A. 20 cm/s. B. 30 cm/s. C. 40 cm/s. D. 60 cm/s.

**Câu 10.** Mỗi nguồn kết hợp cùng pha có biên độ $A$. Điểm thuộc vân cực đại dao động với biên độ
A. $A$. B. $A\sqrt2$. C. $2A$. D. 0.

**Câu 11.** Thí nghiệm Y-âng chứng tỏ ánh sáng
A. có tính chất hạt. B. có tính chất sóng. C. là sóng dọc. D. truyền thẳng.

**Câu 12.** Công thức tính khoảng vân trong thí nghiệm Y-âng là
A. $i = \dfrac{\lambda a}{D}$. B. $i = \dfrac{aD}{\lambda}$. C. $i = \dfrac{\lambda D}{a}$. D. $i = \dfrac{D}{\lambda a}$.

**Câu 13.** Thí nghiệm Y-âng với $a = 0{,}5$ mm, $D = 1$ m, $\lambda = 0{,}5$ µm. Khoảng vân là
A. 0,5 mm. B. 1 mm. C. 2 mm. D. 0,25 mm.

**Câu 14.** Vân tối thứ 3 cách vân sáng trung tâm một khoảng
A. $3i$. B. $2i$. C. $2{,}5i$. D. $3{,}5i$.

**Câu 15.** Khoảng cách giữa 5 vân sáng liên tiếp là 4 mm. Khoảng vân là
A. 0,8 mm. B. 1 mm. C. 1,25 mm. D. 4 mm.

**Câu 16.** Thí nghiệm Y-âng, $i = 1$ mm. Tại điểm M cách vân trung tâm 3,5 mm là
A. vân sáng bậc 3. B. vân tối thứ 3. C. vân tối thứ 4. D. vân sáng bậc 4.

**Câu 17.** Thí nghiệm Y-âng, $a = 1{,}2$ mm, $D = 1{,}5$ m, đo được $i = 0{,}75$ mm. Bước sóng ánh sáng là
A. 0,5 µm. B. 0,6 µm. C. 0,65 µm. D. 0,75 µm.

**Câu 18.** Nếu tăng khoảng cách giữa hai khe lên 2 lần và giữ nguyên các thông số khác thì khoảng vân
A. tăng 2 lần. B. giảm 2 lần. C. tăng 4 lần. D. không đổi.

**Câu 19.** Khoảng vân $i = 1{,}2$ mm, bề rộng trường giao thoa 10 mm (đối xứng qua vân trung tâm). Số vân sáng quan sát được là
A. 7. B. 8. C. 9. D. 10.

**Câu 20.** Trong thí nghiệm Y-âng với ánh sáng trắng, trên màn quan sát
A. chỉ có một vạch sáng trắng.
B. vân trung tâm màu trắng, hai bên có dải màu, tím ở trong, đỏ ở ngoài.
C. vân trung tâm màu đỏ, hai bên các dải màu.
D. vân trung tâm màu trắng, hai bên có dải màu, đỏ ở trong, tím ở ngoài.

### PHẦN II. TRẮC NGHIỆM ĐÚNG – SAI
*(Mỗi ý a, b, c, d chọn Đúng hoặc Sai)*

**Câu 1.** Trên mặt nước có hai nguồn kết hợp $S_1, S_2$ cách nhau 11 cm, dao động cùng pha với tần số 25 Hz, tốc độ truyền sóng 50 cm/s.
a) Bước sóng là 2 cm.
b) Trung điểm của $S_1S_2$ dao động với biên độ cực tiểu.
c) Trên đoạn $S_1S_2$ có 11 điểm dao động với biên độ cực đại.
d) Điểm M cách $S_1, S_2$ lần lượt 7 cm và 4 cm dao động với biên độ cực đại.

**Câu 2.** Thí nghiệm Y-âng: $a = 0{,}8$ mm, $D = 1{,}6$ m, $\lambda = 0{,}5$ µm.
a) Khoảng vân bằng 1 mm.
b) Vân sáng bậc 4 cách vân trung tâm 4,5 mm.
c) Điểm cách vân trung tâm 2,5 mm là vân tối thứ 3.
d) Nếu dịch màn ra xa hai khe thêm 0,4 m thì khoảng vân là 1,5 mm.

**Câu 3.** Về hiện tượng giao thoa:
a) Giao thoa là hiện tượng đặc trưng của quá trình sóng.
b) Hai sóng cùng biên độ gặp nhau luôn tạo được hệ vân giao thoa ổn định.
c) Các vân cực đại trên mặt nước (trừ đường trung trực) là các đường hypebol nhận hai nguồn làm tiêu điểm.
d) Trong thí nghiệm Y-âng, nếu che kín một khe thì trên màn vẫn quan sát được hệ vân giao thoa như cũ.

**Câu 4.** Trên mặt nước có hai nguồn kết hợp cách nhau 9 cm, dao động **ngược pha**, mỗi nguồn có biên độ 1,5 cm, bước sóng 2 cm.
a) Trung điểm của đoạn nối hai nguồn dao động với biên độ cực tiểu.
b) Biên độ dao động cực đại trên mặt nước là 3 cm.
c) Trên đoạn nối hai nguồn có 9 điểm dao động cực đại.
d) Trên đoạn nối hai nguồn có 9 điểm dao động cực tiểu.

### PHẦN III. TRẮC NGHIỆM TRẢ LỜI NGẮN

**Câu 1.** Hai nguồn kết hợp trên mặt nước dao động với $f = 40$ Hz, tốc độ truyền sóng 1,2 m/s. Khoảng cách giữa hai cực đại liên tiếp trên đoạn nối hai nguồn là bao nhiêu cm?

**Câu 2.** Hai nguồn cùng pha cách nhau 16 cm, bước sóng 3 cm. Trên đoạn nối hai nguồn có bao nhiêu điểm dao động với biên độ cực tiểu?

**Câu 3.** Hai nguồn cùng pha dao động với $f = 15$ Hz. Tại M cách hai nguồn 20 cm và 26 cm sóng có biên độ cực đại; giữa M và trung trực có 1 dãy cực đại khác. Tốc độ truyền sóng là bao nhiêu cm/s?

**Câu 4.** Hai nguồn cùng pha, mỗi nguồn có biên độ 3 mm, bước sóng 6 cm. Điểm M có hiệu đường đi 2 cm dao động với biên độ bao nhiêu mm?

**Câu 5.** Thí nghiệm Y-âng: $a = 1$ mm, $D = 2$ m, khoảng vân 1,3 mm. Bước sóng ánh sáng là bao nhiêu µm?

**Câu 6.** Thí nghiệm Y-âng có khoảng vân 1,5 mm. Khoảng cách giữa vân sáng bậc 2 và vân tối thứ 5 ở hai bên vân trung tâm là bao nhiêu mm?

**Câu 7.** Khoảng vân 2 mm, bề rộng trường giao thoa 21 mm (đối xứng qua vân trung tâm). Số vân sáng quan sát được là bao nhiêu?

**Câu 8.** Thí nghiệm Y-âng, $a = 1$ mm, $D = 2$ m, chiếu đồng thời $\lambda_1 = 0{,}45$ µm và $\lambda_2 = 0{,}6$ µm. Vân sáng trùng nhau gần vân trung tâm nhất cách vân trung tâm bao nhiêu mm?

---

## PHẦN D. ĐÁP ÁN VÀ HƯỚNG DẪN GIẢI

### Phần I

| Câu | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Đáp án | B | B | C | A | B | B | C | C | C | C |

| Câu | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
|---|---|---|---|---|---|---|---|---|---|---|
| Đáp án | B | C | B | C | B | C | B | B | C | B |

*Hướng dẫn một số câu:*
- Câu 6: $\lambda/2 = 1{,}5$ → $\lambda = 3$ cm → $v = 30$ cm/s.
- Câu 7: $\Delta d = 5 = 2{,}5\lambda$ → cực tiểu.
- Câu 8: $12/2{,}5 = 4{,}8$ → $k = -4,\dots,4$ → 9 cực đại.
- Câu 9: M thuộc $k = 3$: $6 = 3\lambda$ → $\lambda = 2$ cm → $v = 40$ cm/s.
- Câu 13: $i = 0{,}5\cdot1/0{,}5 = 1$ mm.
- Câu 16: $3{,}5/1 = 3{,}5 = 3 + 0{,}5$ → vân tối thứ 4.
- Câu 17: $\lambda = ai/D = 1{,}2\cdot0{,}75/1{,}5 = 0{,}6$ µm.
- Câu 19: $L/2i = 4{,}17$ → $N_s = 2\cdot4 + 1 = 9$.

### Phần II

| Câu | a | b | c | d |
|---|---|---|---|---|
| 1 | Đ | S | Đ | S |
| 2 | Đ | S | Đ | S |
| 3 | Đ | S | Đ | S |
| 4 | Đ | Đ | S | Đ |

*Hướng dẫn:*
- **Câu 1:** $\lambda = 2$ cm (a đúng). Trung điểm thuộc trung trực → cực đại (b sai). $11/2 = 5{,}5$ → $k = -5,\dots,5$ → 11 cực đại (c đúng). $\Delta d = 3 = 1{,}5\lambda$ → cực tiểu (d sai).
- **Câu 2:** $i = 0{,}5\cdot1{,}6/0{,}8 = 1$ mm (a đúng). $x_{s4} = 4$ mm (b sai). $2{,}5 = (2 + 0{,}5)i$ → vân tối thứ 3 (c đúng). $D' = 2$ m → $i' = 1{,}25$ mm (d sai).
- **Câu 3:** b sai vì cần thêm điều kiện cùng tần số, hiệu số pha không đổi; d sai vì che một khe thì chỉ còn một nguồn, không có giao thoa.
- **Câu 4:** Ngược pha → trung điểm là cực tiểu (a đúng); $A_{max} = 2\cdot1{,}5 = 3$ cm (b đúng). Cực đại: $-4{,}5 < k + 0{,}5 < 4{,}5$ → $k = -4,\dots,3$ → 8 cực đại (c sai). Cực tiểu: $-4{,}5 < k < 4{,}5$ → 9 cực tiểu (d đúng).

### Phần III

| Câu | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Đáp án | 1,5 | 10 | 45 | 3 | 0,65 | 9,75 | 11 | 3,6 |

*Hướng dẫn:*
1. $\lambda = 120/40 = 3$ cm → $\lambda/2 = 1{,}5$ cm.
2. $16/3 = 5{,}33$: $-5{,}33 < k + 0{,}5 < 5{,}33$ → $k = -5,\dots,4$ → 10 cực tiểu.
3. M thuộc $k = 2$: $6 = 2\lambda$ → $\lambda = 3$ cm → $v = 45$ cm/s.
4. $A_M = 2\cdot3\left|\cos\dfrac{2\pi}{6}\right| = 6\cdot0{,}5 = 3$ mm.
5. $\lambda = \dfrac{ai}{D} = \dfrac{1\cdot1{,}3}{2} = 0{,}65$ µm.
6. $x_{s2} = 3$ mm; $x_{t5} = 4{,}5i = 6{,}75$ mm; khác phía: $3 + 6{,}75 = 9{,}75$ mm.
7. $L/2i = 5{,}25$ → $N_s = 11$.
8. $\dfrac{k_1}{k_2} = \dfrac{\lambda_2}{\lambda_1} = \dfrac{4}{3}$ → $k_1 = 4$; $i_1 = 0{,}9$ mm → $x = 3{,}6$ mm.
