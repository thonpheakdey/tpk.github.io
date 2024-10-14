
function onclicklink() {
    location.href = "/index.html";
}
//input
{
    let rel = document.createElement('input');
    let inputw = document.createElement('input');
    let inputn = document.createElement('input');
    let inputh = document.createElement('input');
    let output = document.createElement('output');
    let outputp = document.createElement('output');

    // let br = document.createElement('br');
    //inputw
    inputw.type = "number";
    inputw.placeholder = "ចំនួនអានុភាព (W)";
    inputw.id = "inputw1";
    inputw.className = "input";
    //inputn
    inputn.type = "number";
    inputn.placeholder = "ចំនួន";
    inputn.id = "inputn1";
    inputn.className = "inputn";
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
    //outputp
    outputp.id = "outputp1";
    outputp.className = "input";
    outputp.innerText = "W";
    outputp.style.backgroundColorz = "red";
    //rel
    rel.type = "Number";
    rel.placeholder = "ចំនួនទឹកប្រាក់ក្នុង kWh =1500 រៀល";
    rel.id = "rel";
    rel.className = "input";
    before.appendChild(rel);
    before.appendChild(inputw);
    before.appendChild(inputn);
    before.appendChild(inputh);
    before.appendChild(output);
    before.appendChild(outputp);

}


// ប្រើbutton create
var x = 1;
{
    function newinputBtn() {
        x += 1;
        let inputw = document.createElement('input');
        let inputn = document.createElement('input');
        let inputh = document.createElement('input');
        let output = document.createElement('output');
        let outputp = document.createElement('output');
        // let br = document.createElement('br');
        //inputw
        inputw.type = "number";
        inputw.placeholder = "ចំនួនអានុភាព (W)";
        inputw.id = "inputw" + x;
        inputw.className = "input";
        //inputn
        inputn.type = "number";
        inputn.placeholder = "ចំនួន";
        inputn.id = "inputn" + x;
        inputn.className = "inputn";
        //inputh
        inputh.type = "number";
        inputh.placeholder = "ចំនួនម៉ោង (h)";
        inputh.id = "inputh" + x;
        inputh.className = "input";
        //output
        output.id = "output" + x;
        output.className = "input";
        output.innerText = "Wh";
        output.style.backgroundColorz = "red";
        //output
        outputp.id = "outputp" + x;
        outputp.className = "input";
        outputp.innerText = "W";
        outputp.style.backgroundColorz = "red";

        before.appendChild(inputw);
        before.appendChild(inputn);
        before.appendChild(inputh);
        before.appendChild(output);
        before.appendChild(outputp);
        // before.appendChild(br);
        // console.log(x);

    }
}
// ប្រើbutton delete
{
    function delteinputBtn() {

        let inputw = document.getElementById('inputw' + x);
        let inputn = document.getElementById('inputn' + x);
        let inputh = document.getElementById('inputh' + x);
        let output = document.getElementById('output' + x);
        let outputp = document.getElementById('outputp' + x);
        inputw.remove();
        inputn.remove();
        inputh.remove();
        output.remove();
        outputp.remove();
        x--
    }
}
// var rel = document.getElementById("rel");
// rel.type = "number";
// rel.placeholder = "ចំនួនអានុភាព (W)";
// rel.id = "inputw1";
// rel.className = "input";


//លទ្ធផល
window.onmousemove = function () {
    //​ចំនួនអានុភាណសរុប
    {
        // តាំង
        let resal0255 = 0;
        var resal12 = 0;
        let resalw = 0;
        let rel2 = 0;
        for (let y = 1; y <= x; y++) {
            //ហៅId

            var inputwx = document.getElementById("inputw" + y);
            var inputnx = document.getElementById("inputn" + y );
            var inputhx = document.getElementById("inputh" + y);
            var rel = document.getElementById('rel');
            out = document.getElementById("output" + y);
            outp = document.getElementById("outputp" + y);
            allresal1 = document.getElementById("w");
            allresal = document.getElementById("wh");
            kwh = document.getElementById("KWH");
            resalral = document.getElementById("resalral");
            //ហៅលេខ

            inputw1x = inputwx.valueAsNumber;
            inputn1x = inputnx.valueAsNumber;
            inputh1x = inputhx.valueAsNumber;
            rel2 = rel.valueAsNumber;
            //គណនា


            
            resalw += (inputw1x * inputn1x);
            if (inputwx.value == '' || inputnx.value == ''  ) { resal0255 = 0; rel2 = 0; }
            resal0255 = ((inputw1x * inputn1x) * inputh1x);
            if (inputwx.value == '') { inputw1x = 0; }
            if (rel.value == '') { rel2 = 1500; }
            resal12 += resal0255;

            out.innerText = (resal0255 + "Wh");

            outp.innerText = ("||​​​​​​  ​ "+(inputw1x * inputn1x) + "W");


            rel2 = resal12 / 1000 * rel2



            allresal1.innerText = ("​ចំនួនអានុភាណសរុប = " + resalw + "W");
            allresal.innerText = ("​ចំនួនអានុភាណក្នុងមួយម៉ោងសរុប = " + resal12 + "Wh");
            kwh.innerText = ("​ចំនួនអានុភាណក្នុងមួយម៉ោងសរុប = " + resal12 / 1000 + "kWh");
            resalral.innerText = ("ចំណាយអស់" + rel2 + "រៀល")
        }
    }


}

