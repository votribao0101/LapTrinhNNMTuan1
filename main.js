
//Khai báo contructor
let Product = function(id,name, price,quantity,category,isAvailable){
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
} 
// contructor Product
let array = [];
let product1 = new Product(1,"Iphone 14",12,5,"Dien thoai",true);
let product2 = new Product(2,"Samsung NoteA20 ",18,3,"Dien thoai",true);
let product3 = new Product(3,"Xiaomi 14T Pro",20,0,"Dien thoai",false);
let product4 = new Product(4,"Asus TUF Gaming F15",50,0,"Laptop",false);
let product5 = new Product(5,"LENOVO Legion 5",100,1,"Laptop",true);
//khởi tạo mảng với 5 product
array.push(product1);
array.push(product2);
array.push(product3);
array.push(product4);
array.push(product5);
console.log(array);
//mảng mới chỉ chứa name,price
let result = array.map(
    function(e){
        return {
            name:e.name,
            price:e.price
        }
    }
)
console.log(result);
//sản phẩm quantity >0
let result2 = array.filter(
    function(e){
        return e.quantity>0;
    }
)
console.log(result2);
//có ít nhất 1 sản phầm có giá trên 30 hay không
let result3 = array.some(
    function(e){
        return e.price>30;
    }
)
console.log(result3);
//tất cả sán phầm thuộc danh mục "Laptop" và có đang được bán(isAvailable) hay không
let result4 = array.every(
    function(e){
        return e.category=="Laptop" && e.isAvailable==true;
    }
)
console.log(result4);
//Tính tổng giá trị kho hàng. price * quantity
let result5 = array.reduce(
    function(sum,e){
        
        return sum += (e.price * e.quantity);
    }, 0
)
console.log(result5);
//dùng for of in ra ten,danh mục,giá
for (const element of array) {
    console.log(`${element.name} -${element.category}-${element.price}`);
}
//dùng for in để
//in ra tên thuộc tính
//in ra giá trị tương ứng
for (const key in array) {
    for (const prop in array[key]) {
        console.log(`${prop} : ${array[key][prop]}`)
    }
}
//lấy tên sản phẩm đang bán và còn hàng
let result6 = array.map(
    function(e){
        if(e.isAvailable && e.quantity>0){
            return e.name;
        }    
    }
).filter(item => item !== undefined);;
console.log(result6);
    