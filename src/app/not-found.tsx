import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Không tìm thấy</h2>
      <p>Địa chỉ URL bạn yêu cầu không được tìm thấy</p>
      <Link href="/">Trở về trang chủ</Link>
    </div>
  );
}
