// By Yiming Zhong
// Sept 14, 2016

// Note: This is still in progress. 
// TODO: 
// - add side bar/in-spreadsheet button
// - optimize. there are some unnecessary loops

// deleteDups()
// assumes table is in the form of "Job Identifier".."(other columns)" 
// must make a spreadsheet called "Old", with the old list of jobmine postings
// must make a spreadsheet called "New" with the new list of jobmine postings
// identifiers must be valid numbers. Does not have to be sorted. 

function deleteDups() {
  var oldSpread = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Old");
  var newSpread = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("New");
  var newRow = 2;
  var oldRow = 2;
  var oldRange = oldSpread.getRange(oldRow, 1, 1, 1);
  var newRange = newSpread.getRange(newRow, 1, 1, 1);
  var jobIDOld = oldRange.getValue();
  var jobIDNew = newRange.getValue(); 
  
  var oldTotalRows = oldSpread.getLastRow();
  var newTotalRows = newSpread.getLastRow();

  //double for loop
  
  while(oldRow <= oldTotalRows)
  {
    while (newRow <= newTotalRows)
    {
      oldRange = oldSpread.getRange(oldRow, 1, 1, 1);
      newRange = newSpread.getRange(newRow, 1, 1, 1);
      jobIDOld = oldRange.getValue();
      jobIDNew = newRange.getValue();
      var newTotalRows = newSpread.getLastRow();
      // debug printing tool SpreadsheetApp.getUi().alert(jobIDNew + ' ' + jobIDOld);
      
      if (jobIDOld == jobIDNew)
      {
        newSpread.deleteRow(newRow); 
      }
      else
      {
       ++newRow; 
      }
    }
    var oldTotalRows = oldSpread.getLastRow();
    ++oldRow; 
    newRow = 2;
  }
  /*
  while(newRow <= newTotalRows && oldRow <= oldTotalRows)
  {
    if (newRow == newTotalRows)
    {
      
    }
    if (oldRow == oldTotalRows)
    {
      
    }
    else if (jobIDOld == jobIDNew)
    {
      newSpread.deleteRow(newRow);
      // do not increment newRow
      ++oldRow; 
    }
    else  
    {
      ++oldRow; 
    }
  }
  */
}
