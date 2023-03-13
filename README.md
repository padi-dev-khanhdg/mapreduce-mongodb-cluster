## Overview: 
- Đây là một ứng dụng node.js chạy hàm mapreduce mongodb trên nhiều tiến trình worker đươc mở và chạy
song song với một tiến trình master dựa trên số CPU mà thiết bị đang chạy ứng dụng có
- Có thể mở thêm nhiều tiến trình hơn số CPU nhưng điều này không được khuyến khích vì 
các process có thể block lẫn nhau

## How:
- Thực hiện lệnh npm install 
- Tạo một collection tên accounts trong database và nhập file accounts_collection.json vào collection đó
- Tạo file .env và copy nội dung trong file .env.example vào sau đó thay thế tên databases your-databases
bằng tên databases muốn kết nối
- Tại terminal thực hiện lệnh npm start

## Contact: khanhdg3007@gmail.com
## Github: https://github.com/padi-dev-khanhdg/mapreduce-mongodb-cluster