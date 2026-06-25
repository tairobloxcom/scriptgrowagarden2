# TaiRoblox Grow A Garden - GitHub Pages Fixed

Bộ code tĩnh dùng cho GitHub Pages, dựng lại từ HTML xuất ra của bài viết **Tải Hack Grow A Garden VNG (Mở Trứng, Lấy Cây Candy, Random Pet) v2.717.985**.

## Cấu trúc

```txt
tairoblox-grow-a-garden-github-pages-fixed/
├── index.html
├── README.md
├── robots.txt
├── sitemap.xml
├── .nojekyll
└── assets/
    ├── github-fix.css
    └── github-fix.js
```

## Những lỗi đã xử lý

- Xóa WordPress admin bar, class `logged-in`, `admin-bar`, `no-customize-support`.
- Xóa link/script liên quan `wp-admin`, `wp-login`, Customizer, WP Rocket, Cloudflare beacon.
- Giữ CSS Flatsome public để layout gần giống website gốc.
- Chuyển ảnh/link `/wp-content/...` thành URL đầy đủ `https://tairoblox.com/...`.
- Tắt form comment động để không lỗi khi chạy trên GitHub Pages.
- Thay API tải động bằng fallback tĩnh về trang gốc để tránh lỗi CORS/API.
- Thêm `.nojekyll` để GitHub Pages không bỏ qua file/thư mục asset.
- Thêm CSS/JS fallback cho mobile menu, rating sao, bảng, ảnh và nút tải.

## Cách deploy

1. Giải nén ZIP.
2. Upload toàn bộ file bên trong thư mục này lên repo GitHub.
3. Đảm bảo `index.html` nằm ở thư mục gốc repo.
4. Vào **Settings → Pages**.
5. Chọn **Deploy from a branch**.
6. Branch: `main`, Folder: `/root`.
7. Save.

Sau khi có URL GitHub Pages thật, sửa `USERNAME` trong `robots.txt`, `sitemap.xml` và canonical trong `index.html`.
