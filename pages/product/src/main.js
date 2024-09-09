

var myApp = angular.module('myApp', []);

myApp.controller('namesCtrl', function($scope, $filter,$http) {
    $scope.triggerForm = false;
    $scope.editForm = false;
    $scope.addForm = false;
    $scope.order = 'name';
    $scope.imageSrc = '';
    $scope.currentFilter = 'all';

    // $scope.users = [
    //     {id: 1, name:'Jani', country:'Norway', salary: 5, email: 'Guithay65@gustr.com', image: ''},
    //     {id: 2, name:'Carl', country:'Sweden', salary: 24, email: 'cluphetret@hotmail.com', image: ''}
    // ];
    $http.get('users.json').then(function(response) {
        $scope.users = response.data;
    });

    $scope.orderBy = function(filter){
        $scope.order = filter;
    };
    
    $scope.editUser = function(user){
        var index = $scope.users.indexOf(user);
        $scope.triggerForm = true;
        $scope.editForm = true;
        $scope.addForm = false;
        $scope.emailExisted = false;
        $scope.spesificationExisted = false;
        $scope.editUserId = index;
        $scope.crudFormName = $scope.users[index].name;
        $scope.crudFormCountry = $scope.users[index].country;
        $scope.crudFormSalary = $scope.users[index].salary;
        $scope.crudFormEmail = $scope.users[index].email;
        $scope.crudFormEmail = $scope.users[index].spesification;
        $scope.imageSrc = $scope.users[index].image;
    };
    
    $scope.saveEdit = function(userId){
        if(userId == 'new'){
            var newUser = {
                name: $scope.crudFormName,
                country: $scope.crudFormCountry,
                salary: $scope.crudFormSalary,
                email: $scope.crudFormEmail,
                spesification: $scope.crudFormSpesification,
                image: $scope.imageSrc
            }
            $scope.users.push(newUser);
        }
        else {
            $scope.users[userId].name = $scope.crudFormName;
            $scope.users[userId].country = $scope.crudFormCountry;
            $scope.users[userId].salary = $scope.crudFormSalary;
            $scope.users[userId].email = $scope.crudFormEmail;
            $scope.users[userId].spesification = $scope.crudFormSpesification   ;
            $scope.users[userId].image = $scope.imageSrc;                
        }
        
        $scope.triggerForm = false;
        $scope.editForm = false;
        $scope.editUserId = 0;            
    }

    $scope.deleteUser = function(user) {
        var index = $scope.users.indexOf(user);
        $scope.users.splice(index, 1);      
    }
    
    $scope.addUser = function(){
        $scope.editUserId = 'new';
        $scope.triggerForm = true;
        $scope.editForm = false;
        $scope.addForm = true;
        $scope.emailExisted = false;
        $scope.spesificationExisted = false;
        $scope.userForm.$setUntouched();
        $scope.crudFormName = '';
        $scope.crudFormCountry = '';
        $scope.crudFormSalary = '';
        $scope.crudFormEmail = '';
        $scope.crudFormSpesification = '';
        $scope.imageSrc = '';
    }

    $scope.checkEmail = function(userId){
        if(userId === 'new' || $scope.crudFormEmail !== $scope.users[userId].email){
            $scope.emailExisted = $scope.users.some(function(user){
                return user.email === $scope.crudFormEmail;
            });                
        }
    }
    $scope.checkSpesification = function(userId){
        if(userId === 'new' || $scope.crudFormSpesification !== $scope.users[userId].spesification){
            $scope.spesificationExisted = $scope.users.some(function(user){
                return user.spesification === $scope.crudFormSpesification;
            });                
        }
    }
    
    $scope.previewImage = function(event) {
        var file = event.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $scope.$apply(function() {
                    $scope.imageSrc = e.target.result;
                });
            };
            reader.readAsDataURL(file);
        }
    };

    $scope.filterByCategory = function(category) {
        $scope.currentFilter = category;
        if (category === 'all') {
            $scope.filterUsers = {};
        } else {
            $scope.filterUsers = { country: category };
        }
    };
});

myApp.filter('totalSalary', function(){
  return function(data, key){
        if(angular.isUndefined(data) && angular.isUndefined(key))
            return 0;
      var total = 0;
      angular.forEach(data, function(v, k){
            total += parseInt(v[key]);
        });
      return total;
  }
});

// main.js
document.getElementById('downloadButton').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const table = document.querySelector('table');
    const rows = table.querySelectorAll('tbody tr');

    let y = 10;
    doc.setFontSize(12);

    doc.text("Product Catalog", 14, y);
    y += 10;

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        let text = '';
        cells.forEach(cell => {
            text += cell.textContent.trim() + ' | ';
        });
        doc.text(text, 14, y);
        y += 10;
    });

    doc.save('product-catalog.pdf');
});

