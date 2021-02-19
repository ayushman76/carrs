car = () => {
    var body = document.getElementById('body');
    var article = document.createElement('article');
    body.appendChild(article);
    article.setAttribute('class', 'article01');
    article.innerHTML += '<div class="container"><div class="row"><h3>Featured Cars For Sell</h3></div></div>';
    var my_product = [{
        img: 'image/ranould_duster.png',
        Car_name: 'Renould Duster',
        Car_modal: '2017',
        Car_price: '1.7L',
        more: '+'

    }, {
        img: 'image/ranould_duster.png',
        Car_name: 'Renould Duster',
        Car_modal: '2017',
        Car_price: '1.7L',
        more: '+'

    }, {
        img: 'image/ranould_duster.png',
        Car_name: 'Renould Duster',
        Car_modal: '2017',
        Car_price: '1.7L',
        more: '+'

    }, {
        img: 'image/ranould_duster.png',
        Car_name: 'Renould Duster',
        Car_modal: '2017',
        Car_price: '1.7L',
        more: '+'

    }, {
        img: 'image/ranould_duster.png',
        Car_name: 'Renould Duster',
        Car_modal: '2017',
        Car_price: '1.7L',
        more: '+'

    }, {
        img: 'image/ranould_duster.png',
        Car_name: 'Renould Duster',
        Car_modal: '2017',
        Car_price: '1.7L',
        more: '+'

    }, {
        img: 'image/ranould_duster.png',
        Car_name: 'Renould Duster',
        Car_modal: '2017',
        Car_price: '1.7L',
        more: '+'

    }, {
        img: 'image/ranould_duster.png',
        Car_name: 'Renould Duster',
        Car_modal: '2017',
        Car_price: '1.7L',
        more: '+'

    }]
    my_product.forEach(i => {
        document.querySelector('.article01>.container>.row').innerHTML += `
           <div class="col-md-3">
               <div class="my_products">
                    <img src="${i.img}">
                    <p><b>Name</b> : ${i.Car_name}</p>
                    <p><b>Modal</b> : ${i.Car_modal}</p>
                    <p class="price"><b>Price</b> : ${i.Car_price}</p>
                    <span class="more">${i.more}</span>
               </div>
           </div>
        `;
    });


}
car();