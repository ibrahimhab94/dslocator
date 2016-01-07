/**
 * Created by ihaboush on 1/7/16.
 */
$(document).ready(function(){
    var dbtable1= [["1","firstMall"],["2","secondMall"]];

    $("#search").on("click",function(){
        store = document.getElementById("store").value;
        for(var i=0;i<dbtable1.length;i++){
            console.log(dbtable1[i]+""+store);
            if(dbtable1[i][0].localeCompare(store) == 0) {
                document.getElementById("result").innerHTML = "Found : " + dbtable1[i][1];
                return null;
            }
            document.getElementById("result").innerHTML = "Not Found !!";
                console.log(dbtable1.length);
            }
    });
});



