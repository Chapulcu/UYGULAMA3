// Code goes here
var app = angular.module('myApp', []);

app.controller('POSController', function ($scope) {
    $scope.food = {
      efesFici33  : {count: 1, id:35, detail: "Efes Fıçı 33cl", price: 15},
      
                     efesFici50  : {count: 3, id:1, detail: "Efes Fıçı 50cl",price: 10},
      
                     bomontiFici33    : {count: 1, id:2, detail: "Bomonti Fıçı 33cl",price: 10},
      
                     bomontiFici50     : {count: 1, id:3, detail: "Bomonti Fıçı 50cl",price: 10},
     
                     tuborgFici33    : {count: 1, id:4, detail: "Tuborg Gold Fıçı 33cl",price: 10},
      
                     tuborgFici50  : {count: 1, id:5, detail: "Tuborg Gold Fıçı 50cl",price: 10},
      
                     bomontiSise33  : {count: 1, id:6, detail: "Bomonti Şişe 33cl",price: 10},
      
                     bomontiSise50  : {count: 1, id:7, detail: "Bomonti Filtresiz Şişe 50cl",price: 10},
      
                     tuborgSise33   : {count: 1, id:8, detail: "Tuborg Gold Şişe 33cl",price: 10},
      
                     efesSise33  : {count: 1, id:9, detail: "Efes Şişe 33cl",price: 10},
      
                     efesLightSise33  : {count: 1, id:10, detail: "Efes Light Şişe 33cl",price: 10},
      
                     efesDarkSise33  : {count: 1, id:11, detail: "Efes Dark Şişe 33cl",price: 10},
      
                     efesUnfilteredSise33  : {count: 12, id:11, detail: "Efes Unfiltred Şişe 33cl",price: 10},
      
                     efesMaltSise33  : {count: 1, id:13, detail: "Efes Malt Şişe 33cl",price: 10},
      
                     efesExtraSise33  : {count: 1, id:14, detail: "Efes Extra Şişe 33cl",price: 10},
      
                     mariachi  : {count: 1, id:15, detail: "Mariachi 33cl",price: 10},
      
                     mariachiBlack  : {count: 1, id:16, detail: "Mariachi Black 33cl",price: 10},
      
                     becks  : {count: 1, id:17, detail: "Becks 33cl",price: 10},
      
                     miller  : {count: 1, id:18, detail: "Miller 33cl",price: 10},
      
                     carlsBerg  : {count: 1, id:19, detail: "CarlsBerg 33cl",price: 10},
      
                     peroniNastro  : {count: 1, id:20, detail: "Peroni Nastro 33cl",price: 10},
      
                     amstel  : {count: 1, id:21, detail: "Amstel 33cl",price: 10},
      
                     budweiser  : {count: 1, id:22, detail: "Budweiser 33cl",price: 10},
      
                     heineken  : {count: 1, id:23, detail: "Heineken 33cl",price: 10},
      
                     corona  : {count: 1, id:24, detail: "Corona 33cl",price: 10},
      
                     leffeBlond  : {count: 1, id:25, detail: "Leffe Blond 33cl",price: 10},
      
                     leffeBrown  : {count: 1, id:26, detail: "Leffe Brown 33cl",price: 10},
      
                     leffeRadieuse  : {count: 1, id:27, detail: "Leffe Radieuse 33cl",price: 10},
      
                     fullersLondonPorter  : {count: 1, id:28, detail: "Fuller's London Porter 33cl",price: 10},
      
                     fullersLondonPride  : {count: 1, id:29, detail: "Fuller's London Pride 33cl",price: 10},
      
                     fullersLondonESB  : {count: 1, id:30, detail: "Fuller's London ESB 33cl",price:12},
      
                     hoegaarden  : {count: 1, id:31, detail: "Hoegarden 33cl",price: 10},
      
                     kriekMax  : {count: 1, id:32, detail: "Kriek Max 33cl",price: 10},
      
                     Duvel  : {count: 1, id:33, detail: "Duvel 33cl",price: 10},
      
                     brooklynLager  : {count: 1, id:34, detail: "Brooklyn Lager 33cl",price: 10}
    
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
