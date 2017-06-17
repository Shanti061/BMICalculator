
var BMI;
var calculate;
var getBMI;

document.getElementById("info").innerHTML = "Please enter the information below to know your BMI Calculation. ";
document.getElementById("userHeight1").innerHTML = "Meter";
document.getElementById("userWeight1").innerHTML ="Kg";

var input1 = document.getElementById("userHeight1").innerHTML ;
var input2 = document.getElementById("userWeight1").innerHTML;

var ButtonClick = document.getElementById("Calculate").addEventListener("click", calculateBMI, false);
var ButtonClick2 = document.getElementById("Reset").addEventListener("click", reset, false);

var ButtonClick1 = document.getElementById("changeUnit").addEventListener("click", changeBMI, false);

/*var radioButtonClick = document.getElementById("childRadio").addEventListener("click", childBMI, false);
var radioButtonClick1 = document.getElementById("adultRadio").addEventListener("checked", calculateBMI, false);*/

document.getElementById("info1").innerHTML = "Normal BMI range: 18.5kg/m<sup>2</sup> - 25 kg/m<sup>2 </sup> ";
/*document.getElementById("info1").style.color = "black";
document.getElementById("info1").style.fontSize="20px";*/




function calculateBMI () {

var height1 = parseFloat(document.getElementById("userHeight").value);
var weight1 = parseFloat(document.getElementById("userWeight").value);
var alpha = /^[A-Za-z]+$/;     
    
  
if(height1 <=0 || weight1 <=0){
    document.getElementById("BMIResult").innerHTML="Please enter the correct data.";
    
}
else if (userHeight.value.match(alpha) || userWeight.value.match(alpha)) 
   {
    document.getElementById("BMIResult").innerHTML="Please enter numeric value";
    document.getElementById("result").value= "";
  }

else{
        //metric calculation, height in meter, weight in kg
    if(input1 === "Meter" && input2 === "Kg")
        {
      BMI = parseInt((weight1 / (height1 * height1) ));
          //to show the value inside the textbox for the result
       document.getElementById("result").value= BMI;
         }

        else{
            BMI = ((weight1 * 703)/(height1 * height1)) ;
            document.getElementById("result").value= BMI;
            }



        resultInfo(BMI);

     }
}


console.log(getBMI);
/*<a href="#" id="changeUnit" type="button" class="UnitButton">IMPERIAL</a>*/

function changeBMI(){
    
    if(input1 === "Meter" && input2 === "Kg")
    {
        document.getElementById("changeUnit").innerHTML= "METRIC";
    document.getElementById("userHeight1").innerHTML= "Inches";
    document.getElementById("userWeight1").innerHTML= "Pound";
    
    input1 = document.getElementById("userHeight1").innerHTML ;
    input2 = document.getElementById("userWeight1").innerHTML;
    
    }
    else
    {
        document.getElementById("changeUnit").innerHTML= "IMPERIAL";
        document.getElementById("userHeight1").innerHTML= "Meter";
        document.getElementById("userWeight1").innerHTML= "Kg";
       
        
        input1 = document.getElementById("userHeight1").innerHTML ;
        input2 = document.getElementById("userWeight1").innerHTML;
    }
    
    reset();
    
}

function resultInfo(BMI)
{
    if(BMI<16)
        {
            document.getElementById("BMIResult").innerHTML = "You are severly thin!";
        }
    else if(BMI >16 && BMI <= 17)
        {
            document.getElementById("BMIResult").innerHTML = "Moderate thinness!";
        }
    
    else if(BMI >17 && BMI <= 18.5)
        {
            document.getElementById("BMIResult").innerHTML = "Mild thinness!";
        }
    else if(BMI >18.5 && BMI <= 25)
        {
            document.getElementById("BMIResult").innerHTML = "Normal weight!";
        }
    else if(BMI >25 && BMI <= 30)
        {
            document.getElementById("BMIResult").innerHTML = "Over Weight!";
        }
    else if(BMI >30 && BMI <= 35)
        {
            document.getElementById("BMIResult").innerHTML = "Obese Class I";
        }
    else if(BMI >35 && BMI <= 40)
        {
            document.getElementById("BMIResult").innerHTML = "Obese Class II";
        }
    else if(BMI > 40)
        {
            document.getElementById("BMIResult").innerHTML = "Obese Class III";
        }
    
    else 
        {
            document.getElementById("BMIResult").innerHTML = "Please enter values to get your BMI calculation.";
            document.getElementById("result").value= "";
        }
    
    getBMI = BMI;
    
   
}



/*function childBMI(){
var height1 = parseFloat(document.getElementById("userHeight").value);
var weight1 = parseFloat(document.getElementById("userWeight").value);
var BMI = ( (weight1 *703) / (height1 * height1) ); 
    if(){
        
    }
    else{
         document.getElementById("BMIResult").innerHTML = "Please enter  the above fields to get your BMI calculation.";
    }
}*/


function reset(){
  /* document.getElementById("RadioButtonClick").value ='';
    document.getElementById("RadioButtonClick1").value ="" ;*/
  document.getElementById("userHeight").value = "";  
  document.getElementById("userWeight").value = "";    
    document.getElementById("result").value = "";
    document.getElementById("BMIResult").innerHTML="";
    
}

