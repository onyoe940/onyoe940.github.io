var cm = document.querySelector('.cm');
var kg = document.querySelector('.kg');
var send = document.querySelector('.send');
var list = document.querySelector('.list');
var data = JSON.parse(localStorage.getItem('listData')) || [];

send.addEventListener('click',addData,false);
list.addEventListener('click',toggleDone,false);
getDate(data);

function addData(e) {
    var cmStr = cm.value;
    var kgStr = kg.value;
    var result = kgStr/Math.pow(cmStr,2)*10000;
    result = result.toFixed(1);
    e.preventDefault();
    var todo = {
        height: cmStr,
        weight: kgStr,
        BMI: result
    };
    data.push(todo);
    getDate(data);
    localStorage.setItem('listData', JSON.stringify(data));
    }

function getDate(items){
    var Str = "";
    var len = items.length;
    for (var i=0;i<len;i++){
        console.log(items[i].BMI)
        if(items[i].BMI<18.5){
        Str += `
        <li class="Toolight">
            <h3>過輕</h3>
            <span class="resulttext">BMI</span><span class="num">${items[i].BMI}</span><span class="resulttext">weight</span><span class="num">${items[i].weight}kg</span><span class="resulttext">height</span><span class="num">${items[i].height}cm</span>
            <a href="#" class="deletsave" data-index="${i}">刪除</a>
        </li>`;
        }else if(items[i].BMI >=18.6 && items[i].BMI<=25){
            Str += `
            <li class="normel">
                <h3>理想</h3>
                <span class="resulttext">BMI</span><span class="num">${items[i].BMI}</span><span class="resulttext">weight</span><span class="num">${items[i].weight}kg</span><span class="resulttext">height</span><span class="num">${items[i].height}cm</span>
                <a href="#" class="deletsave" data-index="${i}">刪除</a>
            </li>`;
        }else if(items[i].BMI >=18.6 && items[i].BMI<=25){
            Str += `
            <li class="Tooweight">
                <h3>過重</h3>
                <span class="resulttext">BMI</span><span class="num">${items[i].BMI}</span><span class="resulttext">weight</span><span class="num">${items[i].weight}kg</span><span class="resulttext">height</span><span class="num">${items[i].height}cm</span>
                <a href="#" class="deletsave" data-index="${i}">刪除</a>
            </li>`;
        }else if(items[i].BMI >=25.1 && items[i].BMI<=30){
            Str += `
            <li class="Mildweight">
                <h3>輕度肥胖</h3>
                <span class="resulttext">BMI</span><span class="num">${items[i].BMI}</span><span class="resulttext">weight</span><span class="num">${items[i].weight}kg</span><span class="resulttext">height</span><span class="num">${items[i].height}cm</span>
                <a href="#" class="deletsave" data-index="${i}">刪除</a>
            </li>`;
        }else if(items[i].BMI >=30.1 && items[i].BMI<=35){
            Str += `
            <li class="Moderateweight">
                <h3>中度肥胖</h3>
                <span class="resulttext">BMI</span><span class="num">${items[i].BMI}</span><span class="resulttext">weight</span><span class="num">${items[i].weight}kg</span><span class="resulttext">height</span><span class="num">${items[i].height}cm</span>
                <a href="#" class="deletsave" data-index="${i}">刪除</a>
            </li>`;
        }else if(items[i].BMI >=35.1){
            Str += `
            <li class="Severeweight">
                <h3>重度肥胖</h3>
                <span class="resulttext">BMI</span><span class="num">${items[i].BMI}</span><span class="resulttext">weight</span><span class="num">${items[i].weight}kg</span><span class="resulttext">height</span><span class="num">${items[i].height}cm</span>
                <a href="#" class="deletsave" data-index="${i}">刪除</a>
            </li>`;
        }
    }
    list.innerHTML = Str;
    //過輕 16~18.5 理想 18.5~25 過重 25~30 輕度肥 30~35 中肥35~40 過肥40
}

function toggleDone(e){
    e.preventDefault();
    var deleteseve = e.target.nodeName;
    console.log(deleteseve)
    if( deleteseve == 'A'){
        var index = e.target.dataset.index;
        data.splice(index,1);
    };
    localStorage.setItem('listData', JSON.stringify(data));
    getDate(data);
}

