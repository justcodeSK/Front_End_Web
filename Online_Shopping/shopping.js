 // if (list.length==0){
        //     $(".total").html('<h6 style="text-align: center;">Cart is Empty</h6>')
        // }else{

$(document).ready(function(){
    $('#cartnav').hide();
    $('#carttoggle').click(function(){
        $('#cartnav').slideToggle(1000);
    });

});
let products = [];

function toShort(str,max=50){

    if(str.length > max){
        return  str.substring(0,max)+"....."
    }

    return str;

}
function Show_cart(x){
    $("#maindiv").empty();
    x.map(product=> {
        $("#maindiv").append(`
        <div class="card">
            <img class="card-img" src="${product.image}" alt="Denim Jeans" style="width:30%;margin-top:30px;">
            <div class="card-body">
            <h6>${product.title}</h6>
            <small class="text-black-50">
                ${toShort(product.description, 120)}
            </small>            
            <p>₹ ${product.price}</p>
            <p><button class="btn btn-dark add-to-cart" data-id="${product.id}">Add to Cart</button></p>
            </div>
        </div> 

        `)
    })
}

function Total_value(){

    let count = $(".item-in-cart-cost").length;

    $(".item-in-cart-count").html(count);


    if(count>0){
        let totalCost = $(".item-in-cart-cost").toArray().map(el=>el.innerHTML).reduce((x,y)=>Number(x)+Number(y));
        $(".total").html(`

            <div class="d-flex justify-content-between font-weight-bold px-3"">
                <h4>Total</h4>
                <h4>₹ <span class="cart-cost-total">${Number(totalCost).toFixed(2)}</span></h4>
            </div>

        `)
    }else{
        $(".total").html('<h6 style="text-align: center;">Cart is Empty</h6>')
    }

}



$.get("https://fakestoreapi.com/products/",function (data) {
    products = data;
    Show_cart(products);
})


$("#maindiv").delegate(".add-to-cart","click",function () {

    $('#cartnav').slideDown(1000);


    let currentItemId = $(this).attr("data-id");

    let productInfo = products.filter(el=>el.id == currentItemId)[0];

    if($(".item-in-cart").toArray().map(el=>el.getAttribute("data-id")).includes(currentItemId)){
        quantityadd()
    }else{
        $("#cart").append(`
    <div class="card item-in-cart" data-id="${productInfo.id}">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-end">
                <img src="${productInfo.image}" class="img-in-cart" alt="">
                <p class="mt-3" style="font-size:80%" id="title">
                <span class="item-title">
                ${productInfo.title}
                </span>
                </p>
                <button class="btn btn-danger remove-from-cart" style="width:40px;">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
            
            <div class="d-flex justify-content-between align-items-end">
                <div class="form-row">
                    <button class="btn btn-dark quantity-minus" style="width:40px;height:40px">
                        <i class="fas fa-minus"></i>
                    </button>
                    <input type="number" class="form-control w-25 mx-2 quantity" unitPrice="${productInfo.price}" value="1" min="1">
                    <button class="btn btn-dark quantity-plus" style="width:40px;height:40px">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <p class="mb-0" style="bmargin-top: 20px;">₹<span class="item-in-cart-cost">${productInfo.price}</span></p>
            </div>
        </div>
    </div>

    `);

    }

    Total_value();
})


function quantityadd(){
        let q =$(".quantity").val();
        let p = $(".quantity").attr("unitPrice");
        let newQ = Number(q)+1;
        let newCost = p * newQ;
        // console.log(p);
        $(".quantity").val(newQ);
        $("p").find(".item-in-cart-cost").html(newCost.toFixed(2));
        Total_value(); 
}


$("#cart").delegate(".remove-from-cart","click",function () {

    $(this).parentsUntil("#cart").remove();
    Total_value();

})



$("#cart").delegate(".quantity-plus","click",function () {

    let q =$(this).siblings(".quantity").val();
    let p = $(this).siblings(".quantity").attr("unitPrice");
    let newQ = Number(q)+1;
    let newCost = p * newQ;
    // console.log(p);
    $(this).siblings(".quantity").val(newQ);
    $(this).parent().siblings("p").find(".item-in-cart-cost").html(newCost.toFixed(2));
    Total_value();
})

$("#cart").delegate(".quantity-minus","click",function () {

    let q =$(this).siblings(".quantity").val();
    let p = $(this).siblings(".quantity").attr("unitPrice");
    if(q>1){

        let newQ = Number(q)-1;
        let newCost = p * newQ;
        // console.log(p);
        $(this).siblings(".quantity").val(newQ);
        $(this).parent().siblings("p").find(".item-in-cart-cost").html(newCost.toFixed(2));
        Total_value();
    }

})

$("#cart").delegate(".quantity","keyup change",function () {

    let q =$(this).val();
    let p = $(this).attr("unitPrice");
    if(q>1){

        let newQ = Number(q);
        let newCost = p * newQ;
        // console.log(p);
        $(this).val(newQ);
        $(this).parent().siblings("p").find(".item-in-cart-cost").html(newCost.toFixed(2));
        Total_value();

    }else{
        alert("more than one");
    }

})

var array = []

    $('#checkout').click(function(){
        var list = $('#cart').find('.item-in-cart');

        console.log(list[0])

       
            for(let i=0;i<list.length;i++){
                let items = {
                    "title":$(list[i]).find(".item-title").text(),
                    "price":$(list[i]).find(".item-in-cart-cost").text(),
                    "quantity":$(list[i]).find("input").val()
                }
                console.log("title")

    
            array.push(items)

            $(location).attr("href","bill.html")

            localStorage.setItem('items',JSON.stringify(array))
            console.log(array)
        }
        
    });

    $("#clearall").click(function () {

        $('.item-in-cart').remove();
        Total_value();
    
    })

   
  