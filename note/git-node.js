// local responsitory : máy mình
// remote responsitory : sever git

// source code : + hệ thống giúp lưu trữ mọi thay đổi code
//               + hỗ trợ nhiều người làm việc cùng lúc

// 1. $ git init : Lệnh này sẽ tạo một thư mục mới có tên .git,
                //  thư mục này chứa tất cả các tập tin .

// 2. $ git clone namelink : Sao chép một kho chứa đã tồn tại :Câu lệnh trên sẽ tạo một thư mục mới có tên giống trên của Repo.
// 3. $ git add . :cập nhật thay đổi
// 4. $ git commit -m "message" : Sau lệnh add, bạn cần sử dụng câu lệnh Commit để đây thông tin thay đổi lên Local Respository;
// 5. $ git remote add origin <remote_url> : " nếu chưa tồn tại remote trên server thì bạn cần add mới một remote trước rồi mới push"
// 6. $ git push origin <name_branch> : cập nhât lên server
// 7. $ git log :giúp bạn xem lại thông tin lịch sự commit, nhằm giám sát sự thay đổi của dự án.
// 8. $ git status:để biết thông tin trạng thái sửa đổi, thêm mới, xóa các file trước khi thực hiện commit

// 7. $ git branch <name_branch> : Để tạo mới một branch:
// 8. $ git branch -b <name_branch> :Để chuyển và tạo mới:

// 9. $ git checkout <branch>:  cần phải checkout ra khỏi branch hiện tại cần gộp để vào branch master,
// sau đó thì dùng lệnh merge để ghép branch mới vào master:
// 10.$ git merge <branch> : gộp nhánh

// 9. $ git pull origin master:  Lệnh git pull lấy về thông tin từ remote và cập nhật vào các nhánh của local reponsitory
// 10.$ git fetch : được sử dụng để lấy về thông tin từ Remote repository và k cập nhập luôn vào nhánh của local reponsitory
//  git fetch origin / master : tải thông tin (tệp) về sửa
//  git merge origin/master : sau khi sửa gộp lại những thay đổi

// 3. $ git log : xem lại lịch sủ commit
// 4. $ git diff : xem lại thay đổi trước khi push