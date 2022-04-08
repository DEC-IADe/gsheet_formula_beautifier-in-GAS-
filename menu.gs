function onOpen() {  
  var menu = [    

    { name: "🧲 Formula Beautifier",   functionName: "beautify"      },  
    { name: "🧲 Formula minify",   functionName: "minify"      }, 
    
    null,
    { name: "🧲 Open Formula",   functionName: "OpenFormula"      }   
    
  ];  
  SpreadsheetApp.getActiveSpreadsheet()
  .addMenu("‍🧲 MENU FORMULA", menu);
}


function OpenFormula() {
  var cell = SpreadsheetApp.getCurrentCell();
  var formula = cell.getFormula();

  var html = HtmlService.createHtmlOutputFromFile('OpenFormula.html')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .setWidth(1000)
      .setHeight(600);


  SpreadsheetApp.getUi().showModalDialog(html, 'Update formula');
}   