// تکمیل پروژه نهایی
// هست Dom این قسمت آخرین آموزش از مباحث
// تکمیل کنیم document object در این آموزش میخواهیم اون پروژه ای که با هم ساختیم رو با استفاده از

// یک متنی نوشتیم و اضافه رو کلیک کردیم اون اسم اضافه بشه به لیست Add a book مثلا اگر در قسمت
// همراه اون دکمه حذف
// یا مخفی کردن کتاب ها رو اکتیو کردیم کتاب ها پنهان شود chack box و اگر 
// اسم کتاب را سرچ کنیم search و بتونیم از قسمت

// ذخیره شود localStorage و همه اینها با رفرش صفحه حذف نشود و اطلاعات در

// اینها تمام کار هایی هست که قراره انجام شود

// ابتدا کار خود را با اضافه کردن کتاب ها شروع میکنیم


const inputText = document.querySelector('#add-book input');

const link = document.querySelector('.button');

const ul = document.querySelector('ul');

const checkBox = document.querySelector('#hide input'); //  مربوط به بخش مخفی کردن کتاب ها

const inputSearch = document.querySelector('#search-books input'); // search box مربوط به بخش

const spanDelet = `<span class="delete">حذف</span>`;

link.addEventListener('click', function(e){
    const spanName = document.createElement('span');
    spanName.className ='name';
    spanName.textContent = inputText.value;
    
    const li = document.createElement('li');

    li.appendChild(spanName);
    li.innerHTML += spanDelet;

    ul.appendChild(li);

    // الان کاملا صفحه درست است ولی یک مشکل وجود دارد
    // اون هم اینه اگر صفحه را رفرش کنیم اطلاعات وارد شده پاک میشود
    // ذخیره کنیم localStorage برای حل این مشکل باید اون اطلاعات وارد شده را در
    // به روش پایین

    // ذخیره میکند localStorage که مقادیر ورودی را در function کردن call صدا کردن یا
    storeToLocalStorage(inputText.value)

    inputText.value = ''; // بعد از زدن دکمه اضافه add a book خالی کردن قسمت
    e.preventDefault();
})


// برای نگهداری مقادیر وارد شده در صفحه DOMContentLoaded ایجاد ایونت

document.addEventListener('DOMContentLoaded', function(e){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks =  [];
    } else{
        tasks = localStorage.getItem('tasks').split(','); 
    }

    for(let item of tasks){

        const spanName = document.createElement('span');
        spanName.className ='name';
        spanName.textContent = item;
        
        const li = document.createElement('li');
    
        li.appendChild(spanName);
        li.innerHTML += spanDelet;
    
        ul.appendChild(li);
    }
})



// ذخیره کند localStorage که مقادیر وارد شده را درون function ایجاد

function storeToLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks =  [];
    } else{
        tasks = localStorage.getItem('tasks').split(','); 
    }

    tasks.push(task);

    localStorage.setItem('tasks', tasks);
}

// ذخیره شدند localStorage الان با رفرش صفحه مقادیر وارد شده دوباره پاک میشوند ولی در

// استفاده کرد DOMContentLoaded اگر شما میخواهید بعد از رفرش مقادیر وارد شده همچنان باقی بمانند میتوان از ایونت
// مینویسیم function این قسمت را قبل از ایجاد




// حالا میخواهیم وقتی دکمه حذف را زدیم دونه دونه آیتم ها پاک بشوند

ul.addEventListener('click', function(e){
    if(e.target.className === 'delete'){
        e.target.parentElement.remove();

        // ذخیره شده بود localStorage الان عملکرد حذف شدن کاملا درست انجام میشود ولی متاسفانه با رفرش صفحه دوباره مقادیر برمیگردند همراه آن مقادیری که اضافه کرده بودیم و داخل

        // حذف کنیم localStorage برای اینکه مقادیر واقعا حذف بشوند باید اون موارد رو از
        // باید مثل زیر کد بنویسیم


        // هست که در خط های پایین آن را زراحی میکنیم function نام یک removeFromLocalStorage کلمه
        removeFromLocalStorage(e.target.parentElement.children[0].textContent);



        // console.log(e.target.parentElement.children[0].textContent);
        // را درست نوشتیم آن را داخل کنسول  که در خط بالا نوشتیم نمایش میدهیم remove برای اینکه ببینیم اون دستور

    }
})


// که در زیر نوشتیم اسم کتاب هست یعنی هر کتابی task پارامتر
// ما اسم کتاب رو داریم بعد میریم داخل فانکشن
// تمام موارد رو دریافت میکنیم و میریزیم داخل آرایه م localStorage از 
// localStorage بود اون رو حذف کن و در آخر آرایه رو میریزیم داخل task درون آن ایتریت میکنیم و میگیم هر کدام از اون المنت ها برابر با for بعد با استفاده از


function removeFromLocalStorage(task){
    let tasks; // خالی هست یا نه localStorage  این شرط برای این استفاده میشود که بررسی کن داخل
    if(localStorage.getItem('tasks') === null){
        tasks =  [];
    } else{
        tasks = localStorage.getItem('tasks').split(','); 
    }

    for(let i = 0; i<tasks.length; i++){
        if(tasks[i] === task){
            tasks.splice(i, 1);
        }
    }

    if(tasks.length === 0){
        localStorage.clear();
    } else {
        localStorage.setItem('tasks', tasks);
    }
}
// خب تا اینجا مراحل حذف و اضافه و اینکه رفرش کنیم و موارد بمونند یا اینکه حذف کنیم و کلا حذف بشوند تموم شد
// یه جوری مراحل سخت همین جا بود




// حالا میخواهیم وقتی تیک مخفی رو زدیم کلا لیست کتاب ها مخفی بشه

checkBox.addEventListener('change', function(e){
    if(checkBox.checked === true){
        ul.style.display = 'none';
    } else{
        ul.style.display = 'block';
    }
}) 

// مخفی کردن هم تموم شد





// search books حالا بخش

// ما در بخش سرچ تک تک کلمه وارد میکنیم 
// در نظر بگیریم key up باید برای تک تک اونها یک ایونت
// بعد اون مقدار وارد شده را دریافت کنیم و اون مقدار رو با تک تک اسم کتاب ها مقایسه کنیم
// و هر کدام که موجود نبود رو به همین صورتی که تونسیم کتاب ها رو هاید یا مخفی کنیم اون رو هاید کنیم

inputSearch.addEventListener('keyup', function(e){
    // یا مقدار اون برابر هر کدوم از این کتاب ها بود بیا و اونایی که برابر نیستن رو مخفی کن inputSearch در اینجا چک میکنیم که اون

    for(let book of ul.children){
        if(book.firstElementChild.textContent.indexOf(inputSearch.value) !== -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    }


})