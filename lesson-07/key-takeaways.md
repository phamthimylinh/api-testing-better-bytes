
# Agenda
1. Kết nối vào cơ sở dữ liệu, kiểm tra dữ liệu
2. API documentation
3. Postman advance features
4. Tìm hiều về Websocket

# 1. Kết nối CSDL
## 1.1 CSDL là gì?
- CSDL là tập hợp dữ liệu có tổ chức
- Các loại csdl phổ biến: MySQL, PostgreSQL, Oracle, SQL server, MongoDB
- Mô hình quan hệ (bảng, hàng, cột) vs NoSQL

## 1.2 Tại sao cần dùng CSDL
- Verify dữ liệu sau khi gọi API (create/update/delete)
- Kiểm tra tính toàn vẹn dữ liệu.
- So sánh dữ liệu API trả về với dữ liệu trong DB.
- Chuẩn bị dữ liệu test trước khi gọi API
- Clean up dữ liệu sau test.


## 1.3 Kết nối CSDL
- Công cụ: Database Client JDBC
...

## 1.4 Một số truy vấn thường dừng
- Truy vấn tìm lấy dữ liệu
    - SELECT * FROM <table_name>;
- Truy vấn đếm số lượng bản ghi
    - SELECT COUNT(*) FROM <table_name>;
- Mệnh đề điều kiện
    - WHERE <condition>
- Mệnh đề sắp xếp
    - ORDER BY <field> <order>
- Giới hạn số bản ghi
    - LIMIT 2

# 2. API documentation
## 2.1 API documentation
Là tài liệu **mô tả** cách **sử dụng API**, bao gồm:
- Các endpoint (URL).
- Phương thức HTTP (GET, POST, PUT, DELETE).
- Request/Response format (JSON/XML)
- Các tham số (parameters, headers, body).

## 2.2 Tại sao API Documentation quan trọng?
- Giúp developer/tester hiểu cách giao tiếp với API.
- Tiết kiệm thời gian trao đổi giữa các team.
- Đảm bảo tính nhất quán trong quá trình phát triển và kiểm thử.

## 2.3 Các công cụ phổ biến dùng làm API documentation
- Microsoft word/google doc, Microsoft Excel/google sheet.
- Khi nào cần sử dụng?
    - Khi không có công cụ tự động (swagger/openAPI)
    - Dùng để trao đổi nội bộ hoặc gửi cho khách hàng


# 3. Postman advance
- Flow
- API
- Mock server
- Monitor


# 4. Tìm hiểu về WebSocket
## 4.1 WebSocket protocol là gì?
- **Định nghĩa**: Giao thức truyền thông hai chiều (bidirectional) qua một kết nối TCP duy nhất.
- **Đặc điểm chính**:
    - Kết nối liên tục (persistent connection)
    - Giảm độ trễ so với các giao thức truyền thống.
    - Hỗ trợ real-time communication.
- **Cách hoạt động**:
    - Handshake ban đầu qua HTTP (HTTP Upgrade).
    - Chuyển sang giao thức ws:// hoặc wss:// (WebSocket Secure)

## 4.2 So sánh với HTTP
### HTTP 
- request-response model (mô hình yêu cầu - phản hồi)
- Kết nối không liên tục, mỗi request mở một kết nối mới (trừ HTTP/2, Keep-Alive)
- Phù hợp cho các ứng dụng tĩnh hoặc không yêu cầu real-time.

### WebSocket
- Kết nối liên tục, không cần gửi lại header cho mỗi message.
- Hiệu quả hơn cho ứng dụng real-time (chat, game online, thông báo).

![compare http vs websocket](/images/compare-http-websocket.png)

## 4.2 Use case phổ biến
- Ứng dụng chat thời gian thực (real-time chat).
- Thông báo đẩy (push notifications).
- Trò chới trực tuyến (online gaming)
- Cập nhật dữ liệu trực tiếp (live data updates, ví dụ: giá trứng khoán, thể thao).
- Hệ thống giám giát (monitoring systems).

## 4.3 Best practicé khi test WebSocket
- Kiểm tra handshake ban đầu (HTTP 101 Switching Protocols).
- Đảm bảo kết nối ổn định dưới tải cao (stress testing).
- Xác minh gửi/nhận message chính xác (data integrity).
- Kiểm tra xử lý ngắt kết nối (connection loss) và reconnect logic.
- Sử dụng WebSocket Secure (wss://) cho bảo mật.
- Đo lường độ trễ (latency) và bằng thông (throughput).


# 5. Sử dụng postman để test WebSocket
- Tạo WebSocket connection
- Gửi và nhận message
- Handle event
