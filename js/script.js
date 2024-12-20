$(function() {
    // Hide Code Start
    $("#hide").click(function(){
        
        // $(".box").hide()
        
        //Hide with Duration 1000 milisecond
        $(".box").hide(1000)
    })
    // Hide Code End

    
    $("#show").click(function(){
        $(".box").show()
    })
    
    $("#hideShow").click(function(){
        $(".box").toggle(1000)
    })
    
    $("#fadeIn").click(function(){
        //$(".box").fadeIn()

        //fadeIn with Duration 1000 milisecond
        $(".box").fadeIn(1000)
    })    
    $("#fadeOut").click(function(){
        //$(".box").fadeOut()
        $(".box").fadeOut(1000)
    })    
    $("#fadeInOut").click(function(){
        $(".box").fadeToggle()
        //$(".box").fadeToggle(1000)
    })
    $("#slideUp").click(function(){
        $(".box").slideUp()
    })

    $("#slideDown").click(function(){
        $(".box").slideDown(1000)        
    })

    $("#slideUpDown").click(function(){
        $(".box").slideToggle(1000)        
    })

    $("#addBox").click(function(){
        $(".box").addClass("box2")        
    })

    $("#removeBox").click(function(){
        $(".box").removeClass("box2")        
    })

    $("#addRemoveBox").click(function(){
        $(".box").toggleClass("box2")        
    })
    
    
})