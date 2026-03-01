let students = [
    { id: 1, name: "Nguyen Van A", age: 20, gpa: 8.5, status: "active" },
    { id: 2, name: "Le Thi B", age: 17, gpa: 7.2, status: "active" },
    { id: 3, name: "Tran Van C", age: 19, gpa: 9.0, status: "inactive" }
];

// Chức năng 1: Create Student
const createStudent = (list) => {
    const name = prompt("Nhập họ tên:");
    const age = +prompt("Nhập tuổi:");
    const gpa = +prompt("Nhập điểm GPA:");
    const status = prompt("Trạng thái (active/inactive):").toLowerCase();
    
    const newId = list.length > 0 ? list[list.length - 1].id + 1 : 1;
    const newStudent = { id: newId, name, age, gpa, status };
    
    list.push(newStudent);
    alert("Thêm sinh viên thành công!");
};

// Chức năng 2: Read All Students
const readAll = (list) => {
    console.log("--- DANH SÁCH SINH VIÊN ---");
    console.log(list); // Hiển thị dạng bảng chuyên nghiệp
};

// Chức năng 3: Filter Scholarship (GPA > 8.0)
const filterScholarship = (list) => {
    const candidates = list.filter(s => s.gpa > 8.0);
    console.log("Ứng viên học bổng:", candidates);
};

// Chức năng 4: Update Profile
const updateStudent = (list) => {
    const id = +prompt("Nhập ID sinh viên cần sửa:");
    const student = list.find(s => s.id === id);
    
    if (student) {
        student.name = prompt("Họ tên mới:", student.name);
        student.gpa = +prompt("GPA mới:", student.gpa);
        alert("Cập nhật hoàn tất!");
    } else {
        alert("Không tìm thấy ID!");
    }
};

// Chức năng 5: Delete Record
const deleteRecord = (list) => {
    const id = +prompt("Nhập ID cần xóa:");
    const index = list.findIndex(s => s.id === id);
    
    if (index !== -1) {
        list.splice(index, 1);
        alert("Đã xóa bản ghi.");
    } else {
        alert("ID không tồn tại.");
    }
};

// Chức năng 6: Compliance Verification
const verifyCompliance = (list) => {
    const hasUnderage = list.some(s => s.age < 18);
    const allActive = list.every(s => s.status === "active");
    
    alert(`Có sinh viên < 18 tuổi: ${hasUnderage ? "CÓ" : "KHÔNG"}`);
    alert(`Tất cả đều Active: ${allActive ? "ĐÚNG" : "SAI"}`);
};

// Chức năng 7: Academic Statistics (GPA trung bình)
const calculateAverageGPA = (list) => {
    if (list.length === 0) return 0;
    const total = list.reduce((sum, s) => sum + s.gpa, 0);
    const avg = (total / list.length).toFixed(2);
    alert(`GPA trung bình cả lớp: ${avg}`);
};

// Chức năng 8: Data Normalization (UPPERCASE Name)
const normalizeNames = (list) => {
    const upperList = list.map(s => ({ ...s, name: s.name.toUpperCase() }));
    console.log("Danh sách đã chuẩn hóa in hoa:", upperList);
};

let choice;
while (choice !== 0) {
    choice = +prompt(`
        --- STUDENT MANAGEMENT SYSTEM ---
        1. Thêm sinh viên (Create)
        2. Xem danh sách (Read)
        3. Lọc học bổng (GPA > 8.0)
        4. Cập nhật thông tin (Update)
        5. Xóa sinh viên (Delete)
        6. Kiểm tra điều kiện (Compliance)
        7. Thống kê GPA trung bình
        8. Chuẩn hóa tên (UPPERCASE)
        0. Thoát chương trình
        `);
    switch (choice) {
        case 1:
            createStudent(students);
            break;
        case 2:
            readAll(students);
            break;
        case 3:
            filterScholarship(students);
            break;
        case 4:
            updateStudent(students);
            break;
        case 5:
            deleteRecord(students);
            break;
        case 6:
            verifyCompliance(students);
            break;
        case 7:
            calculateAverageGPA(students);
            break;
        case 8:
            normalizeNames(students);
            break;
        case 0:
            alert("Cảm ơn bạn đã sử dụng");
            break;
        
        default:
            alert("Lựa chọn không hợp lệ");
            break;
        }
}