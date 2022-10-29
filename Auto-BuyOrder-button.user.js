// ==UserScript==
// @name         Auto BuyOrder
// @namespace    https://github.com/LucasHenriqueDiniz/Auto-BUyOrder-button
// @version      0.12
// @description  BuyOrders button for mannco.store
// @author       Lucas Diniz
// @match        *://mannco.store/item/*
// @icon         data:image/png;base64,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
// @require      https://code.jquery.com/jquery-3.6.1.min.js
// @grant        none

// @homepageURL  https://github.com/LucasHenriqueDiniz/Auto-BUyOrder-button
// @supportURL   https://github.com/LucasHenriqueDiniz/Auto-BUyOrder-button/issues
// @downloadURL

// ==/UserScript==
(function() {
    var $ = window.jQuery;
    'use strict';
    //variaveis
    //const RemoveButton = document.querySelector("#content > div:nth-child(3) > div > div > div.col-xl-4.col-lg-7 > form > button");
    const Caixa = document.querySelector("#content > div:nth-child(4) > div > div > div.col-xl-4.col-lg-7");
    const CaixaDeQuantidade = document.querySelector("#content > div:nth-child(4) > div > div > div.col-xl-4.col-lg-7 > div.form-group > input");
    const CaixaDeValor = document.querySelector("#content > div:nth-child(4) > div > div > div.col-xl-4.col-lg-7 > div.input-group.mb-3 > input");
    const UpdateBuyOrder = document.querySelector("#content > div:nth-child(4) > div > div > div.col-xl-4.col-lg-7 > button.btn.btn-primary.addbuyorder");
    const CaixaTudo = document.querySelector("#content > div:nth-child(4) > div");
    const MaiorBuyOrder = Number(document.querySelector("#content > div:nth-child(4) > div > div > div.col-xl-8.col-lg-5.mt-md-3 > table > tbody > tr:nth-child(2) > td:nth-child(1)").textContent.slice(1))
    var Quantidade = '';
    var maiorProposta = '';

    //Diminuir tamanho grafico

    document.querySelector("#content > div:nth-child(3) > div > h3").style = "display:flex; justify-content: space-between;"
    document.querySelector("#content > div:nth-child(3) > div").style = "max-height: 50px";

    var SalesGraphic = document.createElement('button')
    SalesGraphic.style = "display:flex; justify-content: flex-end; font-family: inherit;text-align: center;border-radius: 2rem;padding: 0.5rem 3rem;font-weight: 700;border: none rgb(255 255 255);background-color: rgb(27, 166, 193);color: rgb(255, 255, 255);font-size: 20px;"
    SalesGraphic.textContent = "Show sales graphic"
    SalesGraphic.id = "SalesGraphic"
    SalesGraphic.title = "Show the sales History graphic with the sales details for this item"
    SalesGraphic.value = "ON"
    document.querySelector("#content > div:nth-child(3) > div > h3").appendChild(SalesGraphic);
    SalesGraphic.addEventListener('click', ShowNhide)

    function ShowNhide(button) {
        var SalesGraphic = document.getElementById('SalesGraphic')

        if(SalesGraphic.value=="OFF") {
            SalesGraphic.value="ON";
            SalesGraphic.innerHTML = "Show sales graphic";
            document.querySelector("#content > div:nth-child(3) > div").style = "max-height: 50px";



        } else if (SalesGraphic.value=="ON") {
            SalesGraphic.value="OFF";
            SalesGraphic.innerHTML = "Hide sales graphic";
            document.querySelector("#content > div:nth-child(3) > div").style = "max-height: 500px";
        }
    }

    /* loop infinito esperar err para ver oque fazer.
//Remover Aviso Trade ERr
do {
    document.querySelector("#modal-errorTrade > div > div > div.modal-footer > button").click()
    console.log("MSGERR fechada")
}
while (document.querySelector("#modal-errorTrade").className === "modal fade show")

 function MovetoBefore(elem_choice) {
   var span = elem_choice.parentNode,
     td = span.parentNode;
     td.insertBefore(span, span.nextElementSibling.nextElementSibling)
 }
*/

    // DEFINIR BUY ORDER VALUE
    if (document.querySelector("#content > div:nth-child(4) > div > div > div.col-xl-8.col-lg-5.mt-md-3 > table > tbody > tr:nth-child(2) > td:nth-child(1)").textContent === ('\n\nThere are currently no buy orders for this item. ')) {maiorProposta = 0.00}
    else {
        maiorProposta = document.querySelector("#content > div:nth-child(4) > div > div > div.col-xl-8.col-lg-5.mt-md-3 > table > tbody > tr:nth-child(2) > td:nth-child(1)").textContent.slice(1)

        if (maiorProposta.endsWith('0')) {
            maiorProposta = maiorProposta.slice(0, -1)
        }
    }

    //DEFINIR QUANTIDADE DE BUY ORDERS DEPENDENDO DO VALOR DE MANEIRA SAFE
    if (maiorProposta === 0.01) {
        Quantidade = 50
    } else if (maiorProposta <= 0.03) {
        Quantidade = 20
    } else if (maiorProposta <= 0.05) {
        Quantidade = 10
    } else if (maiorProposta <= 0.20) {
        Quantidade = 8
    } else if (maiorProposta <= 0.50) {
        Quantidade = 5
    } else if (maiorProposta <= 1.00) {
        Quantidade = 3
    } else {
        Quantidade = 1
    }
    //FUNÇÂO PARA ADD 1 CENTAVO A MAIOR BUYORDER
    function plusOneCent() {
        CaixaDeQuantidade.value = Quantidade
        CaixaDeValor.value = (parseFloat(maiorProposta) + parseFloat(0.01))
        UpdateBuyOrder.click()
        window.location.href=window.location.href
    }
    //Criar botão da função de buyorder de 1 Centavo
    var centOrder = document.createElement('button');
    centOrder.id = "AutoOrder";
    centOrder.className = "btn btn-primary AutoOrder";
    centOrder.innerHTML = "+1CENT";
    centOrder.setAttribute("style", "margin-top: 15px;background-color: #3958bc; margin-left: 15px");
    centOrder.style = "vertical-align: middle; margin-left: 15px "
    centOrder.title = "Create a button to make a 1cent buyOrder"
    document.querySelector("#content > div:nth-child(4) > div > div > div.col-xl-4.col-lg-7").appendChild(centOrder);
    centOrder.addEventListener("click", plusOneCent);

    /*
//criar buyorder de 1 centavo
function umCentOrder() {
    CaixaDeQuantidade.value = 15
    CaixaDeValor.value = 0.01
    UpdateBuyOrder.click()
}

//Criar botão da +1cent
var AutoOrder = document.createElement('button');
AutoOrder.id = "1Cent Order";
AutoOrder.innerHTML = "1CENTAVO";
AutoOrder.className = "btn btn-primary 1Cent Order";
AutoOrder.setAttribute("style", "margin-top: 15px;background-color: #3958bc");
AutoOrder.style = "vertical-align: middle; margin-left: 10px"
AutoOrder.title = "Create a buyOrder with +1 cent from the highest buyorder"
document.querySelector("#page-sidebar").appendChild(AutoOrder);

AutoOrder.addEventListener("click", umCentOrder);
*/

    //Check buyoder and change bg-color
    if (document.querySelector("#content > div:nth-child(4) > div > div > div.col-xl-8.col-lg-5.mt-md-3 > table > tbody > tr:nth-child(2) > td:nth-child(1)").textContent.includes('no buy orders')) {
        CaixaTudo.style = "background-color: red"
    } else {

        var PropostaMaisAlta = document.querySelector("#content > div:nth-child(4) > div > div > div.col-xl-8.col-lg-5.mt-md-3 > table > tbody > tr:nth-child(2) > td:nth-child(1)").textContent.slice(1)

        if (PropostaMaisAlta.endsWith('0')) {
            PropostaMaisAlta = PropostaMaisAlta.slice(0, -1)
        }


    }
    if (Number(CaixaDeValor.value) >= Number(PropostaMaisAlta)) {
        CaixaTudo.style = "background-color: green"
    } else {CaixaTudo.style = "background-color: red"}

    //Criar botão para abrir link de procura do item na steam
    //substituido pela extenção

})();

