$(document).ready(function(){

    $.getJSON("json/myline.json", function(data){
        var code = "";
        code += "<p class='lead'>"+ data.msg[0]["author"]+"</p>"
        code += "<p font-size:20px>"+ data.msg[0]["info"]+"</p>"

        code += "<p>"+ data.msg.length + " Posts<p>"
        $(".panel-body").append(code);

        $(function(){
            $("#accordion:nth-child(1n)").accordion({
                collapsible: true,
                active: false
            });
        });
    });
	

    $.getJSON("json/update.json", function(data1){
        var code1 = "";
        code1 += " (" + data1.msg.length + ")"
        $(".refresh3").html(code1);
	});
    var html = function(file){	
	    $.getJSON(file, function(data){
            var code = "";
		    var index = 0;
            for(index = 0; index < data.msg.length; index ++){
                code += "<div class='panel panel-default'>";
                code += "<div class='panel-heading'>";
                code += "<h4>" + data.msg[index]["author"]+ " (" + data.msg[index]["info"]+ ")"+"</h4></div>";
                code += "<div class='panel-body'>";
                code += "<p><img src='"+ data.msg[index]["avatar"] + "' class='img-circle pull-right'>";
                code += "<h3>" + data.msg[index]["title"] + "</h3></p>";
                code += "<div class='clearfix' id='accordion'>";
                code += "<h3><button type = 'button' style='width:100px;height:40px;font-size:15px'>";
                code += "View all </button></h3>";
                code += "<div><hr>" + data.msg[index]["content"] + "<hr>" + data.msg[index]["date"] + "</div></div></div></div>"
            }
            $(".col-sm-7").append(code);
            $(function(){
                $("#accordion:nth-child(1n)").accordion({
                    collapsible: true,
                    active: false
                });
            });
        });
    }
    
	html("json/timeline.json");

	
	$(".perfil").click(function(){
		$('.col-sm-7 div').remove();
        html("json/myline.json");
		$.getJSON("json/update.json", function(data1){
	        var code1 = "";
	        code1 += " (" + data1.msg.length + ")"
	        $(".refresh3").html(code1);
        });
    });


    $(".posts").click(function(){
	    $('.col-sm-7 div').remove();
        html("json/timeline.json");
		$.getJSON("json/update.json", function(data1){
	        var code1 = "";
	        code1 += " (" + data1.msg.length + ")"
	        $(".refresh3").html(code1);
        });
    });
	
	$(".home1").click(function(){
		console.log("Dentro");
	    $('.col-sm-7 div').remove();
        html("json/timeline.json");
		$.getJSON("json/update.json", function(data1){
	        var code1 = "";
	        code1 += " (" + data1.msg.length + ")"
	        $(".refresh3").html(code1);
        });
    });
 
    $(".refresh").click(function(){
        $('.col-sm-7 div').remove();
	    html("json/update.json");
		html("json/timeline.json");
		$(".refresh3").html(" (0)");
    });
	


    });

