// Code goes here
var app = angular.module('myApp', []);

app.controller('POSController', function ($scope) {
    $scope.food = {
      Efes33cl       : {count: 1, id:12, detail: "Efes Fıçı 33 cl", price: 6},
      Efes50cl       : {count: 1, id:2, detail: "Efes Fıçı 50 cl", price: 10},
      Bomonti33cl    : {count: 1, id:3, detail: "Bomonti Fıçı 33 cl",price: 8},
      Bomonti50cl    : {count: 1, id:4, detail: "Bomonti Fıçı 50 cl",price: 3},
      TuborgGold50cl : {count: 1, id:5, detail: "Tuborg Fıçı Gold Fıçı 50cl",price: 3},
      TuborgGold33cl : {count: 1, id:6, detail: "Tuborg Gold Fıçı 33cl",price: 3},
      Guinness50cl   : {count: 1, id:7, detail: "Guinness Fıçı 50cl",price: 2},
      Guinness25cl   : {count: 1, id:8, detail: "Guinness Fıçı 25cl",price: 2},
      BomontiSise33cl: {count: 1, id:9, detail: "Bomonti Şişe 33cl",price: 2},
      BomontiFiltresizSise50cl: {count: 1, id:10, detail: "Bomonti Filtresiz Şişe 50cl",price: 2},
      TuborgGoldSise33cl   : {count: 1, id:11, detail: "Tuborg Gold Şişe 33cl",price: 2},
      EfesPilsenSise33cl   : {count: 1, id:11, detail: "Efes Pilsen Şişe 33cl",price: 2},
      EfesPilsenLight33cl   : {count: 1, id:11, detail: "Efes Pilsen Light 33cl",price: 2},
      EfesPilsenDark33cl   : {count: 1, id:11, detail: "Efes Pilsen Dark 33cl",price: 2},
      EfesPilsenUnfiltered50cl   : {count: 1, id:11, detail: "Efes Pilsen Unfiltered  50cl",price: 2},
      EfesPilsenMalt50cl   : {count: 1, id:11, detail: "Efes Pilsen Malt  50cl",price: 2},
      EfesPilsenExtra50cl   : {count: 1, id:11, detail: "Efes Pilsen Extra  50cl",price: 2},
      Mariachi   : {count: 1, id:11, detail: "Mariachi ",price: 2},
      MariachiBlack   : {count: 1, id:11, detail: "Mariachi Black",price: 2},
      Becks    : {count: 1, id:11, detail: "Becks 33cl ",price: 2},
        Miller    : {count: 1, id:11, detail: "Miller  ",price: 2},
        Carlsberg    : {count: 1, id:11, detail: "Carlsberg  ",price: 2},
        Peroni    : {count: 1, id:11, detail: "Mariachi ",price: 2},
        Amstel    : {count: 1, id:11, detail: "Mariachi ",price: 2},
        Budweiser    : {count: 1, id:11, detail: "Mariachi ",price: 2},
        Corona    : {count: 1, id:11, detail: "Mariachi ",price: 2},
        Heineken    : {count: 1, id:11, detail: "Mariachi ",price: 2},
        LeffeBlond     : {count: 1, id:11, detail: "Mariachi ",price: 2},
        LeffeBrown   : {count: 1, id:11, detail: "Mariachi ",price: 2},
        LeffeRadieuse   : {count: 1, id:11, detail: "Mariachi ",price: 2},
        FullersLondonPorter   : {count: 1, id:11, detail: "Mariachi ",price: 2},
        FullersLondonPride   : {count: 1, id:11, detail: "Mariachi ",price: 2},
        FullersESB   : {count: 1, id:11, detail: "Mariachi ",price: 2},
        Hoegaarden   : {count: 1, id:11, detail: "Mariachi ",price: 2},
        KriekMax   : {count: 1, id:11, detail: "Mariachi ",price: 2},
        Duvel    : {count: 1, id:11, detail: "Mariachi ",price: 2},
        BrooklynLager   : {count: 1, id:11, detail: "Brooklyn Lager",price: 2},
        BrooklynEastIndiaPaleAle   : {count: 1, id:11, detail: "Brooklyn East İndia Pale Ale",price: 2},
        BrooklynBrownAle   : {count: 1, id:11, detail: "Brooklyn Brown Ale ",price: 2},
        KasteelBlond   : {count: 1, id:11, detail: "Kasteel Blond ",price: 2},
        AechtSchlenkerlaRauchbierusBamberg   : {count: 1, id:11, detail: "Aecht Schlenkerla Rauchbier Aus Bamberg 50cl ",price: 2},
        SchneiderWeisse   : {count: 1, id:11, detail: "Schneider Weisse 50cl ",price: 2}

    };
    
    
    $scope.itemsCnt = 1;
    $scope.order = [];
    $scope.isDisabled = true;

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

    $scope.add = function(item) {

      $scope.orderedItemCnt = 1;
      var foodItem = {
        orderedItemCnt : 1,
        totalPrice : item.price,
        itemId : item.id, 
        id : $scope.itemsCnt,
        item : item
      };

        // Find if the item is already in Cart
        var cartItems = $.grep($scope.order, function(e){ return e.itemId == item.id; });

         if(cartItems.length > 0  && !isEmpty($scope.order)){
            cartItems[0].orderedItemCnt = ++ cartItems[0].orderedItemCnt; 
            cartItems[0].totalPrice = item.price * cartItems[0].orderedItemCnt;
         }
         else{
            $scope.order.push(foodItem);
            $scope.itemsCnt = $scope.order.length; 
         }
    };
    
    $scope.getSum = function() {
      var i = 0,
        sum = 0;

      for(; i < $scope.order.length; i++) {
        sum += parseInt($scope.order[i].totalPrice, 10);
      }
      return sum;
    };

    $scope.addItem = function(item, index) {         
          item.orderedItemCnt = ++ item.orderedItemCnt; 
          item.totalPrice = item.item.price * item.orderedItemCnt;
    };


    $scope.subtractItem = function(item, $index)
    {
      if (item.orderedItemCnt > 1) {
          item.orderedItemCnt = -- item.orderedItemCnt; 
          item.totalPrice = item.item.price * item.orderedItemCnt;
      }
      else{
          $scope.isDisabled = true;
          // isDisabled = false;    
         // $("#SubstractItemBtn").prop("disabled", true);
      }
    }

    $scope.deleteItem = function(index) {
      $scope.order.splice(index, 1);
    };
    
    $scope.checkout = function(index) {
      alert("Order total: $" + $scope.getSum() + "\n\nPayment received. Thanks.");
    };
    
    $scope.clearOrder = function() {
      $scope.order = [];
    };
});
