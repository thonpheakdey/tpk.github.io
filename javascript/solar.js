function onclicklink() {
    location.href = "../index.html";
}
//input
{
    let inputw = document.createElement('input');
    let inputh = document.createElement('input');
    let output = document.createElement('output');
    // let br = document.createElement('br');
    //inputw
    inputw.type = "number";
    inputw.placeholder = "ចំនួនអានុភាព (W)";
    inputw.id = "inputw1";
    inputw.className = "input";
    //inputh
    inputh.type = "number";
    inputh.placeholder = "ចំនួនម៉ោង (h)";
    inputh.id = "inputh1";
    inputh.className = "input";
    //
    output.id = "output1";
    output.className = "input";
    output.innerText = "Wh";
    output.style.backgroundColorz = "red";

    before.appendChild(inputw);
    before.appendChild(inputh);
    before.appendChild(output);
}
for (let g = 0; g < 4; g++) {
    let nameplaceholder = ["Ncc = 0.95", "Ninv = 0.98", "Nba = 0.95", "Tavg = 5.5h"];

    let inputred1 = document.createElement('input');
    inputred1.id = "inputred" + g;
    inputred1.type = "number";
    inputred1.className = "inputred"
    inputred1.placeholder = nameplaceholder[g];
    inputred.appendChild(inputred1);
}

// ប្រើbutton create
var x = 1;
{
    function newinputBtn() {
        x += 1;
        let inputw = document.createElement('input');
        let inputh = document.createElement('input');
        let output = document.createElement('output');
        // let br = document.createElement('br');
        //inputw
        inputw.type = "number";
        inputw.placeholder = "ចំនួនអានុភាព (W)";
        inputw.id = "inputw" + x;
        inputw.className = "input";
        //inputh
        inputh.type = "number";
        inputh.placeholder = "ចំនួនម៉ោង (h)";
        inputh.id = "inputh" + x;
        inputh.className = "input";
        //
        output.id = "output" + x;
        output.className = "input";
        output.innerText = "Wh";
        output.style.backgroundColorz = "red";

        before.appendChild(inputw);
        before.appendChild(inputh);
        before.appendChild(output);
        // before.appendChild(br);
        // console.log(x);

    }
}
// ប្រើbutton delete
{
    function delteinputBtn() {

        let inputw = document.getElementById('inputw' + x);
        let inputh = document.getElementById('inputh' + x);
        let output = document.getElementById('output' + x);
        inputw.remove();
        inputh.remove();
        output.remove();
        x--
    }
}
//លទ្ធផល
window.onmousemove = function () {
    //​ចំនួនអានុភាណសរុប
    {
        // តាំង
        let resal0255 = 0;
        var resal12 = 0;
        for (let y = 1; y <= x; y++) {
            //ហៅId
            var inputwx = document.getElementById("inputw" + y);
            var inputhx = document.getElementById("inputh" + y);
            out = document.getElementById("output" + y);
            allresal = document.getElementById("resal");
            //ហៅលេខ
            inputw1x = inputwx.valueAsNumber;
            inputh1x = inputhx.valueAsNumber;

            //គណនា
            resal0255 = (inputw1x * inputh1x);
            if (inputwx.value == '' || inputhx.value == '') { resal0255 = 0; }
            resal12 += resal0255
            // console.log(inputwx);
            // console.log(resal0255);
            // console.log(resal);
            // console.log(x);
            // console.log(y);
            out.innerText = (resal0255 + "wh");
            allresal.innerText = ("​ ​ ​ ​ចំនួនអានុភាណសរុប = " + resal12 + "Wh");
        }
    }
    //​ចំនួនPpv
    {
        var gs = 1;
        var Ppv = 0;
        for (let g = 0; g < 4; g++) {
            let unmber = ["0.95", "0.98", "0.95", "5.5"];
            inputredg = document.getElementById("inputred" + g);

            // console.log(inputredg);
            if (inputredg.value == "") { inputredg = unmber[g] }
            else { inputredg = Number(inputredg.value); }

            // console.log(inputredg);
            gs = gs * inputredg;

            // console.log(gs);
            // console.log(resal12);

            // 
            Ppv = resal12 / gs

            if (outputppv.innerText == "​ ​ ​ ​ចំនួនPpv = NaNW" || outputppv.innerText == "​ ​ ​ ​ចំនួនPpv = InfinityW") { Ppv = 0; }
            // console.log(Ppv);
            // Ppv.toPrecision(3);
            outputppv.innerText = ("​ ​ ​ ​ចំនួនPpv = " + Ppv.toFixed(3) + "W");
        }
    }
    //សូឡាដែលត្រូវប្រើចំនួន
    {
        var inputsolarw = document.getElementById("inputsolarw");
        var inputsolarv = document.getElementById("inputsolarv");
        //ហៅលេខ
        inputsolarw = inputsolarw.valueAsNumber;
        inputsolarv = inputsolarv.valueAsNumber;
        numsolar = (Ppv / inputsolarw).toFixed(0);
        //គណនា
        outputn.innerText = ("សូឡាដែលត្រូវប្រើចំនួន = " + (Ppv / inputsolarw).toFixed(0));
        if (outputn.innerText == "សូឡាដែលត្រូវប្រើចំនួន = NaN") { outputn.innerText = ("សូឡាដែលត្រូវប្រើចំនួន = 1"); }

    }
    // charge controller
    {

        onm = outputchargecontroller.innerText = ("ទំហំដែរត្រូវប្រើ charge controller គឺ  = " + (inputsolarw / inputsolarv) * 1.3);

        if (onm == ("ទំហំដែរត្រូវប្រើ charge controller គឺ  = NaN")) { outputchargecontroller.innerText = ("ទំហំដែរត្រូវប្រើ charge controller គឺ  = 1 A") }

        else {
            outputchargecontroller.innerText = ("ទំហំដែរត្រូវប្រើ charge controller គឺ  = " + (((inputsolarw * numsolar) / inputsolarv) * 1.3).toFixed(0) + "A");

        }

    }
    //Inverter
    {
        hon = resal12 * 1.3;
        outputinverter.innerText = ("ទំហំ Inverter ដែលត្រូវប្រើ = " + hon.toFixed(0) + "W");
    }
}

