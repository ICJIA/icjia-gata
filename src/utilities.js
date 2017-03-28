///////////////////////////////////////////////
// exports.cellFormat = function(tid) {
//     let table = $('#' + tid + ' tbody');
//     table.find('tr').each(function() {
//         let $tds = $(this).find('td')
//         let $t = $tds.html().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
//         $tds.html($t)
//     });
// }






// Removes the search bar and pagination in Datatables //////////////////////////////////////////
// See: https://legacy.datatables.net/ref#sDom
exports.dtConfig = {
  "pageLength": 100,
    "columnDefs": [{

        "targets": '_all',
        "createdCell": function(td, cellData, rowData, row, col) {
            // Add commas to large numbers
            $(td).html($(td).html().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"))
        }
    }],
    "sDom": '<"top">rt<"bottom"><"clear">'
}




// Construct HTML table from chart object //////////////////////////////////////////////////////
exports.renderTable = function(hc, tableId) {
    let series = '<th></th>'
    let row = '<tr>';
    let tSeries = '';
    // read chart data --> convert to table
    for (let i = 0; i < hc.series.length; i++) {
        series = series + `<th> ${hc.series[i].name}</th>`
    }

    for (let i = 0; i < hc.series[0].data.length; i++) {
        row = row + `<td class="strong">${hc.xAxis.categories[i]}</td>`
        for (let j = 0; j < hc.series.length; j++) {

            let tmp = hc.series[j].data[i]
            row = row + `<td> ${tmp} </td>`
        }
        row = row + `</tr>`
    }


    // ES6 template literal: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    let hcTable = ''
    return hcTable = `
                            <table id="${tableId}" class="ordered striped">
                                <thead>
                                    <tr>
                                        ${series}
                                    </tr>
                                </thead>
                                    <tbody>
                                    ${row}
                                    </tbody>
                            </table> `


}


// Generate unique ID ////////////////////////////////////////////////////////////////////////

exports.guid = function() {
    // generate unique id
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + s4() + s4() + s4() + s4();
}





// Determine size of object  /////////////////////////////////////////////////////////////////

exports.objSize = function(obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}





// Parse string as boolean //////////////////////////////////////////

exports.parseBool = function(str) {
    // console.log(typeof str);
    // strict: JSON.parse(str)

    if (str == null)
        return false;

    if (typeof str === 'boolean') {
        return (str === true);
    }

    if (typeof str === 'string') {
        if (str == "")
            return false;

        str = str.replace(/^\s+|\s+$/g, '');
        if (str.toLowerCase() == 'true' || str.toLowerCase() == 'yes')
            return true;

        str = str.replace(/,/g, '.');
        str = str.replace(/^\s*\-\s*/g, '-');
    }

    // var isNum = string.match(/^[0-9]+$/) != null;
    // var isNum = /^\d+$/.test(str);
    if (!isNaN(str))
        return (parseFloat(str) != 0);

    return false;
}


exports.stripTags =  function(str) {
  return str.replace(/<\/?[^>]+>/g, '');
}


/// Routing utilities

function truncateString(str, num) {

  if (str === undefined) return

  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}


// function checkObject (startObj, destObj, key, defaultProperty) {
//   if (startObj.hasOwnProperty(key)) {
//     destObj[key] = startObj[key]
//   } else {
//     destObj[key] = defaultProperty
//     console.log('Error: ',destObj[key])
//   }
//   return destObj[key]
// }




exports.generateRoutes = function (arr) {
  const catchAll = {
      path: '/*',
      title: null,
      type: null,
      created: null,
      status: 'live',
      name: 'Redirect',
      redirect: '/'
  }
  let r = [];
  var obj = {}
  //dateNow =  String(new Date()).replace(/-/g, "/")
  dateNow = new Date()
  arr.forEach(function(eachObj) {
      obj = {}
      obj.path = eachObj["path"]
      obj.component = eachObj["component"]
      // Create page-specific meta data from views
      obj.name = String(eachObj["component"].data().title).replace(/\s+/g, '') || 'NoName'
      obj.created = new Date(String(eachObj["component"].data().created).replace(/-/g, "/"))
      //obj.created = eachObj["component"].data().created || dateNow
      obj.expired = eachObj["component"].data().expired || new Date('2500-10-10')
      obj.title = truncateString(eachObj["component"].data().title,100) || 'No Title'
      obj.description = truncateString(eachObj["component"].data().description,350) || 'No description provided'
      obj.status = eachObj["component"].data().status || "live"
      obj.type = eachObj["component"].data().type || "page"

      r.push(obj)

  });
  r.push(catchAll)
  //console.log(r)
  return r

}
