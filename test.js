$(function(){
    //default value is "start"
    var currentState = localStorage.currentState || "on";
    //cache button DOM element reference
    var $toggleBtn = $("#toggle-btn");

    //update button status
    if(currentState==="off"){
        $toggleBtn.text("OFF");
    }

    //register button click handler
    $toggleBtn.click(function(){
        if(currentState==="on"){
            $toggleBtn.text("OFF");
            localStorage.currentState="off";
        }
        if(currentState==="off"){
            $toggleBtn.text("ON");
            localStorage.currentState="on";
        }
    });
});