var elem = document.querySelector("body");
elem.addEventListener("keypress", (event)=> {
    if (event.keyCode === 192) {
        event.preventDefault();
        document.querySelector("#AutoOrder").click()
    }
});

console.log('a proposta mais alta é', document.querySelector("#content > div:nth-child(4) > div > div > div.col-xl-8.col-lg-5.mt-md-3 > table > tbody > tr:nth-child(2) > td:nth-child(1)").textContent.slice(1))


//get game and replace the %ITEMNAME% for the item naem
//CSGO = https://steamcommunity.com/market/search?category_730_ItemSet%5B%5D=any&category_730_ProPlayer%5B%5D=any&category_730_StickerCapsule%5B%5D=any&category_730_TournamentTeam%5B%5D=any&category_730_Weapon%5B%5D=any&appid=730&q= %ITEMNAME%
//Dota = https://steamcommunity.com/market/search?q= %ITEMNAME% &category_570_Hero%5B%5D=any&category_570_Slot%5B%5D=any&category_570_Type%5B%5D=any&appid=570
//Rust = https://steamcommunity.com/market/search?q= %ITEMNAME% &category_252490_itemclass%5B%5D=any&appid=252490
//TF2 = https://steamcommunity.com/market/search?q= %ITEMNAME% &category_440_Collection%5B%5D=any&category_440_Type%5B%5D=any&appid=440
