---
title: hiệu ứng zoom hình ảnh trong bài viết
tags:
- effect
- animation
- script
- images
- zoom
---

Tìm mãi mới thấy một cái ok để dùng.

Trông nó như này: https://medium-zoom.francoischalifour.com/

Cách đơn giản nhất để áp dụng, là cứ nhét tạm vào file html thôi

```html
    
    ...

    <script src="/js/medium-zoom.min.js"></script> // đường dẫn
    <script>mediumZoom("p > img");</script> // đối tượng áp dụng
</body>
```