/*
data: [
		{
			type: "spline",
			dataPoints: [
				{ y: 10 },
				{ y:  4 },
				{ y: 18 },
				{ y:  8 }	
			]
		}
		]
	});
	chart.render();	

	$("#addDataPoint").click(function () {

	var length = chart.options.data[0].dataPoints.length;
	chart.options.title.text = "New DataPoint Added at the end";
	chart.options.data[0].dataPoints.push({ y: 25 - Math.random() * 10});
	chart.render();

	});

	$("#updateDataPoint").click(function () {

	var length = chart.options.data[0].dataPoints.length;
	chart.options.title.text = "Last DataPoint Updated";
	chart.options.data[0].dataPoints[length-1].y = 15 - Math.random() * 10;
	chart.render();

	});
}
</script>
</head>  
<body>  
<div id="chartContainer" style="width:100%; height:280px"></div>  
<button id="addDataPoint">Add Data Point</button>  
<button id="updateDataPoint">Update Data Point</button>  */

var getBMI = document.getElementById("Calculate");

getBMI.onclick = function () {
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true, 
		  animationDuration: 4000, 
            
            title: {
                text: "BMI Chart",
                fontFamily: "Verdana",
                fontColor: "black",
                fontSize: 20

            },
            backgroundColor: null,
            animationEnabled: true,
            axisY: {
                tickThickness: 0,
                
                lineThickness: 0,
                valueFormatString: " ",
                gridThickness: 0                    
            },
            axisX: {
                tickThickness: 0,
                lineThickness: 0,
                labelFontSize: 12,
               labelFontWeight: "bold",
                labelFontColor: "blue"

            },
            data: [
            {
                indexLabelFontSize: 10,
                toolTipContent: "<span style='\"'color: {color};'\"'><strong>{indexLabel}</strong></span><span style='\"'font-size: 20px; color:peru '\"'><strong>{y}</strong></span>",

                indexLabelPlacement: "inside",
                indexLabelFontColor: "white",
                indexLabelFontWeight: 600,
                indexLabelFontFamily: "Verdana",
                color: "brown",
                type: "bar",
                dataPoints: [
                    { y: getBMI, color: "red", label: "BMI Result", indexLabel: "Your result" },
                    { y: 16, label: "BMI<16", indexLabel: "Severely thin" },
                    { y: 18, label: "16<17", indexLabel: "Moderate Thinness" },
                    { y: 20, label: "17<18.5", indexLabel: "Mild Thinness" },
                    { y: 25, label: "18.5<25", indexLabel: "Normal Weight" },
                    { y: 30, label: "BMI>25", indexLabel: "Over Weight" },
                    /*{ y: 49, label: "30<35", indexLabel: "Obese Weight I" },
                    { y: 50, label: "35<40", indexLabel: "Obese Weight II" },
                    { y: 55, label: "BMI > 40", indexLabel: "Obese Weight III" },*/
                    


                ]
            }
             ]
			
            
        });
    
   /* $("#Calculate").click(function() {
    var length = chart.options.data[0].dataPoints.length;
    chart.options.data[0].dataPoints.push.y = BMI;*/
    chart.render();
        
   /* });*/

   /* var yVal=0;
    var updateChart = function (BMI) {
      	
      	
      	yVal = yVal + BMI;
      	chart.render();		

	// update chart after specified time. 

        
    };
function(){updateChart()}*/
}

/*<!DOCTYPE HTML>

website---
http://canvasjs.com/editor/?id=http://canvasjs.com/example/gallery/bar/mobile_usage/
<html>

<head>  
  <script type="text/javascript">
  window.onload = function () {
        var chart = new CanvasJS.Chart("chartContainer", {
            title: {
                text: "BMI Result",
                fontFamily: "Verdana",
                fontColor: "black",
                fontSize: 28

            },
            animationEnabled: true,
            axisY: {
                tickThickness: 0,
              
                lineThickness: 0,
                valueFormatString: " ",
                gridThickness: 0                    
            },
            axisX: {
                tickThickness: 0,
                lineThickness: 0,
                labelFontSize: 18,
                labelFontColor: "brown"

            },
            data: [
            {
                indexLabelFontSize: 10,
                toolTipContent: "<span style='\"'color: {color};'\"'><strong>{indexLabel}</strong></span><span style='\"'font-size: 20px; color:peru '\"'><strong>{y}</strong></span>",

                indexLabelPlacement: "inside",
                indexLabelFontColor: "white",
                indexLabelFontWeight: 600,
                indexLabelFontFamily: "Verdana",
                color: "brown",
                type: "bar",
                dataPoints: [
                    { y: 21, label: "BMI<16", indexLabel: "You are severely thin" },
                    { y: 25, label: "16<17", indexLabel: "Moderate Thinness" },
                    { y: 33, label: "17<18.5", indexLabel: "Mild Thinness" },
                    { y: 36, label: "18.5<25", indexLabel: "Normal Weight" },
                    { y: 42, label: "25<30", indexLabel: "Over Weight" },
                    { y: 49, label: "30<35", indexLabel: "Obese Weight I" },
                    { y: 50, label: "35<40", indexLabel: "Obese Weight II" },
                    { y: 55, label: "BMI > 40", indexLabel: "Obese Weight III" },
                    


                ]
            }
            ]
        });

        chart.render();
    }
  </script>
  <script type="text/javascript" src="/assets/script/canvasjs.min.js"></script>
</head>
<body>
  <div id="chartContainer" style="height: 300px; width: 100%;">
  </div>
</body> 
</html>*/
