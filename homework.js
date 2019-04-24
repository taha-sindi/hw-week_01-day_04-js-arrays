//1===============================

let SUM = function (num)

{ let sum = 0;

for (i = 1; i <= num; i++)

{sum = sum + i;}

return (sum);}

SUM(5);

//2===============================

let ES = function (num)

{ let sum = 0;
    
for (i = 1;i <= num; i++) {
    
if (i % 2===0){
  
sum = sum + i;}}

return (sum);}
    
ES(5);

//3===============================

let AVRG = function (num)

{ let sum = 0;
        
for (i=0;i < num.length ;i++) {
        
sum = sum + num[i];}
    
return (sum)/num.length;}
        
AVRG([1,2,3,4,5]);

//4===============================

let REV = function (str) {
    
return str.split("").reverse().join("");}

REV ("taha");

//5===============================

let EDT = function (str) {
    
return str.join("-");}
    
EDT (["taha","abdullah","sindi"]);
    
//6===============================

let CUD = function(n){
    
let climb = 1; sps=''; dig=0;
    
for(i=1;i<=(n*2)-1;i++){

dig += climb; sps += dig
        
if ( i !== ( n * 2 ) - 1 )

{ sps += ' ';}
        
if(i===n){climb=-1;}}

return sps ;}

CUD(7);

//7===============================

let ASTR = function(array){
    
let empty = [];

for(i=0;i<array.length;i++){

for(j=0;j<array[i].length;j++){

if(array[i][j]==="a")

{empty.push(array[i]);}}}

return empty;}

ASTR(["taha","xxxxx","sindi"]);

//8===============================

let XSTR = function(x,array){
    
let empty = [];
    
for(i=0; i < array.length; i++){
    
for(j=0; j < array[i].length; j++){
    
if(array[i][j]===x)

{empty.push(array[i]);}}}
    
return empty;}
    
XSTR("x",["taha","abdullah","sindi"]);

//9===============================

let LW = function (ms) {
     
let str = ms.split(" "); long = null; word = null;
       
for (var i = 0; i < str.length; i++) {
    
if (long < str[i].length) {
    
long = str[i].length; word = str[i];}}
        
return word;}

LW("taha","abdullah","sindi");

//10===============================

let MX = function (even) {

even.sort((x, m) => m - x);
    
for (var i = 0; i < even.length; i++) {

if (even[i] % 2 == 0) return even[i];}}

MX([1,2,3,4,5]);

//=================================