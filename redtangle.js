/*global $: true */
function accMul(arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split('.')[1].length;
    }
    catch (e) {
        m+=0;
    }
    try {
        m += s2.split('.')[1].length;
    }
    catch (e) {
        m+=0;
    }
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
}


function accAdd(arg1, arg2) {
    var r1, r2, m, c;
    try {
        r1 = arg1.toString().split('.')[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split('.')[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    c = Math.abs(r1 - r2); 
    m = Math.pow(10, Math.max(r1, r2)); 
    if (c > 0) { 
        var cm = Math.pow(10, c);
        if(r1 > r2){
            arg1 = Number(arg1.toString().replace('.', '')); 
            arg2 = Number(arg2.toString().replace('.', '')) * cm;
        } else {
            arg1 = Number(arg1.toString().replace('.', '')) * cm;
            arg2 = Number(arg2.toString().replace('.', ''));
        }
    } else {
        arg1 = Number(arg1.toString().replace('.', ''));
        arg2 = Number(arg2.toString().replace('.', ''));
    }
    return (arg1 + arg2) / m;
}
$(function(){
    var $width=$('#width'),
        $height=$('#height'),
        $btnCal=$('#calculate'),
        $perimater=$('#perimater'),
        $area=$('#area');

    $btnCal.click(function(){
        var w=Number($width.val());
        var h=Number($height.val());
        var a=accMul(w,h);
        var p=accAdd(w,h);
        $perimater.val(p);
        $area.val(a);
    });
});







