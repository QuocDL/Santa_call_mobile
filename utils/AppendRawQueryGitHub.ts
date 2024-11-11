export function appendRawQueryIfGithub(url: string): string {
    // Tạo đối tượng URL để dễ thao tác
    try {
      const parsedUrl = new URL(url);
      
      // Kiểm tra miền là github.com và nếu chưa có `?raw=true` thì thêm vào
      if (parsedUrl.hostname === "github.com" && !parsedUrl.search.includes("raw=true")) {
        parsedUrl.search += (parsedUrl.search ? "&" : "?") + "raw=true";
      }
      
      return parsedUrl.toString();
    } catch (error) {
      console.error("URL không hợp lệ:", error);
      return url;
    }
  }