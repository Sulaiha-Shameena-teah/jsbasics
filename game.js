
function greet(name)
{
   var dummy = prompt('enter'+ name); 
   return dummy;
}
function  display(l){
    console.log(l[0]);
    console.log(l.slice(1,7));
    console.log(l.slice(7,13));
    console.log(l.slice(13,19));
    console.log(l.slice(19,23));
}

function  goatcount_fun(l){
    var ct = 0;
    for(var i in l){
        if(i == 'G')
        {
            ct += 1;
        }
    }
    return (ct); 
}

function  getpos(l){
    console.log("Pick a position");
    for(var i=0;i<23;i++){
        if (l[i] == '0'){
            console.log(i);
        } 
    } 
}

function movetiger(l,fromindex,toindex,from_and_to,middle,goat_killed,no_of_goats){
    l[fromindex] = '0';
    l[toindex] = 'T';
    single_comb = [fromindex,toindex];
    var pos = -1;
    for(var i=0;i<from_and_to.length();i++)
    {
    	if(from_and_to[i] == single_comb)
    	{
    		pos = i;
    		break;
    	}
    }
    if(pos != -1)
    {
        console.log(pos);
        l[pos] = 0;
        goat_killed += 1;
        no_of_goats -= 1;
    }
    return ([goat_killed,no_of_goats,l]);
}

function fixgoat(l,index)
{
    l[index] = 'G';
    return l;
}

function movegoat(l,fromindex,toindex){
    l[fromindex] = '0';
    l[toindex] = 'G';
    return l;
}

function checkmate(l,checkarray){
    var tigercheck = 0;
    for(var i=0;i<23;i++)
    {
        if (l[i] == 'T')
        {
            var check_array = checkarray[i];
            var flag = true;
            for(var j in check_array)
            {
                if (l[j] == '0')
                {
                    flag = false;
                    break;
                }
            }
            if (flag)
            {
                tigercheck += 1;
            }
    }
               
    return (tigercheck == 3);
}


function begin()
{

var l =['T','0','0','T','T','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'];
var toggle=true;
static var no_of_goats = 15;
static var goat_killed = 0;
var from_and_to = [[0,8],[0,9],[0,10],[0,11],[1,3],[1,13],[2,4],[2,14],[3,1],[3,5],[3,15],[4,2],[4,6],[4,16],[5,3],[5,17],
               [6,4],[6,18],[7,9],[8,0],[8,10],[8,19],[9,0],[9,7],[9,11],[9,20],[10,0],[10,8],[10,12],[10,21],[11,0],[11,9],
               [11,22],[12,10],[13,15],[13,1],[14,2],[14,16],[15,3],[15,13],[15,17],[16,4],[16,14],[16,18],[17,5],[17,15],
              [18,16],[18,6],[19,8],[19,21],[20,9],[20,22],[21,10],[21,19],[22,11],[22,20]
]; 
var middle = [2,3,4,5,2,7,3,8,2,4,9,3,5,10,4,11,5,12,8,2,9,14,3,8,10,15,4,9,11,16,5,10,17,11,14,7,8,15,9,14,16,10,15,17,11,16,
        17,12,14,20,15,21,16,20,17,21];
var checkarray = [[2,3,4,5],[2,7],[0,1,8,3],[0,2,9,4],[0,3,10,5],[0,4,11,6],[5,12],[1,8,13],[2,7,14,9],[3,8,15,10],[4,9,16,11],
              [5,10,17,12],[6,11,18],[7,14],[8,13,15,19],[9,20,14,16],[10,15,17,21],[16,18,11,22],[12,17],[20,14],[15,21,19],
             [20,22,16],[17,21]];




while ((goat_killed<5 ) && !(checkmate(l,checkarray))){
	getpos(l);
    display(l);
    if (toggle){
        console.log("Goat's turn");
        goatcount = goatcount_fun(l);
        if (goatcount < no_of_goats){
            index =  greet('index');
            l = fixgoat(l,index);
        }
        else{
            fromindex = prompt('fromindex');
            toindex = prompt('toindex');
            l = movegoat(l,fromindex,toindex);}
    }      
           
    else{
        if(checkmate(l,checkarray)){
            break;
        }
        console.log("Tiger's turn");
        fromindex = prompt('fromindex');
        toindex = prompt('toindex');
        returnlist = movetiger(l,fromindex,toindex,from_and_to,middle,goat_killed,no_of_goats);
        console.log(returnlist);
        goat_killed= returnlist[0];
        no_of_goats= returnlist[1];
        l = returnlist[2];
    }   
    toggle = !(toggle);
}
if (goat_killed >= 5){
    console.log("Tiger wins!!!");
}
else{
    console.log("Goat wins!!!!!!!!!!!!!!!");
}
}
}


function start()
{
    begin();
}