// /** */

// var myApp = angular.module('myApp', []);

// myApp.controller('namesCtrl', function($scope, $http) {
//     $scope.triggerForm = false;
//     $scope.editForm = false;
//     $scope.addForm = false;
//     $scope.order = 'name';
//     $scope.imageSrc = '';
//     $scope.currentFilter = 'all';

//     // Load users from localStorage or fallback to JSON file
//     var storedUsers = localStorage.getItem('users');
//     if (storedUsers) {
//         $scope.users = JSON.parse(storedUsers);
//     } else {
//         $http.get('users.json').then(function(response) {
//             $scope.users = response.data;
//             localStorage.setItem('users', JSON.stringify($scope.users));
//         });
//     }

//     $scope.orderBy = function(filter) {
//         $scope.order = filter;
//     };

//     $scope.editUser = function(user) {
//         var index = $scope.users.indexOf(user);
//         $scope.triggerForm = true;
//         $scope.editForm = true;
//         $scope.addForm = false;
//         $scope.emailExisted = false;
//         $scope.editUserId = index;
//         $scope.crudFormName = $scope.users[index].name;
//         $scope.crudFormCountry = $scope.users[index].country;
//         $scope.crudFormSalary = $scope.users[index].salary;
//         $scope.crudFormEmail = $scope.users[index].email;
//         $scope.imageSrc = $scope.users[index].image;
//     };

//     $scope.saveEdit = function(userId) {
//         var editedUser = {
//             id: userId === 'new' ? $scope.users.length + 1 : $scope.users[userId].id,
//             name: $scope.crudFormName,
//             country: $scope.crudFormCountry,
//             salary: $scope.crudFormSalary,
//             email: $scope.crudFormEmail,
//             image: $scope.imageSrc
//         };

//         if (userId === 'new') {
//             $scope.users.push(editedUser);
//         } else {
//             $scope.users[userId] = editedUser;
//         }

//         // Save the updated users list to localStorage
//         localStorage.setItem('users', JSON.stringify($scope.users));

//         $scope.triggerForm = false;
//         $scope.editForm = false;
//         $scope.editUserId = 0;
//     };

//     $scope.deleteUser = function(user) {
//         var index = $scope.users.indexOf(user);
//         $scope.users.splice(index, 1);

//         // Save the updated users list to localStorage
//         localStorage.setItem('users', JSON.stringify($scope.users));
//     };

//     $scope.addUser = function() {
//         $scope.editUserId = 'new';
//         $scope.triggerForm = true;
//         $scope.editForm = false;
//         $scope.addForm = true;
//         $scope.emailExisted = false;
//         $scope.userForm.$setUntouched();
//         $scope.crudFormName = '';
//         $scope.crudFormCountry = '';
//         $scope.crudFormSalary = '';
//         $scope.crudFormEmail = '';
//         $scope.imageSrc = '';
//     };

//     $scope.checkEmail = function(userId) {
//         if (userId === 'new' || $scope.crudFormEmail !== $scope.users[userId].email) {
//             $scope.emailExisted = $scope.users.some(function(user) {
//                 return user.email === $scope.crudFormEmail;
//             });
//         }
//     };

//     $scope.previewImage = function(event) {
//         var file = event.target.files[0];
//         if (file) {
//             var reader = new FileReader();
//             reader.onload = function(e) {
//                 $scope.$apply(function() {
//                     $scope.imageSrc = e.target.result;
//                 });
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     $scope.filterByCategory = function(category) {
//         $scope.currentFilter = category;
//         if (category === 'all') {
//             $scope.filterUsers = {};
//         } else {
//             $scope.filterUsers = { country: category };
//         }
//     };
// });
// myApp.filter('totalSalary', function(){
//       return function(data, key){
//             if(angular.isUndefined(data) && angular.isUndefined(key))
//                 return 0;
//           var total = 0;
//           angular.forEach(data, function(v, k){
//                 total += parseInt(v[key]);
//             });
//           return total;
//       }
//     });
    
//     // main.js
//     document.getElementById('downloadButton').addEventListener('click', function () {
//         const { jsPDF } = window.jspdf;
//         const doc = new jsPDF();
    
//         const table = document.querySelector('table');
//         const rows = table.querySelectorAll('tbody tr');
    
//         let y = 10;
//         doc.setFontSize(12);
    
//         doc.text("Product Catalog", 14, y);
//         y += 10;
    
//         rows.forEach(row => {
//             const cells = row.querySelectorAll('td');
//             let text = '';
//             cells.forEach(cell => {
//                 text += cell.textContent.trim() + ' | ';
//             });
//             doc.text(text, 14, y);
//             y += 10;
//         });
    
//         doc.save('product-catalog.pdf');
//     });