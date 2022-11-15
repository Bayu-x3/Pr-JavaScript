// Pembuatan codingan ini di kerjakan bersama sama oleh: Bayu, Rama, Althaf
// Dan di bimbing oleh Fatir

var input = require('readline-sync');
var indo = input.question("Masukan nilai b.indo: ");
var mtk = input.question("Masukan nilai mtk: ");
var inggris = input.question("Masukan nilai b.inggris: ");
var ipa = input.question("Masukan nilai ipa: ");
if (isNaN(indo) || isNaN(mtk) || isNaN(inggris) || isNaN(ipa)) {
    console.log("input yang anda masukan bukan angka")}
    else{

var nilai = Number(indo)
var nilai = Number(mtk)
var nilai = Number(inggris)
var nilai = Number(ipa)
let ourarray = [indo, mtk, inggris, ipa];
let sum = ourarray.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
let avg = (sum / ourarray.length) || 0;
console.log(avg);
if (Number(indo) >= 91 && Number(indo) <= 100) {
    console.log("Nilai Bahasa Indonesia Kamu sangat baik")
} else {
    if (Number(indo) >= 81 && Number(indo) <= 90) {
        console.log("Nilai Bahasa Indonesia Kamu Baik")
    } else {
        if (Number(indo) >= 71 && Number(indo) <= 80) {
            console.log("Nilai Bahasa Indonesia Cukup")
        } else {
            if (Number(indo) < 71 && Number(indo) < 71) {
                console.log("Nilai Bahasa Indonesia Kamu Kurang")
            }
        }
    }
}

if (Number(mtk) >= 91 && Number(mtk) <= 100) {
    console.log("Nilai Mtk Kamu Sangat Baik")
} else {
    if (Number(mtk) >= 81 && Number(mtk) <= 90) {
        console.log("Nilai Mtk Kamu Baik")
    } else {
        if (Number(mtk) >= 71 && Number(mtk) <= 80) {
            console.log("Nilai Mtk Kamu Cukup")
        } else {
            if (Number(mtk) < 71 && Number(mtk) < 71) {
                console.log("Nilai Mtk Kamu Kurang")
            }
        }
    }
}

if (Number(inggris) >= 91 && Number(inggris) <= 100) {
    console.log("Nilai Bahasa Inggris Kamu Sangat Baik")
} else {
    if (Number(inggris) >= 81 && Number() <= 90) {
        console.log("Nilai Bahasa Inggris Kamu Baik")
    } else {
        if (Number(inggris) >= 71 && Number(inggris) <= 80) {
            console.log("Nilai Bahasa Inggris Kamu Cukup")
        } else {
            if (Number(inggris) < 71 && Number(inggris) < 71) {
                console.log("Nilai Bahasa Inggris Kamu Kurang")
            }
        }
    }
}
if (Number(ipa) >= 91 && Number(ipa) <= 100) {
    console.log("Nilai IPA Kamu Sangat Baik")
} else {
    if (Number(ipa) >= 81 && Number(ipa) <= 90) {
        console.log("Nilai IPA Kamu Baik")
    } else {
        if (Number(ipa) >= 71 && Number(ipa) <= 80) {
            console.log("Nilai IPA Kamu Cukup")
        } else {
            if (Number(ipa) < 71 && Number(ipa) < 71) {
                console.log("Nilai IPA Kamu Kurang")
            }
        }
    }
}   
    }
